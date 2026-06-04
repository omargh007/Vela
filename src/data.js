export const C = {
  ink:'#111111', canvas:'#ffffff', cloud:'#f5f5f5',
  aloe:'#c1fbd4', pistachio:'#d4f9e0',
  mute:'#707072', stone:'#9e9ea0', hairline:'#e5e5e5', sale:'#d30005',
}

export const CAT_META = {
  clothes: { id:'clothes', label:'Clothes', tagline:'Dress the way you feel', icon:'👗', color:'#111111', accent:'#c1fbd4', subcategories:[{id:'all',label:'All Clothes'},{id:'dresses',label:'Dresses'},{id:'tops',label:'Tops'},{id:'bottoms',label:'Bottoms'},{id:'outerwear',label:'Outerwear'},{id:'activewear',label:'Activewear'}] },
  shoes:   { id:'shoes', label:'Shoes', tagline:'Step into style', icon:'👟', color:'#1a1209', accent:'#f5d87a', subcategories:[{id:'all',label:'All Shoes'},{id:'sneakers',label:'Sneakers'},{id:'boots',label:'Boots'},{id:'heels',label:'Heels'},{id:'sandals',label:'Sandals'}] },
  electronics: { id:'electronics', label:'Electronics', tagline:'Tech for every life', icon:'📱', color:'#0a0a1a', accent:'#7ecfff', subcategories:[{id:'all',label:'All Electronics'},{id:'smartphones',label:'Smartphones'},{id:'laptops',label:'Laptops & PCs'},{id:'headphones',label:'Headphones'},{id:'tablets',label:'Tablets'},{id:'accessories',label:'Accessories'}] },
  beauty:  { id:'beauty', label:'Beauty', tagline:'Glow your way', icon:'✨', color:'#1e0a1f', accent:'#f9a8d4', subcategories:[{id:'all',label:'All Beauty'},{id:'skincare',label:'Skincare'},{id:'makeup',label:'Makeup'},{id:'haircare',label:'Haircare'},{id:'fragrance',label:'Fragrance'},{id:'wellness',label:'Wellness'}] },
  home:    { id:'home', label:'Home & Living', tagline:'Make every space yours', icon:'🏡', color:'#0a1a0a', accent:'#86efac', subcategories:[{id:'all',label:'All Home & Living'},{id:'furniture',label:'Furniture'},{id:'kitchen',label:'Kitchen'},{id:'decor',label:'Décor'},{id:'bedding',label:'Bedding'},{id:'lighting',label:'Lighting'}] },
  sports:  { id:'sports', label:'Sports & Outdoors', tagline:'Fuel your grind', icon:'⚡', color:'#1a1200', accent:'#fde68a', subcategories:[{id:'all',label:'All Sports'},{id:'fitness',label:'Fitness'},{id:'outdoor',label:'Outdoor'},{id:'cycling',label:'Cycling'},{id:'swimming',label:'Swimming'},{id:'team',label:'Team Sports'}] },
  toys:    { id:'toys', label:'Toys & Kids', tagline:'Fun for every age', icon:'🎮', color:'#14002a', accent:'#d8b4fe', subcategories:[{id:'all',label:'All Toys & Kids'},{id:'toys',label:'Toys'},{id:'baby',label:'Baby Essentials'},{id:'games',label:'Board Games'},{id:'education',label:'Education'},{id:'outdoor',label:'Outdoor Play'}] },
  food:    { id:'food', label:'Food & Grocery', tagline:'Fresh delivered daily', icon:'🍃', color:'#1a0800', accent:'#fdba74', subcategories:[{id:'all',label:'All Food & Grocery'},{id:'snacks',label:'Snacks'},{id:'beverages',label:'Beverages'},{id:'pantry',label:'Pantry'},{id:'fresh',label:'Fresh & Organic'},{id:'bakery',label:'Bakery'}] },
}

