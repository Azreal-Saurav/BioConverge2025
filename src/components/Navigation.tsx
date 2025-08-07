import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Dna } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Speakers", path: "/speakers" },
    { name: "Themes", path: "/themes" },
    { name: "Awards", path: "/awards" },
    { name: "Workshop", path: "/workshop" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Dna className="h-8 w-8 text-teal-green dna-rotate" />
            <div className="text-xl font-bold text-primary">
              BioConverge
              <span className="text-teal-green">2025</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-teal-green border-b-2 border-teal-green"
                    : "text-gray-700 hover:text-teal-green"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <Button variant="conference" size="sm" asChild>
              <a href="https://bioconverge.github.io/bioconver2025/" target="_blank" rel="noopener noreferrer">
                Register
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://bioconverge.github.io/bioconver2025/" target="_blank" rel="noopener noreferrer">
                Submit Abstract
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-teal-green bg-teal-green/10"
                      : "text-gray-700 hover:text-teal-green hover:bg-teal-green/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="conference" size="sm" className="w-full" asChild>
                  <a href="https://bioconverge.github.io/bioconver2025/" target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://bioconverge.github.io/bioconver2025/" target="_blank" rel="noopener noreferrer">
                    Submit Abstract
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;