import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-8 bg-green-900">
        <Image src="https://images.unsplash.com/photo-1587300003388-59208cc962cb" alt="Grow Room" layout="fill" objectFit="cover" className="opacity-40 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 text-white">GrowPilot Designer</h1>
          <p className="text-xl mb-8 max-w-2xl text-white">
            Custom Grow Room Plans for Beginners and Professionals | Smart Design, Maximum Efficiency
          </p>
          <a href="#plans" className="bg-green-600 text-white px-8 py-4 rounded-3xl text-lg hover:bg-green-700 transition">
            Choose Your Plan
          </a>
        </div>
      </section>
      <section id="plans" className="py-20 px-8 bg-green-50 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Grow Room Packages</h2>
        <p className="max-w-3xl mx-auto mb-16">
          Find the best plan for your indoor grow setup. Optimized layouts, professional advice, and tailor-made solutions to maximize your harvest.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Packages */}
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition bg-white">
            <h3 className="text-2xl font-bold mb-2">Basic Room Setup</h3>
            <p className="text-lg mb-2">Perfect for beginners</p>
            <p className="text-3xl font-bold mb-4">£149</p>
          </div>
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition bg-green-100">
            <h3 className="text-2xl font-bold mb-2">Advanced Environment</h3>
            <p className="text-lg mb-2">For experienced growers</p>
            <p className="text-3xl font-bold mb-4">£399</p>
          </div>
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition bg-white">
            <h3 className="text-2xl font-bold mb-2">Full Smart Grow</h3>
            <p className="text-lg mb-2">Ultimate Grow Room Package</p>
            <p className="text-3xl font-bold mb-4">£899</p>
          </div>
        </div>
      </section>
    </div>
  );
}