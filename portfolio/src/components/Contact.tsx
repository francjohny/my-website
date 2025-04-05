"use client";

import { useState, FormEvent } from "react";
import { randomRotation } from "@/utils/styles";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: "ERROR: INCOMPLETE DATA SUBMISSION",
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: "error",
        message: "ERROR: INVALID EMAIL FORMAT",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus({
        type: "success",
        message: "MESSAGE TRANSMITTED SUCCESSFULLY",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "TRANSMISSION FAILURE: RETRY LATER",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32">
      <div
        className="brutalist-container"
        style={{ backgroundColor: "#fff", padding: "3rem" }}
      >
        <h2 className="massive-headline mb-20" style={{ color: "#000" }}>
          <span className="broken-text" style={{ color: "#ff0000" }}>
            CONT
          </span>
          <span className="text-brutalist-black">ACT</span>
        </h2>

        <div className="brutalist-grid">
          <div className="col-span-12 lg:col-span-6 mb-8 lg:mb-0">
            <p
              className="text-xl mb-8"
              style={{ fontFamily: "Brutalist, monospace" }}
            >
              Let's <span className="strikethrough">talk</span>{" "}
              <span className="text-brutalist-accent">COLLABORATE</span>. Send
              me a message and I'll respond as soon as possible.
            </p>

            <div className="border-4 border-brutalist-black p-4 mb-8">
              <div className="font-mono">
                <div className="text-brutalist-accent">
                  &gt; contact@francisjohny.com
                </div>
                <div>&gt; +1 (555) 123-4567</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="mb-4">
                <label className="block uppercase tracking-widest font-bold mb-2">
                  Name<span className="text-brutalist-accent">.</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="brutalist-input"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block uppercase tracking-widest font-bold mb-2">
                  Email<span className="text-brutalist-accent">.</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="brutalist-input"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block uppercase tracking-widest font-bold mb-2">
                  Message<span className="text-brutalist-accent">.</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="brutalist-input"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="brutalist-button w-full mt-4 hover:bg-brutalist-accent hover:text-brutalist-white transition-colors"
                style={randomRotation()}
              >
                {isSubmitting ? "PROCESSING..." : "SEND MESSAGE"}
              </button>
              {formStatus.message && (
                <div
                  className={`p-4 mt-4 font-mono ${
                    formStatus.type === "success"
                      ? "bg-brutalist-black text-terminal-green"
                      : "bg-brutalist-accent text-brutalist-white"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
