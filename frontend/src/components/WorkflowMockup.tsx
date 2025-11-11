import { useState, useEffect } from "react";
import { Play, Pause, Database, Mail, Webhook, CheckCircle } from "lucide-react";

const WorkflowMockup = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveNode((prev) => (prev + 1) % 4);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const nodes = [
    { icon: Webhook, label: "Webhook", top: "20%", left: "10%" },
    { icon: Database, label: "Database", top: "50%", left: "30%" },
    { icon: Mail, label: "Send Email", top: "30%", left: "55%" },
    { icon: CheckCircle, label: "Complete", top: "60%", left: "75%" },
  ];

  return (
    <div className="workflow-canvas relative p-8">
      <button
        className="absolute top-4 right-4 btn-accent px-4 py-2 flex items-center gap-2 z-10"
        onClick={() => setIsPlaying(!isPlaying)}
        aria-label={isPlaying ? "Pause animation" : "Play animation"}
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        {isPlaying ? "Pause" : "Play"}
      </button>

      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--color-gray-400))" />
          </marker>
        </defs>
        
        <path
          d="M 15% 25% Q 25% 35% 35% 55%"
          stroke="hsl(var(--color-gray-400))"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
          className={isPlaying && activeNode >= 1 ? "animate-draw-line" : ""}
          strokeDasharray={isPlaying && activeNode >= 1 ? "0" : "1000"}
        />
        <path
          d="M 35% 55% Q 45% 45% 60% 35%"
          stroke="hsl(var(--color-gray-400))"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
          className={isPlaying && activeNode >= 2 ? "animate-draw-line" : ""}
          strokeDasharray={isPlaying && activeNode >= 2 ? "0" : "1000"}
        />
        <path
          d="M 60% 35% Q 67% 45% 80% 65%"
          stroke="hsl(var(--color-gray-400))"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
          className={isPlaying && activeNode >= 3 ? "animate-draw-line" : ""}
          strokeDasharray={isPlaying && activeNode >= 3 ? "0" : "1000"}
        />
      </svg>

      {nodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <div
            key={index}
            className={`workflow-node ${
              isPlaying && activeNode === index ? "active" : ""
            }`}
            style={{
              top: node.top,
              left: node.left,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            <Icon size={24} className="mb-2 text-gray-700" />
            <span className="text-sm font-medium">{node.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default WorkflowMockup;
