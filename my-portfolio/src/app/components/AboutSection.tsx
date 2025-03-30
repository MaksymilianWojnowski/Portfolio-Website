"use client";

import React, { useState } from "react";

type AboutTab = "skills" | "languages" | "education" | "experience";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<AboutTab>("skills");

  return (
    <section
      id="about"
      className="
        min-h-screen
        w-full
        bg-dark
        text-light
        py-16
        px-4
        flex
        flex-col
        items-center
      "
    >
      <h3 className="magic text-5xl font-semibold mb-8 text-center">
        About Me
      </h3>

      <div className="max-w-screen-md w-full text-center">
        <p className="mb-6 text-lg leading-relaxed">
          Motivated Computer Science student at {" "}
          <a
            className="underline decoration-primary hover:text-primary"
            href="https://pwr.edu.pl/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wroclaw University of Technology
          </a>
          , specializing in front-end and full-stack development with a passion
          for creating intuitive, responsive applications using React.js and
          Next.js.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["skills", "languages", "education", "experience"].map((tab) => (
            <TabButton
              key={tab}
              label={tab.charAt(0).toUpperCase() + tab.slice(1)}
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab as AboutTab)}
            />
          ))}
        </div>

        <div
          className="
            mt-4
            px-6
            py-4
            border
            border-primary
            rounded-xl
            shadow-md
            shadow-primary
            text-left
            mx-auto
            max-w-md
            bg-[rgba(0,0,0,0.4)]
            backdrop-blur
          "
        >
          {activeTab === "skills" && (
            <ul className="list-disc list-inside space-y-2">
              <li>HTML, CSS, JavaScript (ES6+)</li>
              <li>React.js, Next.js, PrimeReact</li>
              <li>Tailwind CSS</li>
              <li>Python (Pandas, NumPy, Matplotlib)</li>
              <li>SQL (MySQL, PostgreSQL)</li>
              <li>Data Visualization (Tableau)</li>
            </ul>
          )}

          {activeTab === "languages" && (
            <ul className="list-disc list-inside space-y-2">
              <li>Polish – Native</li>
              <li>English – Advanced (B2+/C1)</li>
              <li>Spanish – Pre-Intermediate</li>
              <li>Japanese – Beginner</li>
            </ul>
          )}

          {activeTab === "education" && (
            <ul className="list-disc list-inside space-y-2">
              <li>
                B.Eng. Technical Computer Science (Graphics & Multimedia
                Systems) – Wroclaw University of Technology (2022–2026)
              </li>
              <li>
                Exchange Program – Shibaura Institute of Technology, Tokyo
                (2025)
              </li>
            </ul>
          )}

          {activeTab === "experience" && (
            <ul className="list-disc list-inside space-y-2">
              <li>Front-End Developer at Code Technica (React.js, Next.js)</li>
              <li>
                IT Committee Creative Lead at Liga PWr (Django, Event
                Coordination)
              </li>
              <li>
                Oxford-style Debate Club Organizer (Public Speaking, Event
                Management)
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

function TabButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full
        font-semibold tracking-wide
        transition-colors duration-200
        ${
          isActive
            ? "bg-primary text-dark"
            : "text-light border border-light hover:bg-primary hover:text-dark"
        }
      `}
    >
      {label}
    </button>
  );
}
