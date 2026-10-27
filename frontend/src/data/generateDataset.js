import { SeededRandom } from "../utils/seededRandom.js";
import { CATEGORIES } from "./categories.js";

const SEED = 20261022;

export function getContextMatchedImageUrl(productName, category, brand, subCategory, defaultIndex = 0) {
  const name = (productName || "").toLowerCase();

  // 1. Pigeon 750W Mixer Grinder (Pro) - Kitchen Blender / Mixer Grinder
  if (name.includes("pigeon") && (name.includes("mixer") || name.includes("grinder") || name.includes("blender"))) {
    return "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&auto=format&fit=crop&q=80";
  }

  // 2. Borosil 750W Mixer Grinder (Ultra) - Modern Food Processor / Appliance
  if (name.includes("borosil") && (name.includes("mixer") || name.includes("grinder") || name.includes("blender"))) {
    return "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80";
  }

  // 3. Wonderchef Borosilicate Glass Airtight Food Storage Containers - Glass Meal Prep Containers / Storage Jars
  if (
    (name.includes("wonderchef") && (name.includes("container") || name.includes("storage") || name.includes("borosilicate"))) ||
    (name.includes("borosilicate glass") && (name.includes("container") || name.includes("jar") || name.includes("storage"))) ||
    (name.includes("food storage") && name.includes("container"))
  ) {
    return "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80";
  }

  // 4. Kent Electric Hand Blender 300W with Stainless Steel Blades - Electric Immersion Hand Blender
  if (
    (name.includes("kent") && name.includes("blender")) ||
    name.includes("hand blender") ||
    name.includes("immersion blender")
  ) {
    return "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80";
  }

  // 5. Cello Electric Milk Frother & Handheld Drink Whisk - Foam Frother / Coffee Whisk
  if (
    (name.includes("cello") && (name.includes("frother") || name.includes("whisk"))) ||
    name.includes("milk frother") ||
    name.includes("drink whisk") ||
    name.includes("frother")
  ) {
    return "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80";
  }

  // 6. Lapster 1080p Full HD Pro Streaming Webcam - HD Web Camera
  if (
    (name.includes("lapster") && (name.includes("webcam") || name.includes("camera"))) ||
    name.includes("webcam") ||
    name.includes("streaming webcam")
  ) {
    return "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80";
  }

  // 7. Syncwire LTG to USB Cable / Fast Chargers - USB Cable
  if (
    name.includes("syncwire") ||
    (name.includes("cable") && (name.includes("lightning") || name.includes("usb") || name.includes("charging"))) ||
    name.includes("fast charger") ||
    name.includes("gan fast charger")
  ) {
    return "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80";
  }

  // 8. Amazon Basics Wireless Mouse - Wireless Mouse
  if (
    (name.includes("amazon basics") && name.includes("mouse")) ||
    name.includes("optical mouse") ||
    name.includes("wireless mouse") ||
    name.includes("ergonomic wireless") ||
    name.includes("mouse")
  ) {
    return "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80";
  }

  // 9. Sony Bravia 65 inches 4K Smart TV - 4K Television
  if (
    (name.includes("sony") && (name.includes("tv") || name.includes("bravia") || name.includes("television"))) ||
    name.includes("smart led tv") ||
    name.includes("4k ultra hd") ||
    name.includes("smart television") ||
    name.includes("tv")
  ) {
    return "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&auto=format&fit=crop&q=80";
  }

  // 10. Fire-Boltt Ninja Call Pro Smartwatch - Smartwatch
  if (
    (name.includes("fire-boltt") && (name.includes("watch") || name.includes("ninja"))) ||
    name.includes("smartwatch") ||
    name.includes("smart watch")
  ) {
    return "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80";
  }

  // Fallbacks for other kitchen & home items (NO coffee beans, NO tote bags!)
  if (name.includes("mixer") || name.includes("grinder") || name.includes("blender")) {
    return "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&auto=format&fit=crop&q=80";
  }
  if (name.includes("container") || name.includes("storage jar") || name.includes("food storage")) {
    return "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80";
  }
  if (name.includes("cooktop") || name.includes("induction") || name.includes("tawa") || name.includes("cookware")) {
    return "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80";
  }
  if (name.includes("kettle")) {
    return "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80";
  }
  if (name.includes("toaster")) {
    return "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80";
  }
  if (name.includes("water bottle")) {
    return "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80";
  }
  if (name.includes("keyboard")) {
    return "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80";
  }
  if (name.includes("headphone") || name.includes("earphone")) {
    return "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80";
  }
  if (name.includes("earbuds") || name.includes("tws") || name.includes("airpods")) {
    return "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80";
  }
  if (name.includes("speaker") || name.includes("soundbar")) {
    return "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80";
  }
  if (name.includes("drive") || name.includes("ssd") || name.includes("hub") || name.includes("adapter")) {
    return "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80";
  }

  // Category array fallback
  const cat = CATEGORIES.find((c) => c.name === category);
  if (cat && cat.images && cat.images.length > 0) {
    return cat.images[defaultIndex % cat.images.length];
  }

  return "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=80";
}

