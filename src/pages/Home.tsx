import { Search, Sparkles, TrendingUp, Users } from 'lucide-react';
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-orange-500 text-white py-20">
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
                <button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-shadow">
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
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Link
              key={index}
              to="/outfit/1"
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 hover:border-purple-600 transition-all"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <span className="text-2xl">👔</span>
                  </div>
                  <p className="text-gray-500 text-sm">Insert Fashion Image</p>
                  <p className="text-gray-400 text-xs mt-1">Portrait 3:4 ratio</p>
                </div>
              </div>
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
              className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:shadow-xl transition-shadow"
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