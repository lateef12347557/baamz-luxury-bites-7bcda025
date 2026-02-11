import { motion } from "framer-motion";
import { Heart, Shield, Award, Users } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-food.jpg";

const values = [
  { icon: Heart, title: "Made with Love", desc: "Every batch is handcrafted with care and passion for authentic Nigerian flavors." },
  { icon: Shield, title: "Food Safety First", desc: "Our production follows strict hygiene protocols. Clean hands, clean kitchen, clean packaging." },
  { icon: Award, title: "Premium Quality", desc: "We source only the finest peanuts and meats from trusted local farmers." },
  { icon: Users, title: "Community Driven", desc: "Supporting local farmers and creating jobs in our community is at our core." },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-hero text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Baamz Foodies" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Our <span className="text-gradient-gold">Story</span>
          </motion.h1>
          <p className="text-secondary-foreground/70 max-w-lg mx-auto text-lg">
            From a family kitchen to your table — the Baamz Foodies journey.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto text-center"
          >
            <h2 className="text-3xl font-heading font-bold mb-6">How It All Started</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Baamz Foodies was born from a simple truth: the best Nigerian snacks shouldn't be hard to find. 
              Growing up, kulikuli and kilishi were more than snacks — they were moments of joy shared with family and friends.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We started in a small kitchen in Benin City with one mission: to bring the authentic taste of homemade 
              kulikuli and kilishi to every Nigerian, made with premium ingredients and uncompromising hygiene standards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we serve thousands of happy customers across Nigeria, but our commitment remains the same — 
              every batch is made fresh, with love, using recipes passed down through generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gradient-warm">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-lg border border-border shadow-warm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
