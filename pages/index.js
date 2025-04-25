import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-8 bg-green-900">
        <Image src="https://images.unsplash.com/photo-1587300003388-59208cc962cb" alt="Grow Room" layout="fill" objectFit="cover" className="opacity-40 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 text-white">GrowPilot Designer</h1>
          <p className="text-xl mb-8 max-w-2xl text-white">
            Custom Grow Room Plans tailored to your space, budget, and growing goals.
          </p>
          <a
            href="#plans"
            className="bg-green-600 text-white px-8 py-4 rounded-3xl text-lg hover:bg-green-700 transition"
          >
            Get Your Plan
          </a>
        </div>
      </section>

      {/* Grow Room Plans Section */}
      <section id="plans" className="py-20 px-8 bg-green-50 text-center">
        <h2 className="text-4xl font-bold mb-8">Choose Your Perfect Grow Room Plan</h2>
        <p className="max-w-3xl mx-auto mb-16">At GrowRoom Designer, we offer more than just designs — we help you create the ultimate space to grow. Whether you're just starting or building a professional setup, we have the perfect plan for you.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* GrowBasic Card */}
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition bg-white">
            <h3 className="text-2xl font-semibold mb-4">🛠️ GrowBasic – Starter Package</h3>
            <p className="text-3xl font-bold mb-4">£149</p>
            <ul className="text-left mb-6 list-disc list-inside">
              <li>Custom grow room plan (up to 4 m²)</li>
              <li>Budget-friendly equipment recommendations</li>
              <li>Lighting design (LED / HPS / CMH)</li>
              <li>Basic ventilation suggestions</li>
              <li>1 design revision included</li>
              <li>Delivery within 5 working days</li>
            </ul>
            <div className="mb-4 text-left">
              <p className="font-semibold mb-2">Optional Add-ons:</p>
              <p>Express Delivery (+£50), 3D Visualisation (+£100)</p>
            </div>
            <label className="block mt-4">
              <input type="checkbox" className="mr-2" /> Add discounted purchase list (+£29)
            </label>
            <button className="bg-green-600 text-white w-full mt-6 py-3 rounded-3xl hover:bg-green-700">Choose GrowBasic</button>
          </div>

          {/* GrowPro Card */}
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition bg-green-100">
            <h3 className="text-2xl font-semibold mb-4">⚡ GrowPro – Advanced Package</h3>
            <p className="text-3xl font-bold mb-4">£349</p>
            <ul className="text-left mb-6 list-disc list-inside">
              <li>Personalized grow room plan (up to 10 m²)</li>
              <li>Lighting + ventilation + basic automation</li>
              <li>Two layout options: economy vs performance</li>
              <li>2D preliminary visualisations</li>
              <li>2 design revisions included</li>
              <li>Delivery within 7 working days</li>
            </ul>
            <div className="mb-4 text-left">
              <p className="font-semibold mb-2">Optional Add-ons:</p>
              <p>Express Delivery (+£50), 3D Visualisation (+£100), Hydroponics Design (+£75), CO₂ Enrichment Plan (+£50)</p>
            </div>
            <label className="block mt-4">
              <input type="checkbox" className="mr-2" /> Add discounted purchase list (+£29)
            </label>
            <button className="bg-green-600 text-white w-full mt-6 py-3 rounded-3xl hover:bg-green-700">Choose GrowPro</button>
          </div>

          {/* GrowMaster Card */}
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition bg-white">
            <h3 className="text-2xl font-semibold mb-4">🚀 GrowMaster – Professional Package</h3>
            <p className="text-3xl font-bold mb-4">£699</p>
            <ul className="text-left mb-6 list-disc list-inside">
              <li>Custom plan (up to 25 m² or larger)</li>
              <li>Lighting + CO₂ + IVS watering + full automation</li>
              <li>Professional 3D visualisations</li>
              <li>Electrical, irrigation, ventilation schematics</li>
              <li>1-hour online consultation</li>
              <li>Delivery within 10–14 working days</li>
            </ul>
            <div className="mb-4 text-left">
              <p className="font-semibold mb-2">Optional Add-ons:</p>
              <p>Express Delivery (+£50), Additional Consultations (£75/h)</p>
            </div>
            <label className="block mt-4">
              <input type="checkbox" className="mr-2" /> Add discounted purchase list (+£29)
            </label>
            <button className="bg-green-600 text-white w-full mt-6 py-3 rounded-3xl hover:bg-green-700">Choose GrowMaster</button>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">🎯 Why GrowRoom Designer?</h3>
          <ul className="list-disc list-inside max-w-2xl mx-auto text-left">
            <li>✅ Tailored designs based on your space and goals</li>
            <li>✅ Expert advice for beginners and professionals</li>
            <li>✅ Save money by avoiding costly mistakes</li>
            <li>✅ Plans ready for both DIY and contractor builds</li>
          </ul>
          <a href="#" className="inline-block mt-8 bg-green-600 text-white px-8 py-4 rounded-3xl text-lg hover:bg-green-700">Get Your Custom Grow Room Plan Today!</a>
        </div>
      </section>
    </div>
  );
}
