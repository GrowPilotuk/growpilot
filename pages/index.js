export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-green-100">
        <h1 className="text-5xl font-bold mb-6">GrowPilot Designer</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Custom Grow Room Plans tailored to your space, budget, and growing goals.
        </p>
        <a
          href="#pricing"
          className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-green-700 transition"
        >
          Get Your Plan
        </a>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">1. Tell Us About Your Space</h3>
            <p>Provide your room size, shape, grow goals, and budget through our easy form.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">2. We Design Your Grow Room</h3>
            <p>AI + expert input to generate 3 tailor-made grow room plans for you.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">3. Start Growing</h3>
            <p>Download your plan, order equipment, and set up your dream grow room easily.</p>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="pricing" className="py-16 px-8 bg-green-50 text-center">
        <h2 className="text-4xl font-bold mb-12">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Starter</h3>
            <p className="text-3xl font-bold mb-4">\u00a319.99</p>
            <p className="mb-6">1 custom grow room plan + basic equipment list.</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Buy Starter</button>
          </div>
          <div className="border p-8 rounded-lg shadow-lg bg-green-100">
            <h3 className="text-2xl font-semibold mb-4">Pro Grower</h3>
            <p className="text-3xl font-bold mb-4">\u00a339.99</p>
            <p className="mb-6">3 grow room plans + detailed budget breakdown + equipment links.</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Buy Pro</button>
          </div>
          <div className="border p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Ultimate Lab</h3>
            <p className="text-3xl font-bold mb-4">\u00a389.99</p>
            <p className="mb-6">Everything in Pro + 3D visualisation + expert consultation.</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Buy Ultimate</button>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 border rounded-lg shadow">
            <p>"Fantastic service! The plan was easy to follow and my grow room looks amazing."</p>
            <p className="mt-4 font-semibold">- Alex T.</p>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <p>"Saved me so much time and money. Highly recommend to any new grower."</p>
            <p className="mt-4 font-semibold">- Sarah J.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 px-8 bg-green-600 text-white text-center">
        <p>GrowPilot Designer &copy; 2025 | All rights reserved.</p>
      </footer>
    </div>
  );
}
