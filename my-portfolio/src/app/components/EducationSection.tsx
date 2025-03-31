"use client";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="min-h-screen w-full bg-light dark:bg-dark text-dark dark:text-light py-16 px-4 flex flex-col items-center"
    >
      <h3 className="magic text-5xl font-semibold mb-8 text-center">
        Education
      </h3>

      <div className="max-w-4xl w-full flex flex-col gap-8">
        <div className="border border-primary rounded-xl shadow-md p-6 bg-light/60 dark:bg-light/10 backdrop-blur">
          <h4 className="text-2xl font-semibold text-primary mb-2">
            Wroclaw University of Technology
          </h4>
          <p className="font-medium text-lg">B.Eng. in Technical Computer Science (Graphics & Multimedia Systems)</p>
          <span className="text-sm font-medium">10/2022 – 01/2026 (Expected)</span>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Specialized coursework: Web Interface Programming, Game Design, Image Recognition & Processing, Image Engineering</li>
            <li>Practical projects in interactive graphical applications and advanced image processing techniques</li>
            <li>Foundation in algorithm design, databases, and software engineering principles</li>
          </ul>
        </div>

        <div className="border border-primary rounded-xl shadow-md p-6 bg-light/60 dark:bg-light/10 backdrop-blur">
          <h4 className="text-2xl font-semibold text-primary mb-2">
            Shibaura Institute of Technology, Tokyo
          </h4>
          <p className="font-medium text-lg">Course-Taking Sandwich Program</p>
          <span className="text-sm font-medium">03/2025 – 08/2025 (Expected)</span>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Advanced coursework: Operating Systems, Embedded Systems, Data Engineering, AI, Web Systems</li>
            <li>Focused on interaction design, cross-cultural collaboration, and innovative technological solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
