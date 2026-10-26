import React, { useState } from 'react';
import { CartItem } from '../types';
import { BRAND_INFO } from '../data/brandData';
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag, Check } from 'lucide-react';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  isDark: boolean;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  isDark,
}) => {
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [customerName, setCustomerName] = useState('');
  const [tableNumberOrNotes, setTableNumberOrNotes] = useState('');

  if (!isOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  const handleSendWhatsApp = () => {
    if (cart.length === 0) return;

    let message = `*Pesanan Baru Kafetjeria Semarang*\n`;
    message += `Tipe: ${orderType === 'dine-in' ? 'Makan di Tempat (Dine In)' : 'Bawa Pulang (Take Away - Biodegradable)'}\n`;
    if (customerName) message += `Nama Pelanggan: ${customerName}\n`;
    if (tableNumberOrNotes) message += `Catatan / No Meja: ${tableNumberOrNotes}\n`;
    message += `------------------------------------\n`;

    cart.forEach((c, idx) => {
      message += `${idx + 1}. ${c.item.name} (${c.quantity}x) = Rp ${(c.item.price * c.quantity).toLocaleString('id-ID')}\n`;
    });

    message += `------------------------------------\n`;
    message += `*Total Pembayaran: Rp ${totalAmount.toLocaleString('id-ID')}*\n\n`;
    message += `Mohon konfirmasi ketersediaan pesanan saya. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={`relative w-full max-w-md h-full flex flex-col shadow-2xl transition-all border-l ${
          isDark
            ? 'bg-[#18130F] border-[#2E241B] text-stone-100'
            : 'bg-[#FAF4EB] border-[#E8DAC8] text-[#2D1B14]'
        }`}
      >
        {/* Header */}
        <div
          className={`p-5 border-b flex items-center justify-between ${
            isDark ? 'border-[#2D231A]' : 'border-[#E8DAC8]'
          }`}
        >
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-lg">Keranjang Pesanan</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold">
              {cart.reduce((total, c) => total + c.quantity, 0)} item
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
              <ShoppingBag className="w-12 h-12 stroke-1 mb-3 text-stone-400" />
              <p className="font-bold text-sm">Keranjang masih kosong</p>
              <p className="text-xs mt-1">Pilih menu favoritmu dari daftar sajian Kafetjeria.</p>
            </div>
          ) : (
            <>
              {/* Order mode selector */}
              <div
                className={`p-1 rounded-xl border flex ${
                  isDark ? 'bg-[#221A14] border-[#362A1F]' : 'bg-[#EFE4D4] border-[#DECBB4]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOrderType('dine-in')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    orderType === 'dine-in'
                      ? 'bg-amber-500 text-stone-950 shadow-xs'
                      : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
                  }`}
                >
                  Makan di Tempat
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('takeaway')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    orderType === 'takeaway'
                      ? 'bg-amber-500 text-stone-950 shadow-xs'
                      : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
                  }`}
                >
                  Bawa Pulang (Eco)
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {cart.map((cartItem) => (
                  <div
                    key={cartItem.item.id}
                    className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 ${
                      isDark ? 'bg-[#1E1713] border-[#2F241C]' : 'bg-white border-[#E8DAC8]'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold truncate">{cartItem.item.name}</p>
                      <p className="text-[11px] text-amber-600 dark:text-amber-400 font-mono mt-0.5">
                        Rp {cartItem.item.price.toLocaleString('id-ID')}
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                        className="w-7 h-7 rounded-lg flex items-center justify-center bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors"
                        aria-label="Kurangi"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center text-xs font-mono font-bold">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                        className="w-7 h-7 rounded-lg flex items-center justify-center bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors"
                        aria-label="Tambah"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onRemoveItem(cartItem.item.id)}
                        className="p-1.5 text-stone-400 hover:text-rose-500 transition-colors ml-1"
                        aria-label="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer quick inputs */}
              <div className="space-y-2 pt-2">
                <input
                  type="text"
                  placeholder="Nama pemesan (opsional)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className={`w-full px-3 py-2 text-xs rounded-xl border ${
                    isDark
                      ? 'bg-[#1A1410] border-[#362A1F] text-white placeholder-stone-500'
                      : 'bg-white border-[#E0D2C2] text-stone-900 placeholder-stone-400'
                  }`}
                />
                <input
                  type="text"
                  placeholder="No. Meja / Catatan khusus (opsional)"
                  value={tableNumberOrNotes}
                  onChange={(e) => setTableNumberOrNotes(e.target.value)}
                  className={`w-full px-3 py-2 text-xs rounded-xl border ${
                    isDark
                      ? 'bg-[#1A1410] border-[#362A1F] text-white placeholder-stone-500'
                      : 'bg-white border-[#E0D2C2] text-stone-900 placeholder-stone-400'
                  }`}
                />
              </div>
            </>
          )}
        </div>

        {/* Footer Checkout */}
        {cart.length > 0 && (
          <div
            className={`p-5 border-t space-y-3 ${
              isDark ? 'border-[#2D231A] bg-[#1C1612]' : 'border-[#E8DAC8] bg-[#F4ECE1]'
            }`}
          >
            <div className="flex items-center justify-between text-sm">
              <span className="text-stone-500 dark:text-stone-400">Total Perkiraan</span>
              <span className="text-xl font-black font-mono text-amber-600 dark:text-amber-400">
                Rp {totalAmount.toLocaleString('id-ID')}
              </span>
            </div>

            <button
              onClick={handleSendWhatsApp}
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Kirim Pesanan ke WhatsApp</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-stone-500">
              <span>Kemasan ramah lingkungan disediakan</span>
              <button
                onClick={onClearCart}
                className="hover:text-rose-500 underline transition-colors"
              >
                Kosongkan
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
