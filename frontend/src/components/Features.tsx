import { Code, Zap, Lock, GitBranch, Cloud, Box } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Developer-First",
      description: "Build and deploy custom nodes in JavaScript — with full TypeScript support. Total control over your automation layer, powered by Hive’s decentralized framework.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute GPU-powered workflows at swarm speed. Parallelized compute, minimal latency, and instant scalability across distributed nodes.",
    },
    {
      icon: Lock,
      title: "Self-Hosted",
      description: "Deploy your Hive node on your own infrastructure. Keep data private while staying connected to the decentralized grid.",
    },
    {
      icon: GitBranch,
      title: "Version-Controlled Intelligence",
      description: "Track, evolve, and roll back automation logic with Hive’s decentralized versioning layer — no central dependency, full transparency.",
    },
    {
      icon: Cloud,
      title: "Hybrid Deployment",
      description: "Run locally or in the Hive Cloud with unified performance. Seamless transitions between self-hosted and distributed compute layers.",
    },
    {
      icon: Box,
      title: "Extensible Network",
      description: "Connect APIs, link external GPUs, or integrate services — Hive adapts to your ecosystem, expanding the swarm’s collective intelligence.",
    },
  ];

  return (
    <section className="section bg-white" id="product">
      <div className="section-container">
        <h2 className="section-title">Everything you need to compute.</h2>
        <p className="section-subtitle">
          Powerful features that scale from simple tasks to complex enterprise workflows
        </p>

        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={index}
                className="feature-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">
                  <Icon size={24} className="text-gray-700" aria-hidden="true" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
