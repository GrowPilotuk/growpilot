// GrowPilot – AI-powered grow room assistant (landing page with enhanced visuals)

import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChat = async () => {
    setLoading(true);
    setResponse("Thinking...");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userInput }),
      });
      const data = await res.json();
      setResponse(data.reply);
    } catch (err) {
      setResponse("Something went wrong. Try again later.");
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>GrowPilot – AI Grow Room Assistant</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800 font-sans">
        <header className="py-10 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-green-600 mb-4">GrowPilot</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Your AI-powered assistant for smart indoor plant growing. Plan, optimize, and grow – with AI on your side.
          </p>
        </header>

        <section className="py-12 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Plans</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            {["Basic", "Pro", "Expert"].map((plan, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-green-600 mb-2">{plan}</h3>
                <p className="text-gray-500 text-sm mb-4">
                  {plan === "Basic"
                    ? "Quick-start guidance for hobby growers."
                    : plan === "Pro"
                    ? "AI-powered optimization and environment suggestions."
                    : "Complete growth automation & advanced analytics."}
                </p>
                <button className="mt-auto bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
                  Coming Soon
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-12 px-4 shadow-inner">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Talk to GrowPilot</h2>
            <input
              className="w-full p-3 border rounded-md mb-4 shadow-sm"
              placeholder="Ask GrowPilot anything..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              onClick={handleChat}
              className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700"
            >
              {loading ? "Loading..." : "Ask AI"}
            </button>

            {response && (
              <div className="mt-6 bg-gray-100 p-4 rounded-xl shadow text-left">
                <h3 className="font-semibold text-green-700 mb-2">GrowPilot says:</h3>
                <p className="text-gray-800 whitespace-pre-line">{response}</p>
              </div>
            )}
          </div>
        </section>

        <footer className="text-center text-sm text-gray-400 py-8">
          &copy; {new Date().getFullYear()} GrowPilot. All rights reserved.
        </footer>
      </main>
    </>
  );
}
