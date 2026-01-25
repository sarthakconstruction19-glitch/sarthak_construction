import { Poppins } from "next/font/google";
import "./globals.css";

// Configure Poppins
const poppins = Poppins({
  subsets: ["latin"], // <--- IMPORTANT: You missed this (required for Google Fonts)
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Sarthak Construction Co.",
  description: "Quality you can trust. Prices you’ll love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