// 10 Curated Critical Products to guarantee consistent existence in dataset & recommendations
export const CRITICAL_PRODUCTS = [
  {
    name: "Pigeon 750W Mixer Grinder (Pro)",
    category: "Home & Kitchen",
    subCategory: "Small Kitchen Appliances",
    brand: "Pigeon",
    imageUrl: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&auto=format&fit=crop&q=80",
    actualPrice: 4295,
    discountPercentage: 53.0,
    rating: 4.6,
    ratingCount: 14820,
    categoryIcon: "Coffee",
    categoryColor: "from-amber-400 to-orange-500",
  },
  {
    name: "Borosil 750W Mixer Grinder (Ultra)",
    category: "Home & Kitchen",
    subCategory: "Small Kitchen Appliances",
    brand: "Borosil",
    imageUrl: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    actualPrice: 4990,
    discountPercentage: 48.0,
    rating: 4.5,
    ratingCount: 9230,
    categoryIcon: "Coffee",
    categoryColor: "from-amber-400 to-orange-500",
  },
  {
    name: "Wonderchef Borosilicate Glass Airtight Food Storage Containers",
    category: "Home & Kitchen",
    subCategory: "Kitchen Storage",
    brand: "Wonderchef",
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
    actualPrice: 2200,
    discountPercentage: 45.0,
    rating: 4.7,
    ratingCount: 11450,
    categoryIcon: "Coffee",
    categoryColor: "from-amber-400 to-orange-500",
  },
  {
    name: "Kent Electric Hand Blender 300W with Stainless Steel Blades",
    category: "Home & Kitchen",
    subCategory: "Small Kitchen Appliances",
    brand: "Kent",
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80",
    actualPrice: 1999,
    discountPercentage: 42.0,
    rating: 4.4,
    ratingCount: 8320,
    categoryIcon: "Coffee",
    categoryColor: "from-amber-400 to-orange-500",
  },
  {
    name: "Cello Electric Milk Frother & Handheld Drink Whisk",
    category: "Home & Kitchen",
    subCategory: "Coffee & Tea Makers",
    brand: "Cello",
    imageUrl: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80",
    actualPrice: 899,
    discountPercentage: 55.0,
    rating: 4.6,
    ratingCount: 16500,
    categoryIcon: "Coffee",
    categoryColor: "from-amber-400 to-orange-500",
  },
  {
    name: "Lapster 1080p Full HD Pro Streaming Webcam",
    category: "Computers & Accessories",
    subCategory: "Laptop Accessories",
    brand: "Lapster",
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
    actualPrice: 2499,
    discountPercentage: 52.0,
    rating: 4.5,
    ratingCount: 12100,
    categoryIcon: "Laptop",
    categoryColor: "from-fuchsia-500 to-pink-500",
  },
  {
    name: "Syncwire LTG to USB Cable / Fast Chargers",
    category: "Computers & Accessories",
    subCategory: "Networking & Cables",
    brand: "Syncwire",
    imageUrl: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80",
    actualPrice: 999,
    discountPercentage: 60.0,
    rating: 4.8,
    ratingCount: 28400,
    categoryIcon: "Laptop",
    categoryColor: "from-fuchsia-500 to-pink-500",
  },
  {
    name: "Amazon Basics Wireless Mouse",
    category: "Computers & Accessories",
    subCategory: "Keyboards & Mice",
    brand: "Amazon Basics",
    imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80",
    actualPrice: 899,
    discountPercentage: 50.0,
    rating: 4.4,
    ratingCount: 42100,
    categoryIcon: "Laptop",
    categoryColor: "from-fuchsia-500 to-pink-500",
  },
  {
    name: "Sony Bravia 65 inches 4K Smart TV",
    category: "Electronics",
    subCategory: "Smart Televisions",
    brand: "Sony",
    imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&auto=format&fit=crop&q=80",
    actualPrice: 89990,
    discountPercentage: 35.0,
    rating: 4.8,
    ratingCount: 18500,
    categoryIcon: "Tv",
    categoryColor: "from-cyan-400 to-blue-500",
  },
  {
    name: "Fire-Boltt Ninja Call Pro Smartwatch",
    category: "Electronics",
    subCategory: "Wearables & Smartwatches",
    brand: "Fire-Boltt",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    actualPrice: 3999,
    discountPercentage: 65.0,
    rating: 4.7,
    ratingCount: 35200,
    categoryIcon: "Tv",
    categoryColor: "from-cyan-400 to-blue-500",
  },
];

