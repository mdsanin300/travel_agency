import { links } from "@/lib/links";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  style: "normal",
  subsets: ["latin"]
})

export default function Footer() {
  return (
    <footer className="bg-secondary text-foreground py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-foreground">Travel Agency</h2>
          <p className="mt-3 text-sm">
            Discover breathtaking destinations and unique travel experiences.
            We bring the world closer to you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {
              links.map((link, index) => (
                <li key={index}><Link href={link.href}>{link.name}</Link></li>
              ))
            }
          </ul>
        </div>

        {/* Contact Info */}
        <address className={inter.className}>
          <h3 className="text-lg font-semibold text-foreground mb-3">Contact</h3>
          <p className="text-sm">Motijheel, Dhaka, Bangladesh</p>
          <p className="text-sm mt-2">Email: md.sanin.300@gmail.com</p>
          <p className="text-sm">Phone: +880 1318 260 263</p>
        </address>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-foreground">🌐</a>
            <a href="#" className="hover:text-foreground">📸</a>
            <a href="#" className="hover:text-foreground">🐦</a>
            <a href="#" className="hover:text-foreground">📘</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} GlobeTrek. All Rights Reserved.
      </div>
    </footer>
  );
}
