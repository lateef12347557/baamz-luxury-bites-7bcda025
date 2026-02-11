import { motion } from "framer-motion";
import { Plus, Flame } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import kulikuliPlusImg from "@/assets/kulikuli-plus.jpg";
import spicyKulikuliImg from "@/assets/spicy-kulikuli.jpg";
import silverpack2000Img from "@/assets/kulikuli-silverpack-2000.jpg";
import silverpack3000Img from "@/assets/kulikuli-silverpack-3000.jpg";
import promaxImg from "@/assets/kulikuli-promax.jpg";
import keleshiImg from "@/assets/keleshi.jpg";
import kilishiImg from "@/assets/kilishi.jpg";

const images: Record<string, string> = {
  "kulikuli-plus": kulikuliPlusImg,
  "spicy-kulikuli": spicyKulikuliImg,
  "kulikuli-silverpack-2000": silverpack2000Img,
  "kulikuli-silverpack-3000": silverpack3000Img,
  "kulikuli-promax": promaxImg,
  keleshi: keleshiImg,
  kilishi: kilishiImg,
};

const spiceIcons: Record<string, number> = {
  mild: 1,
  medium: 2,
  hot: 3,
  "extra-hot": 4,
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-card rounded-xl overflow-hidden border border-border/60 shadow-sm hover:shadow-warm-lg hover:border-primary/20 transition-all duration-500"
    >
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
          {product.badge}
        </span>
      )}

      {!product.inStock && (
        <div className="absolute inset-0 z-20 bg-background/70 flex items-center justify-center">
          <span className="bg-muted text-muted-foreground font-bold px-4 py-2 rounded-full">
            Sold Out
          </span>
        </div>
      )}

      <div className="aspect-square overflow-hidden">
        <img
          src={images[product.image]}
          alt={`${product.name} ${product.variant}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-heading font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.variant}</p>
          </div>
          {product.spiceLevel && (
            <div className="flex items-center gap-0.5 text-accent">
              {Array.from({ length: spiceIcons[product.spiceLevel] || 1 }).map((_, i) => (
                <Flame key={i} className="w-3.5 h-3.5" />
              ))}
            </div>
          )}
        </div>

        <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{product.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-heading font-bold text-primary">
            ₦{product.price.toLocaleString()}
          </span>
          <Button
            size="sm"
            onClick={() => addItem(product)}
            disabled={!product.inStock}
            className="gap-1"
          >
            <Plus className="w-4 h-4" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
