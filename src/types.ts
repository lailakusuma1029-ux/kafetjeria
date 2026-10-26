export interface MenuItem {
  id: string;
  name: string;
  category: 'minuman' | 'makanan';
  subCategory: string; // 'Varian melek' | 'Varian syegar' | 'Varian kenangan' | 'Ringan' | 'Berat'
  price: number;
  priceFormatted: string;
  description: string;
  highlight?: string;
  story?: string;
  image: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface CatProfile {
  id: string;
  name: string;
  age: string;
  breed: string;
  status: 'Tersedia untuk Adopsi' | 'Residen Cat Lounge';
  character: string;
  favoriteSpot: string;
}

export interface CoreValue {
  id: string;
  letter: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  category: 'cat-lounge' | 'kuliner' | 'suasana' | 'inklusif';
  categoryLabel: string;
  quote: string;
  favoriteMenu: string;
  verified: boolean;
}

