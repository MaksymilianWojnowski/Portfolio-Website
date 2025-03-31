"use client";

export default function ContactSection() {
  return (
    <div id="contacts" className="min-h-screen w-full bg-light dark:bg-dark text-dark dark:text-light py-16 px-4 flex flex-col items-center">
      <h3 className="text-5xl font-bold mb-8 magic text-center">
        <span className="magic">Contacts</span>
      </h3>

      <div className="contact-info">
        <div className="line flex">
          <p className="word">Contact</p>
          <p className="word">Me</p> 
        </div>

        <div className="line flex">
          <p className="word">Via</p>
          <FancyLink
            id="linkedin"
            href="https://www.linkedin.com/in/maksymilian-wojnowski-647585254/"
            text="linkedin"
          />
        </div>

        <div className="line flex">
          <p className="word">And</p>
          <p className="word">Visit</p>
        </div>

        <div className="line flex">
          <p className="word ">My</p>
          <FancyLink
            id="github"
            href="https://github.com/MaksymilianWojnowski"
            text="Github"
          />
        </div>
      </div>
    </div>
  );
}

function FancyLink({
  id,
  href,
  text,
}: {
  id: string;
  href: string;
  text: string;
}) {
  const letters = text.split("");
  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="word fancy"
    >
      {letters.map((letter, index) => (
        <span key={index} className="outer">
          <span className="inner">
            <span className="letter">{letter}</span>
          </span>
        </span>
      ))}
    </a>
  );
}
