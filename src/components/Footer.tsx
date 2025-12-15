import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from 'figma:asset/b7f187b2f61ce9afc7b0d5e345761161674604f3.png';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logoImage} 
                alt="Stylect Logo" 
                className="h-8"
              />
            </Link>
            <p className="text-gray-600 text-sm">
              Your AI-powered fashion styling platform for every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-purple-600 transition-colors">Home</Link></li>
              <li><Link to="/categories" className="hover:text-purple-600 transition-colors">Categories</Link></li>
              <li><Link to="/ai-stylist" className="hover:text-purple-600 transition-colors">AI Stylist</Link></li>
              <li><Link to="/pricing" className="hover:text-purple-600 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-gray-900">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white border border-gray-200 rounded-lg hover:border-purple-600 transition-colors">
                <Instagram className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="p-2 bg-white border border-gray-200 rounded-lg hover:border-purple-600 transition-colors">
                <Twitter className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="p-2 bg-white border border-gray-200 rounded-lg hover:border-purple-600 transition-colors">
                <Facebook className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="p-2 bg-white border border-gray-200 rounded-lg hover:border-purple-600 transition-colors">
                <Mail className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© 2025 Stylect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}