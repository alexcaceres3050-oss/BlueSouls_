export type Category = 'Todo' | 'Abrigos' | 'Remeras' | 'Pantalones' | 'Accesorios';

export type GarmentSilhouette = 'hoodie' | 'jersey' | 'jacket' | 'tee' | 'cargo' | 'beanie';

export interface Product {
  id: string;
  name: string;
  category: Exclude<Category, 'Todo'>;
  fit: string;
  price: number;
  sizes: string[];
  silhouette: GarmentSilhouette;
  photoHint: string;
  note?: string;
}

export const BRAND_CONTACT = {
  whatsappNumber: '5491100000000',
  whatsappDisplay: '+54 9 11 0000-0000',
  instagramHandle: '@bluesouls.ba',
  instagramUrl: 'https://instagram.com/bluesouls.ba',
  city: 'Buenos Aires, Argentina',
};

export const CATEGORIES: Category[] = ['Todo', 'Abrigos', 'Remeras', 'Pantalones', 'Accesorios'];

export const PRODUCTS: Product[] = [
  {
    id: 'buzo-rink-01',
    name: 'Buzo Oversize Rink 01',
    category: 'Abrigos',
    fit: 'Calce amplio · Frisa pesada',
    price: 74000,
    sizes: ['S', 'M', 'L', 'XL'],
    silhouette: 'hoodie',
    photoHint: 'Foto producto · Buzo azul profundo frente',
    note: 'Edición inicial',
  },
  {
    id: 'jersey-faceoff',
    name: 'Jersey Urbano Faceoff',
    category: 'Remeras',
    fit: 'Corte hockey · Manga caída',
    price: 62000,
    sizes: ['S', 'M', 'L', 'XL'],
    silhouette: 'jersey',
    photoHint: 'Foto producto · Jersey inspirado en hockey',
  },
  {
    id: 'campera-ice-line',
    name: 'Campera Rompeviento Ice Line',
    category: 'Abrigos',
    fit: 'Impermeable liviana · Cierre completo',
    price: 98000,
    sizes: ['S', 'M', 'L', 'XL'],
    silhouette: 'jacket',
    photoHint: 'Foto producto · Campera pista y calle',
    note: 'Nuevo ingreso',
  },
  {
    id: 'remera-boxy-blade',
    name: 'Remera Boxy Blade',
    category: 'Remeras',
    fit: 'Corte cuadrado · Algodón 24/1',
    price: 38000,
    sizes: ['S', 'M', 'L', 'XL'],
    silhouette: 'tee',
    photoHint: 'Foto producto · Remera blanca hielo',
  },
  {
    id: 'cargo-blue-line',
    name: 'Pantalón Cargo Blue Line',
    category: 'Pantalones',
    fit: 'Pierna suelta · Bolsillos amplios',
    price: 82000,
    sizes: ['38', '40', '42', '44'],
    silhouette: 'cargo',
    photoHint: 'Foto producto · Pantalón cargo negro',
  },
  {
    id: 'gorro-frost',
    name: 'Gorro Tejido Frost',
    category: 'Accesorios',
    fit: 'Talle único · Punto acanalado',
    price: 26000,
    sizes: ['Único'],
    silhouette: 'beanie',
    photoHint: 'Foto producto · Gorro tejido azul eléctrico',
  },
];

export function formatPriceARS(amount: number): string {
  return `$ ${amount.toLocaleString('es-AR')}`;
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BRAND_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