export function generateDataset() {
  const rng = new SeededRandom(SEED);
  const products = [];
  let currentId = 1;

  const screens = ["32", "43", "50", "55", "65"];
  const watts = ["10", "16", "20", "40", "60", "100"];

  CATEGORIES.forEach((cat) => {
    const count = cat.targetCount;
    const categoryFeatured = CRITICAL_PRODUCTS.filter((cp) => cp.category === cat.name);

    for (let i = 0; i < count; i++) {
      let name, brand, subCategory, baseActualPrice, baseDiscount, clampedRating, ratingCount, imageUrl;

      if (i < categoryFeatured.length) {
        // Guarantee critical items are positioned as premier verified products
        const featured = categoryFeatured[i];
        name = featured.name;
        brand = featured.brand;
        subCategory = featured.subCategory;
        baseActualPrice = featured.actualPrice;
        baseDiscount = featured.discountPercentage;
        clampedRating = featured.rating;
        ratingCount = featured.ratingCount;
        imageUrl = featured.imageUrl;
      } else {
        brand = rng.choice(cat.brands);
        const templateObj = rng.choice(cat.templates);
        const rawTemplate = templateObj.template;
        subCategory = templateObj.subCategory;
        const screen = rng.choice(screens);
        const watt = rng.choice(watts);

        name = rawTemplate
          .replace("{brand}", brand)
          .replace("{screen}", screen)
          .replace("{watt}", watt);

        if (i > 10) {
          const variants = ["Pro", "Plus", "Max", "Gen 2", "Series 5", "Elite", "Ultra", "V2", "Carbon Black", "Arctic White", "Midnight Blue"];
          const variant = variants[i % variants.length];
          name = `${name} (${variant})`;
        }

        if (cat.name === "Electronics") {
          baseActualPrice = rng.nextFloat(599, 45000);
        } else if (cat.name === "Computers & Accessories") {
          baseActualPrice = rng.nextFloat(399, 12000);
        } else if (cat.name === "Home & Kitchen") {
          baseActualPrice = rng.nextFloat(499, 8500);
        } else if (cat.name === "Office Products") {
          baseActualPrice = rng.nextFloat(149, 2500);
        } else {
          baseActualPrice = rng.nextFloat(399, 9999);
        }

        baseDiscount = rng.nextFloat(15, 82);

        const ratingNoise = rng.nextFloat(-0.7, 0.7);
        const rawRating = 4.1 + ratingNoise;
        clampedRating = Math.max(2.1, Math.min(5.0, rawRating));

        const reviewExp = rng.nextFloat(2.5, 5.0);
        ratingCount = Math.round(Math.pow(10, reviewExp));

        // Accurate, context-matched Unsplash image selection (no coffee beans or tote bags!)
        imageUrl = getContextMatchedImageUrl(name, cat.name, brand, subCategory, i);
      }

      products.push({
        productId: `IM-${String(currentId).padStart(4, "0")}`,
        productName: name,
        category: cat.name,
        subCategory,
        brand,
        actualPrice: Math.round(baseActualPrice),
        discountPercentage: Math.round(baseDiscount * 10) / 10,
        discountedPrice: 0,
        rating: Math.round(clampedRating * 10) / 10,
        ratingCount,
        categoryIcon: cat.icon,
        categoryColor: cat.color,
        imageUrl,
        description: `Experience high-performance reliability with the ${name}. Engineered by ${brand} to deliver outstanding quality, optimal efficiency, and intuitive daily convenience. Backed by full brand warranty and hassle-free returns.`,
        specifications: [
          `Original certified genuine product from ${brand}`,
          `Category: ${cat.name} / ${subCategory}`,
          `Energy efficient and certified commercial grade components`,
          `Includes official documentation, standard accessories, and quick start guide`,
        ],
      });

      currentId++;
    }
  });

  // Target Calibration: Exactly 4.1 Average Rating and 47.7% Average Discount
  const currentAvgRating = products.reduce((acc, p) => acc + p.rating, 0) / products.length;
  const ratingShift = 4.10 - currentAvgRating;

  const currentAvgDisc = products.reduce((acc, p) => acc + p.discountPercentage, 0) / products.length;
  const discShift = 47.70 - currentAvgDisc;

  products.forEach((p) => {
    let adjRating = Math.round((p.rating + ratingShift) * 10) / 10;
    adjRating = Math.max(1.5, Math.min(5.0, adjRating));
    p.rating = adjRating;

    let adjDisc = Math.round((p.discountPercentage + discShift) * 10) / 10;
    adjDisc = Math.max(5.0, Math.min(89.0, adjDisc));
    p.discountPercentage = adjDisc;

    const computedDiscPrice = Math.round(p.actualPrice * (1 - p.discountPercentage / 100));
    p.discountedPrice = Math.max(49, computedDiscPrice);

    // Dimension: Price Band (Budget / Mid / Premium)
    if (p.discountedPrice < 1000) {
      p.priceBand = "Budget";
    } else if (p.discountedPrice <= 5000) {
      p.priceBand = "Mid";
    } else {
      p.priceBand = "Premium";
    }

    // Dimension: Discount Band (0-20%, 20-40%, 40-60%, 60%+)
    if (p.discountPercentage < 20) {
      p.discountBand = "0–20%";
    } else if (p.discountPercentage < 40) {
      p.discountBand = "20–40%";
    } else if (p.discountPercentage < 60) {
      p.discountBand = "40–60%";
    } else {
      p.discountBand = "60%+";
    }

    const polarityBase = (p.rating - 3.0) / 2.0;
    const polarityNoise = rng.nextFloat(-0.15, 0.15);
    const polarity = Math.max(-1.0, Math.min(1.0, polarityBase + polarityNoise));
    p.reviewPolarity = Math.round(polarity * 100) / 100;

    if (p.reviewPolarity >= 0.05) {
      p.sentimentLabel = "Positive";
    } else if (p.reviewPolarity <= -0.05) {
      p.sentimentLabel = "Negative";
    } else {
      p.sentimentLabel = "Neutral";
    }

    // Rating Tier (Low / Medium / High)
    if (p.rating >= 4.3) {
      p.ratingTier = "High";
    } else if (p.rating >= 3.9) {
      p.ratingTier = "Medium";
    } else {
      p.ratingTier = "Low";
    }

    const salesScore = (p.discountPercentage / 100) * 0.4 + (p.rating / 5.0) * 0.4 + (Math.log10(p.ratingCount) / 5.0) * 0.2;
    p.salesTier = salesScore >= 0.58 ? "High Sales Tier" : "Standard";
  });

  const finalAvgRating = (products.reduce((acc, p) => acc + p.rating, 0) / products.length).toFixed(1);
  const finalAvgDisc = (products.reduce((acc, p) => acc + p.discountPercentage, 0) / products.length).toFixed(1);

  return {
    products,
    totalProducts: products.length,
    totalCategories: CATEGORIES.length,
    averageRating: Number(finalAvgRating),
    averageDiscount: Number(finalAvgDisc),
  };
}

let cachedDataset = null;

export function getDataset() {
  if (!cachedDataset) {
    cachedDataset = generateDataset();
  }
  return cachedDataset;
}
