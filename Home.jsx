import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] bg-cover bg-center flex flex-col items-center justify-center text-white text-center p-4" style={{ backgroundImage: "url('/images/growroom-render.jpg')" }}>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-bold mb-4">
          Create Your Perfect Grow Room
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-lg md:text-2xl mb-6 max-w-2xl">
          Get a tailor-made grow room design and start growing smarter today.
        </motion.p>
        <div className="flex gap-4">
          <Button>Explore Packages</Button>
          <Button variant="outline">Take the Quiz</Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full max-w-6xl py-16 px-4 grid md:grid-cols-3 gap-8 text-center">
        {['Tailored Designs', 'Higher Yields', 'Expert Support'].map((item, index) => (
          <Card key={index} className="shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-600">Unlock your full growing potential with professional designs and expert support.</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Packages */}
      <section className="w-full bg-gray-100 py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Our Grow Room Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[{title: 'Basic Room Setup', price: '£149'}, {title: 'Advanced Environment', price: '£399'}, {title: 'Full Smart Grow', price: '£899'}].map((pkg, idx) => (
            <Card key={idx} className="p-6 shadow-lg">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-xl text-green-600 font-bold mb-4">{pkg.price}</p>
                <Button className="w-full">See Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Compare Packages */}
      <section className="w-full max-w-6xl py-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Compare Packages</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="p-4 border">Feature</th>
                <th className="p-4 border">Basic Setup</th>
                <th className="p-4 border">Advanced Environment</th>
                <th className="p-4 border">Full Smart Grow</th>
              </tr>
            </thead>
            <tbody>
              {[
                {feature: 'Tent/Room Layout', basic: '✅', advanced: '✅', full: '✅'},
                {feature: 'Lighting Plan', basic: '✅', advanced: '✅', full: '✅'},
                {feature: 'Full Ventilation Plan', basic: '➖', advanced: '✅', full: '✅'},
                {feature: 'Automated Watering', basic: '➖', advanced: '✅', full: '✅'},
                {feature: 'Climate Control Devices', basic: '➖', advanced: '✅', full: '✅'},
                {feature: 'CO₂ Enrichment System', basic: '➖', advanced: '➖', full: '✅'},
                {feature: 'Full Automation', basic: '➖', advanced: '➖', full: '✅'},
                {feature: '3D Visualization', basic: 'Optional', advanced: 'Optional', full: '✅'},
                {feature: 'Equipment Discounts', basic: '➖', advanced: '✅', full: '✅'},
                {feature: 'Online Consultation', basic: '➖', advanced: '➖', full: '✅'}
              ].map((row, idx) => (
                <tr key={idx} className="text-center">
                  <td className="p-4 border font-semibold text-left">{row.feature}</td>
                  <td className="p-4 border">{row.basic}</td>
                  <td className="p-4 border">{row.advanced}</td>
                  <td className="p-4 border">{row.full}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-8">
          <Button>Choose My Package</Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-green-600 text-white text-center py-16 px-4">
        <h2 className="text-4xl font-bold mb-6">Ready to Grow Like a Pro?</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Button className="bg-white text-green-600 font-bold">Choose Your Package</Button>
          <Button variant="outline" className="border-white text-white">Request Free Consultation</Button>
        </div>
      </section>
    </div>
  );
}