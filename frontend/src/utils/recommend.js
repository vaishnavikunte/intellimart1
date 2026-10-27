import { getDataset } from "../data/generateDataset.js";

const COMPLEMENTARY_MAP = {
  "Computers & Accessories": ["Electronics", "Office Products"],
  "Electronics": ["Computers & Accessories", "Musical Instruments", "Car & Motorbike"],
  "Home & Kitchen": ["Home Improvement", "Health & Personal Care"],
  "Office Products": ["Computers & Accessories", "Electronics"],
  "Musical Instruments": ["Electronics", "Computers & Accessories"],
  "Home Improvement": ["Home & Kitchen", "Car & Motorbike"],
  "Toys & Games": ["Electronics", "Computers & Accessories"],
  "Car & Motorbike": ["Electronics", "Home Improvement"],
  "Health & Personal Care": ["Home & Kitchen", "Electronics"],
};

// Curated smart recommendation mock array with 100% accurate, context-matched Unsplash image URLs
export const SMART_RECOMMENDATIONS_MOCK = [
  {
    productId: "REC-0001",
    productName: "Pigeon 750W Mixer Grinder (Pro)",
    category: "Home & Kitchen",
    subCategory: "Small Kitchen Appliances",
    brand: "Pigeon",
    actualPrice: 4295,
    discountedPrice: 2019,
    discountPercentage: 53.0,
    rating: 4.6,
    ratingCount: 14820,
    categoryIcon: "Coffee",
    categoryColor: "from-amber-400 to-orange-500",
    imageUrl: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&auto=format&fit=crop&q=80",
    description: "High-performance Pigeon 750W Mixer Grinder with 3 stainless steel jars.",
  },
  {
    productId: "REC-0002",
    productName: "Borosil 750W Mixer Grinder (Ultra)",
    category: "Home & Kitchen",
    subCategory: "Small Kitchen Appliances",
    brand: "Borosil",
    actualPrice: 4990,
    discountedPrice: 2595,
    discountPercentage: 48.0,
    rating: 4.5,
    ratingCount: 9230,
    categoryIcon: "Coffee",
    categoryColor: "from-amber-400 to-orange-500",
    imageUrl: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    description: "Modern food processor appliance by Borosil with copper motor.",
  },
  {
    productId: "REC-0003",
    productName: "Wonderchef Borosilicate Glass Airtight Food Storage Containers",
    category: "Home & Kitchen",
    subCategory: "Kitchen Storage",
    brand: "Wonderchef",
    actualPrice: 2200,
    discountedPrice: 1210,
    discountPercentage: 45.0,
    rating: 4.7,
    ratingCount: 11450,
    categoryIcon: "Coffee",
    categoryColor: "from-amber-400 to-orange-500",
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
    description: "Wonderchef premium borosilicate glass airtight food storage containers.",
  },
  {
    productId: "REC-0004",
    productName: "Kent Electric Hand Blender 300W with Stainless Steel Blades",
    category: "Home & Kitchen",
    subCategory: "Small Kitchen Appliances",
    brand: "Kent",
    actualPrice: 1999,
    discountedPrice: 1159,
    discountPercentage: 42.0,
    rating: 4.4,
    ratingCount: 8320,
    categoryIcon: "Coffee",
    categoryColor: "from-amber-400 to-orange-500",
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80",
    description: "Electric immersion hand blender by Kent with stainless steel blades.",
  },
  {
    productId: "REC-0005",
    productName: "Cello Electric Milk Frother & Handheld Drink Whisk",
    category: "Home & Kitchen",
    subCategory: "Coffee & Tea Makers",
    brand: "Cello",
    actualPrice: 899,
    discountedPrice: 405,
    discountPercentage: 55.0,
    rating: 4.6,
    ratingCount: 16500,
    categoryIcon: "Coffee",
    categoryColor: "from-amber-400 to-orange-500",
    imageUrl: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80",
    description: "Cello electric milk frother and handheld drink whisk.",
  },
  {
    productId: "REC-0006",
    productName: "Lapster 1080p Full HD Pro Streaming Webcam",
    category: "Computers & Accessories",
    subCategory: "Laptop Accessories",
    brand: "Lapster",
    actualPrice: 2499,
    discountedPrice: 1199,
    discountPercentage: 52.0,
    rating: 4.5,
    ratingCount: 12100,
    categoryIcon: "Laptop",
    categoryColor: "from-fuchsia-500 to-pink-500",
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
    description: "Lapster 1080p Full HD Pro streaming webcam with privacy shutter.",
  },
  {
    productId: "REC-0007",
    productName: "Syncwire LTG to USB Cable / Fast Chargers",
    category: "Computers & Accessories",
    subCategory: "Networking & Cables",
    brand: "Syncwire",
    actualPrice: 999,
    discountedPrice: 399,
    discountPercentage: 60.0,
    rating: 4.8,
    ratingCount: 28400,
    categoryIcon: "Laptop",
    categoryColor: "from-fuchsia-500 to-pink-500",
    imageUrl: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80",
    description: "Durable nylon braided Syncwire fast charging cable.",
  },
  {
    productId: "REC-0008",
    productName: "Amazon Basics Wireless Mouse",
    category: "Computers & Accessories",
    subCategory: "Keyboards & Mice",
    brand: "Amazon Basics",
    actualPrice: 899,
    discountedPrice: 449,
    discountPercentage: 50.0,
    rating: 4.4,
    ratingCount: 42100,
    categoryIcon: "Laptop",
    categoryColor: "from-fuchsia-500 to-pink-500",
    imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80",
    description: "Amazon Basics ergonomic 2.4GHz wireless mouse.",
  },
  {
    productId: "REC-0009",
    productName: "Sony Bravia 65 inches 4K Smart TV",
    category: "Electronics",
    subCategory: "Smart Televisions",
    brand: "Sony",
    actualPrice: 89990,
    discountedPrice: 58493,
    discountPercentage: 35.0,
    rating: 4.8,
    ratingCount: 18500,
    categoryIcon: "Tv",
    categoryColor: "from-cyan-400 to-blue-500",
    imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&auto=format&fit=crop&q=80",
    description: "Sony Bravia 65 inches 4K Ultra HD Smart LED Google TV.",
  },
  {
    productId: "REC-0010",
    productName: "Fire-Boltt Ninja Call Pro Smartwatch",
    category: "Electronics",
    subCategory: "Wearables & Smartwatches",
    brand: "Fire-Boltt",
    actualPrice: 3999,
    discountedPrice: 1399,
    discountPercentage: 65.0,
    rating: 4.7,
    ratingCount: 35200,
    categoryIcon: "Tv",
    categoryColor: "from-cyan-400 to-blue-500",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    description: "Fire-Boltt Ninja Call Pro Smartwatch with Bluetooth calling.",
  },
];

