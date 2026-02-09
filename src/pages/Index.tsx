import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Leaf, Truck, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ProductCard from "@/components/ProductCard";
import { products, deliveryAreas } from "@/data/products";
import heroImage from "@/assets/hero-food.jpg";

const features = [
  { icon: Leaf, title: "100% Natural", desc: "No preservatives or artificial flavors" },
  { icon: Shield, title: "Hygienically Made", desc: "Clean, certified production process" },
  { icon: Truck, title: "Fast Delivery", desc: "Same-day delivery in Lagos" },
  { icon: Clock, title: "Always Fresh", desc: "Made in small batches daily" },
];

const bestSellers = products.filter((p) => p.badge);

export default function HomePage() {
  return (
    <Layout>
      {/* Delivery banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        🚚 Free delivery on orders above ₦5,000 in Lagos! Order before 2PM for same-day delivery.
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-secondary-foreground">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Baamz Foodies Nigerian snacks"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/60" />
        </div>

        <div className="container relative z-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              🥜 Premium Nigerian Snacks
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
              Crunching Tradition.{" "}
              <span className="text-gradient-gold">Perfected.</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-lg leading-relaxed">
              Authentic Kulikuli & Keleshi made with love, premium ingredients,
              and a commitment to taste that runs generations deep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 text-base">
                <Link to="/shop">
                  Order Kulikuli <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 text-base border-primary/30 text-primary hover:bg-primary/10">
                <Link to="/shop">
                  Order Keleshi <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-6 border-b border-border bg-card">
        <div className="container flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> NAFDAC Approved</span>
          <span className="flex items-center gap-2"><Leaf className="w-4 h-4 text-primary" /> 100% Natural</span>
          <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-primary" /> Nationwide Delivery</span>
          <span className="flex items-center gap-2">⭐ 2,000+ Happy Customers</span>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-warm">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose <span className="text-gradient-gold">Baamz Foodies</span>?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              We don't just make snacks — we craft experiences rooted in tradition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-lg border border-border text-center shadow-warm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Best Sellers
            </h2>
            <p className="text-muted-foreground">Our most-loved packs — grab yours before they're gone!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/shop">
                View All Products <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-warm">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              We Deliver To
            </h2>
            <p className="text-muted-foreground">Fast, reliable delivery across Nigeria</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {deliveryAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3"
              >
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Taste the Difference?
          </h2>
          <p className="text-secondary-foreground/70 mb-8 max-w-md mx-auto">
            Order now and experience premium Nigerian snacks delivered to your doorstep.
          </p>
          <Button asChild size="lg" className="gap-2 text-base">
            <Link to="/shop">
              Order Now <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
