import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookUrl = Deno.env.get('N8N_WEBHOOK_URL');
    
    if (!webhookUrl) {
      console.error('N8N_WEBHOOK_URL not configured');
      return new Response(
        JSON.stringify({ error: 'Webhook not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.json();
    
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

    console.log('Sending to webhook:', params.toString());

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
      JSON.stringify({ error: error instanceof Error ? error.message : 'Erro desconhecido' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
