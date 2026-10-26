import { MenuItem, CatProfile, CoreValue, Testimonial } from '../types';

export const BRAND_INFO = {
  name: 'Kafetjeria',
  category: 'Kafe Istimewa dan Cat Lounge',
  tagline: 'Cerita kita bersama',
  foundedYear: 2024,
  location: 'Jl. Fatmawati 303, Semarang Barat',
  instagram: '@kafetjeria.semarang',
  instagramUrl: 'https://instagram.com/kafetjeria.semarang',
  phone: '0835-0789-2213',
  whatsappRaw: '6283507892213',
  openingHours: 'Senin - Sabtu: 11.00 - 22.00 WIB',
  closedDay: 'Minggu Istirahat Kucing & Perawatan Kafe',
  positioning:
    'Kafe inklusif dan ramah keluarga yang menyajikan kehangatan masakan rumahan khas Nusantara hingga mancanegara dengan harga terjangkau, sekaligus memberdayakan lansia dan penyandang disabilitas.',
  targetAudience:
    'Keluarga, kaum urban, pelajar/mahasiswa, serta pencinta kuliner yang mencari tempat nyaman (third place) untuk berkumpul.',
  vision:
    'Menjadi ruang kumpul pilihan utama yang menghadirkan kehangatan kebersamaan dan inklusivitas bagi setiap kalangan.',
  colorMeaning: {
    kuningTerang:
      'Warna utama pada cangkir. Memberikan kesan ceria, ramah, optimis, dan kesejahteraan.',
    cokelatTuaKopi:
      'Warna pada teks, biji kopi (mata). Memberikan kesan kehangatan, sifat membumi (grounded), kerendahan hati, nature, dan Authenticity.',
    merahCeria:
      'Warna pada bagian dalam cangkir divisualisasikan seperti lidah saat tertawa dengan bentuk separuh simbol hati. Menggugah selera, aksen kasih sayang, semangat, dan percaya diri.',
    kremLembut:
      'Latar belakang soft cream yang merangkul keberagaman dalam harmoni yang tenang, merepresentasikan ketulusan dan ketenangan pelayanan.',
    tipografi:
      'Font Chewy dengan bentuk huruf membulat menghilangkan kesan kaku/formal, menyambut siapa saja tanpa membeda-bedakan.',
  },
};

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'setara',
    letter: 'S',
    title: 'Setara',
    subtitle: 'Inklusivitas Penuh',
    description:
      'Inklusif dan memberikan kesempatan kerja yang adil bagi lansia, teman penyandang disabilitas, serta ruang terbuka hangat bagi semua kalangan.',
    iconName: 'Users',
  },
  {
    id: 'autentik',
    letter: 'A',
    title: 'Autentik',
    subtitle: 'Resep Masakan Ibu',
    description:
      'Menjaga keaslian rasa dan kualitas resep "masakan ibu" yang dibuat dengan bahan segar, penuh cinta, dan sentuhan nostalgia keluarga.',
    iconName: 'Sparkles',
  },
  {
    id: 'makna',
    letter: 'M',
    title: 'Makna',
    subtitle: 'Berdampak Bagi Sesama',
    description:
      'Menjalankan bisnis berorientasi sosial melalui program rutin "Senin Berbagi" dan perawatan satwa kucing terlantar dengan penuh kasih sayang.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'amanah',
    letter: 'A',
    title: 'Amanah',
    subtitle: 'Kualitas & Tanggung Jawab',
    description:
      'Menjaga kepercayaan dalam menyajikan sajian higienis, pelayanan tulus, kebersihan fasilitas, dan kemasan ramah lingkungan (biodegradable).',
    iconName: 'ShieldCheck',
  },
];

