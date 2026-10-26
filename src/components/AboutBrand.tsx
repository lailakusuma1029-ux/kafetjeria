import React, { useState } from 'react';
import { CORE_VALUES, BRAND_MISSIONS, BRAND_INFO } from '../data/brandData';
import { Heart, Users, Sparkles, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface AboutBrandProps {
  isDark: boolean;
}

export const AboutBrand: React.FC<AboutBrandProps> = ({ isDark }) => {
  const [activeValueTab, setActiveValueTab] = useState<string>('setara');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-6 h-6 text-amber-500" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-500" />;
      default:
        return <Heart className="w-6 h-6 text-amber-500" />;
    }
  };

  const selectedValue = CORE_VALUES.find((v) => v.id === activeValueTab) || CORE_VALUES[0];

  return (
    <section id="tentang" className="py-20 border-t transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Natural editorial title */}
        <div className="max-w-3xl mb-16">
          <p
            className={`text-xs font-bold uppercase tracking-wider mb-2 ${
              isDark ? 'text-amber-400' : 'text-amber-700'
            }`}
          >
            Tentang Kafetjeria
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Sebuah rumah ketiga yang merangkul semua kalangan dengan ketulusan hati.
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg leading-relaxed ${
              isDark ? 'text-stone-300' : 'text-[#4A3223]'
            }`}
          >
            {BRAND_INFO.positioning}
          </p>
        </div>

        {/* Vision & Origin Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Vision Box */}
          <div
            className={`lg:col-span-5 p-8 rounded-3xl border flex flex-col justify-between ${
              isDark
                ? 'bg-[#1C1612] border-[#34291F] text-stone-200'
                : 'bg-[#FFFFFF] border-[#E8DAC8] text-[#2D1B14] shadow-xs'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-1 bg-amber-500 rounded-full" />
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-600 dark:text-amber-400">
                  Visi Brand
                </span>
              </div>
              <blockquote className="text-xl sm:text-2xl font-bold leading-snug">
                "{BRAND_INFO.vision}"
              </blockquote>
            </div>

            <div
              className={`mt-8 pt-6 border-t text-sm ${
                isDark ? 'border-stone-800 text-stone-400' : 'border-stone-100 text-stone-600'
              }`}
            >
              <p>
                Menjadi tempat di mana senyuman tidak berjarak, rasa masakan membangkitkan kehangatan
                keluarga, dan kepedulian diwujudkan nyata lewat tindakan.
              </p>
            </div>
          </div>

          {/* Identity Story Box */}
          <div
            className={`lg:col-span-7 p-8 rounded-3xl border flex flex-col justify-between ${
              isDark
                ? 'bg-[#1F1915] border-[#362C22] text-stone-300'
                : 'bg-[#FDF9F3] border-[#E8DAC8] text-[#3D291C]'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-1 bg-rose-500 rounded-full" />
                <span className="text-xs uppercase font-extrabold tracking-wider text-rose-600 dark:text-rose-400">
                  Filosofi Identitas Visual
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-stone-900 dark:text-stone-100">
                Makna Warna & Tipografi Kafetjeria
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs leading-relaxed">
                <div
                  className={`p-4 rounded-2xl border ${
                    isDark ? 'bg-[#16120E] border-[#2E241B]' : 'bg-white border-[#EFE4D6]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5 font-bold text-amber-600 dark:text-amber-400">
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span>Kuning Terang</span>
                  </div>
                  <p>{BRAND_INFO.colorMeaning.kuningTerang}</p>
                </div>

                <div
                  className={`p-4 rounded-2xl border ${
                    isDark ? 'bg-[#16120E] border-[#2E241B]' : 'bg-white border-[#EFE4D6]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5 font-bold text-stone-700 dark:text-stone-300">
                    <span className="w-3 h-3 rounded-full bg-[#2D1B14] border border-amber-300" />
                    <span>Cokelat Tua Kopi</span>
                  </div>
                  <p>{BRAND_INFO.colorMeaning.cokelatTuaKopi}</p>
                </div>

                <div
                  className={`p-4 rounded-2xl border ${
                    isDark ? 'bg-[#16120E] border-[#2E241B]' : 'bg-white border-[#EFE4D6]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5 font-bold text-rose-600 dark:text-rose-400">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span>Merah Ceria</span>
                  </div>
                  <p>{BRAND_INFO.colorMeaning.merahCeria}</p>
                </div>

                <div
                  className={`p-4 rounded-2xl border ${
                    isDark ? 'bg-[#16120E] border-[#2E241B]' : 'bg-white border-[#EFE4D6]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5 font-bold text-amber-700 dark:text-amber-300">
                    <span className="w-3 h-3 rounded-full bg-[#FAF4EB] border border-stone-400" />
                    <span>Krem Lembut</span>
                  </div>
                  <p>{BRAND_INFO.colorMeaning.kremLembut}</p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs italic text-stone-500 dark:text-stone-400">
              * Menggunakan tipografi Chewy yang membulat untuk menyambut siapa saja tanpa sekat formalitas.
            </p>
          </div>
        </div>

        {/* Core Values Section (S - A - M - A) */}
        <div id="filosofi" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span
              className={`text-xs font-bold uppercase tracking-wider ${
                isDark ? 'text-amber-400' : 'text-amber-700'
              }`}
            >
              Prinsip Dasar
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Nilai Inti Kafetjeria: S · A · M · A
            </h3>
            <p className={`text-sm mt-2 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
              Empat pilar luhur yang memandu cara kami memasak, melayani, dan merawat lingkungan.
            </p>
          </div>

          {/* Interactive S-A-M-A Tab Buttons */}
          <div className="flex justify-center mb-8">
            <div
              className={`inline-flex p-1.5 rounded-2xl border ${
                isDark ? 'bg-[#1E1713] border-[#362A1F]' : 'bg-[#EFE4D4] border-[#DECBB4]'
              }`}
            >
              {CORE_VALUES.map((val) => {
                const isActive = activeValueTab === val.id;
                return (
                  <button
                    key={val.id}
                    onClick={() => setActiveValueTab(val.id)}
                    type="button"
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? isDark
                          ? 'bg-amber-400 text-stone-950 shadow-sm'
                          : 'bg-[#2D1B14] text-[#FAF4EB] shadow-sm'
                        : isDark
                        ? 'text-stone-400 hover:text-stone-100'
                        : 'text-[#634832] hover:text-[#2D1B14]'
                    }`}
                  >
                    <span className="font-mono text-base font-black">{val.letter}</span>
                    <span>{val.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Value Spotlight Card */}
          <div
            className={`max-w-3xl mx-auto p-8 rounded-3xl border transition-all ${
              isDark
                ? 'bg-[#1C1612] border-[#3D3023] text-stone-200'
                : 'bg-white border-[#E8DAC8] text-[#2D1B14] shadow-sm'
            }`}
          >
            <div className="flex items-start gap-5">
              <div
                className={`p-4 rounded-2xl shrink-0 ${
                  isDark ? 'bg-[#2B2119]' : 'bg-[#F8EFE4]'
                }`}
              >
                {getIcon(selectedValue.iconName)}
              </div>
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black font-mono text-amber-500">
                    {selectedValue.letter}
                  </span>
                  <h4 className="text-xl font-bold">{selectedValue.title}</h4>
                  <span
                    className={`text-xs font-semibold ${
                      isDark ? 'text-amber-300' : 'text-amber-700'
                    }`}
                  >
                    ({selectedValue.subtitle})
                  </span>
                </div>
                <p
                  className={`mt-3 text-base leading-relaxed ${
                    isDark ? 'text-stone-300' : 'text-[#4A3223]'
                  }`}
                >
                  {selectedValue.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 7 Missions (Tujuh Misi Nyata) */}
        <div>
          <div className="max-w-2xl mb-8">
            <span
              className={`text-xs font-bold uppercase tracking-wider ${
                isDark ? 'text-amber-400' : 'text-amber-700'
              }`}
            >
              Komitmen Nyata
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
              7 Misi Kafetjeria untuk Semarang
            </h3>
            <p className={`text-sm mt-2 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
              Langkah terarah untuk menghadirkan kebaikan bagi pengunjung, staf, satwa, dan bumi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRAND_MISSIONS.map((mission) => (
              <div
                key={mission.number}
                className={`p-6 rounded-2xl border transition-all hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-[#1A1410] border-[#2D231A] hover:border-amber-500/50 text-stone-200'
                    : 'bg-white border-[#E8DAC8] hover:border-amber-500/50 text-[#2D1B14] shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-amber-500">
                    Misi {mission.number}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <h4 className="text-base font-bold mb-2">{mission.title}</h4>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? 'text-stone-400' : 'text-[#5C4332]'
                  }`}
                >
                  {mission.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
