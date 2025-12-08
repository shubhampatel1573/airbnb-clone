const sampleListing = [
  {
    title: "Mountain Escape",
    description: "A peaceful retreat surrounded by scenic mountains.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: 120,
    location: "Manali",
    country: "India"
  },
  {
    title: "City Center Apartment",
    description: "Modern apartment in the heart of the city.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 90,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Beachside Villa",
    description: "Luxury villa with oceanfront view.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    price: 200,
    location: "Goa",
    country: "India"
  },
  {
    title: "Cozy Cabin",
    description: "Hidden cabin perfect for a quiet getaway.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    price: 110,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Lakeview Cottage",
    description: "Cottage overlooking a beautiful lake.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
    price: 150,
    location: "Nainital",
    country: "India"
  },
  {
    title: "Luxury Penthouse",
    description: "Top-floor penthouse with skyline view.",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    price: 300,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Forest Hut",
    description: "Secluded hut surrounded by dense jungle.",
    image: "https://images.unsplash.com/photo-1508182311256-e3f7d4a9e86d",
    price: 70,
    location: "Meghalaya",
    country: "India"
  },
  {
    title: "Riverside House",
    description: "House located beside a beautiful river.",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    price: 130,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Heritage Haveli",
    description: "Traditional haveli with royal architecture.",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
    price: 250,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Desert Camp",
    description: "Experience desert life with luxury tents.",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f0",
    price: 140,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Snow Peak Lodge",
    description: "Lodge at high altitude with snow-covered peaks.",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db511aa",
    price: 170,
    location: "Gulmarg",
    country: "India"
  },
  {
    title: "Cultural Retreat",
    description: "Stay connected to local traditions and culture.",
    image: "https://images.unsplash.com/photo-1526057565006-28e3c9c2f805",
    price: 80,
    location: "Varanasi",
    country: "India"
  },
  {
    title: "Modern Studio",
    description: "Stylish studio perfect for single travelers.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 60,
    location: "Pune",
    country: "India"
  },
  {
    title: "Rafting Camp",
    description: "Adventure-filled stay with river rafting.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    price: 100,
    location: "Haridwar",
    country: "India"
  },
  {
    title: "Himalayan Home",
    description: "Traditional home in the lap of the Himalayas.",
    image: "https://images.unsplash.com/photo-1500048993959-d23a436266cf",
    price: 95,
    location: "Kullu",
    country: "India"
  },
  {
    title: "Farmstay Cottage",
    description: "Experience village life with comfort.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 85,
    location: "Nashik",
    country: "India"
  },
  {
    title: "Skyline Hotel Room",
    description: "Hotel room with panoramic city views.",
    image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a",
    price: 180,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "Luxury Treehouse",
    description: "Stay among the trees in a luxury setup.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    price: 190,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Backwater Resort",
    description: "Resort surrounded by serene backwaters.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 220,
    location: "Alleppey",
    country: "India"
  },
  {
    title: "Hilltop Bungalow",
    description: "Bungalow located on a peaceful hilltop.",
    image: "https://images.unsplash.com/photo-1438109491414-7198515b166b",
    price: 160,
    location: "Ooty",
    country: "India"
  },
  {
    title: "Countryside Villa",
    description: "Large villa surrounded by greenery.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    price: 200,
    location: "Mysore",
    country: "India"
  },
  {
    title: "Island Cottage",
    description: "Cottage on a peaceful island location.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 230,
    location: "Andaman",
    country: "India"
  },
  {
    title: "Historic Fort Stay",
    description: "Live inside a 200-year-old historic fort.",
    image: "https://images.unsplash.com/photo-1544986581-efac024faf62",
    price: 260,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Tea Garden Retreat",
    description: "Stay near beautiful tea gardens.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    price: 140,
    location: "Assam",
    country: "India"
  }
]

module.exports = {data: sampleListing};