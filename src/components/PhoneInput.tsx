import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

// Country codes with their dial codes and flags
const COUNTRY_CODES = [
  { code: "55", name: "Brasil", flag: "🇧🇷" },
  { code: "351", name: "Portugal", flag: "🇵🇹" },
  { code: "1", name: "Estados Unidos", flag: "🇺🇸" },
  { code: "44", name: "Reino Unido", flag: "🇬🇧" },
  { code: "34", name: "Espanha", flag: "🇪🇸" },
  { code: "33", name: "França", flag: "🇫🇷" },
  { code: "49", name: "Alemanha", flag: "🇩🇪" },
  { code: "39", name: "Itália", flag: "🇮🇹" },
  { code: "31", name: "Holanda", flag: "🇳🇱" },
  { code: "32", name: "Bélgica", flag: "🇧🇪" },
  { code: "41", name: "Suíça", flag: "🇨🇭" },
  { code: "43", name: "Áustria", flag: "🇦🇹" },
  { code: "353", name: "Irlanda", flag: "🇮🇪" },
  { code: "352", name: "Luxemburgo", flag: "🇱🇺" },
  { code: "48", name: "Polónia", flag: "🇵🇱" },
  { code: "420", name: "República Tcheca", flag: "🇨🇿" },
  { code: "45", name: "Dinamarca", flag: "🇩🇰" },
  { code: "46", name: "Suécia", flag: "🇸🇪" },
  { code: "47", name: "Noruega", flag: "🇳🇴" },
  { code: "358", name: "Finlândia", flag: "🇫🇮" },
  { code: "30", name: "Grécia", flag: "🇬🇷" },
  { code: "54", name: "Argentina", flag: "🇦🇷" },
  { code: "56", name: "Chile", flag: "🇨🇱" },
  { code: "57", name: "Colômbia", flag: "🇨🇴" },
  { code: "58", name: "Venezuela", flag: "🇻🇪" },
  { code: "52", name: "México", flag: "🇲🇽" },
  { code: "51", name: "Peru", flag: "🇵🇪" },
  { code: "598", name: "Uruguai", flag: "🇺🇾" },
  { code: "244", name: "Angola", flag: "🇦🇴" },
  { code: "258", name: "Moçambique", flag: "🇲🇿" },
  { code: "238", name: "Cabo Verde", flag: "🇨🇻" },
  { code: "245", name: "Guiné-Bissau", flag: "🇬🇼" },
  { code: "239", name: "São Tomé e Príncipe", flag: "🇸🇹" },
  { code: "670", name: "Timor-Leste", flag: "🇹🇱" },
  { code: "853", name: "Macau", flag: "🇲🇴" },
  { code: "91", name: "Índia", flag: "🇮🇳" },
  { code: "86", name: "China", flag: "🇨🇳" },
  { code: "81", name: "Japão", flag: "🇯🇵" },
  { code: "82", name: "Coreia do Sul", flag: "🇰🇷" },
  { code: "61", name: "Austrália", flag: "🇦🇺" },
  { code: "64", name: "Nova Zelândia", flag: "🇳🇿" },
  { code: "27", name: "África do Sul", flag: "🇿🇦" },
  { code: "971", name: "Emirados Árabes Unidos", flag: "🇦🇪" },
  { code: "972", name: "Israel", flag: "🇮🇱" },
  { code: "90", name: "Turquia", flag: "🇹🇷" },
  { code: "7", name: "Rússia", flag: "🇷🇺" },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  isValid: boolean;
  hasError: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  onBlur,
  isValid,
  hasError,
}) => {
  const [countryCode, setCountryCode] = useState("55"); // Default to Brazil
  const [phoneNumber, setPhoneNumber] = useState("");

  // Parse existing value on mount
  useEffect(() => {
    if (value && value.startsWith("+")) {
      const cleanValue = value.replace("+", "");
      // Try to find matching country code
      const matchedCountry = COUNTRY_CODES.find((c) =>
        cleanValue.startsWith(c.code)
      );
      if (matchedCountry) {
        setCountryCode(matchedCountry.code);
        setPhoneNumber(cleanValue.slice(matchedCountry.code.length));
      }
    }
  }, []);

  // Update parent value when country code or phone number changes
  useEffect(() => {
    const fullNumber = `+${countryCode}${phoneNumber.replace(/\D/g, "")}`;
    onChange(fullNumber);
  }, [countryCode, phoneNumber]);

  // Get current country info
  const currentCountry = COUNTRY_CODES.find((c) => c.code === countryCode) || {
    flag: "🌍",
    code: countryCode,
  };

  // Format phone number for display based on country
  const formatPhoneDisplay = (phone: string, code: string): string => {
    const digits = phone.replace(/\D/g, "");

    if (code === "55") {
      // Brazil: (99) 99999 9999 - DDD + 9 digits mobile
      // digits = DDD (2) + number (8-9)
      if (digits.length <= 2) {
        // Just DDD
        return digits.length > 0 ? `(${digits}` : "";
      } else if (digits.length <= 7) {
        // DDD + partial number
        return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      } else if (digits.length <= 11) {
        // DDD + full number (mobile with 9 digits or landline with 8)
        const ddd = digits.slice(0, 2);
        const part1 = digits.slice(2, 7);
        const part2 = digits.slice(7);
        return `(${ddd}) ${part1} ${part2}`;
      } else {
        // Limit to 11 digits
        const ddd = digits.slice(0, 2);
        const part1 = digits.slice(2, 7);
        const part2 = digits.slice(7, 11);
        return `(${ddd}) ${part1} ${part2}`;
      }
    } else if (code === "351") {
      // Portugal: 999 999 999
      if (digits.length <= 3) {
        return digits;
      } else if (digits.length <= 6) {
        return `${digits.slice(0, 3)} ${digits.slice(3)}`;
      } else {
        return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)}`;
      }
    }

    // Default: no formatting
    return digits;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits
    const rawValue = e.target.value.replace(/[^\d\s]/g, "").replace(/\s/g, "");
    setPhoneNumber(rawValue);
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits
    const value = e.target.value.replace(/\D/g, "");
    setCountryCode(value);
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
      {/* Country Code Input */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          background: "#FCF9F2",
          border: "2px solid #67BBC0",
          borderRadius: "4px",
          padding: "0.75rem 0.5rem",
          minWidth: "100px",
        }}
      >
        <span style={{ fontSize: "1.25rem" }}>{currentCountry.flag}</span>
        <span style={{ color: "#3D3D3D" }}>+</span>
        <input
          type="text"
          value={countryCode}
          onChange={handleCountryCodeChange}
          maxLength={4}
          style={{
            width: "45px",
            border: "none",
            background: "transparent",
            fontSize: "1rem",
            color: "#1B1B1B",
            padding: 0,
            outline: "none",
          }}
          placeholder="351"
        />
      </div>

      {/* Phone Number Input */}
      <div style={{ position: "relative", flex: 1 }}>
        <input
          type="tel"
          id="phone"
          name="Telefone"
          placeholder={countryCode === "55" ? "(99) 99999 9999" : countryCode === "351" ? "999 999 999" : "Número de telefone"}
          required
          value={formatPhoneDisplay(phoneNumber, countryCode)}
          onChange={handlePhoneChange}
          onBlur={onBlur}
          className={hasError ? "field-error" : ""}
          style={{
            width: "100%",
            paddingRight: isValid ? "2.5rem" : undefined,
          }}
        />
        {isValid && (
          <CheckCircle
            size={20}
            color="#67BBC0"
            style={{
              position: "absolute",
              right: "0.75rem",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PhoneInput;