export const BRAND_MISSIONS: { number: string; title: string; desc: string }[] = [
  {
    number: '01',
    title: 'Kenangan Masakan Ibu',
    desc: 'Menyajikan menu rumahan autentik yang dimasak langsung oleh para ibu rumah tangga dan lansia untuk membangkitkan kenangan hangat masakan ibu.',
  },
  {
    number: '02',
    title: 'Pelayanan Hangat & Inklusif',
    desc: 'Menghadirkan pelayanan hangat dan tulus dengan melibatkan penyandang disabilitas untuk menebar kebahagiaan dan ruang yang setara bagi siapa saja.',
  },
  {
    number: '03',
    title: 'Relaksasi Cat Lounge Nyaman',
    desc: 'Menyediakan ruang relaksasi yang tenang untuk melepas penat bersama para kucing adopsi yang dirawat higienis dengan penuh kasih sayang.',
  },
  {
    number: '04',
    title: 'Menu Kaya Cita Rasa & Terjangkau',
    desc: 'Menawarkan ragam pilihan menu Nusantara hingga mancanegara dengan harga yang ramah di kantong pelajar, mahasiswa, dan keluarga.',
  },
  {
    number: '05',
    title: 'Standar Higienitas Terjamin',
    desc: 'Memastikan standar kebersihan tinggi dan keamanan pangan ketat di seluruh fasilitas dapur maupun area cat lounge.',
  },
  {
    number: '06',
    title: 'Peduli Lingkungan & Biodegradable',
    desc: 'Mengurangi jejak karbon lingkungan melalui penggunaan kemasan bawa-pulang ramah lingkungan yang dapat terurai alami.',
  },
  {
    number: '07',
    title: 'Program Berbagi Setiap Senin',
    desc: 'Mengadakan kegiatan "Senin Berbagi" secara berkala sebagai bentuk kepedulian nyata dan kontribusi positif terhadap warga sekitar yang membutuhkan.',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'kopi-hitam-semangatku',
    name: 'Kopi Hitam Semangatku',
    category: 'minuman',
    subCategory: 'Varian melek',
    price: 15000,
    priceFormatted: '15k',

    description:
      'Cara terbaik menikmati karakter asli Nusantara. Menggunakan biji kopi Toraja pilihan, Iced Americano dingin ini menyajikan kesegaran kopi hitam beraroma tajam dengan tingkat keasaman seimbang dan rasa berkelas.',
    highlight: 'Biji Kopi Toraja 100% · Iced Americano Segar',
    story: 'Disangrai medium-dark untuk membangkitkan semangat pagi dan fokus bekerja.',
    image: '/src/assets/images/menu_iced_americano_1793012771848.jpg',
  },
  {
    id: 'es-kelapa-muda-mudi',
    name: 'Es Kelapa Muda Mudi',
    category: 'minuman',
    subCategory: 'Varian syegar',
    price: 12000,
    priceFormatted: '12k',
    description:
      'Nikmati kesegaran tropis segelas es kelapa muda murni dengan serutan daging kelapa muda lembut dan pilihan rasa unik: manis legit Frambozen, Ocean Blue, Melon, hingga manis alami klasik Gula Aren.',
    highlight: 'Segelas Es Kelapa Muda Murni Segar',
    story: 'Pilihan sirup premium atau gula aren asli Jawa Tengah yang menyejukkan dahaga.',
    image: '/src/assets/images/menu_es_kelapa_muda_1793012773127.jpg',
  },
  {
    id: 'teh-ocha',
    name: 'Teh Ocha (Rasa Buatan Ibu)',
    category: 'minuman',
    subCategory: 'Varian kenangan',
    price: 7000,
    priceFormatted: '7k',
    description:
      'Sentuhan sederhana penuh makna. Segelas teh wangi melati rasa buatan ibu, perpaduan kehangatan, sepet manis yang seimbang, dan rasa rindu akan ritual pagi sebelum melangkah ke sekolah.',
    highlight: 'Segelas Teh Wangi Melati Nostalgia Ibu',
    story: 'Diseduh dari daun teh wangi melati pilihan dengan gula batu tradisi rumahan.',
    image: '/src/assets/images/menu_gelas_teh_ocha_1793012773657.jpg',
  },
  {
    id: 'roti-bakar-wangi',
    name: 'Roti Bakar Wangi',
    category: 'makanan',
    subCategory: 'Ringan',
    price: 10000,
    priceFormatted: '10k',
    description:
      'Perpaduan sempurna tekstur roti panggang yang renyah-garing di luar dan lembut di dalam dengan lumuran selai strawberry merah manis meleleh buatan Ibu yang menghangatkan suasana di setiap gigitan.',
    highlight: 'Roti Panggang Selai Strawberry Lumer',
    story: 'Dipanggang hangat dengan mentega aromatik dan selai strawberry manis asam segar.',
    image: '/src/assets/images/menu_roti_bakar_strawberry_1793012774890.jpg',
  },
  {
    id: 'gudeg-jogjiz',
    name: 'Gudeg Jogjiz',
    category: 'makanan',
    subCategory: 'Berat',
    price: 25000,
    priceFormatted: '25k',
    description:
      'Sentuhan resep turun-temurun yang menghangatkan suasana. Sepiring gudeg nangka muda istimewa yang dimasak perlahan hingga meresap sempurna, berpadu gurihnya areh kelapa kental dan bumbu rempah otentik.',
    highlight: 'Gudeg Nangka Resep Turun-Temurun & Areh Kelapa',
    story: 'Dimasak sabar 8 jam oleh juru masak ibu rumah tangga untuk cita rasa gurih-manis pas.',
    image: '/src/assets/images/menu_gudeg_jogjiz_1793012799052.jpg',
  },
  {
    id: 'burgeram',
    name: 'Burgeram',
    category: 'makanan',
    subCategory: 'Berat',
    price: 17000,
    priceFormatted: '17k',
    description:
      'Perpaduan rasa bold dan tekstur yang kaya. Menghadirkan hamburger dengan patty daging gurih juicy, lelehan keju, sayuran segar renyah, serta saus lezat istimewa dalam balutan roti brioche hangat.',
    highlight: 'Hamburger Beef Patty Juicy & Sayur Segar',
    story: 'Pilihan burger ramah kantong dengan porsi mantap khas Kafetjeria.',
    image: '/src/assets/images/menu_burgeram_hamburger_1793012774819.jpg',
  },
];

