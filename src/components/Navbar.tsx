import { useState, useEffect } from 'react';
import { Search, User, Heart, Bell, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from 'figma:asset/b7f187b2f61ce9afc7b0d5e345761161674604f3.png';

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/categories', label: 'Categories' },
    { path: '/ai-stylist', label: 'AI Stylist' },
    { path: '/my-wardrobe', label: 'My Wardrobe' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About' },
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Close menu when resizing to desktop
      if (!mobile) {
        setIsMenuOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logoImage} 
                alt="Stylect Logo" 
                className="h-10"
              />
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors nav-link ${
                    location.pathname === link.path
                      ? 'nav-link-active'
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Icon Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              {!isMobile && (
                <>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Bell className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <User className="w-5 h-5 text-gray-700" />
                  </button>
                </>
              )}

              {/* Hamburger Menu Button - Mobile Only */}
              {isMobile && (
                <button
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6 text-gray-700" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-700" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Only render on mobile */}
      {isMobile && (
        <div
          onClick={() => setIsMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 40,
            opacity: isMenuOpen ? 1 : 0,
            pointerEvents: isMenuOpen ? 'auto' : 'none',
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      )}

      {/* Mobile Menu Panel - Only render on mobile */}
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            height: '100%',
            width: '280px',
            backgroundColor: 'white',
            zIndex: 50,
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
            boxShadow: isMenuOpen ? '-4px 0 20px rgba(0, 0, 0, 0.15)' : 'none',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Menu Header */}
          <div 
            className="border-b border-gray-200"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.5rem',
            }}
          >
            <span className="text-lg text-gray-900" style={{ fontWeight: 600 }}>Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav style={{ flex: 1, paddingTop: '1rem', paddingBottom: '1rem', overflowY: 'auto' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'block',
                  padding: '1rem 1.5rem',
                  fontSize: '1.125rem',
                  borderLeft: location.pathname === link.path ? '4px solid #9333ea' : '4px solid transparent',
                  backgroundColor: location.pathname === link.path ? '#faf5ff' : 'transparent',
                  color: location.pathname === link.path ? '#7c3aed' : '#374151',
                  fontWeight: location.pathname === link.path ? 500 : 400,
                  transition: 'all 0.2s ease',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Menu Footer - Mobile Icons */}
          <div 
            className="border-t border-gray-200"
            style={{ padding: '1.5rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <button 
                className="hover:bg-gray-100 transition-colors"
                style={{ 
                  padding: '0.75rem', 
                  borderRadius: '0.75rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '0.25rem',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                }}
              >
                <Heart className="w-6 h-6 text-gray-700" />
                <span className="text-xs text-gray-500">Favorites</span>
              </button>
              <button 
                className="hover:bg-gray-100 transition-colors"
                style={{ 
                  padding: '0.75rem', 
                  borderRadius: '0.75rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '0.25rem',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                }}
              >
                <Bell className="w-6 h-6 text-gray-700" />
                <span className="text-xs text-gray-500">Alerts</span>
              </button>
              <button 
                className="hover:bg-gray-100 transition-colors"
                style={{ 
                  padding: '0.75rem', 
                  borderRadius: '0.75rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '0.25rem',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                }}
              >
                <User className="w-6 h-6 text-gray-700" />
                <span className="text-xs text-gray-500">Profile</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}