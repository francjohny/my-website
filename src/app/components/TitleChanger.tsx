"use client";

import { useEffect } from "react";

export default function TitleChanger() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const originalTitle = "Francis Johny";
    let currentTitle = originalTitle;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        currentTitle = "Come back soon! 👋";
      } else {
        currentTitle = originalTitle;
      }
      document.title = currentTitle;
    };

    const handleBlur = () => {
      currentTitle = "Missing you already! 🥺";
      document.title = currentTitle;
    };

    const handleFocus = () => {
      currentTitle = originalTitle;
      document.title = currentTitle;
    };

    // Set initial title
    document.title = originalTitle;

    // Add event listeners
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    // Cleanup
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return null;
}
