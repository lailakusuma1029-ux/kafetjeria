import React, { useState } from 'react';
import { BRAND_INFO } from '../data/brandData';
import { KafetjeriaLogo } from './KafetjeriaLogo';
import {
  MapPin,
  Phone,
  Instagram,
  Clock,
  MessageCircle,
  Send,
  Heart,
  CheckCircle,
} from 'lucide-react';

interface ContactFooterProps {
  isDark: boolean;
  onOpenReservation: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ isDark, onOpenReservation }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    topic: 'Reservasi Meja & Cat Lounge',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build WhatsApp message
    const text = `Halo Kafetjeria Semarang!\nSaya ingin bertanya:\n- Nama: ${formData.name}\n- No. Kontak: ${formData.phone}\n- Topik: ${formData.topic}\n- Pesan: ${formData.message || '-'}`;
    const url = `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  const waDirectUrl = `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Halo Kafetjeria! Saya ingin bertanya seputar kafe dan reservasi meja.'
  )}`;

  return (
    <footer id="kontak" className="border-t transition-colors relative">
      {/* Contact & Map Information Section */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span
                className={`text-xs font-bold uppercase tracking-wider ${
                  isDark ? 'text-amber-400' : 'text-amber-700'
                }`}
              >
                Kunjungi Kami
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1">
                Mari Bertemu & Bercerita di Semarang Barat
              </h2>
              <p className={`mt-3 text-base ${isDark ? 'text-stone-300' : 'text-[#4A3223]'}`}>
                Suasana nyaman, makanan hangat khas ibu, dan anabul menggemaskan menanti kedatangan Anda
                dan orang-orang tersayang.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Alamat */}
              <div
                className={`p-5 rounded-2xl border ${
                  isDark ? 'bg-[#1C1612] border-[#31251C]' : 'bg-white border-[#E8DAC8]'
                }`}
              >
                <div className="flex items-center gap-2 mb-2 text-rose-500 font-bold text-sm">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Alamat Kafe</span>
                </div>
                <p className="font-semibold text-stone-900 dark:text-stone-100 text-sm">
                  {BRAND_INFO.location}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Akses mudah di jalan protokol, area parkir aman & ramah disabilitas.
                </p>
              </div>

              {/* Jam Operasional */}
              <div
                className={`p-5 rounded-2xl border ${
                  isDark ? 'bg-[#1C1612] border-[#31251C]' : 'bg-white border-[#E8DAC8]'
                }`}
              >
                <div className="flex items-center gap-2 mb-2 text-amber-500 font-bold text-sm">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Jam Buka</span>
                </div>
                <p className="font-semibold text-stone-900 dark:text-stone-100 text-sm">
                  {BRAND_INFO.openingHours}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Senin Berbagi tetap buka normal untuk pengunjung umum.
                </p>
              </div>

              {/* WhatsApp & Telepon */}
              <div
                className={`p-5 rounded-2xl border ${
                  isDark ? 'bg-[#1C1612] border-[#31251C]' : 'bg-white border-[#E8DAC8]'
                }`}
              >
                <div className="flex items-center gap-2 mb-2 text-emerald-500 font-bold text-sm">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Telepon / WhatsApp</span>
                </div>
                <a
                  href={waDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-bold text-base hover:underline text-stone-900 dark:text-stone-100"
                >
                  {BRAND_INFO.phone}
                </a>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Klik untuk chat langsung dengan tim kami.
                </p>
              </div>

              {/* Instagram */}
              <div
                className={`p-5 rounded-2xl border ${
                  isDark ? 'bg-[#1C1612] border-[#31251C]' : 'bg-white border-[#E8DAC8]'
                }`}
              >
                <div className="flex items-center gap-2 mb-2 text-rose-500 font-bold text-sm">
                  <Instagram className="w-4 h-4 shrink-0" />
                  <span>Instagram Resmi</span>
                </div>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-stone-900 dark:text-stone-100 text-sm hover:underline"
                >
                  {BRAND_INFO.instagram}
                </a>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Update menu harian, anabul gemas & dokumentasi Senin Berbagi.
                </p>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={waDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi via WhatsApp</span>
              </a>
              <button
                onClick={onOpenReservation}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-all cursor-pointer"
              >
                <span>Form Reservasi Cepat</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-6">
            <div
              className={`p-8 rounded-3xl border ${
                isDark ? 'bg-[#1A1410] border-[#33271E]' : 'bg-white border-[#E8DAC8] shadow-sm'
              }`}
            >
              <h3 className="text-xl font-bold mb-1 text-stone-900 dark:text-stone-100">
                Kirim Pesan / Tanya Ketersediaan Tempat
              </h3>
              <p className={`text-xs mb-6 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                Isi form berikut, dan sistem akan langsung menghubungkan pesan Anda ke WhatsApp resmi
                Kafetjeria.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                  <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto" />
                  <p className="font-bold text-emerald-700 dark:text-emerald-400">
                    Pesan Siap Dikirim!
                  </p>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    Mengarahkan Anda ke WhatsApp Kafetjeria ({BRAND_INFO.phone}). Jika tidak otomatis
                    terbuka, silakan klik tombol di bawah.
                  </p>
                  <a
                    href={waDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500"
                  >
                    Buka WhatsApp Sekarang
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-stone-700 dark:text-stone-300">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Rina Kusuma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs border ${
                        isDark
                          ? 'bg-[#221B15] border-[#3E3023] text-stone-100 placeholder-stone-500 focus:border-amber-400'
                          : 'bg-[#FAF4EB] border-[#DECBB4] text-stone-900 placeholder-stone-400 focus:border-amber-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-stone-700 dark:text-stone-300">
                      No. WhatsApp / HP Aktif *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 0812-3456-7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs border ${
                        isDark
                          ? 'bg-[#221B15] border-[#3E3023] text-stone-100 placeholder-stone-500 focus:border-amber-400'
                          : 'bg-[#FAF4EB] border-[#DECBB4] text-stone-900 placeholder-stone-400 focus:border-amber-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-stone-700 dark:text-stone-300">
                      Keperluan / Topik
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs border ${
                        isDark
                          ? 'bg-[#221B15] border-[#3E3023] text-stone-100 focus:border-amber-400'
                          : 'bg-[#FAF4EB] border-[#DECBB4] text-stone-900 focus:border-amber-500'
                      }`}
                    >
                      <option value="Reservasi Meja & Cat Lounge">
                        Reservasi Meja & Cat Lounge
                      </option>
                      <option value="Pemesanan Menu Bawa Pulang (Takeaway)">
                        Pemesanan Menu Bawa Pulang (Takeaway)
                      </option>
                      <option value="Pertanyaan Seputar Adopsi Kucing">
                        Pertanyaan Seputar Adopsi Kucing
                      </option>
                      <option value="Kolaborasi / Partisipasi Program Senin Berbagi">
                        Kolaborasi / Partisipasi Program Senin Berbagi
                      </option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-stone-700 dark:text-stone-300">
                      Pesan atau Jumlah Tamu (opsional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tuliskan tanggal kedatangan atau detail pertanyaan..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs border ${
                        isDark
                          ? 'bg-[#221B15] border-[#3E3023] text-stone-100 placeholder-stone-500 focus:border-amber-400'
                          : 'bg-[#FAF4EB] border-[#DECBB4] text-stone-900 placeholder-stone-400 focus:border-amber-500'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors shadow-xs cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Lanjut Kirim via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div
        className={`py-8 border-t ${
          isDark ? 'border-[#261E17] bg-[#120E0B]' : 'border-[#E8DAC8] bg-[#F2E5D5]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <KafetjeriaLogo isDark={isDark} size="sm" showTagline={false} />
            <span className="text-xs text-stone-500 dark:text-stone-400">
              — "{BRAND_INFO.tagline}"
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-stone-600 dark:text-stone-400">
            <a href="#tentang" className="hover:underline">
              Tentang
            </a>
            <a href="#filosofi" className="hover:underline">
              Nilai S.A.M.A
            </a>
            <a href="#menu" className="hover:underline">
              Menu
            </a>
            <a href="#cat-lounge" className="hover:underline">
              Cat Lounge
            </a>
            <a href="#testimoni" className="hover:underline">
              Testimoni
            </a>
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-rose-500"
            >
              Instagram
            </a>
          </div>

          <div className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1">
            <span>© {BRAND_INFO.foundedYear}–2026 Kafetjeria Semarang. Seluruh hak cipta dilindungi.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
