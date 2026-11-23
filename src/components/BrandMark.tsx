import { useState } from 'react';

interface BrandMarkProps {
  variant?: 'light' | 'dark';
  showWordmark?: boolean;
}

export function BrandMark({ variant = 'light', showWordmark = true }: BrandMarkProps) {
  const [imgError, setImgError] = useState(false);
  const textColor = variant === 'light' ? 'text-[#F5F8FF]' : 'text-[#0B0B0F]';
  const strokeColor = variant === 'light' ? '#F5F8FF' : '#0A1F44';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      {!imgError ? (
        <img
          src="/assets/aistudio/1000001931_fb4ef154.png"
          alt="Logo BlueSouls"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-11 h-11 rounded-lg object-contain bg-[#070C24] border border-[#F5F8FF]/15 shrink-0"
        />
      ) : (
        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="shrink-0"
        >
          <rect x="1.5" y="1.5" width="29" height="29" rx="6" stroke={strokeColor} strokeWidth="2" />
          <path
            d="M7 22.5C11.5 22.5 14.5 19 16 14.5C17.5 10 20.5 9.5 25 9.5"
            stroke="#1E5BFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M7 15.5H13.5M18.5 19.5H25"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
      {showWordmark && (
        <span className={`font-display text-2xl font-bold tracking-wide leading-none ${textColor}`}>
          BlueSouls
        </span>
      )}
    </span>
  );
}
