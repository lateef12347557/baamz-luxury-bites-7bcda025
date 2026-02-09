import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, Send } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";

const orderSchema = z.object({
  address: z.string().trim().min(5, "Please enter a valid delivery address").max(200),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20),
});

export default function OrderSummary() {
  const { items, updateQuantity, removeItem, total, sendToWhatsApp, clearCart } = useCart();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (items.length === 0) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <p className="text-muted-foreground">Your order is empty</p>
        <p className="text-sm text-muted-foreground mt-1">Add items from the menu above</p>
      </div>
    );
  }

  const handleSubmit = () => {
    const result = orderSchema.safeParse({ address, phone });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    sendToWhatsApp(result.data.address, result.data.phone);
    clearCart();
    setAddress("");
    setPhone("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-card border border-border rounded-lg overflow-hidden"
    >
      <div className="p-4 bg-primary/5 border-b border-border">
        <h3 className="font-heading font-semibold text-lg">Your Order</h3>
      </div>

      <div className="p-4 space-y-3">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.product.id}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center gap-3 py-2 border-b border-border last:border-0"
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">
                  {item.product.name} – {item.product.variant}
                </p>
                <p className="text-xs text-muted-foreground">
                  ₦{item.product.price.toLocaleString()} each
                </p>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              <p className="text-sm font-semibold w-20 text-right">
                ₦{(item.product.price * item.quantity).toLocaleString()}
              </p>

              <button
                onClick={() => removeItem(item.product.id)}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="p-4 border-t border-border bg-primary/5">
        <div className="flex justify-between items-center mb-4">
          <span className="font-heading font-semibold">Total</span>
          <span className="text-2xl font-heading font-bold text-primary">
            ₦{total.toLocaleString()}
          </span>
        </div>

        <div className="space-y-3">
          <div>
            <Input
              placeholder="Delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={errors.address ? "border-accent" : ""}
            />
            {errors.address && <p className="text-xs text-accent mt-1">{errors.address}</p>}
          </div>
          <div>
            <Input
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={errors.phone ? "border-accent" : ""}
            />
            {errors.phone && <p className="text-xs text-accent mt-1">{errors.phone}</p>}
          </div>
          <Button onClick={handleSubmit} className="w-full gap-2" size="lg">
            <Send className="w-4 h-4" />
            Place Order via WhatsApp
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
