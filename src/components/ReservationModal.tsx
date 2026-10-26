import React, { useState } from 'react';
import { X, Calendar, Users, Heart, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  isDark,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('14:00');
  const [guests, setGuests] = useState('2');
  const [wantCatLounge, setWantCatLounge] = useState(true);
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message = `*Reservasi Meja & Kunjungan Kafetjeria Semarang*\n` +
      `- Nama Pemesan: ${name}\n` +
      `- No. WhatsApp: ${phone}\n` +
      `- Rencana Tanggal: ${date || 'Hari ini / terdekat'}\n` +
      `- Jam Kedatangan: ${time} WIB\n` +
      `- Jumlah Tamu: ${guests} orang\n` +
      `- Sesi Cat Lounge Kucing: ${wantCatLounge ? 'Ya, ingin bermain kucing' : 'Hanya kafe makan & minum'}\n` +
      (notes ? `- Catatan: ${notes}\n` : '') +
      `\nMohon dicek ketersediaan tempatnya. Terima kasih banyak!`;

    const url = `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 border shadow-2xl z-10 transition-all ${
          isDark
            ? 'bg-[#19130F] border-[#34271D] text-stone-100'
            : 'bg-[#FAF4EB] border-[#E8DAC8] text-[#2D1B14]'
        }`}
      >
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 uppercase tracking-wide">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Reservasi Meja & Cat Lounge</span>
            </div>
            <h3 className="text-xl font-bold mt-1">Siapkan Kunjungan Anda</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleConfirm} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1 text-stone-600 dark:text-stone-300">
                Nama Lengkap *
              </label>
              <input
                type="text"
                required
                placeholder="Nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-xl text-xs border ${
                  isDark
                    ? 'bg-[#221A14] border-[#3D2E21] text-white'
                    : 'bg-white border-[#E0D2C2] text-stone-900'
                }`}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-stone-600 dark:text-stone-300">
                No. WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="0812-..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-xl text-xs border ${
                  isDark
                    ? 'bg-[#221A14] border-[#3D2E21] text-white'
                    : 'bg-white border-[#E0D2C2] text-stone-900'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1 text-stone-600 dark:text-stone-300">
                Tanggal
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`w-full px-3 py-2 rounded-xl text-xs border ${
                  isDark
                    ? 'bg-[#221A14] border-[#3D2E21] text-white'
                    : 'bg-white border-[#E0D2C2] text-stone-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 text-stone-600 dark:text-stone-300">
                Jam Kedatangan
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={`w-full px-3 py-2 rounded-xl text-xs border ${
                  isDark
                    ? 'bg-[#221A14] border-[#3D2E21] text-white'
                    : 'bg-white border-[#E0D2C2] text-stone-900'
                }`}
              >
                <option value="11:00">11:00 WIB (Buka)</option>
                <option value="12:00">12:00 WIB (Makan Siang)</option>
                <option value="13:30">13:30 WIB</option>
                <option value="15:00">15:00 WIB (Sore Nyantai)</option>
                <option value="16:30">16:30 WIB</option>
                <option value="18:30">18:30 WIB (Malam)</option>
                <option value="20:00">20:00 WIB</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 text-stone-600 dark:text-stone-300">
                Jumlah Tamu
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className={`w-full px-3 py-2 rounded-xl text-xs border ${
                  isDark
                    ? 'bg-[#221A14] border-[#3D2E21] text-white'
                    : 'bg-white border-[#E0D2C2] text-stone-900'
                }`}
              >
                <option value="1">1 Orang (Me-time)</option>
                <option value="2">2 Orang</option>
                <option value="3-4">3 - 4 Orang (Keluarga)</option>
                <option value="5-8">5 - 8 Orang (Rombongan)</option>
                <option value="9+">Lebih dari 8 Orang</option>
              </select>
            </div>
          </div>

          {/* Cat Lounge Checkbox */}
          <div
            className={`p-3.5 rounded-2xl border flex items-center gap-3 cursor-pointer ${
              wantCatLounge
                ? isDark
                  ? 'bg-amber-500/10 border-amber-500/30'
                  : 'bg-amber-100/60 border-amber-300'
                : isDark
                ? 'bg-[#221A14] border-[#3D2E21]'
                : 'bg-white border-[#E0D2C2]'
            }`}
            onClick={() => setWantCatLounge(!wantCatLounge)}
          >
            <input
              type="checkbox"
              checked={wantCatLounge}
              onChange={(e) => setWantCatLounge(e.target.checked)}
              className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400"
            />
            <div className="text-xs">
              <span className="font-bold">Termasuk Sesi Cat Lounge</span>
              <p className="text-stone-500 dark:text-stone-400 text-[11px]">
                Bermain & relaksasi bersama kucing adopsi ramah berizin dokter hewan.
              </p>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-stone-600 dark:text-stone-300">
              Catatan Tambahan (opsional)
            </label>
            <input
              type="text"
              placeholder="Contoh: Meja dekat jendela, ada anak kecil, dll."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className={`w-full px-3 py-2 rounded-xl text-xs border ${
                isDark
                  ? 'bg-[#221A14] border-[#3D2E21] text-white'
                  : 'bg-white border-[#E0D2C2] text-stone-900'
              }`}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konfirmasi Reservasi ke WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
