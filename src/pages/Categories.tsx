import { Link } from 'react-router-dom';

export function Categories() {
  const categories = [
    {
      id: 'art-exhibition',
      name: 'Art Exhibition',
      description: 'Sophisticated cultural elegance',
      coverImage: '/ART EXHIBITION 1.jpg',
    },
    {
      id: 'business-meeting',
      name: 'Business Meeting',
      description: 'Executive power dressing',
      coverImage: '/business meeting 1.jpg',
    },
    {
      id: 'dinner-date',
      name: 'Dinner Date',
      description: 'Refined romantic allure',
      coverImage: '/DINNER DATE 1.jpg',
    },
    {
      id: 'travel',
      name: 'Travel',
      description: 'Effortless global style',
      coverImage: '/travel 1.jpg',
    },
    {
      id: 'pool-party',
      name: 'Pool Party',
      description: 'Vibrant seasonal celebration',
      coverImage: '/pool party 1.jpg',
    },
    {
      id: 'hard-techno',
      name: 'Hard Techno',
      description: 'Dark and intense',
      coverImage: '/hard techno 1.jpg',
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
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 hover:shadow-xl transition-all"
            >
              <img
                src={category.coverImage}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
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