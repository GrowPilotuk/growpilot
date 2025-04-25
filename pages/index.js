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
          <p className="text-xl mb-8 max-w-2xl text-white">
            Tailored grow room plans for every level. Build smarter, grow better.
          </p>
          <a
            href="#plans"
            className="bg-green-600 text-white px-8 py-4 rounded-3xl text-lg hover:bg-green-700 transition"
          >
            Choose Your Plan
          </a>
        </div>
      </section>

<section className="py-20 px-8 bg-gray-100 text-center">
  <h2 className="text-4xl font-bold mb-8">Compare Our Packages</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto border-collapse border border-gray-300 text-left text-sm">
      <thead>
        <tr className="bg-green-600 text-white">
          <th className="p-4 border border-gray-300">Feature</th>
          <th className="p-4 border border-gray-300">Basic</th>
          <th className="p-4 border border-gray-300">Advanced</th>
          <th className="p-4 border border-gray-300">Full</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {[
          ['Room and Plant Layout', true, true, true],
          ['Basic Lighting Plan', true, true, true],
          ['Ventilation System Design', false, true, true],
          ['Watering System (IWS or Manual)', false, true, true],
          ['Humidifier/Dehumidifier Layout', false, true, true],
          ['Medium Strategy (Coco/Soil etc.)', false, true, true],
          ['CO₂ Enrichment System', false, false, true],
          ['Full Automation and Sensors', false, false, true],
          ['Electrical Layout & Safety', false, false, true],
          ['3D Visualization', false, false, true],
          ['Expert Consultation', false, false, true]
        ].map(([feature, basic, advanced, full]) => (
          <tr key={feature}>
            <td className="p-4 border border-gray-300 font-medium">{feature}</td>
            <td className="p-4 border border-gray-300 text-center">{basic ? '✅' : '❌'}</td>
            <td className="p-4 border border-gray-300 text-center">{advanced ? '✅' : '❌'}</td>
            <td className="p-4 border border-gray-300 text-center">{full ? '✅' : '❌'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>


      {/* Packages Section */}
      <section id="plans" className="py-20 px-8 bg-green-50 text-center">
        <h2 className="text-4xl font-bold mb-8">Modular Grow Room Packages</h2>
        <p className="max-w-3xl mx-auto mb-16">
          Whether you’re a hobby grower or building a professional setup – we’ve got you covered with step-by-step designs and expert options.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Room Setup */}
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition bg-white">
            <Image src="https://img.icons8.com/fluency/96/seedling.png" alt="Seedling" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">🧩 Basic Room Setup</h3>
            <p className="text-lg mb-2">Perfect for beginners</p>
            <p className="text-3xl font-bold mb-4">£149</p>
            <ul className="text-left mb-6 list-disc list-inside">
              <li>Grow Tent or Room Layout</li>
              <li>Plant Positioning & Spacing Plan</li>
              <li>Basic Lighting Plan (LED, HPS, CMH)</li>
              <li>Basic Ventilation Positioning</li>
              <li>Odor Control Recommendation</li>
              <li>Basic Equipment Shopping List</li>
            </ul>
            <Link href="/order?plan=Basic Room Setup">
              <button className="bg-green-600 text-white w-full py-3 rounded-3xl hover:bg-green-700">Get Basic Plan</button>
            </Link>
          </div>

          {/* Advanced Environment */}
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition bg-green-100">
            <Image src="https://img.icons8.com/fluency/96/eco-care.png" alt="Eco" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">🧩 Advanced Environment</h3>
            <p className="text-lg mb-2">For climate-aware growers</p>
            <p className="text-3xl font-bold mb-4">£399</p>
            <ul className="text-left mb-6 list-disc list-inside">
              <li>Everything in Basic Plan</li>
              <li>Full Ventilation System Design</li>
              <li>IWS or Manual Watering System</li>
              <li>Humidifier/Dehumidifier Layout</li>
              <li>Medium Strategy (Coco, Soil, Rockwool)</li>
              <li>Shopping List with Discounts</li>
            </ul>
            <Link href="/order?plan=Advanced Environment">
              <button className="bg-green-600 text-white w-full py-3 rounded-3xl hover:bg-green-700">Get Advanced Plan</button>
            </Link>
          </div>

          {/* Full Smart Grow */}
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition bg-white">
            <Image src="https://img.icons8.com/fluency/96/artificial-intelligence.png" alt="AI Grow" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">🧩 Full Smart Grow</h3>
            <p className="text-lg mb-2">For serious professionals</p>
            <p className="text-3xl font-bold mb-4">£899</p>
            <ul className="text-left mb-6 list-disc list-inside">
              <li>Everything in Advanced Plan</li>
              <li>CO₂ Enrichment System</li>
              <li>Full Automation Plan</li>
              <li>Smart Sensors (Temp, pH, EC)</li>
              <li>Electrical Layout & Safety</li>
              <li>3D Visualization</li>
              <li>Consultation & Support</li>
            </ul>
            <Link href="/order?plan=Full Smart Grow">
              <button className="bg-green-600 text-white w-full py-3 rounded-3xl hover:bg-green-700">Get Full Plan</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
