import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/brandData';
import { MenuItem } from '../types';
import { Plus, Coffee, Utensils, Award, Leaf, HeartHandshake, Smile, Shield } from 'lucide-react';

interface ProductShowcaseProps {
  isDark: boolean;
  onAddToCart: (item: MenuItem) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ isDark, onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'minuman' | 'makanan'>('all');
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemId(item.id);
    setTimeout(() => {
      setAddedItemId(null);
    }, 1200);
  };

  const advantages = [
    {
      icon: <Utensils className="w-5 h-5 text-amber-500" />,
      title: 'Resep Asli Masakan Ibu',
      desc: 'Dimasak langsung oleh para ibu rumah tangga & lansia dengan bumbu rempah pilihan tanpa perasa buatan berlebih.',
    },
    {
      icon: <Smile className="w-5 h-5 text-rose-500" />,
      title: 'Pelayanan Paling Tulus',
      desc: 'Staf inklusif melibatkan teman disabilitas yang menyambut Anda dengan senyuman paling hangat dan jujur.',
    },
    {
      icon: <Shield className="w-5 h-5 text-amber-500" />,
      title: 'Kebersihan & Keamanan Pangan',
      desc: 'Standar higienitas ketat pada pengolahan makanan serta pemisahan steril dari area interaksi kucing.',
    },
    {
      icon: <Leaf className="w-5 h-5 text-emerald-500" />,
      title: '100% Kemasan Biodegradable',
      desc: 'Semua kemasan takeaway ramah lingkungan yang mudah terurai demi kelestarian bumi dan kota Semarang.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-rose-500" />,
      title: 'Program Rutin "Senin Berbagi"',
      desc: 'Sebagian dari rezeki kafe dialokasikan untuk membagikan makanan bernutrisi kepada warga sekitar setiap Senin.',
    },
    {
      icon: <Award className="w-5 h-5 text-amber-500" />,
      title: 'Harga Jujur & Ramah Kantong',
      desc: 'Cita rasa berkelas mulai dari Rp 7.000 hingga Rp 25.000, sangat bersahabat bagi pelajar, mahasiswa, dan keluarga.',
    },
  ];

  return (
    <section id="menu" className="py-20 border-t transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Alasan Mengapa Memilih Kafetjeria (Keunggulan) */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <span
              className={`text-xs font-black uppercase tracking-wider ${
                isDark ? 'text-amber-400' : 'text-[#92400E]'
              }`}
            >
              Kenapa Kafetjeria?
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-stone-950 dark:text-stone-50"
              style={{ textWrap: 'balance' }}
            >
              Keunggulan yang membuat setiap kunjungan terasa seperti pulang ke rumah.
            </h2>
            <p
              className={`mt-3 text-base font-medium ${
                isDark ? 'text-stone-300' : 'text-[#28170D]'
              }`}
            >
              Bukan sekadar nongkrong, Kafetjeria memadukan kuliner rumahan lezat, ruang relaksasi
              kucing yang menentramkan, dan kepedulian sosial yang nyata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all ${
                  isDark
                    ? 'bg-[#1C1612] border-[#31261D] text-stone-200'
                    : 'bg-white border-[#DFCEBA] text-[#190D06] shadow-xs'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    isDark ? 'bg-[#291F18]' : 'bg-[#FAF4EB]'
                  }`}
                >
                  {adv.icon}
                </div>
                <h3 className="text-base font-extrabold mb-2 text-[#190D06] dark:text-stone-100">
                  {adv.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed font-medium ${
                    isDark ? 'text-stone-300' : 'text-[#2C190F]'
                  }`}
                >
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Product Showcase (Menu Nusantara & Mancanegara) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span
                className={`text-xs font-black uppercase tracking-wider ${
                  isDark ? 'text-amber-400' : 'text-[#854516]'
                }`}
              >
                Sajian Istimewa
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-[#362117] dark:text-stone-50">
                Daftar Menu Pilihan Kafetjeria
              </h2>
              <p
                className={`text-sm mt-1.5 font-medium ${
                  isDark ? 'text-stone-300' : 'text-[#4E3123]'
                }`}
              >
                Setiap resep diracik dengan hati untuk menyegarkan pikiran dan menghangatkan jiwa.
              </p>
            </div>

            {/* Filter Tabs */}
            <div
              className={`inline-flex p-1 rounded-xl border self-start md:self-auto ${
                isDark ? 'bg-[#1E1713] border-[#362A1F]' : 'bg-[#EBDDCB] border-[#D4BF9F]'
              }`}
            >
              <button
                onClick={() => setActiveFilter('all')}
                type="button"
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? isDark
                      ? 'bg-amber-400 text-stone-950 shadow-xs'
                      : 'bg-[#362117] text-[#FAF4EB] shadow-xs'
                    : isDark
                    ? 'text-stone-300 hover:text-white'
                    : 'text-[#362117] hover:text-[#21120B] hover:bg-[#DFCDB8]'
                }`}
              >
                Semua Menu ({MENU_ITEMS.length})
              </button>
              <button
                onClick={() => setActiveFilter('minuman')}
                type="button"
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeFilter === 'minuman'
                    ? isDark
                      ? 'bg-amber-400 text-stone-950 shadow-xs'
                      : 'bg-[#362117] text-[#FAF4EB] shadow-xs'
                    : isDark
                    ? 'text-stone-300 hover:text-white'
                    : 'text-[#362117] hover:text-[#21120B] hover:bg-[#DFCDB8]'
                }`}
              >
                <Coffee className="w-3.5 h-3.5" />
                <span>Minuman</span>
              </button>
              <button
                onClick={() => setActiveFilter('makanan')}
                type="button"
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeFilter === 'makanan'
                    ? isDark
                      ? 'bg-amber-400 text-stone-950 shadow-xs'
                      : 'bg-[#362117] text-[#FAF4EB] shadow-xs'
                    : isDark
                    ? 'text-stone-300 hover:text-white'
                    : 'text-[#362117] hover:text-[#21120B] hover:bg-[#DFCDB8]'
                }`}
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>Makanan</span>
              </button>
            </div>
          </div>

          {/* Menu Items Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                  isDark
                    ? 'bg-[#1C1612] border-[#31251C] hover:border-amber-400/50'
                    : 'bg-white border-[#DFCEBA] hover:border-amber-600/60 shadow-xs'
                }`}
              >
                <div>
                  {/* Photo container */}
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    {/* Category tag & price */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="text-xs font-bold bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md text-amber-300 tracking-wide">
                        {item.subCategory}
                      </span>
                      <span className="text-lg font-black font-mono tracking-tight bg-amber-400 text-stone-950 px-3 py-1 rounded-lg shadow-sm">
                        {item.priceFormatted}
                      </span>
                    </div>
                  </div>

                  {/* Text details */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-2.5">
                      <h3 className="text-xl font-extrabold text-[#362117] dark:text-stone-50 tracking-tight leading-snug">
                        {item.name}
                      </h3>
                    </div>

                    <p
                      className={`text-xs leading-relaxed mb-4 font-medium ${
                        isDark ? 'text-stone-300' : 'text-[#4A2E1F]'
                      }`}
                    >
                      {item.description}
                    </p>

                    {item.highlight && (
                      <div
                        className={`p-3 rounded-xl text-xs ${
                          isDark
                            ? 'bg-[#251D17] text-amber-200 border border-[#3A2D22]'
                            : 'bg-[#FAF3EB] text-[#3E2415] border border-[#DECCB6]'
                        }`}
                      >
                        <span className="font-extrabold text-[#8D4212] dark:text-amber-400">
                          Keistimewaan:{' '}
                        </span>
                        <span className="font-semibold text-[#362117] dark:text-amber-100">
                          {item.highlight}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div
                  className={`p-6 pt-0 flex items-center justify-between border-t mt-4 ${
                    isDark ? 'border-[#292019]' : 'border-[#EFE1D1]'
                  }`}
                >
                  <span className="text-xs font-bold text-[#362117] dark:text-stone-300 font-mono tracking-tight">
                    Rp {item.price.toLocaleString('id-ID')}
                  </span>

                  <button
                    onClick={() => handleAdd(item)}
                    type="button"
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs ${
                      addedItemId === item.id
                        ? 'bg-emerald-600 text-white'
                        : isDark
                        ? 'bg-amber-400 hover:bg-amber-300 text-stone-950'
                        : 'bg-[#362117] hover:bg-[#4E3122] text-[#FAF4EB]'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                    <span>{addedItemId === item.id ? 'Ditambahkan!' : 'Tambah Pesanan'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
