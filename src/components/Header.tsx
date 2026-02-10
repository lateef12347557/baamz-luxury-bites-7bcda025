import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import baamzLogo from "@/assets/baamz-logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={baamzLogo} alt="Baamz Foodies" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-primary/30 shadow-sm" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-lg font-heading font-bold tracking-tight text-gradient-gold">Baamz</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Foodies</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/shop"
            className="relative p-2 rounded-full hover:bg-muted transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
              >
                {itemCount}
              </motion.span>
            )}
          </Link>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <nav className="container py-4 flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-medium py-2 ${
                    location.pathname === l.to ? "text-primary" : "text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
