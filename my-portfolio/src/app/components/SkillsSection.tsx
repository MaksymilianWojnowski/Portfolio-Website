"use client";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen w-full bg-light dark:bg-dark text-dark dark:text-light py-16 px-4 flex flex-col items-center"
    >
      <h3 className="magic text-5xl font-semibold mb-8 pb-2 text-center text-dark dark:text-light">
        Skills & Languages
      </h3>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Technical Skills */}
        <div className="border border-primary rounded-xl shadow-md p-6 bg-light/60 dark:bg-light/10 backdrop-blur">
          <h4 className="text-2xl font-semibold text-primary mb-4">Technical Skills</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>HTML, CSS, JavaScript (ES6+)</li>
            <li>React.js, Next.js, PrimeReact</li>
            <li>Tailwind CSS</li>
            <li>Python (Pandas, NumPy, Matplotlib)</li>
            <li>SQL (MySQL, PostgreSQL)</li>
            <li>Data Visualization (Tableau)</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="border border-primary rounded-xl shadow-md p-6 bg-light/60 dark:bg-light/10 backdrop-blur">
          <h4 className="text-2xl font-semibold text-primary mb-4">Soft Skills</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Team Collaboration & Cooperation</li>
            <li>Project Planning & Coordination</li>
            <li>Public Speaking & Presentation</li>
            <li>Creative Problem-solving</li>
            <li>Flexibility & Adaptability</li>
          </ul>
        </div>

        {/* Languages */}
        <div className="border border-primary rounded-xl shadow-md p-6 bg-light/60 dark:bg-light/10 backdrop-blur">
          <h4 className="text-2xl font-semibold text-primary mb-4">Languages</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Polish – Native</li>
            <li>English – Advanced (B2+/C1)</li>
            <li>Spanish – Pre-Intermediate (A1+)</li>
            <li>Japanese – Beginner</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
