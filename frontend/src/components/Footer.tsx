import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Integrations", "Pricing", "Roadmap", "Changelog"],
    Resources: ["Documentation", "Tutorials", "Blog", "Community", "Status"],
    Company: ["About", "Careers", "Contact", "Privacy", "Terms"],
    Developers: ["API Reference", "SDK", "CLI", "GitHub", "npm"],
  };

  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-grid">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg  flex items-center justify-center">
                <img src="\public\hive-blockchain-svgrepo-com (1).svg" alt="" />
              </div>
              <span className="text-lg font-semibold text-white">HIVE</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              Developer-first HIVE Connectivity. Self-host or run in the cloud.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="footer-title">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} HIVE Connectivity. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                aria-label="Email for newsletter"
              />
              <button className="btn-accent px-6 py-2 flex items-center gap-2">
                <Mail size={16} />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
