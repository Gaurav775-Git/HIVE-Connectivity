import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Product", href: "#product" },
    { name: "Integrations", href: "#integrations" },
    { name: "Pricing", href: "#pricing" },
    { name: "Docs", href: "#docs" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-gray-300 shadow-sm transition-all duration-300 rounded-full">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-2" aria-label="Home">
          <div className="w-8 h-8 rounded-lg  flex items-center justify-center">
            <img src="\public\hive-blockchain-svgrepo-com.svg" alt="" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Hive</span>
        </a>

        {/* Desktop Nav (Pill Style) */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-gray-100 text-gray-700 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" className="rounded-full">Sign in</Button>
          <Button size="sm" className="rounded-full">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden px-6 py-4 border-t border-gray-100 bg-white" aria-label="Mobile navigation">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-full text-center font-medium hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-all"
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" className="w-full">Sign in</Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
