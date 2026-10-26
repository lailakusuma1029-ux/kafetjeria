import React from 'react';

interface KafetjeriaLogoProps {
  className?: string;
  showText?: boolean;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isDark?: boolean;
}

export const KafetjeriaLogo: React.FC<KafetjeriaLogoProps> = ({
  className = '',
  showText = true,
  showTagline = false,
  size = 'md',
  isDark = false,
}) => {
  // Dimension tokens
  const iconSizes = {
    sm: { w: 34, h: 32, cupW: 32 },
    md: { w: 46, h: 44, cupW: 42 },
    lg: { w: 64, h: 60, cupW: 58 },
    xl: { w: 84, h: 80, cupW: 76 },
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const { w, h } = iconSizes[size];

  // Brand guideline colors:
  // Kuning Terang (Primary Cup Line Art)
  const cupColor = isDark ? '#FBBF24' : '#F59E0B';
  // Cokelat Tua Kopi / Warm Cream for eyes & bean seams
  const beanBodyColor = isDark ? '#D97706' : '#2D1B14';
  const beanSeamColor = isDark ? '#FDE68A' : '#E8DAC8';
  // Merah Ceria (Tongue / Heart smile)
  const tongueColor = isDark ? '#FB7185' : '#E11D48';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Visual Logo Mascot SVG */}
      <svg
        width={w}
        height={h}
        viewBox="0 0 100 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-xs"
        aria-label="Kafetjeria Logo Icon"
      >
        {/* Left Coffee Bean Eye */}
        <g transform="rotate(-8 35 24)">
          <ellipse
            cx="35"
            cy="24"
            rx="7"
            ry="11"
            fill={beanBodyColor}
          />
          {/* Coffee bean center wavy slit (Krem lembut) */}
          <path
            d="M35 15C33.5 19 36.5 24 35 33"
            stroke={beanSeamColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>

        {/* Right Coffee Bean Eye */}
        <g transform="rotate(8 65 24)">
          <ellipse
            cx="65"
            cy="24"
            rx="7"
            ry="11"
            fill={beanBodyColor}
          />
          {/* Coffee bean center wavy slit */}
          <path
            d="M65 15C66.5 19 63.5 24 65 33"
            stroke={beanSeamColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>

        {/* Smiling Cup Body Outline (Kuning Terang line art) */}
        <path
          d="M20 48C24 44 76 44 80 48C78 72 68 84 50 84C32 84 22 72 20 48Z"
          fill="none"
          stroke={cupColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Cup Inner Smile Rim Line */}
        <path
          d="M26 50C38 56 62 56 74 50"
          stroke={cupColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Cup Handle (Kanan) */}
        <path
          d="M78 52C88 52 93 59 93 66C93 74 86 78 74 77"
          fill="none"
          stroke={cupColor}
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Cheerful Red Tongue (Lidah seperti separuh simbol hati/senyum) */}
        <path
          d="M38 70C38 78 45 81 50 81C55 81 62 78 62 70C57 73 43 73 38 70Z"
          fill={tongueColor}
        />
        {/* Heart cleft curve inside tongue */}
        <path
          d="M44 71C46 75 50 77 50 77C50 77 54 75 56 71"
          stroke={tongueColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Typography (Font Chewy) */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-chewy tracking-wide leading-none transition-colors ${
              textSizes[size]
            } ${isDark ? 'text-amber-100' : 'text-[#2D1B14]'}`}
          >
            Kafetjeria
          </span>
          {showTagline && (
            <span
              className={`text-xs font-medium tracking-normal mt-0.5 ${
                isDark ? 'text-amber-200/70' : 'text-[#634832]'
              }`}
            >
              Kafe Istimewa & Cat Lounge
            </span>
          )}
        </div>
      )}
    </div>
  );
};
