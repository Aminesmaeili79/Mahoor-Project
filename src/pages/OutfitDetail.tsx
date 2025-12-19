import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, ShoppingBag } from 'lucide-react';

export function OutfitDetail() {
  const { categoryId, outfitId } = useParams();

  // Category info for display
  const categoryInfo: Record<string, { name: string; description: string }> = {
    'art-exhibition': { name: 'Art Exhibition', description: 'Sophisticated Cultural Elegance' },
    'business-meeting': { name: 'Business Meeting', description: 'Executive Power Dressing' },
    'dinner-date': { name: 'Dinner Date', description: 'Refined Romantic Allure' },
    'travel': { name: 'Travel', description: 'Effortless Global Style' },
    'pool-party': { name: 'Pool Party', description: 'Vibrant Seasonal Celebration' },
    'hard-techno': { name: 'Hard Techno', description: 'Dark and Intense' },
  };

  // Image path mapping (same as CategoryDetail)
  const getImagePath = (catId: string, imgNum: number): string => {
    const imageMap: Record<string, string[]> = {
      'art-exhibition': [
        '/ART EXHIBITION 1.jpg',
        '/ART EXHIBITION 2.jpg',
        '/ART EXHIBITON 3.jpg',
        '/ART EXHIBITION 4.jpg',
        '/ART EXHIBITION 5.jpg',
        '/art exhibition 6.jpg',
      ],
      'business-meeting': [
        '/business meeting 1.jpg',
        '/business meeting 2.jpg',
        '/businnes meeting 3.jpg',
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
    return imageMap[catId]?.[imgNum - 1] || '';
  };

  // Complete the Look items - same for all outfit pages
  const completeTheLook = [
    { id: 'tailored-blazer', name: 'Tailored Blazer', brand: 'Designer Brand', price: '$299', image: '/TAILORED BLAZER 1.JPG' },
    { id: 'silk-blouse', name: 'Silk Blouse', brand: 'Designer Brand', price: '$159', image: '/SILK BLOUSE 1.JPG' },
    { id: 'designer-trousers', name: 'Designer Trousers', brand: 'Designer Brand', price: '$189', image: '/DESIGNER TROUSERS 1.JPG' },
    { id: 'leather-shoes', name: 'Leather Shoes', brand: 'Designer Brand', price: '$229', image: '/LEATHER SHOES 1.jpg' },
    { id: 'structured-bag', name: 'Structured Bag', brand: 'Designer Brand', price: '$349', image: '/STRUCTURED BAG 1.JPG' },
    { id: 'statement-glasses', name: 'Statement Glasses', brand: 'Designer Brand', price: '$179', image: '/STATMENT GLASSES 1.JPG' },
  ];

  const category = categoryInfo[categoryId || 'art-exhibition'] || categoryInfo['art-exhibition'];
  const outfitNumber = parseInt(outfitId || '1', 10);
  const outfitImage = getImagePath(categoryId || 'art-exhibition', outfitNumber);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link
          to={`/category/${categoryId}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {category.name}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left: Main Outfit Image */}
          <div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 mb-4">
              <img
                src={outfitImage}
                alt={`${category.name} Look ${outfitNumber}`}
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

          {/* Right: Outfit Details */}
          <div>
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#4A2847] to-[#D97746] text-white rounded-full text-sm mb-4">
                {category.name}
              </div>
              <h1 className="text-4xl mb-4 text-gray-900">{category.name} Look {outfitNumber}</h1>
              <p className="text-gray-600 text-lg mb-8">
                A masterfully curated outfit that embodies {category.description.toLowerCase()}. 
                This ensemble exemplifies refined taste and personal style confidence.
              </p>

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

        {/* Complete the Look */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <h2 className="text-3xl mb-8 text-gray-900">Complete the Look</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {completeTheLook.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group block">
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
