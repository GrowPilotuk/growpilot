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
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4">GrowPilot</h1>
        <p className="text-lg text-center max-w-xl mb-8">
          Your personal AI-powered assistant for indoor plant growing. Ask for tips, plans, or help with setup.
        </p>

        <div className="w-full max-w-md">
          <input
            className="w-full p-3 rounded-md border border-gray-300"
            placeholder="Ask GrowPilot anything..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            onClick={handleChat}
            className="mt-3 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            {loading ? "Loading..." : "Ask AI"}
          </button>
        </div>

        {response && (
          <div className="mt-6 max-w-xl bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">GrowPilot says:</h3>
            <p>{response}</p>
          </div>
        )}

        <section className="mt-12 w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Basic', 'Pro', 'Expert'].map((plan, index) => (
              <div key={index} className="bg-white p-6 rounded shadow text-center">
                <h3 className="text-xl font-semibold mb-2">{plan}</h3>
                <p className="text-gray-600">Coming soon – detailed AI-driven plans for indoor growing setups.</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
