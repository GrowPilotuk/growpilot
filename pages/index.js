import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-8 bg-green-900">
        <Image
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb"
          alt="Grow Room"
          layout="fill"
          objectFit="cover"
          className="opacity-40 z-0"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 text-white">GrowPilot Designer</h1>
          <p className="text-xl mb-8 max-w-2xl text-white">
            Build your perfect indoor grow room with AI-powered custom plans.
          </p>
          <a
            href="#plans"
            className="bg-green-600 text-white px-8 py-4 rounded-3xl text-lg hover:bg-green-700 transition"
          >
            Discover Plans
          </a>
        </div>
      </section>

      {/* Packages Section */}
      <section id="plans" className="py-20 px-8 bg-green-50 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Packages</h2>
        <p className="max-w-3xl mx-auto mb-16">
          Tailored grow room designs for every grower, from beginners to professionals. Choose your path to a better grow!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* GrowBasic Card */}
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition bg-white">
            <h3 className="text-2xl font-bold mb-4">🛠️ GrowBasic</h3>
            <p className="text-lg mb-4">Start Growing Smart</p>
            <p className="text-3xl font-bold mb-6">£149</p>
            <ul className="text-left mb-6 list-disc list-inside">
              <li>Custom Lighting Plan (LED/HPS/CMH)</li>
              <li>Grow Tent or Room Layout</li>
              <li>Basic Equipment Recommendations</li>
              <li>1 Revision Included</li>
            </ul>
            <Link href="/order?plan=GrowBasic">
              <button className="bg-green-600 text-white w-full mt-6 py-3 rounded-3xl hover:bg-green-700">
                Get GrowBasic
              </button>
            </Link>
          </div>

          {/* GrowPro Card */}
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition bg-green-100">
            <h3 className="text-2xl font-bold mb-4">⚡ GrowPro</h3>
            <p className="text-lg mb-4">Optimize Your Growth</p>
            <p className="text-3xl font-bold mb-6">£349</p>
            <ul className="text-left mb-6 list-disc list-inside">
              <li>Everything in Basic +</li>
              <li>Full Ventilation Design</li>
              <li>Hydroponic and Medium Options</li>
              <li>2D Layouts and 2 Revisions</li>
            </ul>
            <Link href="/order?plan=GrowPro">
              <button className="bg-green-600 text-white w-full mt-6 py-3 rounded-3xl hover:bg-green-700">
                Get GrowPro
              </button>
            </Link>
          </div>

          {/* GrowMaster Card */}
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition bg-white">
            <h3 className="text-2xl font-bold mb-4">🚀 GrowMaster</h3>
            <p className="text-lg mb-4">Full Power Professional Design</p>
            <p className="text-3xl font-bold mb-6">£699</p>
            <ul className="text-left mb-6 list-disc list-inside">
              <li>Everything in Pro +</li>
              <li>CO₂ System Design</li>
              <li>Automated Climate Control</li>
              <li>Professional 3D Visualisations</li>
            </ul>
            <Link href="/order?plan=GrowMaster">
              <button className="bg-green-600 text-white w-full mt-6 py-3 rounded-3xl hover:bg-green-700">
                Get GrowMaster
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
