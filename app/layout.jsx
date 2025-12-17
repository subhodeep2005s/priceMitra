import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata = {
  title: "PriceMitra – Track Prices & Get Price Drop Alerts Instantly",
  description:
    "Track product prices from Flipkart and other stores. Get instant email alerts when prices drop. Never miss the best deal with PriceMitra.",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
