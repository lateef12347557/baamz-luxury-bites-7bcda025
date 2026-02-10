import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-lg font-heading font-bold text-gradient-gold">B</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-heading font-bold text-gradient-gold">Baamz</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-secondary-foreground/50">Foodies</span>
              </div>
            </div>
            <p className="mt-4 text-secondary-foreground/70 max-w-sm leading-relaxed">
              Crunching Tradition. Perfected. Premium Nigerian snacks made with
              love, hygiene, and the finest local ingredients.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-foreground/70">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-secondary-foreground/70 text-sm">
              <li>📍 Lagos, Nigeria</li>
              <li>📞 +234 800 000 0000</li>
              <li>✉️ hello@baamzfoodies.com</li>
              <li>💬 WhatsApp: +234 800 000 0000</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/50">
          © {new Date().getFullYear()} Baamz Foodies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
