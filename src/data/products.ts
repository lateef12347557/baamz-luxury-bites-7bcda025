export interface Product {
  id: string;
  name: string;
  category: "kulikuli" | "kilishi";
  variant: string;
  price: number;
  description: string;
  image: string;
  inStock: boolean;
  badge?: string;
  spiceLevel?: "mild" | "medium" | "hot" | "extra-hot";
}

export const WHATSAPP_NUMBER = "2349051291132";
export const COMPANY_PHONE = "+234 703 314 4300";
export const COMPANY_ADDRESS = "60 Isienmwenro Street, Off Sakponba Road, Benin City, Edo State";

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
    id: "kuli-max",
    name: "Kuli-Kuli",
    category: "kulikuli",
    variant: "Max",
    price: 1500,
    description: "Spicy peanut bar enhanced with milk. The difference is in the taste, the taste makes the difference.",
    image: "kulikuli-max",
    inStock: true,
  },
  {
    id: "kil-pack",
    name: "Kilishi",
    category: "kilishi",
    variant: "Pack",
    price: 3000,
    description: "Premium dried meat (kilishi) in a convenient pack. Rich, smoky flavor perfect for any occasion.",
    image: "kilishi",
    inStock: true,
    badge: "Premium",
  },
];

export const deliveryAreas = [
  "Uniben",
  "Ring Road",
  "New Benin",
  "Sapele Road",
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
    text: "Best kilishi in Benin, hands down. The spice level is perfect and the meat is always fresh. Baamz never disappoints!",
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
    text: "The extra hot kilishi is no joke! 🔥 Finally found a brand that delivers real heat. Keep it coming, Baamz!",
    rating: 5,
    avatar: "EU",
  },
];
