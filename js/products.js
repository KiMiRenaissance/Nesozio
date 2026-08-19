/* ==========================================================================
   NesoZio - PRODUCTS DATABASE
   ========================================================================== */
const PRODUCTS = [
  {
    id: 1,
    name: "JOYKO Buku Tulis 1 Pack isi 10 Buku Bergaris Ruled Notebook NB-746 Ukuran A5",
    price: 44550,
    brand: " JOYKO",
    category: "Buku",
    description: "Memiliki sampul lentur yang dapat terbuka 180° datar, 38 lembar halaman bergaris dengan ketebalan kertas 60 gsm serta ukuran garis 7 mm x 26 baris.",
    images: [
      "https://down-id.img.susercontent.com/file/sg-11134201-822wq-mi19150w38y0a2.webp",
      "https://down-id.img.susercontent.com/file/sg-11134201-822wi-mi1915r993pge4.webp",
      "https://down-id.img.susercontent.com/file/sg-11134201-822zs-mi1916l8jif67f.webp",
      "https://down-id.img.susercontent.com/file/sg-11134201-822wh-mi1918hr1zbc67.webp",
      "https://down-id.img.susercontent.com/file/sg-11134201-822zw-mi1917k7fl6wa7.webp"
    ],
    sizes: ["21cm", "16cm"],
    colors: ["orange"],
    specifications: {
      "Brand": " JOYKO",
      "Paper Size": "A5",
      "Notebook Type": "Writing Paper",
      "Warranty": "No Warranty",
      "Shipped From": "NORTH JAKARTA CITY"
    },
    link: "https://shopee.co.id/JOYKO-Buku-Tulis-1-Pack-isi-10-Buku-Bergaris-Ruled-Notebook-NB-746-Ukuran-A5-i.64925304.48602825941?extraParams=%7B%22display_model_id%22%3A315271099571%2C%22model_selection_logic%22%3A3%7D"
  },
  {
    id: 2,
	badge: 'hot',
    name: "EIGER CRUISER 2.0 BACKPACK 25L", 
    price: 574000, 
    brand: "EIGER", 
    category: "Tas", 
    description: "Mulai dari kegiatan harian sampai traveling, ransel Cruiser 2.0 Backpack Tote 25L siap menemanimu! Ransel dari EIGER 1989 ini hadir dengan panel belakang dan tali gendong yang empuk desain dan kombinasi warna klasik untuk melengkapi style kasualmu. Dengan bahan berdaya tahan kuat dan water-repellent yang melindungi dari cipratan air dan hujan ringan, ransel berkapasitas 25 L ini hadir dengan kompartemen utama yang luas dan beberapa saku untuk memuat berbagai bawaan harian yang kamu perlukan saat beraktivitas.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-7r98s-lsuzil41thro31.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r992-lsuzil41uwc43c.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r98p-lsuzil41xph0f5.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r98t-lsuzil41z41ga2.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r98x-lsuzil421x6cae.webp"
    ],
    colors: ["black", "green", "navy", "khaki"], 
    specifications: {
      "Dimension": "29 x 16 x 47 cm (Vol 25L)",
      "Material": "850D Polamo, Polyester 1200D"
    }, 
    link: "https://shopee.co.id/EIGER-CRUISER-2.0-BACKPACK-25L-i.19260065.3972390341?extraParams=%7B%22display_model_id%22%3A82113097978%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 3,
	badge: 'sale',
    name: "Sepatu Kodachi 8116 HP Hitam Putih Sneakers Pria Wanita Olahraga", 
    price: 130000, 
    brand: "Kodachi", 
    category: "Sepatu", 
    description: "Sepatu Kodachi lebih di kenal dengan sepatu Capung, bisa dipakai untuk berbagai jenis/cabang olahraga, seperti badminton, volley, takraw, parkour, dll. Sepatu Kodachi ini sangat nyaman di gunakan dengan tapak/sol full karet sehingga anti slip pada saat digunakan. Monggo silahkan diorder, untuk panjang sepatu silahkan lihat ditabel", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/3001842770d1824e99e5612ebff33e0b.webp",
		"https://down-id.img.susercontent.com/file/id-11134201-23030-zzdh6nw217nv82.webp",
		"https://down-id.img.susercontent.com/file/id-11134201-23030-wypd0t1217nv22.webp",
		"https://down-id.img.susercontent.com/file/25c55dc64fa5175acc805b1d753d2cc7.webp"
    ],
    sizes: ["34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"], 
    specifications: {
      "Asal Produk": "Indonesia",
      "Kode Seri": "8116 Hitam Putih"
    }, 
    link: "https://shopee.co.id/Sepatu-Kodachi-8116-HP-Hitam-Putih-Sneakers-Pria-Wanita-Olahraga-i.312908080.13165217514?extraParams=%7B%22display_model_id%22%3A133325309533%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 4,
	badge: 'sale',
    name: "Aimilo Gel Pen Pulpen Gel 3 Warna 0.5mm 1 PCS", 
    price: 990, 
    brand: "Aimilo", 
    category: "Alat Tulis", 
    description: "Aimilo Pulpen Gel hadir dengan pilihan tinta hitam, biru, dan merah yang cocok untuk menulis, mencatat, maupun menandai dokumen. Memiliki panjang 145 mm dengan ujung pena 0,5 mm tipe bullet tip, pulpen ini menghasilkan tulisan yang halus, rapi, dan akurat. Dilengkapi soft grip yang nyaman digenggam serta tinta berbasis air yang mudah digunakan, pulpen ini memiliki badan transparan sehingga sisa tinta dapat terlihat dengan jelas. Harga yang tercantum adalah harga satuan.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-82250-ml78vv965atkd0.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-8224w-ml78vv8xzq4k45.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-82250-ml78vv8y14p083.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-82252-ml78vv8y2j9g89.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-8224u-ml78vv8y85j898.webp"
    ],
    colors: ["black", "red", "blue"], 
    specifications: {
      "Jenis Pulpen": "Pulpen Gel",
      "Minimum Jumlah Pembelian": "2",
      "Ketebalan": "0.5mm"
    }, 
    link: "https://shopee.co.id/Aimilo-Gel-Pen-Pulpen-Gel-3-Warna-0.5mm-1-PCS-i.1112780441.19595102538?extraParams=%7B%22display_model_id%22%3A255011688669%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 5,
    name: "Daiso Electric Eraser", 
    price: 33000, 
    brand: "Daiso Japan", 
    category: "Alat Tulis", 
    description: "Penghapus elektrik Daiso Japan Official berbahan ABS plastic, baja, dan karet sintetis dengan ukuran ringkas 2,5 × 2 × 11,2 cm, sehingga mudah dibawa dan dioperasikan hanya dengan menekan satu tombol. Alat ini dirancang untuk menghapus bagian-bagian kecil secara rapi dan bersih, cocok digunakan untuk keperluan menggambar, menulis, maupun pekerjaan kantor. Menggunakan 2 baterai tipe AAA dan dilengkapi karet pengganti yang dijual terpisah. Jangan gunakan pada tubuh manusia, lepaskan baterai jika tidak digunakan dalam waktu lama, dan jauhkan dari air. Daiso Japan Official menyediakan berbagai kebutuhan harian, perlengkapan kantor, serta aksesori dengan pilihan produk yang beragam.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-7r991-lnqyx0kmwg7538.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r992-lnqyx0kmwgp35e.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r98t-lnqwz0y6gfihab.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r98r-lnqyx0kmwgnq92.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r98w-lnqyx0kmwgho30.webp"
    ],
    colors: ["white", "grey", "blue"], 
    specifications: {
      "Produk Custom": "Tidak"
    }, 
    link: "https://shopee.co.id/Daiso-Electric-eraser-i.471567767.22460321437?extraParams=%7B%22display_model_id%22%3A222246553416%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 6,
    name: "Pensil Warna Kualitas CP-12F Classic - SET", 
    price: 20350, 
    brand: "KENKO", 
    category: "Alat Tulis", 
    description: "KENKO Pensil Warna CP-12F Classic hadir dalam set isi 12 warna dengan hasil warna cerah yang menarik, cocok untuk aktivitas sekolah maupun hobi mewarnai sehari-hari. Ujung pensilnya dirancang kuat dan tidak mudah patah, sehingga lebih tahan lama saat digunakan. Bentuk dan teksturnya nyaman digenggam, memberikan pengalaman mewarnai yang lebih halus dan menyenangkan.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-82251-ml4di3aujpxd77.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-7rav5-mavbfh81wytt34.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-7raui-mavbfi0mr59y0f.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-7rauj-mavbfinxrmttc4.webp"
    ],
    specifications: {
      "Produk Custom": "Tidak"
    }, 
    link: "https://shopee.co.id/KENKO-Pensil-Warna-Kualitas-CP-12F-Classic-SET-i.27729303.41254153392?extraParams=%7B%22display_model_id%22%3A285353257418%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 7,
    name: "Derwent Charcoal Pencil Pensil Arang untuk Menggambar, Sketsa & Shading Original Inggris", 
    price: 35000, 
    brand: "Derwent", 
    category: "Alat Tulis", 
    description: "Derwent Charcoal Pencil menghadirkan hasil seperti arang tradisional, namun dalam bentuk pensil yang bersih dan mudah dikendalikan. Terbuat dari arang murni berkualitas tinggi yang dikompres secara presisi, pensil ini memungkinkan Anda menciptakan bayangan gelap, tekstur kaya, dan detail halus dengan kontrol maksimal.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-7rbk5-m96st2ein019da.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7rbk0-m96st2eipt659f.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7rbk2-m96st2eismb18c.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7rbkd-m96st2eir7ql8b.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7rbk7-m96st2eioelp55.webp"
    ],
    sizes: ["Dark", "Medium", "Light"], 
    specifications: {
      "Diameter Inti (Core)": "4 mm",
      "Diameter Barrel": "8 mm"
    }, 
    link: "https://shopee.co.id/Derwent-Charcoal-Pencil-Pensil-Arang-untuk-Menggambar-Sketsa-Shading-Original-Inggris-i.102918886.5538086541?extraParams=%7B%22display_model_id%22%3A19673316927%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 8,
    name: "Dasi Sekolah SD SMP SMA dengan Bordir Rapi dan Jahitan Presisi", 
    price: 10000, 
    brand: "Zeragamku", 
    category: "Aksesoris", 
    description: "", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-822wr-morscik5dz4ff7.webp"
    ],
    sizes: ["SD Perempuan", "SD Laki-laki", "SMP", "SMA"], 
    specifications: {
      "Jenis Kelamin": "Unisex",
      "Asal Produk": "Indonesia",
      "Motif": "Polos, Lainnya, bordir timbul, logo bordir",
      "Bahan": "kain seragam"
    }, 
    link: "https://shopee.co.id/Dasi-Sekolah-SD-SMP-SMA-dengan-Bordir-Rapi-dan-Jahitan-Presisi-i.1440882216.48111284471?extraParams=%7B%22display_model_id%22%3A330981875201%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 9,
	badge: 'hot',
    name: "Paket 3 Pasang Kaos Kaki Panjang Selutut Formal Pria Wanita Dewasa Bahan Katun Lembut", 
    price: 21000, 
    brand: "ALGO JAYA", 
    category: "Aksesoris", 
    description: "Kaos kaki panjang selutut ini diproduksi dengan teknologi TCM (Technologi Computer Machine) yang menghasilkan pola dan jahitan lebih konsisten, sehingga nyaman dipakai sepanjang hari untuk aktivitas formal, sekolah, maupun casual. Berbahan perpaduan cotton PE, spandex, dan elastic yang lembut, aman, serta baik dalam menyerap keringat, dilengkapi SPC Rubb anti membleh agar bentuk tetap rapi. Model one size dewasa cocok untuk ukuran sepatu 37–43, dengan panjang total sekitar 59 cm dan lebar ±9 cm, bersifat unisex sehingga bisa dipakai pria maupun wanita. Tersedia dalam berbagai pilihan warna polos (hitam, putih, abu muda, biru navy, abu tua, coklat tua, atau mix random), dengan harga yang tertera sudah termasuk 3 pasang kaos kaki. Perawatan mudah: cuci maksimal suhu 40°C, jangan gunakan pemutih, jangan dicuci kering, jangan gunakan pengering putar, dan jangan disetrika.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-82252-miciau9n0lj873.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-8224y-miciau9n203od6.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-8224z-miciau9n7mdgc4.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-8224o-miciau9n3eo420.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-8224w-mibxfqsnlfcz6f.webp",
    	"https://down-id.img.susercontent.com/file/id-11134207-8224y-miciau9n4t8k54.webp"
    ],
    sizes: ["3 MIX Random Warna", "3 Coklat tua", "3 Abu tua", "3 Biru navy", "3 Abu muda", "3 Putih", "3 Hitam"], 
    specifications: {
      "Asal Produk": "Indonesia",
      "Tipe Paket": "Bundle",
      "Panjang Kaos Kaki": "Setinggi Lutut",
      "Bahan": "Katun, Spandex",
      "Produk Custom": "Tidak"
    }, 
    link: "https://shopee.co.id/ALGO-JAYA-Paket-3-Pasang-Kaos-Kaki-Panjang-Selutut-Formal-Pria-Wanita-Dewasa-Bahan-Katun-Lembut-i.887620853.43627289313?extraParams=%7B%22display_model_id%22%3A400308144743%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 10,
    name: "Jangka Penggaris Busur Pulpen / Compass Drafting Set BE5011", 
    price: 47000, 
    brand: "Bantex", 
    category: "Alat Tulis", 
    description: "Bantex Compass BE5011 adalah set peralatan geometri lengkap yang dirancang untuk presisi dan kenyamanan, mencakup jangka berkualitas tinggi beserta alat pendukung esensial seperti penggaris dan pulpen, semuanya tersimpan rapi dalam satu wadah plastik praktis. Jangka utamanya dibuat dari bahan berkualitas tinggi yang kuat dan tahan lama, dengan desain pegangan bergelombang yang memberikan genggaman stabil dan kontrol penuh saat membuat lingkaran atau busur. Ujung jangka dilindungi oleh wadah penyimpanan aman untuk mencegah kerusakan dan menjaga keamanan saat tidak digunakan. Set ini sangat ideal untuk kebutuhan sekolah, kantor, atau aktivitas menggambar teknis sehari-hari.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134275-7rbke-may4wlmnbgq394.webp",
		"https://down-id.img.susercontent.com/file/id-11134275-7rbk9-may4wm94fzfof2.webp",
		"https://down-id.img.susercontent.com/file/id-11134275-7rbka-may4wm6mi6r80f.webp",
		"https://down-id.img.susercontent.com/file/id-11134275-7rbka-may4wmasdi2c3f.webp",
		"https://down-id.img.susercontent.com/file/id-11134275-7rbke-may4wmiu0c2m08.webp"
    ],
    specifications: {
      "Produk": "Compass",
      "Ref": "BE5011",
      "Isi Set": "Jangka, Penggaris, Pulpen",
      "Bahan": "Kokoh dan Tahan Lama",
      "Fitur Khusus": "Wadah pelindung kompas, pegangan anti-selip, wadah plastik untuk seluruh set"
    }, 
    link: "https://shopee.co.id/Bantex-Jangka-Penggaris-Busur-Pulpen-Compass-Drafting-Set-BE5011-i.22139865.41654426214?extraParams=%7B%22display_model_id%22%3A253517128687%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 11,
    name: "Tas Ransel laptop Backpack Pria 36169 & 36170 Kapasitas 23L - Tas Ransel - Tas Punggung", 
    price: 255000, 
    brand: "POLOTRANDS", 
    category: "Tas", 
    description: "Polo Trands Backpack 36169 & 36170 adalah tas ransel berkapasitas 23 liter dengan ukuran 34 × 15 × 46 cm, terbuat dari bahan kanvas premium yang kokoh dan tahan lama dengan berat hanya 900 gram. Dirancang untuk aktivitas sehari-hari, tas ini menawarkan kombinasi gaya modern dan fungsionalitas yang praktis. Tersedia dalam pilihan warna hitam, biru, kopi, abu-abu, dan merah, cocok untuk berbagai kebutuhan dan preferensi gaya.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/b16c4ed2cdda436d379c306d2de8c541.webp",
		"https://down-id.img.susercontent.com/file/79397aa885f46c01629e950f982d42be.webp",
		"https://down-id.img.susercontent.com/file/c7d1325d2ae6799e43049902dd91fb4c.webp",
		"https://down-id.img.susercontent.com/file/e757e407f24caed32696cf38dd68c898.webp",
		"https://down-id.img.susercontent.com/file/0ea22340e1fcdf1f63bc3de1b5ed7821.webp",
	    "https://down-id.img.susercontent.com/file/de8d11051914ff43b0569f65fb7564a8.webp",
	    "https://down-id.img.susercontent.com/file/82ff6b0b67162fd1ad5192771fa8f5e4.webp"
    ],
    colors: ["black", "blue", "chocolate", "grey", "red"], 
    specifications: {
      "Bahan": "Kanvas",
      "Acara": "Kasual",
      "Fitur": "Slot Laptop, Slot Tablet",
      "Motif": "Polos"
    }, 
    link: "https://shopee.co.id/Polo-Trands-Tas-Ransel-laptop-Backpack-Pria-36169-36170-Kapasitas-23L-Tas-Ransel-Tas-Punggung-i.82163898.3809815606?extraParams=%7B%22display_model_id%22%3A11055375428%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 12,
    name: "ALPACA LITE 10 1.0 BACKPACK", 
    price: 121550, 
    brand: "EIGER", 
    category: "Tas", 
    description: "Ekstra ringan, ringkas, dan praktis, ransel Alpaca Lite 10 1.0 menemani aktivitas harianmu. Ransel berkapasitas 10 L dari EIGER Mountaineering ini hadir dengan kompartemen utama untuk memuat bawaan esensialmu dan saku depan untuk menyimpan benda-benda berukuran kecil yang dapat kamu akses dengan mudah.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134201-23020-rmbeseua3tnvff.webp",
		"https://down-id.img.susercontent.com/file/id-11134201-23020-hl3a1gua3tnv5c.webp",
		"https://down-id.img.susercontent.com/file/id-11134201-23020-vpb2nnua3tnvaa.webp",
		"https://down-id.img.susercontent.com/file/id-11134201-23020-qx3ygn3c3tnv7b.webp",
		"https://down-id.img.susercontent.com/file/id-11134201-23020-vl98fekk3tnve3.webp",
	    "https://down-id.img.susercontent.com/file/id-11134201-23020-ql32bsrm3tnv68.webp",
	    "https://down-id.img.susercontent.com/file/id-11134201-23020-v240ay1o3tnv79.webp"
    ],
    colors: ["black", "blue", "red", "tosca", "purple", "navy", "brown", "orange", "grey", "green", "maroon"], 
    specifications: {
      "Bahan": "Polyester",
      "Dimension": "20 x 14 x 40 cm (Vol 10L)"
    }, 
    link: "https://shopee.co.id/EIGER-ALPACA-LITE-10-1.0-BACKPACK-i.19260065.12398336927?extraParams=%7B%22display_model_id%22%3A175611381204%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 13,
    name: "adidas Lifestyle Essentials 3-Stripes Backpack Back To School 2 Unisex Black JX6497", 
    price: 600000, 
    brand: "adidas", 
    category: "Tas", 
    description: "Tas ransel adidas ini dirancang untuk menemani aktivitas harianmu, mulai dari sesi olahraga di gym hingga belajar di perpustakaan, dengan konstruksi tahan lama yang dibuat agar awet. Berkapasitas 27,4 liter dan berukuran 44 × 31 cm, tas ini memiliki beberapa kompartemen yang membantu mengatur buku, perangkat teknologi, dan perlengkapan lainnya agar mudah diambil kapan saja. Dibuat dari 100% poliester daur ulang, tas ini tidak hanya praktis, tetapi juga lebih ramah lingkungan.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/sg-11134201-824j7-mdwsbqbpqhhgec.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-824hl-mdwsbqc3tkhy8b.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-824iw-mdwsbqctro5gd0.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-824gc-mdwsbqbhjjsz42.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-824ge-mdwsbqcrjncx24.webp",
    	"https://down-id.img.susercontent.com/file/sg-11134201-824iz-mdwsbqegj4zre1.webp"
    ],
    specifications: {
      "Volume": "27.4 L",
      "Dimensions": "44 cm x 31 cm"
    }, 
    link: "https://shopee.co.id/adidas-Lifestyle-Essentials-3-Stripes-Backpack-Back-To-School-2-Unisex-Black-JX6497-i.270510657.43165249369?extraParams=%7B%22display_model_id%22%3A306260885731%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 14,
    name: "Kalkulator 2 Power 8 Digit Electronic Calculator Big Display MTC-200", 
    price: 16213, 
    brand: "MONTANA", 
    category: "Aksesoris", 
    description: "Kalkulator Montana MTC 200 P menampilkan layar 8 digit yang besar dan jelas, memudahkan pembacaan hasil perhitungan dalam berbagai kondisi cahaya. Dilengkapi sistem dual power yang dapat beroperasi menggunakan tenaga surya maupun baterai, kalkulator ini praktis digunakan di mana saja. Dengan ukuran ringkas 9,5 × 6 × 0,8 cm dan berat hanya 125 gram, kalkulator ini mudah dibawa dan cocok untuk kebutuhan sekolah, kantor, maupun penggunaan sehari-hari.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-822wq-mp7md5kcwgln7a.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-822ws-mp7md5kcxv634f.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-822wh-mp7md5kcz9qjb0.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-822wq-mp7md5kd22vf96.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-822wn-mp7md5kd0oaz4c.webp"
    ],
    specifications: {
      "Size": "9.5cm x 6cm x 0.8cm",
      "Weight": "125 gr"
    }, 
    link: "https://shopee.co.id/MONTANA-Kalkulator-2-Power-8-Digit-Electronic-Calculator-Big-Display-MTC-200-i.115654595.3111951502?extraParams=%7B%22display_model_id%22%3A50351997143%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 15,
    name: "Scissors Gunting Stainless Steel Multipurpose Kuat Tajam Anti Karat STI-165/Retail", 
    price: 5829, 
    brand: "MONTANA", 
    category: "Aksesoris", 
    description: "Gunting Montana STi-165 terbuat dari bahan stainless steel yang keras, kokoh, dan tahan karat, sehingga tetap tajam serta awet untuk penggunaan jangka panjang. Dirancang tangguh dan nyaman digenggam, gunting ini cocok digunakan untuk berbagai keperluan di sekolah, kantor, maupun rumah. Produk dijual dengan pembelian minimum 1 pcs, dan warna yang dikirim akan disesuaikan secara acak berdasarkan stok yang tersedia.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/sg-11134201-82629-mkyorg9c9qtgce.webp",
		"https://down-id.img.susercontent.com/file/id-11134201-7rbk2-m8vh0qikfvnfd4.webp",
		"https://down-id.img.susercontent.com/file/id-11134201-7rbka-m8vh0qj4f0n68d.webp",
		"https://down-id.img.susercontent.com/file/id-11134201-7rbk3-m8vh0qkscme6c5.webp",
		"https://down-id.img.susercontent.com/file/id-11134201-7rbk5-m8vh0qjeelxu46.webp"
    ],
    specifications: {
      "Produk Custom": "Tidak",
      "Bahan Non Halal": "Tidak mengandung bahan Non Halal",
      "Sertifikat Halal": "Ada"
    }, 
    link: "https://shopee.co.id/MONTANA-Scissors-Gunting-Stainless-Steel-Multipurpose-Kuat-Tajam-Anti-Karat-STI-165-Retail-i.115654595.4220363171?extraParams=%7B%22display_model_id%22%3A80174419027%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 16,
    name: "Glue Stick Lem Batang 25g Excellent Adhesive Perekat Serbaguna GS-25/Retail", 
    price: 3649, 
    brand: "MONTANA", 
    category: "Aksesoris", 
    description: "Lem batang Montana GS-25 dengan berat 25 gram menawarkan daya rekat yang kuat untuk menempelkan kertas, karton, dan berbagai material ringan lainnya dengan hasil yang rapi dan tahan lama. Berjenis lem batangan yang praktis dan mudah digunakan, produk ini juga non-toxic sehingga aman untuk keperluan sekolah, kantor, maupun proyek kerajinan di rumah. Harga yang tercantum adalah harga untuk 1 pcs.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/sg-11134201-820nr-mnwq5rgrb01s35.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-820li-mnwq5rxfak8w1e.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-820mm-mnwq5se68u0z47.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-820mz-mnwq5sxqvm6aa9.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-820of-mnwq5tb4snwgea.webp"
    ],
    specifications: {
      "Jenis Lem": "Lem Stik",
      "Produk Custom": "Tidak"
    }, 
    link: "https://shopee.co.id/MONTANA-Glue-Stick-Lem-Batang-25g-Excellent-Adhesive-Perekat-Serbaguna-GS-25-Retail-i.115654595.7367947870?extraParams=%7B%22display_model_id%22%3A32306786211%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 17,
    name: "Pensil Warna 24 Colored Pencils High Pigments Non Toxic TH-750", 
    price: 13900, 
    brand: "MONTANA", 
    category: "Alat Tulis", 
    description: "Pensil warna Montana TH-750-24 berisi 24 warna dengan pigmen berkualitas tinggi yang menghasilkan warna halus, cerah, dan mudah dipadukan untuk teknik blending maupun shading. Isi pensilnya tebal dan tidak mudah patah, sehingga nyaman digunakan untuk menggambar, mewarnai, atau membuat sketsa dalam waktu lama. Dibuat dari kayu berkualitas tinggi, pensil ini tahan lama dan cocok untuk kebutuhan seni, sekolah, maupun hobi.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/sg-11134201-82258-mhfz1vwgy3ut44.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r98r-lnicq05bel3vd3.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r990-lnicq05belja32.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r98p-lnicq05vdrple3.webp"
    ],
    specifications: {
      "Jenis Pensil Warna": "Larut Air",
      "Produk Custom": "Tidak",
      "Jumlah Warna": "24"
    }, 
    link: "https://shopee.co.id/MONTANA-Pensil-Warna-24-Colored-Pencils-High-Pigments-Non-Toxic-TH-750-i.115654595.22285209539?extraParams=%7B%22display_model_id%22%3A194709630201%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 18,
    name: "Kalkulator Mini/Mini Expression Calculator Kalkulator Saku Portabel dengan Gantungan Kunci", 
    price: 15999, 
    brand: "Eeghrerr", 
    category: "Aksesoris", 
    description: "Gantungan kunci kalkulator mini ini menghadirkan desain lucu dengan ekspresi beragam dan warna-warna permen yang segar, sekaligus berfungsi sebagai kalkulator praktis bertipe flip-top. Terbuat dari plastik berkualitas tinggi yang kokoh dan tahan lama, produk ini dilengkapi tombol silikon yang lembut dan nyaman ditekan. Ukurannya yang ringkas dan portabel membuatnya mudah dibawa ke mana saja, sementara desain gantungan kuncinya memungkinkan kamu menggantungkannya pada tas, tas sekolah, atau kunci sebagai aksesori yang unik dan fungsional.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-7rasc-m1zbjt4bnthl3b.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-7rdwl-m0bjh3qo8684b8.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-7rdw7-m0bjgzjqd22872.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-7rdx1-m0bjh021m9bk9b.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-7rdw2-m0bjh0v6fmbtd1.webp",
	    "https://down-id.img.susercontent.com/file/sg-11134201-7rdyg-m0bjh1m3c8g934.webp",
	    "https://down-id.img.susercontent.com/file/sg-11134201-7rdya-m0bjh4breps4af.webp"
    ],
    colors: ["black", "white", "pink", "blue"], 
    specifications: {
      "Jenis Kalkulator": "Kecil",
      "Baterai": "Baterai Kancing (Termasuk)",
      "Jenis Baterai": "AG10",
      "Ukuran Produk": "6,4 x 3,6 cm"
    }, 
    link: "https://shopee.co.id/Eeghrerr-Kalkulator-Mini-Mini-Expression-Calculator-Kalkulator-Saku-Portabel-dengan-Gantungan-Kunci-i.1329282085.29011654378?extraParams=%7B%22display_model_id%22%3A195401031228%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 19,
	badge: 'new',
    name: "Kertas HVS SIDU Sinar Dunia A4 Ketebalan 70 Gsm 1 RIM 500 Lembar Paper New", 
    price: 59000, 
    brand: "SIDU", 
    category: "Buku", 
    description: "Sejak tahun 2011, FixPrint hadir sebagai Total Print Solution yang dipercaya pelanggan di seluruh Indonesia untuk memenuhi berbagai kebutuhan printing. Hingga hari ini, kami telah menyelesaikan lebih dari 2,5 juta pesanan, sebuah pencapaian yang mencerminkan komitmen kami dalam menghadirkan produk berkualitas, pelayanan terbaik, dan pengalaman belanja yang aman serta terpercaya.", // deskripsi produk
    images: [
      "https://down-id.img.susercontent.com/file/id-11134207-81ztg-mrvbkeaj85c8c8.webp",
      "https://down-id.img.susercontent.com/file/id-11134253-81ztk-mri4p3hyk2ksfc.webp"
    ],
    specifications: {
      "Ukuran Kertas": "A4",
      "Jumlah Lembar": "500",
      "Produk Custom": "Tidak",
      "Berat Kertas": "70gsm"
    }, 
    link: "https://shopee.co.id/FixPrint-Kertas-HVS-SIDU-Sinar-Dunia-A4-Ketebalan-70-Gsm-1-RIM-500-Lembar-Paper-New-i.362096994.22284290222?extraParams=%7B%22display_model_id%22%3A187121523185%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 20,
    name: "My Book Yuvi Buku Tulis Royal Campus New Series Ukuran Kuarto | 38 Lembar - 10 Buku", 
    price: 31000, 
    brand: "Mybook", 
    category: "Buku", 
    description: "Buku tulis ukuran Quarto (16 × 20,8 cm) ini menggunakan kertas Paper One 60 GSM yang berkualitas, dengan ketebalan yang tidak mudah menembus sehingga aman digunakan untuk bolpoin maupun spidol. Setiap pak berisi 10 buku dengan total berat sekitar 900 gram, dilengkapi variasi cover elegan yang menambah kesan rapi dan menarik. Sangat cocok untuk kebutuhan sekolah, buku ini menawarkan kombinasi praktis antara kualitas kertas yang baik, ukuran yang pas, dan tampilan yang stylish.", // deskripsi produk
    images: [
    	"https://down-id.img.susercontent.com/file/id-11134207-7rbk5-m7j4ydabyacs0f.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7rbka-m7j4ydabu2ng06.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7rbk8-m7j4ydabvh7we6.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7rbk1-m7j4ydabwvscfe.webp"
    ],
    specifications: {
      "Ukuran Kertas": "A5",
      "Jenis Buku Catatan/Notepad": "Subject Book",
      "Tekstur Kertas": "Halus",
      "Jumlah Lembar": "38"
    }, 
    link: "https://shopee.co.id/My-Book-Yuvi-Buku-Tulis-Royal-Campus-New-Series-Ukuran-Kuarto-38-Lembar-10-Buku-i.1316277655.26130150243?extraParams=%7B%22display_model_id%22%3A257934063753%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 21,
    name: "Pangeran Cilik (The Little Prince) (Antoine de Saint-Exupéry)", 
    price: 63200, 
    brand: "Gramedia", 
    category: "Buku", 
    description: "Pangeran Cilik termasuk buku yang paling banyak diterjemahkan di dunia. Konon, hingga tahun 2024, kisah ini sudah disadur ke dalam 600 bahasa dan dialek. Buku ini memang luar biasa—tampak seperti cerita anak-anak, tapi sebenarnya dinikmati dan direnungkan oleh orang dewasa. Lewat cerita seorang anak yang mengamati dunia dengan mata naif dan lugu, Saint-Exupéry menyentuh beberapa nilai dan pengalaman manusia yang paling dasar, seperti kekuasaan, tanggung jawab, dan cinta. Dongeng yang mengharukan sekaligus amat mendalam ini termasuk karya-karya agung sastra dunia yang tidak terlupakan.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/sg-11134201-824hx-medpwey2xvk27e.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-824ik-medpwfziobus69.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-824gd-medpwgqn435w79.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-824gh-medpwhjnzkzl1f.webp"
    ],
    link: "https://shopee.co.id/Pangeran-Cilik-(The-Little-Prince)-(Antoine-de-Saint-Exup%C3%A9ry)-i.63842097.40967980424?extraParams=%7B%22display_model_id%22%3A276479848780%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 22,
	badge: 'hot',
    name: "Buku Mindset (Carol S. Dweck, Ph.D.)", 
    price: 111000, 
    brand: "Gramedia", 
    category: "Buku", 
    description: "Buku *Mindset* telah terbukti mengubah cara banyak orang di seluruh dunia memandang kesuksesan dan potensi diri, bertengger sebagai topseller di Amazon.com selama lebih dari 13 tahun. Berbeda dari buku kesuksesan pada umumnya yang cenderung menawarkan tips praktis, buku ini mengajak pembaca menyelami akar masalah kesuksesan: pola pikir. Melalui paparan yang mendasar namun langka, buku ini mengontraskan tokoh-tokoh dunia di bidang musik, sastra, sains, olahraga, dan bisnis yang memiliki *fixed mindset* (pola pikir tetap) dengan mereka yang memiliki *growth mindset* (pola pikir tumbuh). Hasilnya, tokoh dengan *growth mindset* terbukti lebih mampu mempertahankan kesuksesan dan kebahagiaan hidup karena lebih menekankan proses belajar serta usaha daripada sekadar mengandalkan bakat dan kecerdasan bawaan.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-7r990-lu4rc2ouq6s24d@resize_w900_nl.webp"
    ],
    specifications: {
      "Bahasa": "Indonesia",
      "Jenis Cover": "Soft Cover",
      "ISBN": "9786026486356",
      "Tahun": "2022"
    }, 
    link: "https://shopee.co.id/Gramedia-MKG-Buku-Mindset-(Carol-S.-Dweck-Ph.d.)-i.429068669.25924159941?extraParams=%7B%22display_model_id%22%3A49412724895%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 23,
    name: "Drawing Book / buku gambar A4", 
    price: 29500, 
    brand: "Faber-Castell", 
    category: "Buku", 
    description: "Bebaskan kreasi dengan buku gambar berukuran A4 yang mudah dibawa-bawa. Cocok untuk para pelajar seni untuk menuangkan ide-ide imajinasi di ruang kelas maupun di luar. Dengan bahan kertas berkualitas dan permukaan halus, memudahkan pengaplikasian crayon, pensil warna maupun marker. Dilengkapi dengan lem yang kuat sehingga kertas gambar tidak mudah terlepas.Tersedia juga dalam ukuran A5, A4, dan A3", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/92dbc00f4a7f4371845707390307252a.webp",
		"https://down-id.img.susercontent.com/file/5c8829cc28fea0fec4169730c9e838c3.webp",
		"https://down-id.img.susercontent.com/file/a84420baf434583e2734a7c5705ea73e.webp",
		"https://down-id.img.susercontent.com/file/28738dcc44ab84479a72cf8bef388231.webp"
    ], 
    link: "https://shopee.co.id/Faber-Castell-Drawing-Book-buku-gambar-A4-i.42170420.3827855314?extraParams=%7B%22display_model_id%22%3A40675490618%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 24,
	badge: 'sale',
    name: "Pianika Set Alat Tiup Musik 42.2x10.3x5 Cm Keyboard Music Note Timbul TPB", 
    price: 144000, 
    brand: "MONTANA", 
    category: "Aksesoris", 
    description: "Pianika Montana TPB berwarna biru dengan ukuran 42,2 × 10,3 × 5 cm ini dirancang agar mudah ditiup, cocok untuk pemula maupun siswa yang belajar musik. Dilengkapi tombol pembersih khusus yang memungkinkan kamu menekan tombol sambil meniup untuk mengeluarkan kotoran dari dalam pianika, sehingga instrumen tetap bersih dan awet. Paket penjualan sudah lengkap dengan selang tiup, alat bantu tiup pendek, dan tas pelindung, menjadikannya pilihan praktis untuk kebutuhan sekolah, latihan, maupun pertunjukan.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-822wi-motdrxp8a13680.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-822wo-motdrxp877ya45.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-822ws-motdrxp88miqd2.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-822wj-motdrxp8bfnmc6.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-822wu-motdrxp8e8sia1.webp",
	    "https://down-id.img.susercontent.com/file/id-11134207-822wt-motdrxp8cu820d.webp"
    ],
    colors: ["blue", "pink"], 
    specifications: {
      "Berat Produk": "500g",
      "Alat Musik Tradisional": "Tidak",
      "Jenis Aksesoris": "Kotak Pembawa"
    }, 
    link: "https://shopee.co.id/MONTANA-Pianika-Set-Alat-Tiup-Musik-42.2x10.3x5-Cm-Keyboard-Music-Note-Timbul-TPB-i.115654595.3218834390?extraParams=%7B%22display_model_id%22%3A198040650770%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 25,
    name: "Buku STOIKISME: Mindset, Logika, dan Etika Filsafat yang Bikin Hidup Lebih Ringan | Ali Adhim", 
    price: 74700, 
    brand: "Dawuh Guru", 
    category: "Buku", 
    description: "Di tengah dunia yang penuh ketidakpastian dan tantangan, buku ini menghadirkan Stoikisme sebagai panduan praktis untuk menjalani hidup dengan lebih tenang dan terfokus. Mengupas tuntas prinsip dasar Stoikisme yang mencakup mindset, logika, dan etika, buku ini menunjukkan bagaimana penerapannya dapat mengubah cara pandang kita terhadap kehidupan sehari-hari. Dengan pendekatan yang mudah dipahami, pembaca diajak menyelami pemikiran klasik dari tokoh-tokoh besar seperti Seneca, Epictetus, dan Marcus Aurelius, sekaligus belajar mengembangkan ketahanan mental, menanggapi situasi sulit dengan bijaksana, serta mengelola emosi agar tetap menjaga kejernihan batin.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-7ra0h-mbvcwq6q32yuf4.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-81ztq-mfdqxw7t9wy225.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-81ztg-mff98ezm5fkd6e.webp"
    ],
    specifications: {
      "Jenis Edisi": "Edisi Reguler",
      "Bahasa": "Indonesia",
      "Jenis Cover": "Soft Cover",
      "Perusahaan Penerbit": "PT Dawuh Guru",
      "Tahun": "2024"
    }, 
    link: "https://shopee.co.id/Dawuh-Guru-Buku-STOIKISME-Mindset-Logika-dan-Etika-Filsafat-yang-Bikin-Hidup-Lebih-Ringan-Ali-Adhim-i.285456677.27114642172?extraParams=%7B%22display_model_id%22%3A246821543728%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 26,
    name: "Sepatu Kodachi 8116 Grey Double Black Abu-Abu Sneakers Unisex Olahraga", 
    price: 130000, 
    brand: "Kodachi", 
    category: "Sepatu", 
    description: "Sepatu Kodachi, yang lebih dikenal dengan sebutan sepatu Capung, dirancang serbaguna untuk berbagai cabang olahraga seperti badminton, voli, takraw, hingga parkour. Dilengkapi sol full karet yang anti slip, sepatu ini menawarkan kenyamanan maksimal, daya cengkeram kuat, dan fleksibilitas tinggi saat bergerak. Dengan desain yang fashionable, bobot ringan, serta durabilitas tinggi, sepatu ini cocok untuk kamu yang aktif berolahraga maupun beraktivitas sehari-hari dengan gaya tetap kekinian.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/19f48d0b4d14615cfed4efe8d1f2d62b.webp",
		"https://down-id.img.susercontent.com/file/d4d6b88db681b695c689e4e3b0e63ad1.webp",
		"https://down-id.img.susercontent.com/file/59d2fca2bfaf3c6606164ad255cab46d.webp",
		"https://down-id.img.susercontent.com/file/13fe7a762d81f62b5fb7f904d75a519e.webp"
    ],
    sizes: ["37", "38", "39", "40", "41", "42", "43", "44", "45"], 
    specifications: {
      "Tipe Pengikat": "Tali",
      "Asal Produk": "Indonesia",
      "Tampilan Kulit": "bermotif",
      "Model Sepatu": "8116"
    }, 
    link: "https://shopee.co.id/Sepatu-Kodachi-8116-Grey-Double-Black-Abu-Abu-Sneakers-Unisex-Olahraga-i.312908080.10442049375?extraParams=%7B%22display_model_id%22%3A94619686119%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 27,
    name: "Gio Saverino Sepatu Sekolah Hitam Pakai Tali Joker", 
    price: 189100, 
    brand: "Gio Saverino", 
    category: "Sepatu", 
    description: "Sneakers Gio Saverino menghadirkan gaya fashion terkini dengan desain casual yang cocok dipakai untuk aktivitas sehari-hari. Menggunakan bahan hi-tech breathable fabric, sepatu ini menjaga sirkulasi udara tetap optimal sehingga kaki terasa sejuk dan nyaman meski digunakan dalam waktu lama. Sol dan tapak sepatu berbahan injection natural rubber membuatnya sangat ringan, empuk, dan nyaman, baik untuk berjalan santai maupun berolahraga ringan.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/80c9e0a85bd8fe1aa3a908d15d345630.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r98s-m09q6eyybw9s5a.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r98x-m09pp4s36kv468.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r990-m09q6eyybw4c05.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r98q-m09pp4s37zfkcd.webp",
	    "https://down-id.img.susercontent.com/file/222617ebc619f71b5efb82bea55ca29c.webp",
	    "https://down-id.img.susercontent.com/file/sg-11134201-823p0-mp6batafjhu790.webp",
	    "https://down-id.img.susercontent.com/file/17322858cf8bced253401484a4a350e7.webp",
	    "https://down-id.img.susercontent.com/file/8c2374de874a8e50607400ec0f791fe1.webp"
    ],
    sizes: ["39", "40", "41", "42", "43", "44"], 
    colors: ["black", "blue", "beige"], 
    specifications: {
      "Asal Produk": "Indonesia",
      "Tipe Pengikat": "Tali"
    }, 
    link: "https://shopee.co.id/Gio-Saverino-Sepatu-Sekolah-Hitam-Pakai-Tali-Joker-i.172009345.16763751535?extraParams=%7B%22display_model_id%22%3A251609505007%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 28,
    name: "ONE PIECE X KIKY Buku Tulis BOXY 50 One Piece 1 Pack isi 10 - 1 Pcs", 
    price: 9400, 
    brand: "KIKY", 
    category: "Buku", 
    description: "Buku tulis Kiky BX 50 edisi spesial One Piece menampilkan desain cover poster “WANTED” yang menampilkan karakter populer dari Straw Hat Crew, menjadikannya pilihan menarik bagi pelajar, mahasiswa, maupun kolektor anime. Dengan kualitas kertas yang baik dan ukuran yang praktis, buku ini cocok untuk mencatat, mengerjakan tugas, atau sekadar mengoleksi merchandise One Piece favoritmu.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-8224p-mhzspg617gg5cc.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-8224t-mhzspg5w4um9d3.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-8224z-mhzspg5wda0x51.webp"
    ],
    link: "https://shopee.co.id/ONE-PIECE-X-KIKY-Buku-Tulis-BOXY-50-One-Piece-1-Pack-isi-10-1-Pcs-i.89747975.51302743160?extraParams=%7B%22display_model_id%22%3A345455370868%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 29,
    name: "Tas Sekolah Anak Dan Dewasa Demon Slayer Casual Kasual Ransel Kantong Ori Original Produk Lokal Tas Anti Air CUT 024", 
    price: 146000, 
    brand: "Capilari", 
    category: "Tas", 
    description: "Tas ransel ini dibuat dari bahan Bimo berkualitas tinggi yang dikenal kuat, tebal, dan tahan lama, sehingga siap menemani aktivitas sekolah, kuliah, maupun harianmu. Dilengkapi desain animasi keren dengan warna tajam dan detail menarik, tas ini tidak hanya fungsional, tetapi juga menambah kesan trendi dan modern pada gaya sehari-harimu.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-8224r-mijxc4io07wi18.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-82250-mijxc4io1mgye6.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-82251-mijxc4io311eab.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-8224t-mijxqhgwl79gf2.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-8224t-mijxqhhdd7goc2.webp"
    ],
    specifications: {
      "Asal Produk": "Indonesia",
      "Bahan": "DTF",
      "Jenis Kulit": "kulit pu"
    }, 
    link: "https://shopee.co.id/Capilari-Tas-Sekolah-Anak-Dan-Dewasa-Demon-Slayer-Casual-Kasual-Ransel-Kantong-Ori-Original-Produk-Lokal-Tas-Anti-Air-CUT-024-i.225158355.41877408849?extraParams=%7B%22display_model_id%22%3A410331355416%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 30,
    name: "Tas Ransel Pria Kapasitas Besar Tahan Air Desain Simpel Tas kuliah Ransel Pria Pelajaran", 
    price: 244000, 
    brand: "GAEHT", 
    category: "Tas", 
    description: "Tas ransel ini terbuat dari kombinasi bahan nilon dan poliester yang tahan air serta tahan aus, dengan dimensi 48 × 32 × 22 cm dan kapasitas 25 liter yang cukup untuk membawa laptop hingga 15,6 inci. Dilengkapi penutup ritsleting yang aman dan benang jahit yang kuat, tas ini menawarkan ketahanan tinggi untuk penggunaan sehari-hari, baik untuk sekolah, kerja, maupun aktivitas luar ruangan.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-81ztf-me82jfxupr7qa2.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7ra0m-mdo2gmjkfa8e2a.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7ra0r-mdo2gmjkgosucc.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7ra0j-mdo2gmjkb2j2a4.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7ra0l-mdo2gmjkdvnye5.webp",
	    "https://down-id.img.susercontent.com/file/id-11134207-7ra0p-mdo2gmjkch3i9b.webp",
	    "https://down-id.img.susercontent.com/file/id-11134207-7ra0o-mdo32xwsiqhb14.webp",
	    "https://down-id.img.susercontent.com/file/id-11134207-7ra0i-mdo2gmjkjhxq6c.webp"
    ],
    colors: ["grey", "black", "pink"], 
    specifications: {
      "Fitur": "Slot Laptop, Lainnya, Slot Tablet",
      "Asal Produk": "Negara Lain",
      "Bahan": "Nilon+Poliester"
    }, 
    link: "https://shopee.co.id/GAEHT-Tas-Ransel-Pria-Kapasitas-Besar-Tahan-Air-Desain-Simpel-Tas-kuliah-Ransel-Pria-Pelajaran-i.1602690410.43714267421?extraParams=%7B%22display_model_id%22%3A169052605804%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 31,
	badge: 'hot',
    name: "Novel Tentang Kamu", 
    price: 74000, 
    brand: "Tere Liye", 
    category: "Buku", 
    description: "Buku *Tentang Kamu* karya Tere Liye merupakan salah satu buku paling mahal dan paling laris setelah *Janji*, dengan harga cover di toko Gramedia mencapai Rp114.000. Dirilis bertepatan dengan semangat bulan Ramadhan, buku ini ditawarkan dengan harga super diskon agar lebih banyak pembaca bisa menikmati cerita 100% original dari Tere Liye. Meskipun dijual dengan harga khusus, kualitas dan keaslian buku tetap terjamin, sehingga kamu bisa membaca dengan tenang tanpa perlu khawatir.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-8224x-mkypomkzumf7f3.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-8224z-mkypomkzw0zn5d.webp"
    ],
    specifications: {
      "Jenis Edisi": "Edisi Reguler",
      "Bahasa": "Indonesia",
      "Jenis Cover": "Soft Cover",
      "Perusahaan Penerbit": "sabakgrip"
    }, 
    link: "https://shopee.co.id/Tere-Liye-Super-Sale-Novel-Tentang-Kamu-Rp-74.000-i.216513587.44428818094?extraParams=%7B%22display_model_id%22%3A385570319822%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 32,
    name: "Aquarius Backpack - Black", 
    price: 2765000, 
    brand: "Samsonite", 
    category: "Tas", 
    description: "Tas ransel Aquarius dirancang khusus untuk pebisnis yang sering bepergian, dengan tampilan bersih dan elegan serta bentuk terstruktur yang memudahkan pengaturan barang kapan saja dan di mana saja. Dilengkapi dua saku depan yang mencakup gantungan kunci, saku dalam, dan tempat pena, serta saku belakang berzip untuk menyimpan barang berharga, tas ini menawarkan organisasi yang praktis. Saku samping berzip, bukaan lebar pada kompartemen utama, pita silang, saku jaring dalam, kompartemen laptop hingga 14,1 inci, dan fitur Smart Sleeve semakin melengkapi fungsionalitasnya. Terbuat dari bahan nilon dengan aksen kulit, tas ini berukuran 38 × 28 × 15 cm, berkapasitas 17 liter, dan memiliki berat ringan hanya 0,8 kg.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-822wo-mnwevza3cbghd9.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7ras8-m1mpff8tjm1o6f.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7ras9-m3vllgs5t1b05c.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7ras9-m1mpff8tmf6k20.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7rasc-m1mpff8tl0m436.webp"
    ],
    specifications: {
      "Asal Produk": "Indonesia",
      "Bahan": "Nylon - Leather Trim"
    }, 
    link: "https://shopee.co.id/Samsonite-Aquarius-Backpack-Black-i.492650266.28814760942?extraParams=%7B%22display_model_id%22%3A187898618120%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 33,
    name: "Men Novablast 6 Wide-1011C242.002", 
    price: 2299000, 
    brand: "ASICS", 
    category: "Sepatu", 
    description: "Sepatu NOVABLAST™ 6 dirancang untuk memberikan pengembalian energi supreme saat toe-off dan traksi yang lebih baik di bawah kaki, menjadikannya pilihan ideal untuk latihan intensif. Busa FF BLAST™ MAX yang dipadukan dengan pod trampolin FF TURBO™ SQUARED di bagian forefoot menciptakan pendaratan yang lebih lembut dan pantulan yang lebih berenergi setiap kali melangkah. Outsole-nya diperbarui dengan karet ASICSGRIP™ di forefoot untuk traksi maksimal, sementara upper rajutan rekayasa menawarkan bobot ringan dan breathability tinggi. Dilengkapi konstruksi tongue wing untuk fit yang nyaman dan aman di midfoot, karet AHAR™ LO untuk grip andal, serta desain wide fit yang memberi ruang lebih bagi kaki, sepatu ini menggabungkan kenyamanan, responsivitas, dan daya cengkeram canggih di berbagai medan.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-822wu-mpvz27jyyfbh7d.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-822wm-mpvz27jxqvpe5c.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-822wq-mpvz27jyhki661.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-822wj-mpvz27k21e6j7e.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-822wi-mpvz27jyst1p8d.webp",
	    "https://down-id.img.susercontent.com/file/id-11134207-822wr-mpvz27jyu7m5bf.webp",
	    "https://down-id.img.susercontent.com/file/id-11134207-822wr-mpvz27jyx0r12c.webp",
	    "https://down-id.img.susercontent.com/file/id-11134207-822wg-mpvz27jyvm6l53.webp"
    ],
    sizes: [ "US 6" , "US 6.5" , "US 7" , "US 7.5" , "US 8" , "US 8.5" , "US 9" , "US 9.5" , "US 10" , "US 10.5" , "US 11" , "US 11.5" , "US 12" ], 
    specifications: {
      "Tipe Pengikat": "Tali",
      "Asal Produk": "Indonesia",
      "Bahan": "Lainnya, Mesh"
    }, 
    link: "https://shopee.co.id/Asics-Men-Novablast-6-Wide-1011C242.002-i.472404366.52459999084?extraParams=%7B%22display_model_id%22%3A307595303361%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 34,
    name: "Travel Kit Organizer - Tempat Pensil dan Charger - Nata", 
    price: 88400, 
    brand: "Montrav", 
    category: "Aksesoris", 
    description: "Nata Stationery Pack adalah pouch khusus yang dirancang untuk menyimpan koleksi alat tulis dan peralatan kerja seperti pulpen, pensil, spidol, charger, hingga kabel USB, sekaligus menjadi bagian dari seri Nata Packing Organizer yang membantu kamu mengatur barang sesuai kebutuhan. Dilengkapi karet elastis tebal pada kompartemen utama, pouch ini memungkinkan barang bawaan dikategorikan dengan rapi, sementara dua ruang penyimpanan yang tersedia memastikan kapasitas muat yang lebih banyak. Webbing yang terpasang berfungsi sebagai pegangan praktis, sehingga kamu bisa menenteng pouch ini dengan mudah saat bepergian atau beraktivitas.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-7r98o-lkqgmo8jgrnna4.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7qul7-ligshz9jqhka1b.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7qul3-ligshz9jrw4q02.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7qul3-ligshz9jtap629.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7qukx-ligshz9jp2zu29.webp",
	    "https://down-id.img.susercontent.com/file/id-11134207-7qukz-ligshz9tg8yyb4.webp",
	    "https://down-id.img.susercontent.com/file/id-11134207-7qul8-ligshzc1eety5f.webp",
	    "https://down-id.img.susercontent.com/file/id-11134207-7qul3-ligshzc1ftee3c.webp"
    ],
    colors: ["grey", "black", "navy", "green"], 
    specifications: {
      "Asal Produk": "Indonesia",
      "Bahan": "Nilon, Poliester"
    }, 
    link: "https://shopee.co.id/Montrav-Travel-Kit-Organizer-Tempat-Pensil-dan-Charger-Nata-i.14281857.23837586274?extraParams=%7B%22display_model_id%22%3A194178856936%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 35,
    name: "Memo Stick / Sticky Note / Kertas Memo / Memo Tempel  JOYKO MMS-0654C", 
    price: 7600, 
    brand: "JOYKO", 
    category: "Aksesoris", 
    description: "Memo Stick  JOYKO MMS-0654C berukuran 75 × 75 mm (3 inch) ini tersedia dalam empat pilihan warna cerah—pink, orange, yellow, dan green—yang memudahkan kamu menandai catatan penting, membuat pengingat, atau menghias halaman buku. Terbuat dari bahan kertas berkualitas dengan isi 100 lembar per warna, memo ini mudah merekat dan mudah dilepas kembali tanpa meninggalkan residu. Harga yang tercantum adalah per warna, sehingga kamu bisa memilih sesuai kebutuhan atau mengumpulkan berbagai warna untuk keperluan yang lebih variatif.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-7rbk5-m7gduu7shm9y72.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7rbk1-m7ge13bf4c7q77.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7rbk5-m7gduu7skfeu91.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7rbkb-m7gduu7sltza99.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7rbk3-m7gduu7sn8jqe5.webp"
    ],
    colors: ["green", "orange", "pink", "yellow"], 
    link: "https://shopee.co.id/Memo-Stick-Sticky-Note-Kertas-Memo-Memo-Tempel-Joyko-MMS-0654C-i.64925304.1104069331?extraParams=%7B%22display_model_id%22%3A139285499105%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 36,
    name: "Spidol Warna Warni 1 Set Sketch Marker 2 Tip Touch Marker 48/60/80 Warna", 
    price: 96990, 
    brand: "Aimilo", 
    category: "Alat Tulis", 
    description: "Spidol seni Aimilo ini hadir dalam satu set warna-warni lengkap dengan tas penyimpanan praktis, dirancang khusus untuk kebutuhan menggambar, mewarnai, dan proyek seni lainnya. Dengan ujung ganda yang terdiri dari ujung bulat 1 mm untuk detail halus dan ujung miring 6 mm untuk bidang lebar, spidol ini menawarkan fleksibilitas tinggi dalam menciptakan berbagai efek visual. Menggunakan tinta pigmen berbasis alkohol yang tidak berbau, cepat kering, cerah, dan tahan lama, spidol ini tidak mudah luntur serta aman digunakan karena tidak beracun dan ramah lingkungan.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/id-11134207-7rask-m0wgmroc42bw53.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r992-lwtml3s70c1p8c.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r98u-lwtml3s71qm580.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r98w-lvoanbomhcx51f.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-7r98o-lvoanbomlkmhaf.webp"
    ],
    specifications: {
      "Ketebalan": "6mm",
      "Bahan": "Plastik + Nilon",
      "Panjang Spidol": "Sekitar 15.2cm"
    }, 
    link: "https://shopee.co.id/Aimilo-Spidol-Warna-Warni-1-Set-Sketch-Marker-2-Tip-Touch-Marker-48-60-80-Warna-i.1112780441.24157860810?extraParams=%7B%22display_model_id%22%3A236468295484%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 37,
    name: "Pensil Mekanik / Mechanical Pencil MP-52 - Pcs", 
    price: 7500, 
    brand: "JOYKO", 
    category: "Alat Tulis", 
    description: "Pensil mekanik JOYKO MP-52 ini memiliki desain ringkas dengan panjang 14,1 cm dan diameter 1 cm, cocok untuk menulis, menggambar, atau mengerjakan tugas sekolah dan kantor. Menggunakan isi pensil 0,5 mm, pensil ini menghasilkan garis yang presisi, rapi, dan konsisten tanpa perlu sering diraut.", // deskripsi produk
    images: [
    	"https://down-id.img.susercontent.com/file/sg-11134201-23010-pfadxdqg9wmvbe.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-823pl-mp5gmw92ls75c8.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-23010-fsk67iqg9wmv53.webp"
    ],
    specifications: {
      "Ketebalan": "0.5mm"
    }, 
    link: "https://shopee.co.id/JOYKO-Pensil-Mekanik-Mechanical-Pencil-MP-52-Pcs-i.39247910.12197914680?extraParams=%7B%22display_model_id%22%3A220475761512%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 38,
	badge: 'new',
    name: "Pensil Sketsa Profesional Set 12pcs 1B-8B Lengkap dengan Kotak Gambar Arsitek & Seniman", 
    price: 25900, 
    brand: "BALODY", 
    category: "Alat Tulis", 
    description: "Set pensil sketsa seni profesional ini berisi 12 batang pensil dengan tingkat kekerasan bervariasi dari 2H hingga 8B, memenuhi kebutuhan mulai dari garis halus hingga bayangan pekat untuk sketsa, menggambar, scrapbooking, keperluan sekolah, maupun ujian. Terbuat dari kayu alami yang ramah lingkungan dan sehat, badan pensil ini menawarkan kenyamanan saat digenggam serta kualitas yang terjamin. Dengan ukuran set sekitar 18,8 × 10,3 × 1 cm dan isi warna hitam, paket ini menghadirkan 12 gaya berbeda seperti pada gambar, siap mendukung kreativitas dan kebutuhan menggambar profesionalmu.", // deskripsi produk
    images: [
    	"https://down-id.img.susercontent.com/file/id-11134207-8224y-mgw3ckorbu300b.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-8224s-mgw3ckoqic5kd7.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-8224y-mgw3ckorg1sc61.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-8224o-mgw3ckoren7w41.webp",
		"https://down-id.img.susercontent.com/file/id-11134207-8224x-mgw3ckord8ng2f.webp"
    ],
    link: "https://shopee.co.id/BALODY-Pensil-Sketsa-Profesional-Set-12pcs-1B-8B-Lengkap-dengan-Kotak-Gambar-Arsitek-Seniman-i.1245591136.51501104781?extraParams=%7B%22display_model_id%22%3A425100688800%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 39,
    name: "Buku Tulis Catatan Bergaris Ruled Notebook  JOYKO NB-718 A5", 
    price: 7200, 
    brand: "JOYKO", 
    category: "Buku", 
    description: "Buku tulis catatan bergaris  JOYKO NB-718 berukuran A5 (21,1 × 14,8 cm) ini hadir dengan 40 lembar kertas 70 gsm yang rapi dan nyaman untuk menulis, mencatat, atau membuat jurnal harian. Sampulnya lentur dengan jahitan kuat yang membuat halaman tidak mudah lepas, serta desain 180° datar yang memudahkan penulisan hingga ke bagian tepi halaman. Tersedia dalam empat pilihan warna yang dikirim sesuai ketersediaan stok, buku ini dijual per pcs dan cocok untuk kebutuhan sekolah, kuliah, maupun kerja.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/946df75197835074a0f67c8415c88c1c.webp",
		"https://down-id.img.susercontent.com/file/f301f8bcf5779c5ecbb703dd16a604f9.webp",
		"https://down-id.img.susercontent.com/file/8525812a5d09fae19dd9f2aaefc7b1be.webp",
		"https://down-id.img.susercontent.com/file/b573ebbe3b6050a31e14f2d8e0a6ccfb.webp",
		"https://down-id.img.susercontent.com/file/sg-11134201-823o9-mp7frj7vtm2p3d.webp"
    ],
    link: "https://shopee.co.id/Buku-Tulis-Catatan-Bergaris-Ruled-Notebook-Joyko-NB-718-A5-i.64925304.20513480455?extraParams=%7B%22display_model_id%22%3A116907658528%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 40,
    name: "MONTANA X SiDU Drawing Book B5 Buku Gambar Dodo B5 Retail 1Pcs", 
    price: 2900, 
    brand: "MONTANA", 
    category: "Buku", 
    description: "Buku Gambar Dodo B5 ini dirancang khusus untuk pelajar yang aktif menggambar dan mewarnai, dengan kertas lebih tebal yang memberikan kenyamanan ekstra saat menggunakan pensil, spidol, maupun media gambar lainnya. Berukuran 260 × 180 mm dan berat 150 gram, buku ini praktis dibawa dan cukup luas untuk menampung berbagai karya seni. Desain sampul bervariasi dan akan dikirim sesuai stok yang tersedia, menjadikannya pilihan menarik untuk aktivitas kreatif sehari-hari.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/sg-11134201-8227f-mhfzkz6pzgn83c.webp"
    ],
    link: "https://shopee.co.id/MONTANA-X-SiDU-Drawing-Book-B5-Buku-Gambar-Dodo-B5-Retail-1Pcs-i.115654595.47251002874?extraParams=%7B%22display_model_id%22%3A355088528539%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
  {
    id: 41,
    name: "Notebook A5 Blank Maroon", 
    price: 165000, 
    brand: "Papermark", 
    category: "Buku", 
    description: "Notebook ini berukuran A5 (15 × 21 cm) dengan total 144 halaman, menggunakan kertas book paper 70 gsm yang nyaman untuk menulis, mencatat, atau membuat jurnal harian. Dilengkapi hard cover yang kokoh dan elegan, notebook ini tidak hanya melindungi halaman di dalamnya, tetapi juga memberikan tampilan rapi dan profesional untuk kebutuhan sekolah, kuliah, maupun kerja.", // deskripsi produk
    images: [
		"https://down-id.img.susercontent.com/file/1424eea67c375be27c9a8a3824f2d7e2.webp",
		"https://down-id.img.susercontent.com/file/cc15e2050ca9958055f9e45c794a6f66.webp"
    ],
    specifications: {
      "Ukuran Kertas": "A5",
      "Jumlah Lembar": "72"
    }, 
    link: "https://shopee.co.id/Papermark-Notebook-A5-Blank-Maroon-i.68995429.4616111737?extraParams=%7B%22display_model_id%22%3A21295007642%2C%22model_selection_logic%22%3A3%7D" // link produk, produk usahakan Shopee
  },
];