export function getRecommendations({
  lastAddedCategory = null,
  cartProductIds = [],
  count = 4,
  offset = 0,
}) {
  const { products } = getDataset();
  if (!products || products.length === 0) {
    return SMART_RECOMMENDATIONS_MOCK.slice(0, count);
  }

  const excludedIds = new Set(cartProductIds || []);

  // Filter out products already in cart
  const available = products.filter((p) => !excludedIds.has(p.productId));

  if (!lastAddedCategory) {
    // When cart is empty, pick top-rated high-engagement products
    const sorted = [...available].sort((a, b) => b.rating - a.rating || b.ratingCount - a.ratingCount);
    const start = (offset * count) % Math.max(1, sorted.length - count);
    return sorted.slice(start, start + count);
  }

  // Find complementary categories
  const complementaryCategories = COMPLEMENTARY_MAP[lastAddedCategory] || [];
  const targetCategories = [lastAddedCategory, ...complementaryCategories];

  // Candidates in target categories
  const matched = available.filter((p) => targetCategories.includes(p.category));

  // Sort candidates by match priority:
  // 1. Same category first, then complementary
  // 2. High rating and review count
  matched.sort((a, b) => {
    const aSame = a.category === lastAddedCategory ? 1 : 0;
    const bSame = b.category === lastAddedCategory ? 1 : 0;
    if (aSame !== bSame) return bSame - aSame;
    return b.rating - a.rating || b.ratingCount - a.ratingCount;
  });

  const start = (offset * count) % Math.max(1, matched.length - count);
  const result = matched.slice(start, start + count);

  // If fewer than count, pad with highest-rated available
  if (result.length < count) {
    const pad = available
      .filter((p) => !result.some((r) => r.productId === p.productId))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, count - result.length);
    return [...result, ...pad];
  }

  return result;
}
