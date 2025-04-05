"use client";

import { useState, useEffect } from "react";

interface TerminalProps {
  onLoadingComplete: () => void;
}

export default function Terminal({ onLoadingComplete }: TerminalProps) {
  const [commandOutput, setCommandOutput] = useState("");
  const [terminalVisible, setTerminalVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const messages = [
      "SYSTEM INITIALIZING...",
      "LOADING PROFILE DATA...",
      "ESTABLISHING CONNECTION...",
      "SCANNING COMPONENTS...",
      "RENDERING INTERFACE...",
      "SYSTEM READY.",
      "WELCOME USER.",
    ];

    const interval = setInterval(() => {
      if (i < messages.length) {
        setCommandOutput((prev) => prev + messages[i] + "\n");
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTerminalVisible(false);
          onLoadingComplete();
        }, 2000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!terminalVisible) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="terminal w-full max-w-2xl relative z-10 mx-4">
        <div className="absolute top-0 left-0 w-full bg-terminal-green text-brutalist-black py-1 px-3 flex justify-between">
          <span className="font-bold">FRANCIS.JOHNY.TERMINAL</span>
          <span>SYSTEM.EXE</span>
        </div>
        <div className="pt-8 pb-4 px-4 font-mono overflow-auto">
          <pre className="terminal-text whitespace-pre-line">
            {commandOutput}
            <span className="cursor-blink"> </span>
          </pre>
        </div>
      </div>
    </div>
  );
}
