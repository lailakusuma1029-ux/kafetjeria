import React, { useState } from 'react';
import { KafetjeriaLogo } from './KafetjeriaLogo';
import { Moon, Sun, ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  cartCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Nilai S.A.M.A', href: '#filosofi' },
    { label: 'Menu & Harga', href: '#menu' },
    { label: 'Cat Lounge', href: '#cat-lounge' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Kontak', href: '#kontak' },
  ];


  const waUrl = `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Halo Kafetjeria Semarang! Saya ingin bertanya tentang kafe dan reservasi tempat.'
  )}`;

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-md transition-colors border-b ${
        isDark
          ? 'bg-[#15110E]/90 border-[#2D241D] text-[#FDF6EE]'
          : 'bg-[#FAF4EB]/90 border-[#E8DAC8] text-[#2D1B14]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark & Mascot */}
          <a
            href="#"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
            aria-label="Kafetjeria Homepage"
          >
            <KafetjeriaLogo isDark={isDark} size="md" showTagline={false} />
          </a>

          {/* Zone 2: Clean single-line text links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-normal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-2 ${
                  isDark
                    ? 'text-amber-100/80 hover:text-amber-300 decoration-amber-400'
                    : 'text-[#4A3223] hover:text-[#2D1B14] decoration-amber-500'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Interactive Controls (Theme Toggle + Cart + Primary CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Interactive Theme Switcher Toggle */}
            <button
              onClick={onToggleTheme}
              type="button"
              className={`relative inline-flex items-center justify-center p-2 rounded-xl transition-all cursor-pointer border ${
                isDark
                  ? 'bg-[#241D17] border-[#3E3024] text-amber-300 hover:bg-[#2D241D]'
                  : 'bg-[#F2E5D3] border-[#E3D1BC] text-[#4A3223] hover:bg-[#EBDBC6]'
              }`}
              title={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
              aria-label={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
            >
              {isDark ? (
                <Sun className="w-5 h-5 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-5 h-5 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            {/* Shopping Bag / Order Button if user picked items */}
            {cartCount > 0 && (
              <button
                onClick={onOpenCart}
                className="relative inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all bg-amber-500 hover:bg-amber-600 text-stone-900 shadow-sm"
                aria-label="Lihat Keranjang Pesanan"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="tabular-nums font-mono">{cartCount}</span>
              </button>
            )}

            {/* Primary Action Button (WhatsApp Direct) */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 shadow-xs cursor-pointer ${
                isDark
                  ? 'bg-amber-400 hover:bg-amber-300 text-stone-950 hover:shadow-amber-400/20'
                  : 'bg-[#2D1B14] hover:bg-[#432A1F] text-[#FAF4EB]'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`lg:hidden p-2 rounded-lg ${
                isDark ? 'text-amber-200 hover:bg-[#28201A]' : 'text-[#2D1B14] hover:bg-[#F0E2D0]'
              }`}
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden px-6 pt-4 pb-6 border-t ${
            isDark
              ? 'bg-[#181310] border-[#2D241D] text-stone-200'
              : 'bg-[#FAF4EB] border-[#E8DAC8] text-[#2D1B14]'
          }`}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-base font-semibold transition-colors ${
                  isDark
                    ? 'text-stone-300 hover:text-amber-300'
                    : 'text-[#4A3223] hover:text-[#2D1B14]'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-dashed border-stone-300 dark:border-stone-700 flex flex-col gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-600 text-stone-950 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan Meja / Chat WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
