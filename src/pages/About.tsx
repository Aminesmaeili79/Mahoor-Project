import {
  Sparkles,
  Heart,
  Users,
  TrendingUp,
} from "lucide-react";

export function About() {
  const values = [
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "Pioneering AI-driven technology to revolutionize personal style curation",
    },
    {
      icon: Heart,
      title: "Excellence",
      description:
        "Committed to delivering premium styling experiences that inspire confidence",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Cultivating a global network of style-conscious individuals",
    },
    {
      icon: TrendingUp,
      title: "Evolution",
      description:
        "Continuously advancing with fashion trends and intelligent technology",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#4A2847] to-[#D97746] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">
            About Stylect
          </h1>
          <p className="text-xl text-purple-50 max-w-3xl mx-auto">
            Transforming personal style through intelligent
            technology and expert fashion curation
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-white border border-gray-200 rounded-3xl p-12 text-center">
          <h2 className="text-3xl mb-6 text-gray-900">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Stylect, we believe sophisticated style should be
            universally accessible. Our mission is to
            democratize premium fashion consultation by
            synthesizing artificial intelligence with expert
            curation, delivering personalized styling solutions
            for every occasion. From executive meetings to
            summer celebrations, we empower individuals to
            express their authentic style with confidence.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl text-center mb-12 text-gray-900">
          Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A2847] to-[#D97746] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl text-center mb-12 text-gray-900">
            Our Journey
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Stylect emerged from a fundamental insight:
              mastering occasion-appropriate dressing shouldn't
              require stress or uncertainty. Our founders,
              passionate about both luxury fashion and
              cutting-edge technology, recognized that while
              personal stylists provided invaluable expertise,
              they remained inaccessible to most individuals.
            </p>
            <p>
              By integrating sophisticated machine learning
              algorithms with insights from industry
              professionals, we engineered a platform that
              comprehends your distinctive style preferences and
              the subtle nuances of various dress codes. From
              art gallery exhibitions to executive conferences,
              beach gatherings to formal celebrations, Stylect
              delivers tailored recommendations that cultivate
              genuine confidence.
            </p>
            <p>
              Today, we proudly serve a global community of
              fashion enthusiasts, helping them navigate their
              wardrobes with precision and discover styling
              possibilities they never imagined. Our journey
              continues to evolve, driven by innovation and
              commitment to our community.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-[#4A2847] to-[#D97746] rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl mb-4">
            Join the Style Revolution
          </h2>
          <p className="text-xl mb-8 text-purple-50">
            Begin your personalized style journey with Stylect
            today
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:shadow-xl transition-shadow">
            Start Free Experience
          </button>
        </div>
      </section>
    </div>
  );
}