export const VENDORS = [
  { id:'v1', name:'SoleMate Studio',   rating:4.8, totalSales:1240, revenue:42800,  orders:87,  cats:['shoes','clothes'],  verified:true  },
  { id:'v2', name:'Urban Threads',     rating:4.6, totalSales: 890, revenue:31200,  orders:54,  cats:['clothes','shoes'],  verified:true  },
  { id:'v3', name:'Minimal Co.',       rating:4.9, totalSales:2100, revenue:98400,  orders:132, cats:['clothes'],          verified:true  },
  { id:'v4', name:'TechHub Store',     rating:4.7, totalSales:3400, revenue:284000, orders:210, cats:['electronics'],      verified:true  },
  { id:'v5', name:'Glow Beauty Co.',   rating:4.8, totalSales:1890, revenue:62400,  orders:156, cats:['beauty'],           verified:true  },
  { id:'v6', name:'Home Nook',         rating:4.5, totalSales: 720, revenue:88600,  orders:48,  cats:['home'],             verified:false },
  { id:'v7', name:'ActiveEdge Sports', rating:4.7, totalSales:1560, revenue:95200,  orders:104, cats:['sports'],           verified:true  },
  { id:'v8', name:'PlayWorld Kids',    rating:4.9, totalSales: 980, revenue:41300,  orders:87,  cats:['toys'],             verified:true  },
  { id:'v9', name:'FreshMart',         rating:4.4, totalSales: 640, revenue:28900,  orders:72,  cats:['food'],             verified:false },
]

export const MY_VENDOR_ID = 'v1'