export const CAT_LOUNGE_PROFILES: CatProfile[] = [
  {
    id: 'cat-1',
    name: 'Mochi',
    age: '1.5 Tahun',
    breed: 'Domestik Mix Calico',
    status: 'Residen Cat Lounge',
    character: 'Sangat ramah, suka tidur di pangkuan pengunjung yang sedang ngopi.',
    favoriteSpot: 'Bantalan sofa jendela dekat tanaman monstera',
  },
  {
    id: 'cat-2',
    name: 'Toraja (Jaja)',
    age: '2 Tahun',
    breed: 'Domestik Tabby Orange',
    status: 'Tersedia untuk Adopsi',
    character: 'Aktif, penasaran, hobi bermain tongkat bulu dan menyapa setiap tamu yang masuk.',
    favoriteSpot: 'Puncak rumah pohon bertingkat cat tower',
  },
  {
    id: 'cat-3',
    name: 'Gula Aren',
    age: '1 Tahun',
    breed: 'Kucing Tuxedo rescued',
    status: 'Tersedia untuk Adopsi',
    character: 'Tenang, mendengkur keras saat dielus di balik telinga, bersahabat dengan anak-anak.',
    favoriteSpot: 'Karpet anyam santai di area bawah',
  },
];

export const CAT_LOUNGE_RULES = [
  'Cuci tangan atau gunakan hand sanitizer sebelum & sesudah masuk area cat lounge.',
  'Biarkan kucing mendekat secara alami, jangan menarik ekor atau mengganggu kucing yang sedang tidur nyenyak.',
  'Dilarang memberi makanan atau minuman manusia kepada kucing kafe demi kesehatan pencernaan mereka.',
  'Gunakan pencahayaan alami atau non-flash saat mengabadikan foto bersama kucing.',
  'Semua kucing di Kafetjeria telah divaksin lengkap, disteril, dan rutin diperiksa dokter hewan.',
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Citra Wardani',
    role: 'Mahasiswi Arsitektur, Semarang Barat',
    rating: 5,
    date: 'Oktober 2024',
    category: 'cat-lounge',
    categoryLabel: 'Cat Lounge & Relaksasi',
    quote:
      'Gudeg Jogjiz-nya beneran resep rumahan yang bikin kangen masakan eyang di rumah. Ditambah cat lounge-nya bersih banget, nggak berbau sama sekali, dan anabulnya ramah-ramah! Tempat me-time paling tenang di Semarang Barat.',
    favoriteMenu: 'Gudeg Jogjiz & Es Kelapa Muda Mudi',
    verified: true,
  },
  {
    id: 'testi-2',
    name: 'Dimas Wicaksono',
    role: 'Remote UI/UX Designer, Semarang',
    rating: 5,
    date: 'Oktober 2024',
    category: 'inklusif',
    categoryLabel: 'Pelayanan Inklusif & Kopi',
    quote:
      'Kopi hitam semangatku dari Toraja punya aroma tajam dan aftertaste yang bersih. Suasana kafe santai, wifi stabil, dan pelayanan dari teman penyandang disabilitas luar biasa tulus serta hangat. Bangga ada kafe dengan misi sosial nyata seperti ini.',
    favoriteMenu: 'Kopi Hitam Semangatku & Roti Bakar Wangi',
    verified: true,
  },
  {
    id: 'testi-3',
    name: 'Bu Haryanti & Keluarga',
    role: 'Keluarga Pengunjung, Jl. Pamularsih',
    rating: 5,
    date: 'September 2024',
    category: 'kuliner',
    categoryLabel: 'Ramah Keluarga & Anak',
    quote:
      'Sering ajak anak-anak ke sini di akhir pekan. Kami pesan burgeram dan roti bakar wangi, anak-anak senang sekali bisa elus kucing adopsi Mochi. Tempatnya adem, ramah keluarga, dan pelayanannya bikin betah berlama-lama.',
    favoriteMenu: 'Burgeram & Teh Ocha Buatan Ibu',
    verified: true,
  },
  {
    id: 'testi-4',
    name: 'Kevin Raditya',
    role: 'Pecinta Satwa & Volunteer Rescue',
    rating: 5,
    date: 'September 2024',
    category: 'cat-lounge',
    categoryLabel: 'Kebersihan & Satwa Terawat',
    quote:
      'Salut banget sama standar higienitas cat lounge Kafetjeria. Kucing-kucingnya terawat, steril, dan vaksin lengkap. Saya juga sangat respect dengan inisiatif "Senin Berbagi" mereka. Kafe yang bener-bener punya hati dan jiwa.',
    favoriteMenu: 'Teh Ocha (Rasa Buatan Ibu)',
    verified: true,
  },
  {
    id: 'testi-5',
    name: 'Annisa Putri',
    role: 'Pelajar / Mahasiswi Semarang',
    rating: 5,
    date: 'Agustus 2024',
    category: 'kuliner',
    categoryLabel: 'Harga Terjangkau & Lezat',
    quote:
      'Harga menunya sangat ramah di kantong mahasiswa, mulai 7 ribu udah dapet teh enak buatan ibu. Roti bakarnya krispi di luar dan lembut di dalam dengan isian melimpah. Wajib dicoba kalau cari tempat nongkrong nyaman di Fatmawati!',
    favoriteMenu: 'Roti Bakar Wangi & Es Kelapa Ocean Blue',
    verified: true,
  },
  {
    id: 'testi-6',
    name: 'Bramantyo Wicaksono',
    role: 'Pencinta Kopi & Kuliner Lokal',
    rating: 5,
    date: 'Agustus 2024',
    category: 'suasana',
    categoryLabel: 'Third Place Nyaman',
    quote:
      'Konsep kafe inklusif yang dieksekusi dengan sempurna. Makanan enak, packaging sudah 100% biodegradable, suasana santai dengan interior kayu yang hangat. Nilai S.A.M.A benar-benar terasa di setiap sudut kafe.',
    favoriteMenu: 'Kopi Toraja & Gudeg Jogjiz',
    verified: true,
  },
];

