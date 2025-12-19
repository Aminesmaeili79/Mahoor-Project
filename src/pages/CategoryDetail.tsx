import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function CategoryDetail() {
  const { id } = useParams();

  const categoryInfo: Record<string, { name: string; description: string; dressCode: string; imagePrefix: string }> = {
    'art-exhibition': {
      name: 'Art Exhibition',
      description: 'Sophisticated Cultural Elegance',
      dressCode:
        'Art exhibitions demand refined aesthetics and intellectual sophistication. Embrace architectural silhouettes, monochromatic palettes, and statement accessories that reflect your appreciation for artistry. Think structured blazers, contemporary cuts, and distinctive pieces that demonstrate cultural awareness and personal style confidence.',
      imagePrefix: 'ART EXHIBITION',
    },
    'business-meeting': {
      name: 'Business Meeting',
      description: 'Executive Power Dressing',
      dressCode:
        'Professional excellence requires impeccable tailoring and polished presentation. Invest in well-constructed suits, premium fabrics, and timeless accessories. Maintain a palette of sophisticated neutrals—navy, charcoal, crisp white—and ensure every element projects authority, competence, and refined taste.',
      imagePrefix: 'business meeting',
    },
    'dinner-date': {
      name: 'Dinner Date',
      description: 'Refined Romantic Allure',
      dressCode:
        'Evening romance calls for elevated elegance with subtle sensuality. Choose flattering silhouettes in luxe fabrics, soft color palettes, and thoughtful details. Whether it\'s a sophisticated dress or perfectly tailored separates, select pieces that make you feel confident, attractive, and authentically yourself.',
      imagePrefix: 'DINNER DATE',
    },
    'travel': {
      name: 'Travel',
      description: 'Effortless Global Style',
      dressCode:
        'Travel wardrobe excellence combines versatility with understated luxury. Select wrinkle-resistant fabrics, coordinated neutrals, and pieces that transition seamlessly from day to evening. Prioritize comfort without compromising style—think elevated basics, quality layering pieces, and practical yet chic accessories.',
      imagePrefix: 'travel',
    },
    'pool-party': {
      name: 'Pool Party',
      description: 'Vibrant Seasonal Celebration',
      dressCode:
        'Pool parties embrace joyful expression and effortless sophistication. Choose breathable fabrics, vibrant hues, and flowing silhouettes. Incorporate playful patterns, statement accessories, and comfortable yet stylish footwear. Let your ensemble radiate confidence and seasonal optimism.',
      imagePrefix: 'pool party',
    },
    'hard-techno': {
      name: 'Hard Techno',
      description: 'Dark and Intense',
      dressCode:
        'Hard techno style embraces the underground aesthetic with dark, edgy elements. Think black leather, industrial accessories, and bold statement pieces. Combine functionality with fashion—comfortable for long nights dancing while maintaining an unmistakable presence on the dance floor.',
      imagePrefix: 'hard techno',
    },
  };

  // Image path mapping to handle inconsistent file naming in public folder
  const getImagePath = (categoryId: string, imageNum: number): string => {
    const imageMap: Record<string, string[]> = {
      'art-exhibition': [
        '/ART EXHIBITION 1.jpg',
        '/ART EXHIBITION 2.jpg',
        '/ART EXHIBITON 3.jpg', // Note: typo in original filename
        '/ART EXHIBITION 4.jpg',
        '/ART EXHIBITION 5.jpg',
        '/art exhibition 6.jpg',
      ],
      'business-meeting': [
        '/business meeting 1.jpg',
        '/business meeting 2.jpg',
        '/businnes meeting 3.jpg', // Note: typo in original filename
        '/business meeting 4.jpg',
        '/business meeting 5.jpg',
        '/business meeting 6.jpg',
      ],
      'dinner-date': [
        '/DINNER DATE 1.jpg',
        '/DINNER DATE 2.jpg',
        '/DINNER DATE 3.jpg',
        '/DINNER DATE 4.jpg',
        '/DINNER DATE 5.jpg',
        '/dinner date 6.jpg',
      ],
      'travel': [
        '/travel 1.jpg',
        '/travel 2.jpg',
        '/travel 3.jpg',
        '/travel 4.jpg',
        '/travel 5.jpg',
        '/travel 6.jpg',
      ],
      'pool-party': [
        '/pool party 1.jpg',
        '/pool party 2.jpg',
        '/pool party 3.jpg',
        '/pool party 4.jpg',
        '/pool party 5.jpg',
        '/pool party 6.jpg',
      ],
      'hard-techno': [
        '/hard techno 1.jpg',
        '/hard techno 2.jpg',
        '/hard techno 3.jpg',
        '/hard techno 4.jpg',
        '/hard techno 5.jpg',
        '/hard techno 6.jpg',
      ],
    };
    
    return imageMap[categoryId]?.[imageNum - 1] || '';
  };

  const category = categoryInfo[id || 'art-exhibition'] || categoryInfo['art-exhibition'];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#4A2847] to-[#D97746] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/categories"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Link>
          <h1 className="text-4xl md:text-5xl mb-2">{category.name}</h1>
          <p className="text-xl text-purple-50">{category.description}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left: Description */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
              <h2 className="text-2xl mb-4 text-gray-900">Style Guidelines</h2>
              <p className="text-gray-600 leading-relaxed">{category.dressCode}</p>
            </div>
          </div>

          {/* Right: Outfits Grid */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl mb-6 text-gray-900">Curated Looks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5, 6].map((outfitId) => (
                <div key={outfitId} className="group">
                  <Link
                    to={`/outfit/${outfitId}`}
                    className="block relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 hover:shadow-xl mb-4 transition-all"
                  >
                    <img
                      src={getImagePath(id || 'art-exhibition', outfitId)}
                      alt={`${category.name} Look ${outfitId}`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {['Jacket', 'Shoes', 'Bag', 'Accessories'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/outfit/${outfitId}`}
                    className="block w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white text-center py-3 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}