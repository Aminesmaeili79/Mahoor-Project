import { Upload, Sparkles, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function AIStyling() {
  const [eventType, setEventType] = useState('');

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#4A2847] to-[#D97746] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl">AI Style Intelligence</h1>
          </div>
          <p className="text-xl text-purple-50">
            Advanced algorithms delivering personalized outfit curation tailored to your wardrobe
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* How It Works */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-8">
          <h2 className="text-2xl mb-6 text-gray-900">Intelligence Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4A2847] to-[#D97746] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                1
              </div>
              <h3 className="mb-2 text-gray-900">Wardrobe Analysis</h3>
              <p className="text-sm text-gray-600">
                Upload your clothing collection for AI processing
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4A2847] to-[#D97746] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                2
              </div>
              <h3 className="mb-2 text-gray-900">Context Definition</h3>
              <p className="text-sm text-gray-600">
                Specify occasion, preferences, and requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                3
              </div>
              <h3 className="mb-2 text-gray-900">Curated Results</h3>
              <p className="text-sm text-gray-600">
                Receive AI-optimized outfit combinations
              </p>
            </div>
          </div>
        </div>

        {/* AI Generator Form */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-8 relative overflow-hidden">
          {/* Premium Overlay */}
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex items-center justify-center">
            <div className="text-center max-w-md p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-gray-900">Premium Intelligence</h3>
              <p className="text-gray-600 mb-6">
                Unlock AI Style Intelligence to access personalized outfit curation powered by advanced machine learning algorithms.
              </p>
              <Link
                to="/pricing"
                className="inline-block bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-shadow"
              >
                Upgrade to Premium
              </Link>
            </div>
          </div>

          {/* Form Content (blurred in background) */}
          <h2 className="text-2xl mb-6 text-gray-900">Generate Personalized Outfit</h2>

          {/* Upload Section */}
          <div className="mb-6">
            <label className="block mb-3 text-gray-900">
              Wardrobe Collection Upload
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-[#4A2847] transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">
                Click to upload or drag and drop
              </p>
              <p className="text-sm text-gray-500">
                PNG, JPG up to 10MB
              </p>
            </div>
          </div>

          {/* Event Type Input */}
          <div className="mb-6">
            <label className="block mb-3 text-gray-900">
              Occasion Description
            </label>
            <input
              type="text"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              placeholder="e.g., Beach Wedding, Executive Conference, Casual Brunch..."
              className="w-full px-4 py-4 border border-gray-300 rounded-xl outline-none focus:border-purple-600 transition-colors"
            />
          </div>

          {/* Generate Button */}
          <button className="w-full bg-gradient-to-r from-[#4A2847] to-[#D97746] text-white py-4 rounded-xl hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            Generate AI Outfit
          </button>

          {/* Result Placeholder */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="text-xl mb-4 text-gray-900">AI-Generated Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300"></div>
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300"></div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#4A2847]/5 to-[#D97746]/5 border border-[#4A2847]/20 rounded-2xl p-6">
            <h3 className="text-xl mb-3 text-gray-900">Intelligent Curation</h3>
            <p className="text-gray-600">
              Our AI engine analyzes your wardrobe inventory and synthesizes optimal combinations based on occasion, climate patterns, and contemporary style trends.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#4A2847]/5 to-[#D97746]/5 border border-[#4A2847]/20 rounded-2xl p-6">
            <h3 className="text-xl mb-3 text-gray-900">Personalized Precision</h3>
            <p className="text-gray-600">
              Receive recommendations calibrated to your unique style profile, body architecture, and color preferences for maximum confidence and authenticity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}