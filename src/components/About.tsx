"use client";

import Image from "next/image";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { randomRotation } from "@/utils/styles";

export default function About() {
  return (
    <section id="about" className="min-h-screen pt-16 pb-24">
      <div
        className="brutalist-container"
        style={{ backgroundColor: "#fff", padding: "3rem" }}
      >
        <div className="relative flex justify-center mb-12">
          <Image
            src={`${
              process.env.NEXT_PUBLIC_BASE_PATH || ""
            }/me-without-glasses.svg`}
            alt="Francis Johny"
            width={800}
            height={800}
            className="object-contain w-auto h-auto max-w-[90vw] max-h-[90vh] transition-opacity duration-300 z-0"
            priority
          />
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/me.svg`}
            alt="Francis Johny Hover"
            width={800}
            height={800}
            className="object-contain w-auto h-auto max-w-[90vw] max-h-[90vh] absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
            priority
          />
        </div>
        <div className="brutalist-grid">
          <div className="col-span-12 lg:col-span-7 mb-16 lg:mb-0">
            <h1
              className="massive-headline mb-12 text-5xl"
              style={randomRotation()}
            >
              <span className="broken-text" style={{ color: "#000" }}>
                FRANCIS
              </span>
              <br />
              <span className="strikethrough" style={{ color: "#000" }}>
                JOHNY
              </span>
            </h1>

            <div className="flex flex-wrap gap-6 my-10">
              {["Developer", "Designer", "Futurist"].map((text) => (
                <div
                  key={text}
                  className="rotate-random"
                  style={randomRotation()}
                >
                  <span
                    className="bitmap-text text-3xl uppercase font-bold"
                    style={{ color: "#000" }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 pr-6">
              <p
                className="text-xl mb-8 text-brutalist-black"
                style={{ fontFamily: "Brutalist, monospace" }}
              >
                I craft{" "}
                <span
                  className="rotate-random inline-block"
                  style={{ ...randomRotation(), color: "#000" }}
                >
                  digital experiences
                </span>{" "}
                that <span className="strikethrough">conform to</span> defy
                expectations and{" "}
                <span className="text-brutalist-accent font-bold">
                  push boundaries
                </span>
                .
              </p>
            </div>

            <div className="mt-16 flex gap-4">
              {[
                {
                  icon: <FiGithub size={24} />,
                  url: "https://github.com/francjohny",
                },
                {
                  icon: <FiTwitter size={24} />,
                  url: "https://twitter.com/francjohny_",
                },
                {
                  icon: <FiLinkedin size={24} />,
                  url: "https://linkedin.com/in/francis-johny",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-4 border-brutalist-black p-3 hover:bg-brutalist-black hover:text-brutalist-white transition-colors"
                  style={randomRotation()}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div
              className="brutalist-container"
              style={{ transform: "rotate(3deg)" }}
            >
              <div
                className="glitch-text text-3xl mb-2 font-bold uppercase"
                data-text="—Warning—"
                style={{ color: "#ff0000" }}
              >
                —Warning—
              </div>
              <div className="terminal-text p-4 bg-brutalist-black">
                <span className="text-lg">
                  &gt; Human compiler
                  <br />
                  <br />
                  &gt; Runs on open source
                  <br />
                  <br />
                  &gt; Ship. Break. Learn. Repeat.
                  <br />
                  <br />
                  &gt; <span className="cursor-blink">_</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
