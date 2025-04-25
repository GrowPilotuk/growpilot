import Link from 'next/link';

export default function Order() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-green-800 text-center">Order Your Custom Grow Room Plan</h1>
      <form className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-xl">
        <label className="block mb-4">
          <span className="text-gray-700">Full Name</span>
          <input type="text" className="mt-1 block w-full p-3 border rounded-md" placeholder="Your Name" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email Address</span>
          <input type="email" className="mt-1 block w-full p-3 border rounded-md" placeholder="you@example.com" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Select Plan</span>
          <select className="mt-1 block w-full p-3 border rounded-md">
            <option>Basic Room Setup - £149</option>
            <option>Advanced Environment - £399</option>
            <option>Full Smart Grow - £899</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Additional Notes</span>
          <textarea className="mt-1 block w-full p-3 border rounded-md" rows="4" placeholder="Anything specific?"></textarea>
        </label>
        <Link href="/thank-you">
          <button type="button" className="mt-6 w-full bg-green-600 text-white py-3 rounded-3xl hover:bg-green-700">
            Submit Order
          </button>
        </Link>
      </form>
    </div>
  );
}
