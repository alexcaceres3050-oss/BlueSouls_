import { useEffect, useState } from 'react';
import { Check, Copy, MessageCircle, X } from 'lucide-react';
import { buildWhatsAppUrl, formatPriceARS, type Product } from '../data/catalog';

interface InquiryModalProps {
  product: Product | null;
  onClose: () => void;
}

export function InquiryModal({ product, onClose }: InquiryModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[1] ?? product.sizes[0] ?? 'A confirmar');
      setCopied(false);
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const sizeText = selectedSize ? ` en talle ${selectedSize}` : '';
  const inquiryMessage = `Hola BlueSouls! Quiero consultar por "${product.name}" (${formatPriceARS(product.price)})${sizeText}. ¿Tienen stock disponible?`;
  const whatsappHref = buildWhatsAppUrl(inquiryMessage);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inquiryMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0B0F]/75 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-xl bg-[#F5F8FF] text-[#0B0B0F] border border-[#0A1F44]/15 shadow-2xl p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#0A1F44]/10">
          <div>
            <p className="text-xs font-medium text-[#0A1F44]/65">
              {product.category} · {product.fit}
            </p>
            <h3
              id="inquiry-modal-title"
              className="mt-1 font-display text-2xl font-bold tracking-tight text-[#0B0B0F]"
            >
              {product.name}
            </h3>
            <p className="mt-0.5 text-base font-semibold tabular-nums text-[#0A1F44]">
              {formatPriceARS(product.price)}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana"
            className="p-2 rounded-lg text-[#0B0B0F]/65 hover:text-[#0B0B0F] hover:bg-[#0A1F44]/8 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5">
          <span className="block text-sm font-semibold text-[#0B0B0F]">
            Elegí tu talle para consultar
          </span>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {product.sizes.map((size) => {
              const isActive = selectedSize === size;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`min-h-[40px] px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#0A1F44] text-[#F5F8FF]'
                      : 'bg-[#E9EFFC] text-[#0A1F44] hover:bg-[#DCE6FA]'
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5 p-3.5 rounded-lg bg-[#E9EFFC] border border-[#0A1F44]/10">
          <span className="block text-xs font-medium text-[#0A1F44]/70">Mensaje listo para enviar</span>
          <p className="mt-1 text-sm text-[#0B0B0F] leading-relaxed">{inquiryMessage}</p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg bg-[#1E5BFF] hover:bg-[#1749D1] text-[#F5F8FF] text-sm font-semibold transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Abrir WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-lg border border-[#0A1F44]/20 text-[#0A1F44] hover:bg-[#0A1F44]/6 text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#1E5BFF]" aria-hidden="true" />
                <span>Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" aria-hidden="true" />
                <span>Copiar texto</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
