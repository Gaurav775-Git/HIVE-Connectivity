import { Check } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isCloud, setIsCloud] = useState(true);

  const plans = [
    {
      name: "Self-Hosted",
      price: "Free",
      period: "forever",
      description: "Perfect for individuals and small teams",
      features: [
        "Unlimited workflows",
        "Unlimited executions",
        "400+ integrations",
        "Community support",
        "Self-hosted deployment",
      ],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Cloud Starter",
      price: isCloud ? "$20" : "Free",
      period: isCloud ? "/month" : "forever",
      description: "For teams who want hassle-free hosting",
      features: [
        "Everything in Self-Hosted",
        "Managed cloud hosting",
        "99.9% uptime SLA",
        "Priority support",
        "Automatic backups",
      ],
      cta: "Start Free Trial",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For organizations with advanced needs",
      features: [
        "Everything in Cloud Starter",
        "Dedicated support",
        "Custom integrations",
        "SSO & advanced security",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      featured: false,
    },
  ];

  return (
    <section className="section bg-gray-50" id="pricing">
      <div className="section-container">
        <h2 className="section-title">Simple, transparent pricing</h2>
        <p className="section-subtitle">
          Choose the plan that works best for you. Start free, upgrade anytime.
        </p>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              className={`px-6 py-2 rounded-md transition-all ${
                !isCloud ? "bg-gray-900 text-white" : "text-gray-600"
              }`}
              onClick={() => setIsCloud(false)}
            >
              Self-Hosted
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-all ${
                isCloud ? "bg-gray-900 text-white" : "text-gray-600"
              }`}
              onClick={() => setIsCloud(true)}
            >
              Cloud
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`pricing-card ${plan.featured ? "featured" : ""} animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={plan.featured ? "btn-accent w-full" : "btn-secondary w-full"}>
                {plan.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
