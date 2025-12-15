import { Check, X, Crown } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      icon: '✨',
      iconColor: 'from-gray-600 to-gray-500',
      features: [
        { name: 'Limited categories (5 occasions)', included: true },
        { name: 'Limited outfits per category (10 looks)', included: true },
        { name: 'Basic wardrobe management', included: true },
        { name: 'Community access', included: true },
        { name: 'AI Style Intelligence', included: false },
        { name: 'Unlimited categories', included: false },
        { name: 'Full wardrobe integration', included: false },
        { name: 'Priority feature updates', included: false },
      ],
      cta: 'Current Plan',
      ctaStyle: 'bg-gray-200 text-gray-700',
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: 'per month',
      icon: Crown,
      iconColor: 'from-purple-600 to-orange-500',
      popular: true,
      features: [
        { name: 'Unlimited style categories', included: true },
        { name: 'Unlimited curated looks and variations', included: true },
        { name: 'Full AI Style Intelligence access', included: true },
        { name: 'Advanced wardrobe integration', included: true },
        { name: 'Personalized AI recommendations', included: true },
        { name: 'Premium customer support', included: true },
        { name: 'Early access to new features', included: true },
        { name: 'Ad-free premium experience', included: true },
      ],
      cta: 'Upgrade to Premium',
      ctaStyle: 'bg-gradient-to-r from-[#4A2847] to-[#D97746] text-white hover:shadow-lg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#4A2847] to-[#D97746] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Investment in Style</h1>
          <p className="text-xl text-purple-50">
            Select the plan that elevates your fashion intelligence
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white border rounded-3xl p-8 ${
                plan.popular
                  ? 'border-purple-600 shadow-xl'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#4A2847] to-[#D97746] text-white px-6 py-2 rounded-full text-sm">
                    Recommended
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${plan.iconColor} rounded-2xl flex items-center justify-center mb-6`}>
                {typeof plan.icon === 'string' ? (
                  <span className="text-3xl">{plan.icon}</span>
                ) : (
                  <plan.icon className="w-8 h-8 text-white" />
                )}
              </div>

              {/* Plan Name & Price */}
              <h2 className="text-3xl mb-2 text-gray-900">{plan.name}</h2>
              <div className="mb-6">
                <span className="text-5xl text-gray-900">{plan.price}</span>
                <span className="text-gray-600 ml-2">/ {plan.period}</span>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl transition-all mb-8 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </button>

              {/* Features List */}
              <div className="space-y-4">
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Features Included
                </p>
                {plan.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    {feature.included ? (
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-[#4A2847] to-[#D97746] rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center mt-0.5">
                        <X className="w-3 h-3 text-gray-400" />
                      </div>
                    )}
                    <span
                      className={
                        feature.included
                          ? 'text-gray-900'
                          : 'text-gray-400'
                      }
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl text-center mb-12 text-gray-900">Common Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl mb-3 text-gray-900">Can I cancel my subscription?</h3>
              <p className="text-gray-600">
                Absolutely. Cancel anytime with no penalties. You'll retain access through your current billing cycle.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl mb-3 text-gray-900">What payment methods are supported?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, debit cards, and digital payment platforms including PayPal and Apple Pay.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl mb-3 text-gray-900">How does AI Style Intelligence function?</h3>
              <p className="text-gray-600">
                Our proprietary algorithms analyze your wardrobe collection and occasion parameters to generate optimized outfit recommendations aligned with your style profile.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl mb-3 text-gray-900">Is there a trial period available?</h3>
              <p className="text-gray-600">
                Our Free plan provides comprehensive platform exploration before committing to Premium features.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}