import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function OrderPage() {
  const router = useRouter();
  const { plan } = router.query;

  const basePrices = {
    GrowBasic: 149,
    GrowPro: 349,
    GrowMaster: 699,
  };

  const [addons, setAddons] = useState({});
  const [total, setTotal] = useState(0);

  const addonOptions = [
    { name: '3D Visualization', price: 100 },
    { name: 'Express Delivery', price: 50 },
    { name: 'Hydroponic System Design', price: 75 },
    { name: 'CO₂ Enrichment Plan', price: 50 },
    { name: 'Cooling System Design', price: 75 },
    { name: 'Additional Online Consultation', price: 75 },
  ];

  useEffect(() => {
    let addonTotal = Object.entries(addons)
      .filter(([_, selected]) => selected)
      .reduce((sum, [name]) => {
        const addon = addonOptions.find(a => a.name === name);
        return sum + (addon ? addon.price : 0);
      }, 0);
    if (plan && basePrices[plan]) {
      setTotal(basePrices[plan] + addonTotal);
    }
  }, [addons, plan]);

  const handleAddonChange = (name) => {
    setAddons(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold mb-6">🛒 Complete Your Order</h1>
        <p className="mb-4 text-lg">Selected Plan: <strong>{plan}</strong></p>
        <p className="mb-6 text-lg">Base Price: <strong>£{basePrices[plan]}</strong></p>

        <h2 className="text-2xl font-semibold mb-4">Optional Add-ons:</h2>
        <div className="space-y-2 mb-6">
          {addonOptions.map((addon) => (
            <label key={addon.name} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={addons[addon.name] || false}
                onChange={() => handleAddonChange(addon.name)}
              />
              {addon.name} (+£{addon.price})
            </label>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Total: £{total}</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
}
