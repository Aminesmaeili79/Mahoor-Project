import { Link } from 'react-router-dom';

export function Categories() {
  const categories = [
    {
      id: 'art-exhibition',
      name: 'Art Exhibition',
      description: 'Sophisticated cultural elegance',
    },
    {
      id: 'business-meeting',
      name: 'Business Meeting',
      description: 'Executive power dressing',
    },
    {
      id: 'dinner-date',
      name: 'Dinner Date',
      description: 'Refined romantic allure',
    },
    {
      id: 'travel',
      name: 'Travel',
      description: 'Effortless global style',
    },
    {
      id: 'summer-party',
      name: 'Summer Party',
      description: 'Vibrant seasonal celebration',
    },
    {
      id: 'winter-casual',
      name: 'Winter Casual',
      description: 'Cozy contemporary comfort',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#4A2847] to-[#D97746] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl mb-4">Style by Occasion</h1>
          <p className="text-xl text-purple-50">
            Expertly curated looks for every moment that matters
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 hover:border-[#4A2847] hover:shadow-xl transition-all"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span className="text-3xl">📸</span>
                  </div>
                  <p className="text-gray-500">Insert Category Image</p>
                  <p className="text-gray-400 text-xs mt-1">Portrait 3:4 ratio</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-200">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}