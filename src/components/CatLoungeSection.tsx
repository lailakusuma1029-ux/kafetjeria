import React, { useState } from 'react';
import { CAT_LOUNGE_PROFILES, CAT_LOUNGE_RULES, BRAND_INFO } from '../data/brandData';
import { Heart, Sparkles, CheckCircle2, Info, ArrowUpRight, Calendar } from 'lucide-react';

interface CatLoungeSectionProps {
  isDark: boolean;
  onOpenReservation: () => void;
}

export const CatLoungeSection: React.FC<CatLoungeSectionProps> = ({
  isDark,
  onOpenReservation,
}) => {
  const [selectedCat, setSelectedCat] = useState<string>(CAT_LOUNGE_PROFILES[0].id);

  const activeCat =
    CAT_LOUNGE_PROFILES.find((c) => c.id === selectedCat) || CAT_LOUNGE_PROFILES[0];

  const waAdoptionUrl = `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(
    `Halo Kafetjeria! Saya tertarik untuk mengenal lebih dekat dan menanyakan prosedur adopsi kucing bernama ${activeCat.name}.`
  )}`;

  return (
    <section id="cat-lounge" className="py-20 border-t transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cat Lounge Spotlight Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              <Heart className="w-4 h-4 fill-rose-500" />
              <span>Ruang Relaksasi Spesial</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Melepas penat bersama para kucing adopsi yang dirawat penuh cinta.
            </h2>
            <p
              className={`text-base leading-relaxed ${
                isDark ? 'text-stone-300' : 'text-[#4A3223]'
              }`}
            >
              Di Kafetjeria, kami percaya bahwa dengkuran hangat seekor kucing dan aroma kopi segar
              adalah terapi terbaik setelah hari yang panjang. Kucing-kucing di cat lounge kami adalah
              anabul terselamatkan yang telah divaksin, disteril, dan siap memberi keceriaan.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenReservation}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors shadow-xs cursor-pointer"
              >
                <span>Reservasi Sesi Cat Lounge</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div
              className={`rounded-3xl overflow-hidden border shadow-xl relative ${
                isDark ? 'border-[#33271E] bg-[#1A1410]' : 'border-[#E8DAC8] bg-white'
              }`}
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <img
                  src="/src/assets/images/cat_lounge_experience_1793011451034.jpg"
                  alt="Relaksasi bersama kucing adopsi di cat lounge Kafetjeria Semarang"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wider font-bold text-amber-300">
                    Sanitasi & Kebersihan Terjaga
                  </p>
                  <p className="text-sm font-medium mt-0.5">
                    Area bersih, bebas bulu di makanan dengan partisi kaca berstandar higienis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet The Adopted Cats Showcase */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <span
              className={`text-xs font-bold uppercase tracking-wider ${
                isDark ? 'text-amber-400' : 'text-amber-700'
              }`}
            >
              Teman Berbulu
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Kenali Para Kucing Residen & Calon Adopsi
            </h3>
            <p className={`text-sm mt-1.5 ${isDark ? 'text-stone-400' : 'text-[#5C4332]'}`}>
              Klik salah satu anabul untuk melihat kepribadian dan spot favoritnya di kafe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAT_LOUNGE_PROFILES.map((cat) => {
              const isSelected = selectedCat === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? isDark
                        ? 'border-amber-400 bg-[#251D17] ring-2 ring-amber-400/30'
                        : 'border-amber-500 bg-[#FFFDF9] ring-2 ring-amber-400/30 shadow-md'
                      : isDark
                      ? 'border-[#2D231A] bg-[#19130F] hover:border-stone-700'
                      : 'border-[#E8DAC8] bg-white hover:border-amber-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold">{cat.name}</h4>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        cat.status === 'Tersedia untuk Adopsi'
                          ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                          : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                      }`}
                    >
                      {cat.status}
                    </span>
                  </div>

                  <p className="text-xs text-stone-500 dark:text-stone-400 mb-2 font-mono">
                    {cat.breed} · {cat.age}
                  </p>

                  <p
                    className={`text-xs leading-relaxed mb-4 ${
                      isDark ? 'text-stone-300' : 'text-[#4A3223]'
                    }`}
                  >
                    "{cat.character}"
                  </p>

                  <div
                    className={`pt-3 border-t text-[11px] flex items-center gap-1.5 ${
                      isDark ? 'border-[#33271D] text-amber-200/80' : 'border-stone-100 text-[#6B4B35]'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Spot: {cat.favoriteSpot}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Cat Adoption CTA */}
          <div
            className={`mt-6 p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
              isDark ? 'bg-[#1C1612] border-[#31251C]' : 'bg-[#FAF4EB] border-[#E8DAC8]'
            }`}
          >
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-500 shrink-0" />
              <span>
                Tertarik memberi rumah selamanya untuk <strong>{activeCat.name}</strong>? Kami
                memfasilitasi adopsi gratis dengan wawancara komitmen dan survei lingkungan.
              </span>
            </div>
            <a
              href={waAdoptionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl font-bold bg-rose-600 hover:bg-rose-500 text-white whitespace-nowrap shrink-0 transition-colors"
            >
              Tanya Adopsi {activeCat.name}
            </a>
          </div>
        </div>

        {/* Cat Lounge Etiquette & Senin Berbagi Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Rules / Etiquette */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border ${
              isDark ? 'bg-[#19130F] border-[#2D231A]' : 'bg-white border-[#E8DAC8]'
            }`}
          >
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Etika & Kenyamanan di Cat Lounge</span>
            </h4>
            <ul className="space-y-3 text-xs leading-relaxed">
              {CAT_LOUNGE_RULES.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span className={isDark ? 'text-stone-300' : 'text-[#4A3223]'}>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Senin Berbagi */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
              isDark
                ? 'bg-gradient-to-br from-[#201813] to-[#17120E] border-[#3D2E21]'
                : 'bg-gradient-to-br from-[#FFFDF9] to-[#F5ECE0] border-[#E8DAC8]'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
                <Calendar className="w-4 h-4" />
                <span>Kegiatan Sosial Rutin</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Program "Senin Berbagi"</h4>
              <p
                className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  isDark ? 'text-stone-300' : 'text-[#4A3223]'
                }`}
              >
                Setiap hari Senin, tim Kafetjeria bersama juru masak ibu rumah tangga dan staf
                menyiapkan paket makanan bergizi hangat untuk dibagikan secara gratis kepada pekerja
                kebersihan, lansia prasejahtera, dan tetangga sekitar Semarang Barat.
              </p>
              <p
                className={`text-xs leading-relaxed ${
                  isDark ? 'text-stone-400' : 'text-stone-600'
                }`}
              >
                Dengan berkunjung dan memesan makanan di Kafetjeria, Anda turut menjadi bagian dari
                kebaikan yang terus mengalir bagi sesama.
              </p>
            </div>

            <div
              className={`mt-6 pt-4 border-t text-xs font-semibold ${
                isDark ? 'border-stone-800 text-amber-400' : 'border-stone-200 text-amber-800'
              }`}
            >
              "Cerita kita bersama adalah tentang berbagi kebahagiaan."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
