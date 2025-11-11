const Integrations = () => {
  const integrations = [
    { name: "GitHub", icon: "🔗" },
    { name: "Slack", icon: "💬" },
    { name: "Gmail", icon: "📧" },
    { name: "Stripe", icon: "💳" },
    { name: "AWS", icon: "☁️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Shopify", icon: "🛍️" },
    { name: "Notion", icon: "📝" },
    { name: "Discord", icon: "💬" },
    { name: "Twilio", icon: "📱" },
    { name: "OpenAI", icon: "🤖" },
    { name: "Airtable", icon: "📊" },
    { name: "Zapier", icon: "⚡" },
    { name: "Docker", icon: "🐳" },
    { name: "Redis", icon: "🔴" },
  ];

  return (
    <section className="section bg-white" id="integrations">
      <div className="section-container">
        <h2 className="section-title">400+ integrations</h2>
        <p className="section-subtitle">
          Connect to your favorite tools and services. New integrations added every week.
        </p>

        <div className="integration-grid">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="integration-logo animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              title={integration.name}
            >
              <span className="text-3xl" role="img" aria-label={integration.name}>
                {integration.icon}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">View All Integrations</button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
