import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, ShoppingBag } from 'lucide-react';

export function ProductDetail() {
  const { id } = useParams();

  // Product data mapping
  const productData: Record<string, { name: string; description: string; price: string; image1: string; image2: string }> = {
    'tailored-blazer': {
      name: 'Tailored Blazer',
      description: 'A masterfully crafted blazer that embodies modern elegance. This versatile piece features impeccable tailoring, premium fabric, and a sophisticated silhouette perfect for both professional settings and elevated casual occasions.',
      price: '$299',
      image1: '/TAILORED BLAZER 1.JPG',
      image2: '/TAILORED BLAZER 2.jpg',
    },
    'silk-blouse': {
      name: 'Silk Blouse',
      description: 'Luxurious silk blouse featuring a fluid drape and refined details. This timeless piece transitions effortlessly from boardroom to evening gatherings, offering both comfort and sophistication.',
      price: '$159',
      image1: '/SILK BLOUSE 1.JPG',
      image2: '/SILK BLOUSE 2.JPG',
    },
    'designer-trousers': {
      name: 'Designer Trousers',
      description: 'Precision-cut trousers with an impeccable fit and premium fabric. These versatile trousers offer both style and comfort, making them an essential foundation for countless outfit combinations.',
      price: '$189',
      image1: '/DESIGNER TROUSERS 1.JPG',
      image2: '/DESIGNER TROUSERS 2.jpg',
    },
    'leather-shoes': {
      name: 'Leather Shoes',
      description: 'Handcrafted leather shoes combining traditional craftsmanship with contemporary design. These shoes offer exceptional comfort and a polished appearance that elevates any ensemble.',
      price: '$229',
      image1: '/LEATHER SHOES 1.jpg',
      image2: '/LEATHER SHOES 2.JPG',
    },
    'structured-bag': {
      name: 'Structured Bag',
      description: 'An architectural masterpiece in leather, this structured bag balances form and function. With thoughtful compartments and premium hardware, it is the perfect companion for the modern professional.',
      price: '$349',
      image1: '/STRUCTURED BAG 1.JPG',
      image2: '/STRUCTURED BAG 2.jpg',
    },
    'statement-glasses': {
      name: 'Statement Glasses',
      description: 'Bold frames that make an unforgettable impression. These statement glasses blend artistic design with everyday wearability, adding a distinctive touch to any look.',
      price: '$179',
      image1: '/STATMENT GLASSES 1.JPG',
      image2: '/STATEMENT GLASSES 2.JPG',
    },
  };

  // "Complete the Look" items - use first image of all products
  const completeTheLook = [
    { id: 'tailored-blazer', name: 'Tailored Blazer', brand: 'Designer Brand', price: '$299', image: '/TAILORED BLAZER 1.JPG' },
    { id: 'silk-blouse', name: 'Silk Blouse', brand: 'Designer Brand', price: '$159', image: '/SILK BLOUSE 1.JPG' },
    { id: 'designer-trousers', name: 'Designer Trousers', brand: 'Designer Brand', price: '$189', image: '/DESIGNER TROUSERS 1.JPG' },
    { id: 'leather-shoes', name: 'Leather Shoes', brand: 'Designer Brand', price: '$229', image: '/LEATHER SHOES 1.jpg' },
    { id: 'structured-bag', name: 'Structured Bag', brand: 'Designer Brand', price: '$349', image: '/STRUCTURED BAG 1.JPG' },
    { id: 'statement-glasses', name: 'Statement Glasses', brand: 'Designer Brand', price: '$179', image: '/STATMENT GLASSES 1.JPG' },
  ];

  const product = productData[id || 'tailored-blazer'] || productData['tailored-blazer'];
  // Filter out current product from "Complete the Look"
  const otherItems = completeTheLook.filter(item => item.id !== id);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left: Product Image */}
          <div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 mb-4">
              <img
                src={product.image2}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
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

          {/* Right: Product Details */}
          <div>
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <div className="inline-block px-4 py-2 bg-gradient-to-br from-[#4A2847] to-[#D97746] text-white rounded-full text-sm mb-4">
                Premium Collection
              </div>
              <h1 className="text-4xl mb-2 text-gray-900">{product.name}</h1>
              <p className="text-3xl mb-6 text-[#4A2847] font-medium">{product.price}</p>
              <p className="text-gray-600 text-lg mb-8">{product.description}</p>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl mb-4 text-gray-900">Styling Tips</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#4A2847] rounded-full mt-2"></span>
                    <span>Pair with complementary pieces from our curated collection for a cohesive look</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#4A2847] rounded-full mt-2"></span>
                    <span>This versatile piece transitions seamlessly from day to evening occasions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#4A2847] rounded-full mt-2"></span>
                    <span>Consider neutral tones for a sophisticated, timeless aesthetic</span>
                  </li>
                </ul>
              </div>

              <button className="w-full mt-8 bg-gray-900 text-white py-4 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Complete the Look */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <h2 className="text-3xl mb-8 text-gray-900">Complete the Look</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherItems.slice(0, 6).map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg mb-1 text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.brand}</p>
                <p className="text-xl text-gray-900">{item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
