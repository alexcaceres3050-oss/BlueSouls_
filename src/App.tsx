import { useMemo, useState } from 'react';
import { ArrowDown, ArrowUpRight, Instagram, Menu, MessageCircle, X } from 'lucide-react';
import { BrandMark } from './components/BrandMark';
import { InquiryModal } from './components/InquiryModal';
import { PhotoPlaceholder } from './components/PhotoPlaceholder';
import {
  BRAND_CONTACT,
  CATEGORIES,
  PRODUCTS,
  buildWhatsAppUrl,
  formatPriceARS,
  type Category,
  type Product,
} from './data/catalog';

const GENERAL_WHATSAPP_URL = buildWhatsAppUrl(
  'Hola BlueSouls! Quiero hacer una consulta sobre las prendas del catálogo.'
);

const STORY_PILLARS = [
  {
    index: '01.',
    title: 'De la pista a la calle',
    text: 'Prendas pensadas para abrigarte cuando entrás al hielo y mantener un calce limpio apenas salís a caminar por la ciudad.',
  },
  {
    index: '02.',
    title: 'Comodidad sin vueltas',
    text: 'Cortes amplios, telas con buen cuerpo y detalles inspirados en los jerseys de hockey, sin rigidez ni tecnicismos.',
  },
  {
    index: '03.',
    title: 'Atención cercana en Buenos Aires',
    text: 'Nos escribís por WhatsApp, te ayudamos a elegir el talle justo y coordinamos el envío o entrega en CABA y GBA.',
  },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todo');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Todo') return PRODUCTS;
    return PRODUCTS.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FF] text-[#0B0B0F]">
      {/* Top Bar Contract: [Brand wordmark] — [4 single-line links] — [1 primary action] */}
      <header className="sticky top-0 z-40 h-16 bg-[#0B0B0F]/95 backdrop-blur-md border-b border-[#F5F8FF]/10">
        <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          <a
            href="#inicio"
            aria-label="BlueSouls Inicio"
            className="whitespace-nowrap shrink-0"
          >
            <BrandMark variant="light" />
          </a>

          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#F5F8FF]/80"
          >
            <a
              href="#inicio"
              className="hover:text-[#F5F8FF] transition-colors whitespace-nowrap shrink-0"
            >
              Inicio
            </a>
            <a
              href="#coleccion"
              className="hover:text-[#F5F8FF] transition-colors whitespace-nowrap shrink-0"
            >
              Colección
            </a>
            <a
              href="#nosotros"
              className="hover:text-[#F5F8FF] transition-colors whitespace-nowrap shrink-0"
            >
              Sobre BlueSouls
            </a>
            <a
              href="#contacto"
              className="hover:text-[#F5F8FF] transition-colors whitespace-nowrap shrink-0"
            >
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={GENERAL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1E5BFF] hover:bg-[#1749D1] text-[#F5F8FF] text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#F5F8FF] hover:bg-[#F5F8FF]/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Menú móvil"
            className="md:hidden bg-[#0B0B0F] border-b border-[#F5F8FF]/12 px-4 py-4 flex flex-col gap-2"
          >
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 rounded-lg text-sm font-medium text-[#F5F8FF] hover:bg-[#F5F8FF]/8"
            >
              Inicio
            </a>
            <a
              href="#coleccion"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 rounded-lg text-sm font-medium text-[#F5F8FF] hover:bg-[#F5F8FF]/8"
            >
              Colección
            </a>
            <a
              href="#nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 rounded-lg text-sm font-medium text-[#F5F8FF] hover:bg-[#F5F8FF]/8"
            >
              Sobre BlueSouls
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 rounded-lg text-sm font-medium text-[#F5F8FF] hover:bg-[#F5F8FF]/8"
            >
              Contacto
            </a>
            <a
              href={GENERAL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1E5BFF] text-[#F5F8FF] text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Escribir por WhatsApp</span>
            </a>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* Sección 1: Inicio */}
        <section
          id="inicio"
          className="bg-[#0B0B0F] text-[#F5F8FF] py-16 sm:py-20 lg:py-24 border-b border-[#F5F8FF]/10"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-xs sm:text-sm font-medium tracking-wide text-[#F5F8FF]/65">
                Buenos Aires · Pista y calle
              </p>

              <h1
                style={{ textWrap: 'balance' }}
                className="mt-4 font-display text-5xl sm:text-6xl font-bold tracking-tight leading-[1.02] text-[#F5F8FF]"
              >
                Del hielo a la calle
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#F5F8FF]/80 leading-relaxed max-w-xl">
                Ropa urbana inspirada en el patinaje y el hockey sobre hielo. Pensada para
                moverte cómodo arriba de la pista y llevar ese mismo estilo por toda la ciudad.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#coleccion"
                  className="inline-flex items-center justify-center gap-2.5 min-h-[44px] px-6 py-3 rounded-lg bg-[#1E5BFF] hover:bg-[#1749D1] text-[#F5F8FF] text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Ver prendas</span>
                  <ArrowDown className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={GENERAL_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 rounded-lg border border-[#F5F8FF]/20 hover:border-[#F5F8FF]/45 text-[#F5F8FF] text-sm font-medium transition-colors whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4 text-[#1E5BFF] shrink-0" aria-hidden="true" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 flex">
              <PhotoPlaceholder
                silhouette="campaign"
                theme="dark"
                label="Foto principal de campaña · Pista & Calle"
                ratioLabel="4:3"
                className="w-full min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Sección 2: Colección */}
        <section id="coleccion" className="bg-[#F5F8FF] text-[#0B0B0F] py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#0A1F44]/12">
              <div>
                <p className="text-xs sm:text-sm font-medium text-[#0A1F44]/70">
                  Catálogo de temporada
                </p>
                <h2
                  style={{ textWrap: 'balance' }}
                  className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0A1F44]"
                >
                  Colección BlueSouls
                </h2>
                <p className="mt-2.5 text-base text-[#0B0B0F]/75 max-w-xl">
                  Elegí tu prenda y consultanos directo por WhatsApp para ver talles disponibles y coordinar tu entrega.
                </p>
              </div>

              {/* Interactive category filter controls */}
              <div
                role="tablist"
                aria-label="Filtrar prendas por categoría"
                className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#E9EFFC] rounded-xl self-start md:self-auto"
              >
                {CATEGORIES.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCategory(category)}
                      className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                        isActive
                          ? 'bg-[#0A1F44] text-[#F5F8FF] shadow-xs'
                          : 'text-[#0A1F44]/75 hover:text-[#0A1F44]'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group flex flex-col bg-[#F5F8FF] rounded-xl border border-[#0A1F44]/12 overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden">
                    <PhotoPlaceholder
                      silhouette={product.silhouette}
                      theme="light"
                      label={product.photoHint}
                      ratioLabel="4:5"
                      className="w-full h-full border-0 transition-transform duration-200 group-hover:scale-[1.015]"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between p-5 gap-4">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs font-medium text-[#0A1F44]/65">
                        <span className="truncate">
                          {product.category} · {product.fit}
                        </span>
                        {product.note && (
                          <span className="text-[#1E5BFF] font-semibold whitespace-nowrap shrink-0">
                            {product.note}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-2 text-lg font-semibold text-[#0B0B0F] leading-snug">
                        {product.name}
                      </h3>
                    </div>

                    <div className="pt-3 border-t border-[#0A1F44]/10 flex items-center justify-between gap-4">
                      <span className="text-lg font-bold tabular-nums text-[#0A1F44] whitespace-nowrap">
                        {formatPriceARS(product.price)}
                      </span>

                      <button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        className="inline-flex items-center justify-center gap-2 min-h-[42px] px-4 py-2 rounded-lg bg-[#0A1F44] hover:bg-[#1E5BFF] text-[#F5F8FF] text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
                      >
                        <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>Consultar</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sección 3: Sobre BlueSouls */}
        <section
          id="nosotros"
          className="bg-[#0A1F44] text-[#F5F8FF] py-16 sm:py-20 lg:py-24 border-y border-[#F5F8FF]/10"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-5 flex">
              <PhotoPlaceholder
                silhouette="community"
                theme="dark"
                label="Foto de marca · Comunidad en la pista"
                ratioLabel="4:3"
                className="w-full min-h-[280px] lg:h-full rounded-xl bg-[#0B0B0F]/45"
              />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-xs sm:text-sm font-medium text-[#F5F8FF]/65">
                Sobre BlueSouls
              </p>

              <h2
                style={{ textWrap: 'balance' }}
                className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F5F8FF]"
              >
                Nacimos entre pistas de hielo y veredas porteñas.
              </h2>

              <p className="mt-4 text-base text-[#F5F8FF]/85 leading-relaxed max-w-2xl">
                BlueSouls surge de la comunidad de patinaje y hockey sobre hielo en Buenos
                Aires, con una idea simple: diseñar ropa urbana que abrigue en la pista y se
                sienta natural en cualquier plan por la ciudad, patines o no.
              </p>

              <div className="mt-8 divide-y divide-[#F5F8FF]/14 border-t border-b border-[#F5F8FF]/14">
                {STORY_PILLARS.map((pillar) => (
                  <div key={pillar.index} className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-5">
                    <span className="font-display text-lg font-bold text-[#1E5BFF] tabular-nums shrink-0">
                      {pillar.index}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-[#F5F8FF]">{pillar.title}</h3>
                      <p className="mt-1 text-sm text-[#F5F8FF]/75 leading-relaxed">{pillar.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sección 4: Contacto */}
        <section id="contacto" className="bg-[#0B0B0F] text-[#F5F8FF] py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs sm:text-sm font-medium text-[#F5F8FF]/65">
                  Contacto directo
                </p>
                <h2
                  style={{ textWrap: 'balance' }}
                  className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F5F8FF]"
                >
                  ¿Viste una prenda que va con vos?
                </h2>
                <p className="mt-3 text-base text-[#F5F8FF]/80 leading-relaxed max-w-xl">
                  Escribinos por WhatsApp para consultar talles, stock y puntos de entrega en{' '}
                  {BRAND_CONTACT.city}, o seguinos en Instagram para enterarte de cada nuevo ingreso.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
                <a
                  href={GENERAL_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 min-h-[60px] px-6 py-4 rounded-xl bg-[#1E5BFF] hover:bg-[#1749D1] text-[#F5F8FF] transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <div>
                      <span className="block text-sm font-semibold">Escribir por WhatsApp</span>
                      <span className="block text-xs text-[#F5F8FF]/85 tabular-nums">
                        {BRAND_CONTACT.whatsappDisplay}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={BRAND_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 min-h-[60px] px-6 py-4 rounded-xl bg-[#0A1F44]/60 hover:bg-[#0A1F44] border border-[#F5F8FF]/15 text-[#F5F8FF] transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <Instagram className="w-5 h-5 text-[#1E5BFF] shrink-0" aria-hidden="true" />
                    <div>
                      <span className="block text-sm font-semibold">Seguinos en Instagram</span>
                      <span className="block text-xs text-[#F5F8FF]/75">
                        {BRAND_CONTACT.instagramHandle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0B0B0F] text-[#F5F8FF]/65 border-t border-[#F5F8FF]/12 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <BrandMark variant="light" />
            <span className="text-xs text-[#F5F8FF]/55">
              © 2026 BlueSouls · {BRAND_CONTACT.city}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#inicio" className="hover:text-[#F5F8FF] transition-colors whitespace-nowrap">
              Inicio
            </a>
            <a href="#coleccion" className="hover:text-[#F5F8FF] transition-colors whitespace-nowrap">
              Colección
            </a>
            <a href="#nosotros" className="hover:text-[#F5F8FF] transition-colors whitespace-nowrap">
              Sobre BlueSouls
            </a>
            <a href="#contacto" className="hover:text-[#F5F8FF] transition-colors whitespace-nowrap">
              Contacto
            </a>
          </div>
        </div>
      </footer>

      <InquiryModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
