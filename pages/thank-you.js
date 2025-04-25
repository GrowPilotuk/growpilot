import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-green-900 flex flex-col justify-center items-center text-center p-8 text-white">
      <h1 className="text-5xl font-extrabold mb-6">Thank You!</h1>
      <p className="text-xl max-w-2xl mb-8">
        Your order has been received. Our team will get back to you shortly with your custom grow room design.
      </p>
      <Link href="/">
        <button className="bg-white text-green-700 px-8 py-3 rounded-3xl font-bold hover:bg-green-100 transition">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
