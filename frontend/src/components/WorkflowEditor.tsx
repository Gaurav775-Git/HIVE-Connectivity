import { useState, useEffect, useRef } from "react";
import { Play, Square } from "lucide-react";

const WorkflowEditor = () => {
  const [isRunning, setIsRunning] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 30,
          y: (e.clientY - rect.top - rect.height / 2) / 30,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="section bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Visual workflow editor</h2>
        <p className="section-subtitle">
          Drag, drop, and connect. Build complex automations without writing a single line of code.
        </p>

        <div className="relative">
          <div
            ref={canvasRef}
            className="workflow-canvas min-h-[600px] p-12"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <div className="absolute top-6 right-6 z-10 flex gap-3">
              <button
                className={isRunning ? "btn-secondary px-4 py-2" : "btn-accent px-4 py-2"}
                onClick={() => setIsRunning(!isRunning)}
              >
                {isRunning ? (
                  <>
                    <Square size={16} className="mr-2" />
                    Stop
                  </>
                ) : (
                  <>
                    <Play size={16} className="mr-2" />
                    Run Workflow
                  </>
                )}
              </button>
            </div>

            {/* Sample workflow nodes */}
            <div className="space-y-8">
              <div className="flex items-center gap-8">
                <div
                  className={`workflow-node ${isRunning ? "active" : ""}`}
                  style={{ position: "relative", animationDelay: "0s" }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 mb-2 flex items-center justify-center">
                    <span className="text-2xl">📥</span>
                  </div>
                  <span className="text-sm font-medium">Trigger</span>
                  <span className="text-xs text-gray-600 block">Webhook received</span>
                </div>

                <svg width="60" height="4" className="flex-shrink-0">
                  <line
                    x1="0"
                    y1="2"
                    x2="60"
                    y2="2"
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                    className={isRunning ? "animate-draw-line" : ""}
                  />
                </svg>

                <div
                  className={`workflow-node ${isRunning ? "active" : ""}`}
                  style={{ position: "relative", animationDelay: "0.5s" }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 mb-2 flex items-center justify-center">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <span className="text-sm font-medium">Filter</span>
                  <span className="text-xs text-gray-600 block">Validate data</span>
                </div>
              </div>

              <div className="flex items-center gap-8 ml-32">
                <div
                  className={`workflow-node ${isRunning ? "active" : ""}`}
                  style={{ position: "relative", animationDelay: "1s" }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 mb-2 flex items-center justify-center">
                    <span className="text-2xl">💾</span>
                  </div>
                  <span className="text-sm font-medium">Database</span>
                  <span className="text-xs text-gray-600 block">Save record</span>
                </div>

                <svg width="60" height="4" className="flex-shrink-0">
                  <line
                    x1="0"
                    y1="2"
                    x2="60"
                    y2="2"
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                    className={isRunning ? "animate-draw-line" : ""}
                  />
                </svg>

                <div
                  className={`workflow-node ${isRunning ? "active" : ""}`}
                  style={{ position: "relative", animationDelay: "1.5s" }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 mb-2 flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <span className="text-sm font-medium">Email</span>
                  <span className="text-xs text-gray-600 block">Send notification</span>
                </div>
              </div>

              <div className="flex items-center gap-8 ml-64">
                <div
                  className={`workflow-node ${isRunning ? "active" : ""}`}
                  style={{ position: "relative", animationDelay: "2s" }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 mb-2 flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                  <span className="text-sm font-medium">Complete</span>
                  <span className="text-xs text-gray-600 block">Workflow finished</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Connect any service. Transform data. Execute actions. All visually.
            </p>
            <button className="btn-primary">Try the Editor</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowEditor;
