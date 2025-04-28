import React from "react";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    title: "April Promo",
    price: "$35",
    per: "/week",
    features: [
      "Curated jobs from 1M+ listings, refreshed every 48 hours",
      "Up to 20 human–applied roles per week (no bots, no fluff — just real company sites)",
      "Need more? Add extra apps for just $1.5 each",
      "Your own dedicated application analyst",
      "Personalized with up to 10 filters & 5 job titles",
    ],
  },
  {
    title: "Starter",
    price: "$50",
    per: "/week",
    badge: "Popular",
    features: [
      "All the perks of the Promo Plan, plus",
      "Resume review & story–focused feedback",
      "Dedicated search specialist",
      "Up to 50 job apps/week",
      "Extra apps at $1.5 each",
      "Analyst support within 6 hours (SLA/SRT hours)",
    ],
  },
  {
    title: "Plus",
    price: "$100",
    per: "/week",
    features: [
      "Everything in Starter, with more muscle",
      "Apply to 75 apps/week",
      "Apply to 15 job titles",
      "Analyst + full application team on Pacific hours",
    ],
  },
];

const PricingPlans = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-8 py-12 ">
    <div className="max-w-5xl mx-auto ">

      {/* Heading */}
      <h2 className="max-w-5xl flex flex-col items-start justify-start text-[#0649E7] text-4xl font-semibold mb-12 text-start" style={{ fontFamily: 'DM Sans' }}>
        Job Application Service Plans
      </h2>

      {/* Plans */}
      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-72 flex flex-col justify-between border border-[#d4d4d4] rounded-2xl bg-white shadow-sm p-6 relative"
          >
            {/* Popular Badge */}
            {plan.badge && (
              <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                {plan.badge}
              </div>
            )}

            {/* Pricing */}
            <div className="text-[#0649E7] text-4xl font-bold font-sora">
              {plan.price}
              <span className="text-lg font-normal">{plan.per}</span>
            </div>

            {/* Features */}
            <ul className="mt-6 mb-8 space-y-3 text-sm text-[#0A0A0A] font-dmsans">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <FaCheck className="text-green-500 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="w-full mt-auto bg-[#0649E7] text-white py-3 rounded-full text-sm font-medium hover:bg-blue-800 transition font-dmsans">
              Get Started →
            </button>
          </div>
        ))}
      </div>

        </div>
    </section>
  );
};

export default PricingPlans;
