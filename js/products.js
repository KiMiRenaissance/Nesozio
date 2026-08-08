/* ==========================================================================
   NesoZio - PRODUCTS DATABASE
   ========================================================================== */

const PRODUCTS = [
  {
    id: 1,
    name: "Tangzu Waner 2 Emerald Jade Dragon Edition",
    price: 449.000,
    brand: "Tangzu",
    category: "Electronics",
    description: "Versi yang telah ditingkatkan ini mempertahankan karakter aslinya sembari menghadirkan penyempurnaan pada desain, material, dan performa, menjadikannya pilihan yang semakin memikat bagi para audiophile. Kini tersedia dalam dua pilihan warna yang memukau—putih dan hitam—yang masing-masing memiliki daya tarik tersendiri: warna putih mencerminkan kesan murni yang ramping dan elegan, sementara warna hitam memancarkan keanggunan yang berani dan tak lekang oleh waktu.",
    images: [
      "content://com.android.chrome.FileProvider/images/screenshot/17860970608027990813166281130259.jpg",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    link: "https://www.tokopedia.com/csi-zone/tangzu-waner-2-emerald-jade-dragon-edition-10mm-dynamic-driver-in-ear-monitor-earphone-1732043530240427572?aff_unique_id=&channel=others&chain_key=&backURL=https%3A%2F%2Fwww.tokopedia.com%2Fcsi-zone%2Ftangzu-harmonic-empire-cai-wen-ji-cai-wenji-dynamic-driver-in-ear-monitor-earphone-1735804918108620340-1735804918155347508%3FextParam%3Divf%253Dfalse%2526keyword%253Dcvj%2Bvivian%2526search_id%253D20260807104512FE73F687E5BC52244SLA%2526src%253Dsearch%2526whid%253D690897%26t_id%3D1786099508745%26t_st%3D2%26t_pp%3Dsearch_result%26t_efo%3Dsearch_pure_goods_card%26t_ef%3Dgoods_search%26t_sm%3D%26t_spt%3Dsearch_result&backMethod=browser&t_id=1786099508745&t_st=3&t_pp=product_detail&t_efo=horizontal_goods_card&t_ef=goods_search&t_sm=rec_product_detail_outer_pdp_same_shop_module&t_spt=product_detail&bottomsheet=product_detail&bottomsheet_type=description"
  },
  {
    id: 2,
    name: "Ultra-Slim Chronograph Leather Watch",
    price: 199.50,
    brand: "Titan Luxe",
    category: "Fashion",
    description: "Handcrafted Italian leather strap combined with a scratch-resistant sapphire crystal glass face and minimalist dial design.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["38mm", "42mm"],
    colors: ["#78350F", "#0F172A"],
    specifications: {
      "Movement": "Japanese Quartz",
      "Water Resistance": "50 Meters",
      "Strap Material": "Genuine Leather",
      "Case Diameter": "42mm"
    },
    link: ""
  },
  {
    id: 3,
    name: "Pro Performance Running Shoes - Neon Kinetic",
    price: 159.00,
    brand: "Nike",
    category: "Footwear",
    description: "Engineered mesh upper for high breathability, paired with ultra-responsive carbon fiber foam cushioning for peak marathon speed.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    colors: ["#EF4444", "#10B981", "#2563EB"],
    specifications: {
      "Cushioning": "Carbon Foam Matrix",
      "Weight": "210g",
      "Surface": "Road / Track",
      "Closure": "Lace-up"
    },
    link: ""
  },
  {
    id: 4,
    name: "Ergonomic Smart Desk Lamp with Wireless Charging",
    price: 89.99,
    brand: "Lumigen",
    category: "Smart Home",
    description: "Adjustable color temperature, touch slide dimming, eye-friendly zero flicker LED technology, and integrated 15W Qi wireless charger.",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["Standard"],
    colors: ["#FFFFFF", "#0F172A"],
    specifications: {
      "Wireless Output": "15W Fast Charge",
      "Color Temp": "2700K - 6500K",
      "Brightness Levels": "5 Step Dimming"
    },
    link: ""
  },
  {
    id: 5,
    name: "Minimalist Water-Resistant Travel Backpack",
    price: 119.95,
    brand: "Nomad",
    category: "Accessories",
    description: "Crafted with 1000D Cordura ballistic nylon, dedicated padded 16-inch laptop pocket, anti-theft hidden zippers, and trolley sleeve.",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["20L", "28L"],
    colors: ["#334155", "#0F172A"],
    specifications: {
      "Laptop Sleeve": "Fits up to 16-inch",
      "Material": "Waterproof Cordura Nylon",
      "Volume": "25 Liters"
    },
    link: ""
  },
  {
    id: 6,
    name: "Spatial Smart Speaker with Voice Assistant",
    price: 179.99,
    brand: "EchoSound",
    category: "Electronics",
    description: "Room-filling 360-degree acoustics, rich deep bass, multi-room synchronization, and seamless voice assistant integration.",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["Standard"],
    colors: ["#0F172A", "#E2E8F0"],
    specifications: {
      "Drivers": "Dual Tweeters + Subwoofer",
      "Connectivity": "Wi-Fi 6, Bluetooth 5.2, AirPlay 2",
      "Microphones": "Far-field 4-mic Array"
    },
    link: ""
  },
  {
    id: 7,
    name: "Classic Organic Cotton Denim Jacket",
    price: 129.00,
    brand: "Levi",
    category: "Fashion",
    description: "100% sustainable organic denim jacket featuring timeless trucker styling, vintage metal hardware, and dual buttoned chest pockets.",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#2563EB", "#1E293B"],
    specifications: {
      "Material": "100% Organic Denim",
      "Fit": "Regular Fit",
      "Care": "Machine Wash Cold"
    },
    link: ""
  },
  {
    id: 8,
    name: "4K OLED Ultra-Clear Curved Gaming Monitor 34\"",
    price: 899.99,
    brand: "Asus",
    category: "Electronics",
    description: "175Hz refresh rate, 0.03ms response time, HDR10+, and 1800R curved display for immersive high-framerate gameplay.",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["34 Inch"],
    colors: ["#0F172A"],
    specifications: {
      "Resolution": "3440 x 1440 UWQHD",
      "Refresh Rate": "175Hz OLED",
      "Response Time": "0.03ms GTG"
    },
    link: ""
  },
  {
    id: 9,
    name: "Automatic Espresso Machine & Milk Frother",
    price: 499.00,
    brand: "DeLonghi",
    category: "Home & Kitchen",
    description: "19-bar professional Italian pump, integrated burr grinder with 13 grind settings, and automatic micro-foam milk frothing wand.",
    images: [
      "https://images.unsplash.com/photo-1517668808822-9ebe02f2a698?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["Standard"],
    colors: ["#64748B", "#0F172A"],
    specifications: {
      "Pump Pressure": "19 Bar",
      "Bean Hopper": "250g",
      "Water Tank": "1.8L"
    },
    link: ""
  },
  {
    id: 10,
    name: "Polarized Titanium Sunglasses Classic Aviator",
    price: 145.00,
    brand: "RayBan",
    category: "Accessories",
    description: "Ultra-lightweight aerospace titanium frames with UV400 anti-glare polarized glass lenses.",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["Standard"],
    colors: ["#F59E0B", "#0F172A"],
    specifications: {
      "Frame": "Titanium Alloy",
      "UV Protection": "100% UV400",
      "Lens": "Polarized Glass"
    },
    link: ""
  },
  // Adding products 11 through 40 to reach full 40 realistic database items
  {
    id: 11,
    name: "Wireless Mechanical Keyboard RGB Tactile",
    price: 139.99,
    brand: "Keychron",
    category: "Electronics",
    description: "Hot-swappable switches, aluminum body, Bluetooth multi-device sync, and customizable per-key RGB backlighting.",
    images: ["https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"],
    sizes: ["75% Layout", "100% Layout"], colors: ["#1E293B", "#94A3B8"],
    specifications: { "Switches": "Gateron Brown Tactile", "Connectivity": "Bluetooth / Type-C", "Battery": "4000mAh" },
    link: ""
  },
  {
    id: 12,
    name: "Professional Mirrorless Camera 24MP 4K",
    price: 1299.00,
    brand: "Sony",
    category: "Electronics",
    description: "Full-frame sensor, Real-time Eye AF, 5-axis in-body image stabilization, and 4K 60fps video recording.",
    images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80"],
    sizes: ["Body Only", "With 24-70mm Lens"], colors: ["#0F172A"],
    specifications: { "Sensor": "24.2MP Full Frame", "ISO Range": "100-51200", "Video": "4K HDR" },
    link: ""
  },
  {
    id: 13,
    name: "Luxury Silk Pillowcase & Eye Mask Set",
    price: 65.00,
    brand: "Slip",
    category: "Home & Kitchen",
    description: "100% pure Mulberry silk 22 momme, anti-aging, friction-free for smooth hair and skin protection.",
    images: ["https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80"],
    sizes: ["Queen", "King"], colors: ["#F59E0B", "#F8FAFC"],
    specifications: { "Material": "100% Mulberry Silk", "Grade": "6A 22 Momme" },
    link: ""
  },
  {
    id: 14,
    name: "Smart Health Tracker Fitness Band",
    price: 79.99,
    brand: "Fitbit",
    category: "Electronics",
    description: "Continuous heart rate monitoring, SpO2 sensor, sleep score analysis, built-in GPS, and 7-day battery life.",
    images: ["https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&auto=format&fit=crop&q=80"],
    sizes: ["S/M", "L/XL"], colors: ["#10B981", "#0F172A"],
    specifications: { "Display": "AMOLED Touch", "Water Resistance": "50m", "Battery": "7 Days" },
    link: ""
  },
  {
    id: 15,
    name: "Minimalist Ceramic Coffee Mug Set (4 Pcs)",
    price: 45.00,
    brand: "Nordic Home",
    category: "Home & Kitchen",
    description: "Matte glazed stoneware ceramic mugs designed for espresso, cappuccino, and pour-over coffee.",
    images: ["https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80"],
    sizes: ["350ml"], colors: ["#94A3B8", "#1E293B"],
    specifications: { "Material": "High-fired Stoneware", "Microwave Safe": "Yes", "Dishwasher Safe": "Yes" },
    link: ""
  },
  {
    id: 16,
    name: "Air Purifier HEPA H13 True Filter",
    price: 149.00,
    brand: "Levoit",
    category: "Smart Home",
    description: "Captures 99.97% of airborne particles as small as 0.3 microns. Super quiet sleep mode at 24dB.",
    images: ["https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80"],
    sizes: ["Medium Room", "Large Room"], colors: ["#FFFFFF"],
    specifications: { "Filter Type": "H13 True HEPA", "Coverage": "400 sq ft", "Noise Level": "24dB" },
    link: ""
  },
  {
    id: 17,
    name: "Leather Messenger Briefcase Laptop Bag",
    price: 189.00,
    brand: "Fossil",
    category: "Accessories",
    description: "Full-grain vintage brown leather briefcase with brass fittings and detachable padded shoulder strap.",
    images: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80"],
    sizes: ["15-inch"], colors: ["#78350F"],
    specifications: { "Material": "Full Grain Leather", "Laptop Compartment": "Padded 15.6 inch" },
    link: ""
  },
  {
    id: 18,
    name: "Trail Blazer Hiking Boots Waterproof",
    price: 175.00,
    brand: "Columbia",
    category: "Footwear",
    description: "Omni-Tech waterproof breathable membrane with Vibram high-traction rubber lug outsole for rough terrain.",
    images: ["https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&auto=format&fit=crop&q=80"],
    sizes: ["US 9", "US 10", "US 11"], colors: ["#78350F", "#1E293B"],
    specifications: { "Waterproof": "Omni-Tech", "Outsole": "Vibram Rubber", "Weight": "450g" },
    link: ""
  },
  {
    id: 19,
    name: "Ergonomic Mesh Executive Office Chair",
    price: 299.00,
    brand: "Herman Miller",
    category: "Home & Kitchen",
    description: "Breathable 3D mesh backrest, 4D adjustable armrests, dynamic lumbar support, and heavy-duty tilt lock mechanism.",
    images: ["https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?w=800&auto=format&fit=crop&q=80"],
    sizes: ["Standard"], colors: ["#0F172A", "#64748B"],
    specifications: { "Max Capacity": "150kg", "Lumbar Support": "Dynamic Auto-Adjust", "Warranty": "5 Years" },
    link: ""
  },
  {
    id: 20,
    name: "Smart Robotic Vacuum & Mop Cleaner",
    price: 399.00,
    brand: "Roborock",
    category: "Smart Home",
    description: "LiDAR laser navigation, 5000Pa intense suction power, auto dust emptying dock, and smartphone app control.",
    images: ["https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80"],
    sizes: ["Standard"], colors: ["#FFFFFF", "#0F172A"],
    specifications: { "Suction Power": "5000Pa", "Navigation": "LiDAR 3D", "Runtime": "180 Mins" },
    link: ""
  },
  {
    id: 21,
    name: "Wireless Charging Pad Dual Station",
    price: 49.99,
    brand: "Anker",
    category: "Electronics",
    description: "Simultaneously charge your smartphone and earbuds with high-efficiency 15W MagSafe alignment.",
    images: ["https://images.unsplash.com/photo-1622445268465-843d304910cf?w=800&auto=format&fit=crop&q=80"],
    sizes: ["Standard"], colors: ["#0F172A"],
    specifications: { "Total Output": "25W Max", "Safety": "Overcharge Protection" },
    link: ""
  },
  {
    id: 22,
    name: "Stainless Steel Insulated Travel Tumbler 32oz",
    price: 35.00,
    brand: "HydroFlask",
    category: "Accessories",
    description: "Double-wall vacuum insulation keeps cold beverages ice cold for 24 hours or piping hot for 12 hours.",
    images: ["https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80"],
    sizes: ["32 oz", "40 oz"], colors: ["#2563EB", "#10B981", "#EF4444"],
    specifications: { "Insulation": "TempShield Vacuum", "BPA Free": "Yes" },
    link: ""
  },
  {
    id: 23,
    name: "Cashmere Knit Crewneck Sweater",
    price: 160.00,
    brand: "Uniqlo Luxe",
    category: "Fashion",
    description: "Ultra-soft 100% Mongolian cashmere sweater offering exceptional warmth with lightweight comfort.",
    images: ["https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80"],
    sizes: ["S", "M", "L"], colors: ["#94A3B8", "#FEF3C7"],
    specifications: { "Material": "100% Mongolian Cashmere", "Care": "Dry Clean Only" },
    link: ""
  },
  {
    id: 24,
    name: "Acoustic Wooden Ukulele Concert 23 Inch",
    price: 89.00,
    brand: "Kala",
    category: "Accessories",
    description: "Mahogany top, back, and sides with Aquila Super Nylgut strings and smooth rosewood fingerboard.",
    images: ["https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&auto=format&fit=crop&q=80"],
    sizes: ["23 Inch"], colors: ["#78350F"],
    specifications: { "Wood": "Mahogany", "Strings": "Aquila Italian Nylgut" },
    link: ""
  },
  {
    id: 25,
    name: "Smart Security Outdoor Camera 2K Solar",
    price: 129.99,
    brand: "Ring",
    category: "Smart Home",
    description: "Wire-free 2K camera with integrated solar panel, color night vision, motion alert, and 2-way audio.",
    images: ["https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800&auto=format&fit=crop&q=80"],
    sizes: ["Standard"], colors: ["#FFFFFF", "#0F172A"],
    specifications: { "Resolution": "2K HD", "Power": "Solar + Battery Backup" },
    link: ""
  },
  {
    id: 26,
    name: "Non-Stick Cast Iron Dutch Oven Pot 6 Qt",
    price: 99.00,
    brand: "Lodge",
    category: "Home & Kitchen",
    description: "Enameled cast iron delivers flawless heat distribution and heat retention for braising, baking, and stewing.",
    images: ["https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&auto=format&fit=crop&q=80"],
    sizes: ["6 Quart"], colors: ["#EF4444", "#2563EB"],
    specifications: { "Material": "Enameled Cast Iron", "Oven Safe": "Up to 500°F" },
    link: ""
  },
  {
    id: 27,
    name: "Bluetooth Karaoke Wireless Microphone",
    price: 39.99,
    brand: "SingPro",
    category: "Electronics",
    description: "Handheld wireless mic with built-in stereo speaker, voice reverb controls, and LED light show.",
    images: ["https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80"],
    sizes: ["Standard"], colors: ["#F59E0B", "#EF4444"],
    specifications: { "Battery": "2000mAh", "Connectivity": "Bluetooth 5.0" },
    link: ""
  },
  {
    id: 28,
    name: "High-Density Yoga Mat Non-Slip 6mm",
    price: 49.50,
    brand: "Lululemon",
    category: "Accessories",
    description: "Eco-friendly TPE material with double-sided anti-skid texture and alignment lines for perfect posture.",
    images: ["https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&auto=format&fit=crop&q=80"],
    sizes: ["6mm Thick"], colors: ["#10B981", "#2563EB"],
    specifications: { "Thickness": "6mm", "Material": "Eco-TPE Rubber" },
    link: ""
  },
  {
    id: 29,
    name: "Smart Watch Series Ultra GPS 49mm",
    price: 699.00,
    brand: "Apple",
    category: "Electronics",
    description: "Aerospace grade titanium case, dual-frequency precision GPS, 100m water resistance, and action button.",
    images: ["https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80"],
    sizes: ["49mm Titanium"], colors: ["#F8FAFC", "#0F172A"],
    specifications: { "Case": "Titanium", "Water Resistance": "100 Meters", "Battery": "36 Hours" },
    link: ""
  },
  {
    id: 30,
    name: "Classic Suede Leather Chelsea Boots",
    price: 165.00,
    brand: "Clarks",
    category: "Footwear",
    description: "Hand-finished premium suede leather with elastic side goring and comfortable crepe rubber soles.",
    images: ["https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&auto=format&fit=crop&q=80"],
    sizes: ["US 9", "US 10", "US 11"], colors: ["#78350F", "#1E293B"],
    specifications: { "Upper": "Genuine Suede", "Sole": "Crepe Rubber" },
    link: ""
  },
  {
    id: 31,
    name: "Foldable Drone 4K Camera 3-Axis Gimbal",
    price: 549.00,
    brand: "DJI",
    category: "Electronics",
    description: "Ultra-compact drone with 4K video recording, 31-min flight time, OcuSync 10km video transmission range.",
    images: ["https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80"],
    sizes: ["Standard", "Fly More Combo"], colors: ["#94A3B8"],
    specifications: { "Camera": "4K HDR 30fps", "Flight Time": "31 Mins", "Weight": "249g" },
    link: ""
  },
  {
    id: 32,
    name: "Stainless Steel Knife Set with Wooden Block (15 Pcs)",
    price: 119.00,
    brand: "Henckels",
    category: "Home & Kitchen",
    description: "High-carbon German stainless steel blades precision-honed for razor sharpness and long-lasting edge retention.",
    images: ["https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800&auto=format&fit=crop&q=80"],
    sizes: ["15 Piece Set"], colors: ["#78350F"],
    specifications: { "Steel": "German Stainless High Carbon", "Block": "Natural Hardwood" },
    link: ""
  },
  {
    id: 33,
    name: "Retro Vinyl Record Player Turntable",
    price: 139.99,
    brand: "Crosley",
    category: "Electronics",
    description: "3-speed belt-driven turntable housed in a vintage suitcase design with built-in stereo speakers and Bluetooth receiver.",
    images: ["https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=80"],
    sizes: ["Standard"], colors: ["#EF4444", "#0F172A"],
    specifications: { "Speeds": "33 1/3, 45, 78 RPM", "Outputs": "RCA & Headphone Jack" },
    link: ""
  },
  {
    id: 34,
    name: "Waterproof Bluetooth Portable Speaker IPX7",
    price: 89.95,
    brand: "JBL",
    category: "Electronics",
    description: "Bold sound with punchy bass, fully waterproof IPX7 construction for pool parties and outdoor camping.",
    images: ["https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"],
    sizes: ["Compact"], colors: ["#2563EB", "#EF4444", "#0F172A"],
    specifications: { "Waterproof": "IPX7", "Playtime": "12 Hours" },
    link: ""
  },
  {
    id: 35,
    name: "Unisex Oversized Streetwear Hoodie",
    price: 75.00,
    brand: "Essential",
    category: "Fashion",
    description: "Heavyweight 450GSM French Terry cotton hoodie with dropped shoulders and subtle embossed tonal logo.",
    images: ["https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80"],
    sizes: ["S", "M", "L", "XL"], colors: ["#64748B", "#0F172A"],
    specifications: { "Fabric": "450GSM French Terry", "Fit": "Relaxed Oversized" },
    link: ""
  },
  {
    id: 36,
    name: "Precision Electric Coffee Grinder Burr",
    price: 85.00,
    brand: "Baratza",
    category: "Home & Kitchen",
    description: "40 mm conical steel burrs with 40 individual grind adjustment settings for Espresso to French Press.",
    images: ["https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=800&auto=format&fit=crop&q=80"],
    sizes: ["Standard"], colors: ["#0F172A"],
    specifications: { "Burr Type": "Conical Steel", "Grind Settings": "40" },
    link: ""
  },
  {
    id: 37,
    name: "Full HD Portable Projector 1080P WiFi",
    price: 219.00,
    brand: "Anker Nebula",
    category: "Electronics",
    description: "Native 1080p resolution, 500 ANSI Lumens, built-in dual 8W speakers, auto keystone correction and Android OS.",
    images: ["https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop&q=80"],
    sizes: ["Compact"], colors: ["#0F172A"],
    specifications: { "Resolution": "Native 1080p", "Lumens": "500 ANSI", "Screen Size": "Up to 120 Inch" },
    link: ""
  },
  {
    id: 38,
    name: "Polarized Retro Round Sunglasses",
    price: 55.00,
    brand: "Oakley",
    category: "Accessories",
    description: "Vintage round frame architecture paired with HD polarized UV protection lenses for stylish sun protection.",
    images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80"],
    sizes: ["One Size"], colors: ["#78350F", "#0F172A"],
    specifications: { "Protection": "UV400 Polarized", "Frame": "Acetate" },
    link: ""
  },
  {
    id: 39,
    name: "Ergonomic Vertical Wireless Mouse",
    price: 39.99,
    brand: "Logitech",
    category: "Electronics",
    description: "Scientifically engineered 57-degree vertical posture reduces wrist strain and forearm muscle fatigue.",
    images: ["https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80"],
    sizes: ["Right Handed"], colors: ["#1E293B"],
    specifications: { "DPI": "4000 Adjustable", "Connectivity": "Bluetooth / Logi Bolt" },
    link: ""
  },
  {
    id: 40,
    name: "Luxury Scented Soy Candle Trio Set",
    price: 42.00,
    brand: "Diptyque",
    category: "Home & Kitchen",
    description: "Hand-poured 100% natural soy wax candles infused with essential oils of Sandalwood, Fig, and Amber.",
    images: ["https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80"],
    sizes: ["Set of 3"], colors: ["#F8FAFC"],
    specifications: { "Wax": "100% Natural Soy", "Burn Time": "50 Hours Each" },
    link: ""
  }
];