import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WHATSAPP_NUMBER, COMPANY_PHONE, COMPANY_ADDRESS } from "@/data/products";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

const contactInfo = [
  { icon: MapPin, label: "Address", value: COMPANY_ADDRESS },
  { icon: Phone, label: "Phone", value: COMPANY_PHONE },
  { icon: Mail, label: "Email", value: "hello@baamzfoodies.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+234 905 129 1132" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const message = encodeURIComponent(
      `Hi Baamz Foodies!\n\nName: ${result.data.name}\nEmail: ${result.data.email}\n\n${result.data.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    toast.success("Redirecting you to WhatsApp!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-3">
              Get In <span className="text-gradient-gold">Touch</span>
            </h1>
            <p className="text-muted-foreground">We'd love to hear from you</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-semibold">Contact Info</h2>
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{c.label}</p>
                      <p className="font-medium">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={errors.name ? "border-accent" : ""}
                  />
                  {errors.name && <p className="text-xs text-accent mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    placeholder="Your email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={errors.email ? "border-accent" : ""}
                  />
                  {errors.email && <p className="text-xs text-accent mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Textarea
                    placeholder="Your message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={errors.message ? "border-accent" : ""}
                  />
                  {errors.message && <p className="text-xs text-accent mt-1">{errors.message}</p>}
                </div>
                <Button type="submit" className="w-full gap-2" size="lg">
                  <MessageCircle className="w-4 h-4" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
