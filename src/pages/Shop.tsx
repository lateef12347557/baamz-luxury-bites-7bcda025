import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import OrderSummary from "@/components/OrderSummary";
import { products } from "@/data/products";

type Filter = "all" | "kulikuli" | "keleshi";

export default function ShopPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: "All Products" },
    { value: "kulikuli", label: "🥜 Kulikuli" },
    { value: "keleshi", label: "🌶️ Keleshi" },
  ];

  return (
    <Layout>
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        ⚡ Limited Batch Today — Order before they sell out!
      </div>

      <section className="py-12 md:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-3">
              Our <span className="text-gradient-gold">Menu</span>
            </h1>
            <p className="text-muted-foreground">
              Choose your favorites and order via WhatsApp
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex justify-center gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === f.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Products */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <OrderSummary />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
