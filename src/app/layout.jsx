import { Orbitron, Poppins, Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

// Configure Poppins
const poppins = Poppins({
  subsets: ["latin"], // <--- IMPORTANT: You missed this (required for Google Fonts)
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Sarthak Construction Co.",
  description: "Quality you can trust. Prices you’ll love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${ubuntu.variable} ${orbitron.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
