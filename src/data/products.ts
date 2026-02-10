export interface Product {
  id: string;
  name: string;
  category: "kulikuli" | "keleshi";
  variant: string;
  price: number;
  description: string;
  image: string;
  inStock: boolean;
  badge?: string;
  spiceLevel?: "mild" | "medium" | "hot" | "extra-hot";
}

export const WHATSAPP_NUMBER = "2349051291132";

export const products: Product[] = [
  {
    id: "kuli-plus",
    name: "Kuli-Kuli",
    category: "kulikuli",
    variant: "Plus",
    price: 200,
    description: "Spicy peanut bar enhanced with milk. Compact pack, perfect for snacking on the go.",
    image: "kulikuli-plus",
    inStock: true,
    badge: "Popular",
  },
  {
    id: "kuli-spicy",
    name: "Kuli-Kuli",
    category: "kulikuli",
    variant: "Spicy Peanut Bar (35pcs)",
    price: 6000,
    description: "Spicy peanut bar enhanced with milk. 35 pieces in a large ziplock pack for sharing with family and friends.",
    image: "spicy-kulikuli",
    inStock: true,
  },
  {
    id: "kuli-silverpack-2000",
    name: "Kuli-Kuli",
    category: "kulikuli",
    variant: "Silverpack (Medium)",
    price: 2000,
    description: "Premium silverpack kulikuli. The difference is in the taste — the taste makes the difference.",
    image: "kulikuli-silverpack-2000",
    inStock: true,
    badge: "Best Value",
  },
  {
    id: "kuli-silverpack-3000",
    name: "Kuli-Kuli",
    category: "kulikuli",
    variant: "Silverpack (Large)",
    price: 3000,
    description: "Our biggest silverpack kulikuli. Perfect for events, parties, and bulk orders.",
    image: "kulikuli-silverpack-3000",
    inStock: true,
  },
  {
    id: "kuli-promax",
    name: "Kuli-Kuli",
    category: "kulikuli",
    variant: "Pro Max",
    price: 5000,
    description: "Spicey peanut bar enhanced with milk in a premium jar. The ultimate kulikuli experience.",
    image: "kulikuli-promax",
    inStock: true,
    badge: "Premium",
  },
  {
    id: "kel-mild",
    name: "Keleshi",
    category: "keleshi",
    variant: "Mild Spice",
    price: 1500,
    description: "Tender, smoky dried meat with a gentle kick of spice.",
    image: "keleshi",
    inStock: true,
    spiceLevel: "mild",
  },
  {
    id: "kel-medium",
    name: "Keleshi",
    category: "keleshi",
    variant: "Medium Spice",
    price: 1500,
    description: "The perfect balance of heat and flavor. Our bestseller.",
    image: "keleshi",
    inStock: true,
    badge: "Bestseller",
    spiceLevel: "medium",
  },
  {
    id: "kel-hot",
    name: "Keleshi",
    category: "keleshi",
    variant: "Hot Spice",
    price: 1500,
    description: "For the bold — intense pepper flavor that keeps you coming back.",
    image: "keleshi",
    inStock: true,
    spiceLevel: "hot",
  },
  {
    id: "kel-xhot",
    name: "Keleshi",
    category: "keleshi",
    variant: "Extra Hot 🔥",
    price: 1800,
    description: "Our hottest batch. Limited edition for true spice lovers.",
    image: "keleshi",
    inStock: true,
    badge: "Limited Batch",
    spiceLevel: "extra-hot",
  },
];

export const deliveryAreas = [
  "Lagos Mainland",
  "Lagos Island",
  "Lekki & Ajah",
  "Ikeja & Surroundings",
  "Abuja (FCT)",
  "Ibadan",
  "Port Harcourt",
  "Nationwide (3-5 days)",
];

export const testimonials = [
  {
    name: "Chioma A.",
    text: "The kulikuli is absolutely divine! Reminds me of my grandmother's recipe but even better. I order every week now.",
    rating: 5,
    avatar: "CA",
  },
  {
    name: "Tunde O.",
    text: "Best keleshi in Lagos, hands down. The spice level is perfect and the meat is always fresh. Baamz never disappoints!",
    rating: 5,
    avatar: "TO",
  },
  {
    name: "Amara N.",
    text: "I ordered for my office party and everyone loved it! Fast delivery too. This is now our go-to snack supplier.",
    rating: 5,
    avatar: "AN",
  },
  {
    name: "Emeka U.",
    text: "The extra hot keleshi is no joke! 🔥 Finally found a brand that delivers real heat. Keep it coming, Baamz!",
    rating: 5,
    avatar: "EU",
  },
];
