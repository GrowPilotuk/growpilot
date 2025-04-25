export default function ThankYou() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col justify-center items-center text-center p-8">
      <div className="bg-white p-12 rounded-3xl shadow-2xl max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-green-700">🎉 Thank You!</h1>
        <p className="text-lg mb-4">Your order has been received.</p>
        <p className="text-lg mb-8">We will contact you shortly to discuss your custom grow room plan.</p>
        <a href="/" className="bg-green-600 text-white px-8 py-4 rounded-3xl text-lg hover:bg-green-700 transition">
          Back to Home
        </a>
      </div>
    </div>
  );
}
