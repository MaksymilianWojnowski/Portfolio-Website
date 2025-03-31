"use client";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projectsData: Project[] = [
  {
    title: "LigaPWr Web App",
    description: "Web app for managing and visualizing sports league results using Django, HTML, and CSS.",
    imageUrl: "/images/ligapwr-webapp.jpg",
    link: "https://github.com/informatyzacja/LigaPWr",
  },
  {
    title: "London Bike Rides Visualization",
    description: "Interactive data visualization dashboard in Tableau with data preprocessing using Python.",
    imageUrl: "/images/london-bike.jpg",
    link: "https://github.com/MaksymilianWojnowski/London-bike-sharing-visualization",
  },
  {
    title: "Solve & Unite! International Hackathon",
    description: "Organizing an international hackathon event to enhance integration and collaboration between students.",
    imageUrl: "/images/unite-hackathon.jpg",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="
        w-full
        min-h-screen
        bg-light dark:bg-dark
        text-dark dark:text-light
        py-16
        px-4
        flex
        flex-col
        items-center
      "
    >
      <h3 className="magic text-5xl font-semibold mb-8 pb-2 text-center">
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
          <svg
            className="w-5 h-5"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
          </svg>
        </a>
      </div>
    </div>
  );
}