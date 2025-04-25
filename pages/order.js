import { useState } from 'react';
import Link from 'next/link';

export default function Order() {
  const [plan, setPlan] = useState('Basic Room Setup - £149');
  const [addons, setAddons] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('paypal');

  const addonOptions = [
    { name: 'Express Delivery (+£50)', price: 50 },
    { name: '3D Visualisation (+£100)', price: 100 }
  ];

  const basePrices = {
    'Basic Room Setup - £149': 149,
    'Advanced Environment - £399': 399,
    'Full Smart Grow - £899': 899
  };

  const calculateTotal = () => {
    let total = basePrices[plan] || 0;
    addons.forEach(addon => {
      const found = addonOptions.find(a => a.name === addon);
      if (found) total += found.price;
    });
    return total;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, plan, addons, notes, total: calculateTotal() };

    await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    window.location.href = '/thank-you';
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-green-800 text-center">Order Your Custom Grow Room Plan</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-xl">
        <label className="block mb-4">
          <span className="text-gray-700">Full Name</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full p-3 border rounded-md" placeholder="Your Name" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email Address</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full p-3 border rounded-md" placeholder="you@example.com" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Select Plan</span>
          <select value={plan} onChange={(e) => setPlan(e.target.value)} className="mt-1 block w-full p-3 border rounded-md">
            <option>Basic Room Setup - £149</option>
            <option>Advanced Environment - £399</option>
            <option>Full Smart Grow - £899</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Add-ons</span>
          {addonOptions.map((addon) => (
            <div key={addon.name} className="flex items-center mt-2">
              <input
                type="checkbox"
                value={addon.name}
                onChange={(e) => {
                  if (e.target.checked) setAddons([...addons, addon.name]);
                  else setAddons(addons.filter(a => a !== addon.name));
                }}
                className="mr-2"
              />
              <span>{addon.name}</span>
            </div>
          ))}
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Additional Notes</span>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="mt-1 block w-full p-3 border rounded-md" rows="4" placeholder="Anything specific?" />
        </label>

        {/* Podsumowanie zamówienia */}
        <div className="bg-green-100 p-4 rounded-xl text-green-800 mb-6">
          <p className="text-lg font-bold">Order Summary:</p>
          <p>Plan: {plan}</p>
          <p>Add-ons: {addons.join(', ') || 'None'}</p>
          <p>Total: £{calculateTotal()}</p>
        </div>

        <button type="submit" className="mt-6 w-full bg-green-600 text-white py-3 rounded-3xl hover:bg-green-700">
          Submit Order
        </button>
      </form>
    </div>
  );
}
