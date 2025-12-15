import { Plus, Grid3x3, List } from 'lucide-react';
import { useState } from 'react';

export function MyWardrobe() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const savedOutfits = [
    {
      id: 1,
      name: 'Gallery Opening Ensemble',
      category: 'Art Exhibition',
      savedDate: 'Dec 10, 2025',
    },
    {
      id: 2,
      name: 'Refined Evening Look',
      category: 'Dinner Date',
      savedDate: 'Dec 8, 2025',
    },
    {
      id: 3,
      name: 'Executive Power Suit',
      category: 'Business Meeting',
      savedDate: 'Dec 5, 2025',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#4A2847] to-[#D97746] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl mb-4">My Wardrobe</h1>
          <p className="text-xl text-purple-50">
            Your curated collection of personalized style selections
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl text-gray-900">Saved Collections ({savedOutfits.length})</h2>
          <div className="flex items-center gap-3">
            <div className="flex bg-white border border-gray-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-[#4A2847] to-[#D97746] text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list'
                    ? 'bg-gradient-to-r from-[#4A2847] to-[#D97746] text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
            <button className="bg-gradient-to-r from-[#4A2847] to-[#D97746] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-shadow flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add to Collection
            </button>
          </div>
        </div>

        {/* Empty State or Outfits */}
        {savedOutfits.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-3xl p-16 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Plus className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl mb-3 text-gray-900">No saved outfits yet</h3>
            <p className="text-gray-600 mb-6">
              Begin curating your personal collection by saving looks that resonate with your style
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-shadow">
              Explore Collections
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedOutfits.map((outfit) => (
              <div key={outfit.id} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[3/4] bg-gray-100 border-2 border-dashed border-gray-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                        <span className="text-2xl">👔</span>
                      </div>
                      <p className="text-gray-400 text-sm">Insert Outfit Image</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg mb-1 text-gray-900">{outfit.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{outfit.category}</p>
                  <p className="text-xs text-gray-500">Saved {outfit.savedDate}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {savedOutfits.map((outfit) => (
              <div key={outfit.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow flex gap-6">
                <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-2xl">👔</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2 text-gray-900">{outfit.name}</h3>
                  <p className="text-gray-600 mb-3">{outfit.category}</p>
                  <p className="text-sm text-gray-500">Saved {outfit.savedDate}</p>
                </div>
                <div className="flex items-center">
                  <button className="bg-gradient-to-r from-[#4A2847] to-[#D97746] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-shadow">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}