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

      {/* Pricing Plans Section*
