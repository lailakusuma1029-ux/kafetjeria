import React, { useState } from 'react';
import { TESTIMONIALS, MENU_ITEMS } from '../data/brandData';
import { Testimonial } from '../types';
import {
  Star,
  Quote,
  CheckCircle,
  MessageSquarePlus,
  Heart,
  X,
  Sparkles,
  Send,
} from 'lucide-react';

interface TestimonialsProps {
  isDark: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ isDark }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState<{
    name: string;
    role: string;
    rating: number;
    quote: string;
    favoriteMenu: string;
    category: 'cat-lounge' | 'kuliner' | 'suasana' | 'inklusif';
  }>({
    name: '',
    role: '',
    rating: 5,
    quote: '',
    favoriteMenu: MENU_ITEMS[0].name,
    category: 'kuliner',
  });

  const [submittedToast, setSubmittedToast] = useState(false);

  const filteredTestimonials = testimonialsList.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.quote) return;

    const created: Testimonial = {
      id: `testi-${Date.now()}`,
      name: newReview.name,
      role: newReview.role || 'Pengunjung Kafetjeria',
      rating: newReview.rating,
      date: 'Baru saja',
      category: newReview.category,
      categoryLabel:
        newReview.category === 'cat-lounge'
          ? 'Cat Lounge & Relaksasi'
          : newReview.category === 'inklusif'
          ? 'Pelayanan Inklusif'
          : 'Kuliner & Rasa Ibu',
      quote: newReview.quote,
      favoriteMenu: newReview.favoriteMenu,
      verified: true,
    };

    setTestimonialsList([created, ...testimonialsList]);
    setIsModalOpen(false);
    setNewReview({
      name: '',
      role: '',
      rating: 5,
      quote: '',
      favoriteMenu: MENU_ITEMS[0].name,
      category: 'kuliner',
    });
    setSubmittedToast(true);
    setTimeout(() => setSubmittedToast(false), 3000);
  };

  return (
    <section id="testimoni" className="py-20 border-t transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Social Proof Trust Indicator */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2 text-amber-600 dark:text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>Suara Pengunjung</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Cerita Hangat dari Mereka yang Telah Singgah
            </h2>
            <p className={`mt-3 text-base ${isDark ? 'text-stone-300' : 'text-[#4A3223]'}`}>
              Setiap senyum, seduhan kopi, dan dengkuran manja anabul menciptakan kenangan berharga.
              Berikut pengalaman jujur dari teman-teman yang mampir ke Kafetjeria.
            </p>
          </div>

          {/* Aggregate Rating Score Box */}
          <div
            className={`p-5 rounded-2xl border flex items-center gap-5 shrink-0 ${
              isDark
                ? 'bg-[#1C1612] border-[#34271D] text-stone-100'
                : 'bg-white border-[#E8DAC8] text-[#2D1B14] shadow-xs'
            }`}
          >
            <div className="text-center">
              <div className="text-3xl font-black font-mono text-amber-500 leading-none">
                4.9
              </div>
              <div className="flex items-center justify-center gap-0.5 mt-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <div className="border-l pl-4 border-stone-200 dark:border-stone-800 text-xs">
              <p className="font-bold text-stone-900 dark:text-stone-100">
                Rating Kepuasan 98%
              </p>
              <p className="text-stone-500 dark:text-stone-400 mt-0.5">
                Berdasarkan 280+ ulasan pengunjung
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors shadow-xs cursor-pointer ml-1"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Tulis Ulasan</span>
            </button>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Semua Ulasan' },
            { id: 'cat-lounge', label: 'Cat Lounge & Relaksasi' },
            { id: 'kuliner', label: 'Makanan & Masakan Ibu' },
            { id: 'inklusif', label: 'Pelayanan Inklusif' },
            { id: 'suasana', label: 'Suasana & Third Place' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              type="button"
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer border ${
                activeFilter === tab.id
                  ? isDark
                    ? 'bg-amber-400 text-stone-950 border-amber-400 shadow-xs'
                    : 'bg-[#2D1B14] text-[#FAF4EB] border-[#2D1B14] shadow-xs'
                  : isDark
                  ? 'bg-[#1C1612] border-[#31251C] text-stone-400 hover:text-stone-200'
                  : 'bg-white border-[#E8DAC8] text-[#5C4332] hover:text-[#2D1B14]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Bento/Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testi) => (
            <div
              key={testi.id}
              className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${
                isDark
                  ? 'bg-[#1C1612] border-[#31251C] hover:border-amber-400/40 text-stone-200'
                  : 'bg-white border-[#E8DAC8] hover:border-amber-500/50 text-[#2D1B14] shadow-xs'
              }`}
            >
              <div>
                {/* Top card metadata: Star rating & verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0"
                      />
                    ))}
                  </div>

                  {testi.verified && (
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Tamu Terverifikasi</span>
                    </div>
                  )}
                </div>

                {/* Quote Text */}
                <div className="relative mb-5">
                  <Quote
                    className={`w-7 h-7 mb-2 opacity-25 ${
                      isDark ? 'text-amber-400' : 'text-amber-700'
                    }`}
                  />
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-stone-300' : 'text-[#4A3223]'
                    }`}
                  >
                    "{testi.quote}"
                  </p>
                </div>
              </div>

              {/* Bottom Customer Info */}
              <div
                className={`pt-4 border-t mt-3 flex flex-col gap-2 ${
                  isDark ? 'border-[#292018]' : 'border-[#F2E7D8]'
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Avatar Letter Circle */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                      isDark
                        ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                        : 'bg-[#FAF4EB] text-[#2D1B14] border border-[#DECBB4]'
                    }`}
                  >
                    {testi.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-xs truncate text-stone-900 dark:text-stone-100">
                      {testi.name}
                    </p>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 truncate">
                      {testi.role}
                    </p>
                  </div>
                </div>

                {/* Favorite Menu Tag */}
                {testi.favoriteMenu && (
                  <div
                    className={`text-[11px] px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 ${
                      isDark
                        ? 'bg-[#241D17] text-amber-200/90'
                        : 'bg-[#FAF4EB] text-[#634832]'
                    }`}
                  >
                    <Heart className="w-3 h-3 text-rose-500 fill-rose-500 shrink-0" />
                    <span className="truncate">
                      <strong>Menu Favorit:</strong> {testi.favoriteMenu}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* User Review Submission Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
              onClick={() => setIsModalOpen(false)}
              aria-hidden="true"
            />

            <div
              className={`relative w-full max-w-md rounded-3xl p-6 sm:p-8 border shadow-2xl z-10 ${
                isDark
                  ? 'bg-[#19130F] border-[#34271D] text-stone-100'
                  : 'bg-[#FAF4EB] border-[#E8DAC8] text-[#2D1B14]'
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-xl font-bold">Bagikan Ulasan Anda</h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    Cerita Anda sangat berarti untuk kemajuan Kafetjeria.
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-xl hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddReview} className="space-y-4">
                {/* Rating selection */}
                <div>
                  <label className="block text-xs font-semibold mb-1 text-stone-700 dark:text-stone-300">
                    Beri Rating Bintang
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="p-1 transition-transform hover:scale-110 cursor-pointer"
                        aria-label={`Beri ${star} bintang`}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newReview.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-stone-400'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-mono font-bold text-amber-500 ml-2">
                      {newReview.rating}.0 / 5.0
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1 text-stone-700 dark:text-stone-300">
                    Nama Anda *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Rian Pratama"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs border ${
                      isDark
                        ? 'bg-[#221A14] border-[#3D2E21] text-white placeholder-stone-500'
                        : 'bg-white border-[#DECBB4] text-stone-900 placeholder-stone-400'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1 text-stone-700 dark:text-stone-300">
                    Kategori Pengalaman
                  </label>
                  <select
                    value={newReview.category}
                    onChange={(e) =>
                      setNewReview({
                        ...newReview,
                        category: e.target.value as any,
                      })
                    }
                    className={`w-full px-3.5 py-2 rounded-xl text-xs border ${
                      isDark
                        ? 'bg-[#221A14] border-[#3D2E21] text-white'
                        : 'bg-white border-[#DECBB4] text-stone-900'
                    }`}
                  >
                    <option value="kuliner">Kuliner & Masakan Ibu</option>
                    <option value="cat-lounge">Cat Lounge & Kucing Adopsi</option>
                    <option value="inklusif">Pelayanan Inklusif & Teman Disabilitas</option>
                    <option value="suasana">Suasana Santai / Belajar / Kerja</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1 text-stone-700 dark:text-stone-300">
                    Menu Favorit
                  </label>
                  <select
                    value={newReview.favoriteMenu}
                    onChange={(e) =>
                      setNewReview({ ...newReview, favoriteMenu: e.target.value })
                    }
                    className={`w-full px-3.5 py-2 rounded-xl text-xs border ${
                      isDark
                        ? 'bg-[#221A14] border-[#3D2E21] text-white'
                        : 'bg-white border-[#DECBB4] text-stone-900'
                    }`}
                  >
                    {MENU_ITEMS.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name} ({item.priceFormatted})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1 text-stone-700 dark:text-stone-300">
                    Kutipan Ulasan / Testimoni *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Bagaimana rasa makanan, kehangatan staf, atau pengalaman bermain dengan anabul di Kafetjeria?"
                    value={newReview.quote}
                    onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs border ${
                      isDark
                        ? 'bg-[#221A14] border-[#3D2E21] text-white placeholder-stone-500'
                        : 'bg-white border-[#DECBB4] text-stone-900 placeholder-stone-400'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Ulasan Sekarang</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Toast confirmation */}
        {submittedToast && (
          <div className="fixed bottom-6 left-6 z-50 py-3 px-5 rounded-2xl text-xs font-bold bg-emerald-600 text-white shadow-2xl flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>Terima kasih! Ulasan Anda berhasil ditampilkan di halaman.</span>
          </div>
        )}
      </div>
    </section>
  );
};
