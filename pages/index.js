import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GrowPilot - Modular Grow Room Packages</title>
      </Head>

      <main className="container">
        <h1 className="main-title">Modular Grow Room Packages</h1>

        <div className="packages">
          <div className="package">
            <h2 className="package-title">Basic Room Setup</h2>
            <p className="package-desc">For beginners setting up a small tent or grow room (up to 4 m²).</p>
            <ul className="package-list">
              <li>Grow Tent or Room Layout</li>
              <li>Plant Positioning & Spacing Plan</li>
              <li>Basic Lighting Plan (LED, HPS, CMH)</li>
              <li>Basic Ventilation Positioning</li>
              <li>Odor Control Recommendation</li>
              <li>Basic Equipment Shopping List (no discounts)</li>
            </ul>
            <p className="package-price">£149</p>
          </div>

          <div className="package">
            <h2 className="package-title">Advanced Environment</h2>
            <p className="package-desc">For intermediate growers needing climate control and irrigation.</p>
            <ul className="package-list">
              <li>Everything in Basic Room Setup</li>
              <li>Full Ventilation System Design</li>
              <li>Manual or Automated Watering System (IWS)</li>
              <li>Humidifier / Dehumidifier Placement</li>
              <li>Medium Strategy (Coco, Soil, Rockwool)</li>
              <li>Equipment Shopping List with up to 10% Discount</li>
            </ul>
            <p className="package-price">£399</p>
          </div>

          <div className="package">
            <h2 className="package-title">Full Smart Grow</h2>
            <p className="package-desc">For professional growers needing full automation and control.</p>
            <ul className="package-list">
              <li>Everything in Advanced Environment</li>
              <li>CO₂ Enrichment System Plan</li>
              <li>Full Automation Design (lighting, climate, irrigation)</li>
              <li>Smart Sensor Setup (Temperature, Humidity, pH, EC)</li>
              <li>Electrical Layout (Contactors, Safety Timers)</li>
              <li>Pest Management & Clean Room Strategy</li>
              <li>Professional 3D Visualization</li>
              <li>Complete Shopping List with Discounts</li>
              <li>30 Days Email Support + 30-min Online Consultation</li>
            </ul>
            <p className="package-price">£899</p>
          </div>
        </div>
      </main>
    </div>
  );
}
