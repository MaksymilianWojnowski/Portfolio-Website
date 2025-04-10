"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-light dark:bg-dark text-dark dark:text-light py-16 px-4 flex flex-col items-center"
    >
      <h3 className="magic text-5xl font-semibold mb-8 pb-2 text-center text-dark dark:text-light">
        About Me
      </h3>

      <div className="max-w-screen-md w-full text-justify">
        <p className="mb-8 text-lg leading-relaxed">
          Motivated and detail-oriented Computer Science student with practical experience in front-end development. Skilled in creating responsive web applications using React.js and Next.js. Passionate about designing user-friendly solutions and continuously improving technical proficiency. Additional strengths include event coordination and collaborative project management. Seeking opportunities to contribute to innovative projects that combine technology, user experience, and effective teamwork.
        </p>

        <div className="px-6 py-6 border border-primary rounded-xl shadow-md shadow-[theme(colors.primary)] text-left mx-auto max-w-xl bg-light/60 dark:bg-light/10 backdrop-blur">
          <h4 className="text-2xl font-semibold text-primary mb-4">Experience</h4>

          <div className="space-y-4">
            <div>
              <h5 className="text-lg font-bold">Front-End Developer @ Code Technica</h5>
              <span className="text-sm font-medium">07/2024 – Present, Miami, USA (Hybrid)</span>
              <ul className="list-disc list-inside">
                <li>Responsive data management pages with React.js, Next.js, PrimeReact</li>
                <li>Enhanced user workflows with intuitive UI forms</li>
                <li>Performance optimization through component refactoring</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold">Creative Lead & Member @ Student IT Committee</h5>
              <span className="text-sm font-medium">02/2023 – 01/2025, Wrocław, Poland</span>
              <ul className="list-disc list-inside">
                <li>Front-end design for Liga PWr website using Django</li>
                <li>Organized charitable Meet.js conference</li>
                <li>Managed corporate sponsorships and promotional materials</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold">Member & Organizer @ Oxford-style Debate Club</h5>
              <span className="text-sm font-medium">10/2023 – 01/2025, Wrocław, Poland</span>
              <ul className="list-disc list-inside">
                <li>Organized Oxford-style debate tournaments and workshops</li>
                <li>Enhanced critical thinking and public speaking abilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
