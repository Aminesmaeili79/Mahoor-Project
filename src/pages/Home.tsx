import { Search, Sparkles, TrendingUp, Users, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const categories = [
    'Art Exhibition',
    'Dinner Date',
    'Business Meeting',
    'Summer Party',
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Intelligence',
      description: 'Advanced algorithms curate personalized looks tailored to your unique style DNA',
    },
    {
      icon: TrendingUp,
      title: 'Curated Excellence',
      description: 'Access expertly styled collections that blend timeless elegance with contemporary trends',
    },
    {
      icon: Users,
      title: 'Global Community',
      description: 'Connect with style enthusiasts and discover fashion insights from around the world',
    },
  ];

  const curatedProducts = [
    {
      id: 'tailored-blazer',
      name: 'Tailored Blazer',
      brand: 'Designer Brand',
      price: '$299',
      image: '/TAILORED BLAZER 1.JPG',
    },
    {
      id: 'silk-blouse',
      name: 'Silk Blouse',
      brand: 'Designer Brand',
      price: '$159',
      image: '/SILK BLOUSE 1.JPG',
    },
    {
      id: 'designer-trousers',
      name: 'Designer Trousers',
      brand: 'Designer Brand',
      price: '$189',
      image: '/DESIGNER TROUSERS 1.JPG',
    },
    {
      id: 'leather-shoes',
      name: 'Leather Shoes',
      brand: 'Designer Brand',
      price: '$229',
      image: '/LEATHER SHOES 1.jpg',
    },
    {
      id: 'structured-bag',
      name: 'Structured Bag',
      brand: 'Designer Brand',
      price: '$349',
      image: '/STRUCTURED BAG 1.JPG',
    },
    {
      id: 'statement-glasses',
      name: 'Statement Glasses',
      brand: 'Designer Brand',
      price: '$179',
      image: '/STATMENT GLASSES 1.JPG',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4A2847] to-[#D97746] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl mb-6">
              Elevate Your Style Intelligence
            </h1>
            <p className="text-xl mb-8 text-purple-50">
              Discover the future of personal styling with AI-powered recommendations crafted for every occasion
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-2 shadow-xl max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search by occasion or style..."
                  className="flex-1 py-3 px-2 text-gray-900 outline-none"
                />
                <button className="bg-gradient-to-r from-[#4A2847] to-[#D97746] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-shadow">
                  Search
                </button>
              </div>
            </div>

            {/* Category Suggestions */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {categories.map((category) => (
                <Link
                  key={category}
                  to="/categories"
                  className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-sm hover:bg-white/30 transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#4A2847] to-[#D97746] rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Outfits Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl text-gray-900">Curated Collections</h2>
          <Link
            to="/categories"
            className="text-purple-600 hover:text-purple-700 transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {curatedProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg mb-1 text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
              <p className="text-xl mb-4 text-gray-900">{product.price}</p>
              <span className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3 rounded-xl group-hover:bg-gray-800 transition-colors">
                <ShoppingBag className="w-4 h-4" />
                View Product
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-[#4A2847] to-[#D97746] rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl mb-4">Transform Your Wardrobe Experience</h2>
          <p className="text-xl mb-8 text-purple-50">
            Join the next generation of style-conscious individuals leveraging AI technology
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/ai-stylist"
              className="bg-white text-brand-orange px-8 py-4 rounded-xl hover:shadow-xl transition-shadow"
            >
              Experience AI Styling
            </Link>
            <Link
              to="/pricing"
              className="bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-xl hover:bg-white/30 transition-colors"
            >
              View Premium Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}