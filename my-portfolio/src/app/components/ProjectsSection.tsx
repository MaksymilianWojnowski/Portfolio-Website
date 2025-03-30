"use client";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projectsData: Project[] = [
  {
    title: "Placeholder",
    description: "Placeholder text about this project…",
    imageUrl: "/images/placeholder-1.jpg",
    link: "#"
  },
  {
    title: "Another Placeholder",
    description: "Some description here…",
    imageUrl: "/images/placeholder-2.jpg",
    link: "#"
  },
  // Add your real projects
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="
        w-full
        min-h-screen
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
        Projects
      </h3>

      <div className="max-w-screen-xl w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { title, description, imageUrl, link } = project;

  return (
    <div className="relative overflow-hidden rounded-xl group">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Overlay */}
      <div
        className="
          absolute 
          bottom-0 
          left-0 
          w-full 
          h-0 
          bg-gradient-to-t 
          from-primary/80 
          to-black/70 
          flex 
          flex-col 
          items-center 
          justify-center 
          p-4
          text-center
          text-dark
          transition-all 
          duration-500 
          group-hover:h-full
        "
      >
        <h4 className="font-semibold text-lg mb-2 text-light">{title}</h4>
        <p className="text-sm text-light mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block 
            w-10 
            h-10 
            rounded-full 
            bg-light 
            text-primary 
            flex 
            items-center 
            justify-center 
            transition-colors 
            hover:bg-primary 
            hover:text-dark
          "
          title={title}
        >
          {/* Could be an SVG icon or just a link */}
          <svg
            className="w-5 h-5"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M320 0c-17.7... etc. " />
          </svg>
        </a>
      </div>
    </div>
  );
}
