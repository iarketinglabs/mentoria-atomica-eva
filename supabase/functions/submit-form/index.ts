import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Allowed origins - restrict to your actual domain
const allowedOrigins = [
  'https://wpczgwxsriezaubncuom.lovable.app',
  'http://localhost:5173',
  'http://localhost:8080',
];

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 submissions per window
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window

function getCorsHeaders(origin: string | null) {
  const isAllowed = origin && allowedOrigins.some(allowed => 
    origin === allowed || 
    origin.endsWith('.lovable.app') || 
    origin.endsWith('.lovableproject.com')
  );
  
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : allowedOrigins[0],
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  record.count++;
  return true;
}

serve(async (req) => {
  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Rate limiting by IP
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('cf-connecting-ip') || 
                     'unknown';
    
    if (!checkRateLimit(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: 'Muitas tentativas. Aguarde um momento e tente novamente.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const webhookUrl = Deno.env.get('N8N_WEBHOOK_URL');
    
    if (!webhookUrl) {
      console.error('N8N_WEBHOOK_URL not configured');
      return new Response(
        JSON.stringify({ error: 'Webhook not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.json();
    
    // Honeypot check - if this field is filled, it's likely a bot
    if (body.website) {
      console.warn(`Honeypot triggered by IP: ${clientIP}`);
      // Return success to avoid revealing detection
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Server-side validation
    const { nome, email, telefone, mentorias } = body;
    
    if (!nome || typeof nome !== 'string' || nome.trim().length < 2 || nome.trim().length > 100) {
      console.error('Invalid name:', nome);
      return new Response(
        JSON.stringify({ error: 'Nome inválido. Deve ter entre 2 e 100 caracteres.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      console.error('Invalid email:', email);
      return new Response(
        JSON.stringify({ error: 'Email inválido.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
    if (!telefone || typeof telefone !== 'string' || !phoneRegex.test(telefone.trim()) || telefone.trim().length < 6) {
      console.error('Invalid phone:', telefone);
      return new Response(
        JSON.stringify({ error: 'Telefone inválido.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Build form data for n8n webhook (same format as before)
    const params = new URLSearchParams();
    params.append('Nome Completo', nome.trim());
    params.append('E-mail', email.trim());
    params.append('Telefone', telefone.trim());
    
    if (mentorias && Array.isArray(mentorias)) {
      mentorias.forEach((mentoria: string) => {
        params.append('Mentoria(s) de Interesse', mentoria);
      });
    }

    console.log(`Form submission from IP ${clientIP}: ${email.trim()}`);

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    });

    console.log('Webhook response status:', response.status);

    if (!response.ok && response.status !== 0) {
      const errorText = await response.text();
      console.error('Webhook error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Erro ao enviar formulário.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in submit-form function:', error);
    return new Response(
      JSON.stringify({ error: 'Erro ao processar a requisição.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});