export const PRODUCTS = [
  { id:1,  cat:'clothes', sub:'dresses',     name:'Scarlet Midi Dress',      label:"Women's Dress",          price:55.00,   orig:90.00,   colors:['#c0392b','#111111','#e8b0a0'],           badge:'Best Seller', image:'/images/red-dress.png',      vendorId:'v2' },
  { id:2,  cat:'clothes', sub:'dresses',     name:'Camel Wrap Dress',        label:"Women's Dress",          price:68.00,   orig:null,    colors:['#c8a870','#8b6914','#111111'],           badge:'New In',      image:'/images/camel-dress.png',    vendorId:'v3' },
  { id:3,  cat:'clothes', sub:'bottoms',     name:'Red Mini Skirt',          label:"Women's Bottom",         price:38.00,   orig:55.00,   colors:['#c0392b','#111111','#e8b0a0'],           badge:'Sale',        image:'/images/red-skirt.png',      vendorId:'v1' },
  { id:4,  cat:'clothes', sub:'outerwear',   name:'Tailored Power Suit',     label:"Women's Outerwear",      price:189.00,  orig:250.00,  colors:['#2a2a2a','#111111','#4a4a4a'],           badge:'Trending',    image:'/images/suit.png',           vendorId:'v3' },
  { id:5,  cat:'clothes', sub:'bottoms',     name:'Wide Leg Jeans',          label:"Women's Bottoms",        price:75.00,   orig:null,    colors:['#4a6080','#2a4060','#111111'],           badge:'New In',      image:'/images/jeans.png',          vendorId:'v1' },
  { id:6,  cat:'clothes', sub:'activewear',  name:'Full Sports Set',         label:"Women's Activewear",     price:89.00,   orig:120.00,  colors:['#111111','#2a2a2a','#4a4a4a'],           badge:'Sale',        image:'/images/sports-wear.png',    vendorId:'v2' },
  { id:7,  cat:'clothes', sub:'tops',        name:'Floral Chiffon Blouse',   label:"Women's Top",            price:42.00,   orig:null,    colors:['#ffffff','#f0e8d8','#c8d0e0'],           badge:'Trending',    image:'/images/blouse.png',         vendorId:'v3' },
  { id:8,  cat:'shoes',   sub:'sneakers',    name:'Air Mesh Runner',         label:"Men's Sneaker",          price:89.99,   orig:120.00,  colors:['#c0c0c0','#111111','#d4c4a0'],           badge:'Best Seller', image:'/images/grey-shoes.png',     vendorId:'v1' },
  { id:9,  cat:'shoes',   sub:'sneakers',    name:'Court Classic White',     label:'Unisex Sneaker',         price:65.00,   orig:null,    colors:['#ffffff','#c8c8c8','#e8e0d0'],           badge:'New In',      image:'/images/white-shoes.png',    vendorId:'v1' },
  { id:10, cat:'shoes',   sub:'boots',       name:'Chelsea Leather Boot',    label:"Women's Boot",           price:125.00,  orig:160.00,  colors:['#8b6914','#5a3a1a','#c8a870'],           badge:'Sale',        image:'/images/brown-boots.png',    vendorId:'v2' },
  { id:11, cat:'shoes',   sub:'boots',       name:'Black Ankle Boot',        label:"Women's Boot",           price:98.00,   orig:null,    colors:['#111111','#2a2a2a','#444444'],           badge:null,          image:'/images/black-boots.png',    vendorId:'v2' },
  { id:12, cat:'electronics', sub:'smartphones', name:'ProX 15 Titanium',   label:'Flagship Smartphone',    price:999.00,  orig:null,    colors:['#2d2d2d','#e8e0d4','#1a3a5c'],          badge:'New In',      image:null, emoji:'📱', cardColor:'#0a0a1a', vendorId:'v4' },
  { id:13, cat:'electronics', sub:'laptops',     name:'UltraBook Air 15',   label:'Thin & Light Laptop',    price:1199.00, orig:1499.00, colors:['#c0c0c0','#1a1a1a','#d4c8b8'],          badge:'Sale',        image:null, emoji:'💻', cardColor:'#111827', vendorId:'v4' },
  { id:14, cat:'electronics', sub:'headphones',  name:'NoiseShield Pro',    label:'Wireless ANC Headphones',price:299.00,  orig:349.00,  colors:['#111111','#c8c8c8','#1a3a2a'],          badge:'Best Seller', image:null, emoji:'🎧', cardColor:'#1a0a0a', vendorId:'v4' },
  { id:15, cat:'electronics', sub:'tablets',     name:'PadMax 12 Ultra',    label:'Pro Tablet',             price:849.00,  orig:null,    colors:['#2d2d2d','#c8c8c8'],                    badge:'Trending',    image:'/images/pad-12-ultra.png',   vendorId:'v4' },
  { id:16, cat:'electronics', sub:'accessories', name:'MagCharge Pad Duo',  label:'Wireless Charger',       price:49.00,   orig:65.00,   colors:['#111111','#f5f5f5'],                    badge:'Sale',        image:null, emoji:'🔋', cardColor:'#0d0d1a', vendorId:'v4' },
  { id:17, cat:'beauty', sub:'skincare',     name:'Glow Vitamin C Serum',    label:'Brightening Serum',      price:38.00,   orig:55.00,   colors:['#f5d5a0','#ffecd2','#fff3e0'],          badge:'Best Seller', image:'/images/serum.png',          vendorId:'v5' },
  { id:18, cat:'beauty', sub:'makeup',       name:'Velvet Lip Palette',      label:'12-Shade Lip Set',       price:24.00,   orig:null,    colors:['#c0392b','#e8a0a0','#8b1a1a','#d4587a'],badge:'Trending',    image:'/images/palette.png',        vendorId:'v5' },
  { id:19, cat:'beauty', sub:'haircare',     name:'Argan Repair Hair Mask',  label:'Deep Conditioning Mask', price:22.00,   orig:32.00,   colors:['#d4a870','#8b6914'],                    badge:'Sale',        image:null, emoji:'💆', cardColor:'#1a0e05', vendorId:'v5' },
  { id:20, cat:'beauty', sub:'fragrance',    name:'Fleur Noir EDP',          label:'Eau de Parfum 50ml',     price:89.00,   orig:115.00,  colors:['#2d1b2e','#8b6914','#c0392b'],          badge:'New In',      image:null, emoji:'🌸', cardColor:'#1a0520', vendorId:'v5' },
  { id:21, cat:'beauty', sub:'wellness',     name:'Collagen Glow Drops',     label:'Daily Supplement Serum', price:45.00,   orig:null,    colors:['#f9a8d4','#fde68a'],                    badge:'New In',      image:null, emoji:'💊', cardColor:'#200015', vendorId:'v5' },
  { id:22, cat:'home', sub:'lighting',       name:'Arc Glow Floor Lamp',     label:'Adjustable LED Lamp',    price:79.00,   orig:110.00,  colors:['#d4c8a0','#111111','#c8b878'],          badge:'Sale',        image:null, emoji:'💡', cardColor:'#0a1a0a', vendorId:'v6' },
  { id:23, cat:'home', sub:'kitchen',        name:'Cast Iron Dutch Oven',    label:'5.5qt Enameled',         price:95.00,   orig:130.00,  colors:['#c0392b','#1a1a1a','#2a5080'],          badge:'Best Seller', image:null, emoji:'🍲', cardColor:'#1a0800', vendorId:'v6' },
  { id:24, cat:'home', sub:'bedding',        name:'French Linen Duvet Set',  label:'King / Queen Bedding',   price:135.00,  orig:null,    colors:['#f0e8d8','#c8c8c8','#d4c8b0','#4a6080'],badge:'New In',      image:null, emoji:'🛏️', cardColor:'#0d1a10', vendorId:'v6' },
  { id:25, cat:'home', sub:'furniture',      name:'Modular Oak Shelf',       label:'Wall-Mounted Bookshelf', price:265.00,  orig:320.00,  colors:['#c8a870','#8b6914','#111111'],          badge:'Trending',    image:null, emoji:'📚', cardColor:'#120e05', vendorId:'v6' },
  { id:26, cat:'home', sub:'decor',          name:'Ceramic Vase Trio',       label:'Minimalist Home Décor',  price:48.00,   orig:null,    colors:['#f5f0e8','#c8a870','#4a6080'],          badge:null,          image:null, emoji:'🏺', cardColor:'#0a1808', vendorId:'v6' },
  { id:27, cat:'sports', sub:'fitness',      name:'Adjustable Dumbbell 40lb',label:'Home Gym Essential',     price:149.00,  orig:185.00,  colors:['#1a1a1a','#c0c0c0'],                    badge:'Sale',        image:null, emoji:'🏋️', cardColor:'#1a1200', vendorId:'v7' },
  { id:28, cat:'sports', sub:'outdoor',      name:'Trail Backpack 30L',      label:'Waterproof Hiking Pack', price:85.00,   orig:null,    colors:['#2a5030','#1a1a1a','#8b4513'],          badge:'Best Seller', image:null, emoji:'🎒', cardColor:'#0a1200', vendorId:'v7' },
  { id:29, cat:'sports', sub:'cycling',      name:'Carbon Road Helmet',      label:'MIPS Safety Certified',  price:98.00,   orig:130.00,  colors:['#1a1a1a','#c8c8c8','#c0392b'],          badge:'Sale',        image:null, emoji:'🚴', cardColor:'#1a0e00', vendorId:'v7' },
  { id:30, cat:'sports', sub:'swimming',     name:'Pro Swim Goggles',        label:'Anti-Fog UV Protection', price:32.00,   orig:45.00,   colors:['#1a3a6c','#c0392b','#111111'],          badge:'Trending',    image:null, emoji:'🏊', cardColor:'#001a1a', vendorId:'v7' },
  { id:31, cat:'sports', sub:'fitness',      name:'Resistance Band Set',     label:'5-Level Training Bands', price:28.00,   orig:null,    colors:['#c0392b','#e8a030','#2a8060','#1a3a8c','#111111'], badge:'New In', image:null, emoji:'🏃', cardColor:'#1a1000', vendorId:'v7' },
  { id:32, cat:'toys',   sub:'toys',         name:'Creator Building Set',    label:'450-Piece STEM Toy',     price:58.00,   orig:null,    colors:['#e8d030','#c0392b','#2a4a8c','#2a8060'], badge:'Best Seller', image:null, emoji:'🧱', cardColor:'#14002a', vendorId:'v8' },
  { id:33, cat:'toys',   sub:'baby',         name:'Smart Baby Monitor',      label:'HD Video + Night Vision',price:139.00,  orig:175.00,  colors:['#f5f5f5','#c8c8c8'],                    badge:'Sale',        image:null, emoji:'👶', cardColor:'#1a0a2a', vendorId:'v8' },
  { id:34, cat:'toys',   sub:'games',        name:'Wooden Chess Set Pro',    label:'Luxury Board Game',      price:55.00,   orig:75.00,   colors:['#c8a870','#8b6914'],                    badge:'Trending',    image:null, emoji:'♟️', cardColor:'#0e0020', vendorId:'v8' },
  { id:35, cat:'toys',   sub:'education',    name:'Robotics Coding Kit',     label:'Ages 8+ STEM Education', price:72.00,   orig:95.00,   colors:['#c0392b','#1a1a1a','#2a8060'],          badge:'Sale',        image:null, emoji:'🤖', cardColor:'#16002e', vendorId:'v8' },
  { id:36, cat:'food',   sub:'beverages',    name:'Single Origin Coffee',    label:'Specialty Roast 250g',   price:22.00,   orig:null,    colors:['#4a2010','#8b4513','#c8a070'],          badge:'New In',      image:null, emoji:'☕', cardColor:'#1a0800', vendorId:'v9' },
  { id:37, cat:'food',   sub:'snacks',       name:'Organic Snack Box',       label:'20 Healthy Snacks',      price:38.00,   orig:48.00,   colors:['#2a8060','#e8a030','#c0392b'],          badge:'Sale',        image:null, emoji:'🥜', cardColor:'#1a0500', vendorId:'v9' },
  { id:38, cat:'food',   sub:'pantry',       name:'Premium Olive Oil Trio',  label:'Cold-Pressed EVOO',      price:52.00,   orig:null,    colors:['#c8a870','#4a7830','#1a1a1a'],          badge:'Trending',    image:null, emoji:'🫒', cardColor:'#0a1200', vendorId:'v9' },
  { id:39, cat:'food',   sub:'fresh',        name:'Herb Garden Starter',     label:'6-Pot Indoor Kit',       price:34.00,   orig:45.00,   colors:['#2a7030','#4a9040','#1a4020'],          badge:'Best Seller', image:null, emoji:'🌿', cardColor:'#0a1800', vendorId:'v9' },
]

