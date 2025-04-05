"use client";

import { randomRotation } from "@/utils/styles";

export default function Projects() {
  const randomRotation = () => {
    return {
      "--rotation": `${Math.random() * 4 - 2}deg`,
      "--scale": `${Math.random() * 0.2 + 1}`,
    } as React.CSSProperties;
  };

  return (
    <section id="projects" className="py-32">
      <h2 className="massive-headline mb-20 text-4xl" style={{ color: "#000" }}>
        <span className="broken-text" style={{ color: "#000" }}>
          PRO
        </span>
        <span className="text-brutalist-accent">JEC</span>
        <span className="broken-text" style={{ color: "#000" }}>
          TS
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((project) => (
          <div
            key={project}
            className="brutalist-container group hover:shadow-lg transition-shadow duration-300"
            style={{
              ...randomRotation(),
              backgroundColor: "#fff",
              padding: "3rem",
            }}
          >
            <div className="aspect-video bg-brutalist-gray mb-4 relative overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-5xl font-black text-brutalist-white opacity-25">
                  0{project}
                </span>
              </div>
              <div className="absolute top-2 right-2 border-2 border-brutalist-white p-1 text-xs text-brutalist-white">
                PROJECT_{project}
              </div>
            </div>

            <h3 className="text-2xl font-black uppercase mb-2 text-brutalist-black group-hover:text-brutalist-white">
              {project === 1
                ? "AI Code Assistant"
                : project === 2
                ? "Web3 DeFi Platform"
                : "Cloud Microservices Hub"}
            </h3>

            <p className="mb-4 font-mono text-brutalist-black group-hover:text-brutalist-white">
              {project === 1
                ? "An intelligent coding assistant powered by OpenAI, providing real-time code suggestions and automated documentation generation."
                : project === 2
                ? "High-performance decentralized finance platform built with Rust and WebAssembly for lightning-fast transactions and enhanced security."
                : "Scalable microservices architecture deployment platform with automated container orchestration and API management."}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project === 1
                ? // AI/ML Stack
                  [
                    "Next.js",
                    "TypeScript",
                    "Python",
                    "TensorFlow",
                    "OpenAI",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs border-2 border-current text-brutalist-black group-hover:border-brutalist-white group-hover:text-brutalist-white"
                    >
                      {tech}
                    </span>
                  ))
                : project === 2
                ? // Modern Web Stack
                  ["Rust", "WebAssembly", "Svelte", "Tailwind", "GraphQL"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs border-2 border-current text-brutalist-black group-hover:border-brutalist-white group-hover:text-brutalist-white"
                      >
                        {tech}
                      </span>
                    )
                  )
                : // Cloud Native Stack
                  ["Go", "Kubernetes", "Docker", "FastAPI", "PostgreSQL"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs border-2 border-current text-brutalist-black group-hover:border-brutalist-white group-hover:text-brutalist-white"
                      >
                        {tech}
                      </span>
                    )
                  )}
            </div>

            <a
              href="#"
              className="uppercase font-bold tracking-widest text-brutalist-black group-hover:text-brutalist-accent inline-block border-b-2 border-current"
            >
              VIEW PROJECT
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
