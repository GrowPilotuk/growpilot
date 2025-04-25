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
            href="#pricing"
            className="bg-green-600 text-white px-8 py-4 rounded-3xl text-lg hover:bg-green-700 transition"
          >
            Get Your Plan
          </a>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-8 bg-green-50 text-center">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <Image src="https://img.icons8.com/fluency/96/plant-under-sun.png" width={64} height={64} alt="Step 1" />
            <h3 className="text-2xl font-semibold mt-4 mb-2">Tell Us About Your Space</h3>
            <p>Fill a quick form with your room details and grow goals.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="https://img.icons8.com/fluency/96/artificial-intelligence.png" width={64} height={64} alt="Step 2" />
            <h3 className="text-2xl font-semibold mt-4 mb-2">We Design Your Grow Room</h3>
            <p>Get AI + expert-generated customised plans.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="https://img.icons8.com/fluency/96/checked.png" width={64} height={64} alt="Step 3" />
            <h3 className="text-2xl font-semibold mt-4 mb-2">Start Growing</h3>
            <p>Receive plans, order equipment and grow with confidence.</p>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="pricing" className="py-20 px-8 bg-gradient-to-b from-green-50 to-green-100 text-center">
        <h2 className="text-4xl font-bold mb-12">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">Starter</h3>
            <p className="text-3xl font-bold mb-4">£19.99</p>
            <p className="mb-6">1 custom grow room plan + basic equipment list.</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-3xl hover:bg-green-700">Buy Starter</button>
          </div>
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition bg-green-200">
            <h3 className="text-2xl font-semibold mb-4">Pro Grower</h3>
            <p className="text-3xl font-bold mb-4">£39.99</p>
            <p className="mb-6">3 grow room plans + detailed budget breakdown + equipment links.</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-3xl hover:bg-green-700">Buy Pro</button>
          </div>
          <div className="border p-8 rounded-3xl shadow-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">Ultimate Lab</h3>
            <p className="text-3xl font-bold mb-4">£89.99</p>
            <p className="mb-6">Everything in Pro + 3D visualisation + expert consultation.</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-3xl hover:bg-green-700">Buy Ultimate</button>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 px-8 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 border rounded-3xl shadow-xl flex flex-col items-center">
            <Image src="https://randomuser.me/api/portraits/men/32.jpg" width={64} height={64} className="rounded-full mb-4" alt="Alex" />
            <p className="italic">"Fantastic service! The plan was easy to follow and my grow room looks amazing."</p>
            <p className="mt-4 font-semibold">- Alex T.</p>
          </div>
          <div className="p-6 border rounded-3xl shadow-xl flex flex-col items-center">
            <Image src="https://randomuser.me/api/portraits/women/44.jpg" width={64} height={64} className="rounded-full mb-4" alt="Sarah" />
            <p className="italic">"Saved me so much time and money. Highly recommend to any new grower."</p>
            <p className="mt-4 font-semibold">- Sarah J.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 px-8 bg-green-600 text-white text-center">
        <p>GrowPilot Designer © 2025 | All rights reserved.</p>
      </footer>
    </div>
  );
}
