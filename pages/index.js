
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-8 bg-green-900">
        <Image src="https://images.unsplash.com/photo-1587300003388-59208cc962cb" alt="Grow Room" layout="fill" objectFit="cover" className="opacity-40 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 text-white">GrowPilot Designer</h1>
          <p className="text-xl mb-8 max-w-2xl text-white">Tailored grow room plans for every level. Build smarter, grow better.</p>
          <a href="#plans" className="bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-3xl text-lg hover:scale-105 transition">
            Choose Your Plan
          </a>
        </div>
      </section>

      {/* Packages Section */}
      <section id="plans" className="py-20 px-8 bg-green-50 text-center">
        <h2 className="text-4xl font-bold mb-8">Modular Grow Room Packages</h2>
        <p className="max-w-3xl mx-auto mb-16">Whether you’re a hobby grower or building a professional setup – we’ve got you covered with step-by-step designs and expert options.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* 3 pakiety */}
          {/* Basic */}
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition bg-white">
            <Image src="https://img.icons8.com/fluency/96/seedling.png" alt="Seedling" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">🧩 Basic Room Setup</h3>
            <p className="text-lg mb-2">Perfect for beginners</p>
            <p className="text-3xl font-bold mb-4">£149</p>
            <Link href="/order?plan=Basic Room Setup">
              <button className="bg-gradient-to-r from-green-400 to-green-600 text-white w-full py-3 rounded-3xl hover:scale-105 transition">Get Basic Plan</button>
            </Link>
          </div>
          {/* Advanced */}
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition bg-green-100">
            <Image src="https://img.icons8.com/fluency/96/eco-care.png" alt="Eco" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">🧩 Advanced Environment</h3>
            <p className="text-lg mb-2">For climate-aware growers</p>
            <p className="text-3xl font-bold mb-4">£399</p>
            <Link href="/order?plan=Advanced Environment">
              <button className="bg-gradient-to-r from-green-400 to-green-600 text-white w-full py-3 rounded-3xl hover:scale-105 transition">Get Advanced Plan</button>
            </Link>
          </div>
          {/* Full */}
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition bg-white">
            <Image src="https://img.icons8.com/fluency/96/artificial-intelligence.png" alt="AI Grow" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">🧩 Full Smart Grow</h3>
            <p className="text-lg mb-2">For serious professionals</p>
            <p className="text-3xl font-bold mb-4">£899</p>
            <Link href="/order?plan=Full Smart Grow">
              <button className="bg-gradient-to-r from-green-400 to-green-600 text-white w-full py-3 rounded-3xl hover:scale-105 transition">Get Full Plan</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Compare Our Packages Section */}
      <section className="py-20 px-8 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-12 text-green-800">Compare Our Packages</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-5 text-lg">Feature</th>
                <th className="p-5 text-lg">Basic</th>
                <th className="p-5 text-lg">Advanced</th>
                <th className="p-5 text-lg">Full</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-800">
              {/* przykładowe wiersze */}
              <tr className="bg-gray-50"><td className="p-4">Room and Plant Layout</td><td>✅</td><td>✅</td><td>✅</td></tr>
              <tr className="bg-white"><td className="p-4">Basic Lighting Plan</td><td>✅</td><td>✅</td><td>✅</td></tr>
              <tr className="bg-gray-50"><td className="p-4">Ventilation Design</td><td>❌</td><td>✅</td><td>✅</td></tr>
              <tr className="bg-white"><td className="p-4">Watering System (IWS/Manual)</td><td>❌</td><td>✅</td><td>✅</td></tr>
              <tr className="bg-gray-50"><td className="p-4">CO₂ Enrichment System</td><td>❌</td><td>❌</td><td>✅</td></tr>
              <tr className="bg-white"><td className="p-4">Full Automation + Sensors</td><td>❌</td><td>❌</td><td>✅</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