export const RECENT_ORDERS = [
  { id:'#VL-4821', product:'Air Mesh Runner',       customer:'Sarah M.', date:'Jun 2, 2025',  amount:'$89.99',  status:'Shipped',    sc:'#22c55e' },
  { id:'#VL-4820', product:'ProX 15 Titanium',      customer:'James K.', date:'Jun 2, 2025',  amount:'$999.00', status:'Processing', sc:'#eab308' },
  { id:'#VL-4817', product:'Glow Vitamin C Serum',  customer:'Lena R.',  date:'Jun 1, 2025',  amount:'$38.00',  status:'Delivered',  sc:'#3b82f6' },
  { id:'#VL-4815', product:'Wide Leg Jeans',        customer:'Aiko T.',  date:'Jun 1, 2025',  amount:'$75.00',  status:'Shipped',    sc:'#22c55e' },
  { id:'#VL-4811', product:'Floral Chiffon Blouse', customer:'Priya S.', date:'May 31, 2025', amount:'$42.00',  status:'Delivered',  sc:'#3b82f6' },
  { id:'#VL-4808', product:'Cast Iron Dutch Oven',  customer:'Marco D.', date:'May 31, 2025', amount:'$95.00',  status:'Shipped',    sc:'#22c55e' },
  { id:'#VL-4805', product:'Creator Building Set',  customer:'Nina L.',  date:'May 30, 2025', amount:'$58.00',  status:'Delivered',  sc:'#3b82f6' },
]