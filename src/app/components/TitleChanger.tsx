"use client";

import { useEffect } from "react";

export default function TitleChanger() {
  useEffect(() => {
    const originalTitle = "Francis Johny";
    document.title = originalTitle;
    const handleBlur = () => {
      document.title = "Bitch, please!";
    };
    const handleFocus = () => {
      document.title = originalTitle;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return null;
}
