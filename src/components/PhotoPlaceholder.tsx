import { Camera } from 'lucide-react';
import type { GarmentSilhouette } from '../data/catalog';

interface PhotoPlaceholderProps {
  label: string;
  ratioLabel: string;
  theme?: 'dark' | 'light';
  silhouette?: GarmentSilhouette | 'campaign' | 'community';
  className?: string;
}

function SilhouetteArt({
  silhouette,
  stroke,
  accent,
}: {
  silhouette: NonNullable<PhotoPlaceholderProps['silhouette']>;
  stroke: string;
  accent: string;
}) {
  switch (silhouette) {
    case 'hoodie':
      return (
        <svg viewBox="0 0 160 180" fill="none" className="w-32 h-36" aria-hidden="true">
          <path
            d="M52 38C52 24 64 16 80 16C96 16 108 24 108 38L134 52L146 112L124 118L116 74V156H44V74L36 118L14 112L26 52L52 38Z"
            stroke={stroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M58 40C64 52 96 52 102 40" stroke={accent} strokeWidth="2" strokeLinecap="round" />
          <path d="M58 112H102V138H58V112Z" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>
      );
    case 'jersey':
      return (
        <svg viewBox="0 0 160 180" fill="none" className="w-32 h-36" aria-hidden="true">
          <path
            d="M56 26L80 42L104 26L138 46L146 94L122 100L116 68V154H44V68L38 100L14 94L22 46L56 26Z"
            stroke={stroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M44 128H116" stroke={accent} strokeWidth="3" />
          <path d="M44 138H116" stroke={stroke} strokeWidth="1.5" />
          <path d="M68 78H92" stroke={accent} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'jacket':
      return (
        <svg viewBox="0 0 160 180" fill="none" className="w-32 h-36" aria-hidden="true">
          <path
            d="M56 24H104L138 46L146 116L122 122L116 70V154H44V70L38 122L14 116L22 46L56 24Z"
            stroke={stroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M80 24V154" stroke={accent} strokeWidth="2" />
          <path d="M54 92H70M90 92H106" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'tee':
      return (
        <svg viewBox="0 0 160 180" fill="none" className="w-32 h-36" aria-hidden="true">
          <path
            d="M58 28C66 38 94 38 102 28L138 46L128 84L114 78V154H46V78L32 84L22 46L58 28Z"
            stroke={stroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M62 66H98" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'cargo':
      return (
        <svg viewBox="0 0 160 180" fill="none" className="w-32 h-36" aria-hidden="true">
          <path
            d="M44 24H116L124 156H92L80 82L68 156H36L44 24Z"
            stroke={stroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M40 76H58V108H38" stroke={accent} strokeWidth="1.75" />
          <path d="M120 76H102V108H122" stroke={accent} strokeWidth="1.75" />
          <path d="M44 38H116" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
    case 'beanie':
      return (
        <svg viewBox="0 0 160 180" fill="none" className="w-32 h-36" aria-hidden="true">
          <path
            d="M34 114C34 74 52 46 80 46C108 46 126 74 126 114H34Z"
            stroke={stroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <rect x="30" y="114" width="100" height="24" rx="4" stroke={accent} strokeWidth="2" />
          <path d="M56 114V138M80 114V138M104 114V138" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
    case 'campaign':
      return (
        <svg viewBox="0 0 280 180" fill="none" className="w-56 h-36" aria-hidden="true">
          <rect x="20" y="20" width="240" height="140" rx="28" stroke={stroke} strokeWidth="1.75" />
          <line x1="140" y1="20" x2="140" y2="160" stroke={accent} strokeWidth="2" />
          <circle cx="140" cy="90" r="28" stroke={accent} strokeWidth="1.75" />
          <circle cx="72" cy="90" r="18" stroke={stroke} strokeWidth="1.25" strokeDasharray="4 4" />
          <circle cx="208" cy="90" r="18" stroke={stroke} strokeWidth="1.25" strokeDasharray="4 4" />
        </svg>
      );
    case 'community':
      return (
        <svg viewBox="0 0 240 160" fill="none" className="w-48 h-32" aria-hidden="true">
          <path d="M24 126C64 126 92 96 112 64C126 42 156 34 216 34" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M24 102C68 102 102 82 128 54" stroke={stroke} strokeWidth="1.5" strokeDasharray="5 5" strokeLinecap="round" />
          <circle cx="176" cy="108" r="22" stroke={stroke} strokeWidth="1.75" />
        </svg>
      );
  }
}

export function PhotoPlaceholder({
  label,
  ratioLabel,
  theme = 'light',
  silhouette = 'hoodie',
  className = '',
}: PhotoPlaceholderProps) {
  const isDark = theme === 'dark';

  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center p-6 select-none ${
        isDark
          ? 'bg-[#0A1F44] border border-[#F5F8FF]/15 text-[#F5F8FF]'
          : 'bg-[#E9EFFC] border border-[#0A1F44]/12 text-[#0A1F44]'
      } ${className}`}
    >
      {/* Ice rink subtle corner framing marks */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-4 border border-dashed rounded-lg ${
          isDark ? 'border-[#F5F8FF]/12' : 'border-[#0A1F44]/12'
        }`}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-3">
        <SilhouetteArt
          silhouette={silhouette}
          stroke={isDark ? 'rgba(245, 248, 255, 0.45)' : 'rgba(10, 31, 68, 0.42)'}
          accent="#1E5BFF"
        />

        <div className="flex flex-col items-center gap-1 mt-1">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-medium tracking-wide ${
              isDark ? 'text-[#F5F8FF]/80' : 'text-[#0A1F44]/80'
            }`}
          >
            <Camera className="w-3.5 h-3.5 text-[#1E5BFF] shrink-0" aria-hidden="true" />
            <span>{label}</span>
          </span>
          <span
            className={`text-[11px] font-medium tabular-nums ${
              isDark ? 'text-[#F5F8FF]/50' : 'text-[#0A1F44]/55'
            }`}
          >
            Espacio reservado · {ratioLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
