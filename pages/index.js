import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GrowRoom Designer - Personalized Grow Room Plans</title>
        <meta name="description" content="We design customized grow room plans for your indoor cultivation success in the UK." />
        <meta property="og:title" content="GrowRoom Designer" />
        <meta property="og:description" content="Personalized grow room plans to maximize your indoor gardening success." />
        <meta property="og:type" content="website" />
      </Head>

      <header className="p-6 bg-green-600 text-white">
        <h1 className="text-3xl font-bold">GrowRoom Designer</h1>
        <nav className="mt-4">
          <ul className="flex gap-4">
            <li><a href="#about">About</a></li>
            <li><a href="#compare">Compare Packages</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="p-6" id="about">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>We create personalized grow room plans to help you cultivate with confidence and efficiency in the UK market.</p>
      </section>

      <section className="p-6 bg-gray-100" id="compare">
        <h2 className="text-2xl font-semibold mb-6">Compare Our Packages</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border">
            <thead>
              <tr>
                <th className="border p-2">Feature</th>
                <th className="border p-2">Starter</th>
                <th className="border p-2">Advanced</th>
                <th className="border p-2">Professional</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Custom Room Layout</td>
                <td className="border p-2">✔️</td>
                <td className="border p-2">✔️</td>
                <td className="border p-2">✔️</td>
              </tr>
              <tr>
                <td className="border p-2">Lighting Plan</td>
                <td className="border p-2">Basic</td>
                <td className="border p-2">Advanced</td>
                <td className="border p-2">Pro-Grade</td>
              </tr>
              <tr>
                <td className="border p-2">Ventilation Strategy</td>
                <td className="border p-2">Standard</td>
                <td className="border p-2">Optimized</td>
                <td className="border p-2">Tailored</td>
              </tr>
              <tr>
                <td className="border p-2">Equipment List</td>
                <td className="border p-2">✔️</td>
                <td className="border p-2">✔️</td>
                <td className="border p-2">Detailed</td>
              </tr>
              <tr>
                <td className="border p-2">Yield Estimate</td>
                <td className="border p-2">-</td>
                <td className="border p-2">✔️</td>
                <td className="border p-2">✔️</td>
              </tr>
              <tr>
                <td className="border p-2">Personalized Support</td>
                <td className="border p-2">-</td>
                <td className="border p-2">Email</td>
                <td className="border p-2">Phone & Email</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="p-6" id="contact">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form className="flex flex-col gap-4 max-w-md">
          <input type="text" placeholder="Your Name" className="p-2 border" required />
          <input type="email" placeholder="Your Email" className="p-2 border" required />
          <textarea placeholder="Your Message" className="p-2 border" required></textarea>
          <button type="submit" className="p-2 bg-green-600 text-white">Send Message</button>
        </form>
      </section>

      <footer className="p-6 bg-green-600 text-white text-center">
        <p>&copy; 2025 GrowRoom Designer. All rights reserved.</p>
      </footer>
    </div>
  );
}