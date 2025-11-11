import { BookOpen, Code, Rocket, HelpCircle, Search } from "lucide-react";

const Docs = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Complete guides and API references",
      link: "#",
    },
    {
      icon: Code,
      title: "Tutorials",
      description: "Step-by-step guides for common use cases",
      link: "#",
    },
    {
      icon: Rocket,
      title: "Quick Start",
      description: "Get up and running in 5 minutes",
      link: "#",
    },
    {
      icon: HelpCircle,
      title: "Community",
      description: "Join our Discord and GitHub discussions",
      link: "#",
    },
  ];

  return (
    <section className="section bg-white" id="docs">
      <div className="section-container">
        <h2 className="section-title">Resources & Documentation</h2>
        <p className="section-subtitle">
          Everything you need to build, deploy, and scale your workflows
        </p>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="search"
              placeholder="Search documentation..."
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors"
              aria-label="Search documentation"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <a
                key={index}
                href={resource.link}
                className="feature-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">
                  <Icon size={24} className="text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Docs;
