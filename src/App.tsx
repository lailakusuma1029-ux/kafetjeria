import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutBrand } from './components/AboutBrand';
import { ProductShowcase } from './components/ProductShowcase';
import { CatLoungeSection } from './components/CatLoungeSection';
import { Testimonials } from './components/Testimonials';
import { ContactFooter } from './components/ContactFooter';
import { OrderDrawer } from './components/OrderDrawer';
import { ReservationModal } from './components/ReservationModal';
import { MenuItem, CartItem } from './types';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { BRAND_INFO } from './data/brandData';

export default function App() {
  // Theme state: persists in localStorage, defaults to light
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kafetjeria_theme');
      if (saved) return saved === 'dark';
    }
    return false;
  });

  // Cart & Order State
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('kafetjeria_cart');
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync theme with document class
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('kafetjeria_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('kafetjeria_theme', 'light');
    }
  }, [isDark]);

  // Sync cart with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('kafetjeria_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1 }];
    });

    setToastMessage(`"${item.name}" ditambahkan ke pesanan`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => {
          if (c.item.id === id) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const waFloatingUrl = `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Halo Kafetjeria! Saya ingin bertanya tentang kafe dan memesan menu.'
  )}`;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? 'bg-[#15110E] text-[#FDF7EE]'
          : 'bg-[#FAF4EB] text-[#2D1B14]'
      }`}
    >
      {/* 1. Header + Top Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          isDark={isDark}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* 2. Tentang Brand (Latar Belakang, Visi & 7 Misi, Filosofi Warna & Tipografi, Nilai S.A.M.A) */}
        <AboutBrand isDark={isDark} />

        {/* 3. Produk + Keunggulan (Menu Minuman & Makanan, 6 Keunggulan Utama, Pesan Interaktif) */}
        <ProductShowcase
          isDark={isDark}
          onAddToCart={handleAddToCart}
        />

        {/* Spesial Cat Lounge & Program Senin Berbagi */}
        <CatLoungeSection
          isDark={isDark}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Testimoni Pelanggan & Rating Bintang */}
        <Testimonials isDark={isDark} />
      </main>


      {/* 4. Kontak + Footer (Alamat, Google Maps info, WhatsApp, Instagram, Copyright) */}
      <ContactFooter
        isDark={isDark}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Interactive Cart Order Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        isDark={isDark}
      />

      {/* Reservation Dialog Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        isDark={isDark}
      />

      {/* Floating Action Buttons: Cart trigger & WhatsApp Direct */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {totalCartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 px-4 py-3 rounded-full text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-xl transition-all cursor-pointer animate-bounce"
            aria-label="Lihat Keranjang Pesanan"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Lihat Pesanan ({totalCartCount})</span>
          </button>
        )}

        <a
          href={waFloatingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl transition-all hover:scale-105 active:scale-95"
          aria-label="Chat WhatsApp Kafetjeria"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Tanya Kami di WA</span>
        </a>
      </div>

      {/* Toast Notification when adding item */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 py-2.5 px-4 rounded-xl text-xs font-bold bg-stone-900 text-white dark:bg-amber-400 dark:text-stone-950 shadow-2xl transition-all animate-fade-in flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 dark:bg-emerald-600" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
