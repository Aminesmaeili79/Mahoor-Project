import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, ShoppingBag } from 'lucide-react';

export function OutfitDetail() {
  const { id } = useParams();

  const outfit = {
    title: 'Sophisticated Evening Ensemble',
    category: 'Art Exhibition',
    description: 'A masterfully curated outfit that harmonizes modern elegance with artistic sophistication. This ensemble exemplifies refined taste for gallery openings, cultural events, and elevated gatherings.',
  };

  const items = [
    {
      id: 1,
      name: 'Tailored Blazer',
      brand: 'Designer Brand',
      price: '$299',
    },
    {
      id: 2,
      name: 'Silk Blouse',
      brand: 'Designer Brand',
      price: '$159',
    },
    {
      id: 3,
      name: 'Designer Trousers',
      brand: 'Designer Brand',
      price: '$189',
    },
    {
      id: 4,
      name: 'Leather Shoes',
      brand: 'Designer Brand',
      price: '$229',
    },
    {
      id: 5,
      name: 'Structured Bag',
      brand: 'Designer Brand',
      price: '$349',
    },
    {
      id: 6,
      name: 'Statement Glasses',
      brand: 'Designer Brand',
      price: '$179',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link
          to="/categories"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Categories
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left: Main Outfit Image Placeholder */}
          <div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span className="text-4xl">👔</span>
                  </div>
                  <p className="text-gray-500 text-lg">Insert Full Outfit Image</p>
                  <p className="text-gray-400 text-sm mt-2">Portrait 3:4 ratio recommended</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-[#4A2847] to-[#D97746] text-white py-4 rounded-xl hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Save to Wardrobe
              </button>
              <button className="bg-white border border-gray-200 p-4 rounded-xl hover:shadow-lg transition-shadow">
                <Share2 className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Right: Outfit Details */}
          <div>
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-full text-sm mb-4">
                {outfit.category}
              </div>
              <h1 className="text-4xl mb-4 text-gray-900">{outfit.title}</h1>
              <p className="text-gray-600 text-lg mb-8">{outfit.description}</p>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl mb-4 text-gray-900">Styling Intelligence</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#4A2847] rounded-full mt-2"></span>
                    <span>Complement with minimal jewelry to emphasize the architectural silhouette</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#4A2847] rounded-full mt-2"></span>
                    <span>Maintain neutral tones for sophisticated monochrome elegance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#4A2847] rounded-full mt-2"></span>
                    <span>Incorporate one statement piece for distinctive personal expression</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Item Breakdown */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <h2 className="text-3xl mb-8 text-gray-900">Complete the Look</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div key={item.id} className="group">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 hover:border-[#4A2847] mb-4 transition-all">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                        <span className="text-xl">🛍️</span>
                      </div>
                      <p className="text-gray-400 text-xs">Insert Item Image</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg mb-1 text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.brand}</p>
                <p className="text-xl mb-4 text-gray-900">{item.price}</p>
                <a
                  href="#"
                  className="block w-full bg-gray-900 text-white text-center py-3 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  View Product
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}