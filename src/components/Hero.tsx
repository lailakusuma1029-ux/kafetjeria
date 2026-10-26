import React from 'react';
import { ArrowDown, MessageCircle, Heart, Sparkles, Clock, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';

interface HeroProps {
  isDark: boolean;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isDark, onOpenReservation }) => {
  const waUrl = `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Halo Kafetjeria! Saya ingin reservasi tempat untuk berkunjung bersama keluarga/teman.'
  )}`;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative ambient warm glows conforming to brand colors */}
      <div
        className={`absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] blur-3xl opacity-35 pointer-events-none rounded-full ${
          isDark ? 'bg-amber-600/20' : 'bg-amber-300/40'
        }`}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed clean metadata kicker (no pills) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
              <span className={isDark ? 'text-amber-400' : 'text-amber-700'}>
                Kafetjeria Semarang
              </span>
              <span className={isDark ? 'text-stone-600' : 'text-stone-400'}>·</span>
              <span className={isDark ? 'text-stone-400' : 'text-stone-600'}>
                Kafe Istimewa & Cat Lounge
              </span>
              <span className={isDark ? 'text-stone-600' : 'text-stone-400'}>·</span>
              <span className={isDark ? 'text-stone-400' : 'text-stone-600'}>Est. 2024</span>
            </div>

            {/* Display Headline with balanced wrap */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Cerita kita bersama dalam{' '}
              <span className="font-chewy font-normal text-amber-500 underline decoration-rose-500/80 decoration-wavy decoration-3 underline-offset-4">
                kehangatan
              </span>{' '}
              secangkir kopi & masakan ibu.
            </h1>

            {/* Subheadline Prose */}
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                isDark ? 'text-stone-300' : 'text-[#4A3223]'
              }`}
            >
              Ruang kumpul ramah keluarga dan pelajar di Semarang Barat. Menghadirkan kenangan
              masakan rumahan autentik yang dimasak langsung oleh ibu rumah tangga & lansia, ditemani
              kucing adopsi tersayang, serta pelayanan tulus dan setara dari teman penyandang disabilitas.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold shadow-md transition-all cursor-pointer bg-amber-500 hover:bg-amber-400 text-stone-950 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Lihat Buku Menu</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenReservation}
                type="button"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all cursor-pointer border ${
                  isDark
                    ? 'border-[#3D3024] bg-[#221B15] text-amber-100 hover:bg-[#2B231C]'
                    : 'border-[#DECDB7] bg-[#FFFFFF] text-[#2D1B14] hover:bg-[#FAF4EB] shadow-xs'
                }`}
              >
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>Reservasi Meja & Cat Lounge</span>
              </button>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-xs font-semibold hover:underline underline-offset-4 transition-colors ${
                  isDark ? 'text-stone-400 hover:text-amber-300' : 'text-[#634832] hover:text-[#2D1B14]'
                }`}
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>Chat Langsung 0835-0789-2213</span>
              </a>
            </div>

            {/* Quiet trust markers with typographic separators */}
            <div
              className={`pt-6 border-t flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium ${
                isDark ? 'border-[#2D241D] text-stone-400' : 'border-[#E8DAC8] text-[#5E4433]'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Resep Otentik Masakan Ibu</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                <span>Pemberdayaan Lansia & Disabilitas</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>Senin - Sabtu 11.00 - 22.00</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor Card */}
          <div className="lg:col-span-5 relative">
            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl border transition-all ${
                isDark ? 'border-[#362B21] bg-[#1E1713]' : 'border-[#E4D2BD] bg-[#FFFFFF]'
              }`}
            >
              {/* Cafe Interior & Cat Lounge Photograph */}
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src="/src/assets/images/hero_kafetjeria_cafe_1793011448915.jpg"
                  alt="Suasana hangat dan ramah di Kafetjeria Kafe dan Cat Lounge Semarang"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/10" />

                {/* Floating caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wider font-semibold text-amber-300">
                    Third Place yang Membumi
                  </p>
                  <p className="text-sm font-medium text-stone-200 mt-0.5">
                    Ruang relaksasi nyaman, kucing adopsi tersayang & aroma kopi hangat.
                  </p>
                </div>
              </div>

              {/* Bottom quick details strip */}
              <div
                className={`p-5 flex items-center justify-between gap-4 text-xs ${
                  isDark ? 'bg-[#1C1612] text-stone-300' : 'bg-[#FAF4EB] text-[#4A3223]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <div>
                    <p className="font-bold text-stone-900 dark:text-stone-100">
                      Jl. Fatmawati 303
                    </p>
                    <p className="text-stone-500 dark:text-stone-400">Semarang Barat</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-amber-600 dark:text-amber-400 font-mono">
                    Mulai Rp 7.000
                  </p>
                  <p className="text-stone-500 dark:text-stone-400">Ramah di Kantong</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
