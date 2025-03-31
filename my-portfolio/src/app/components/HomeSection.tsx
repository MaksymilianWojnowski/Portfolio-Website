"use client";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="
        h-screen
        w-full
        bg-light dark:bg-dark
        text-dark dark:text-light
        flex
        flex-col
        items-center
        justify-center
      "
    >
      <div className="text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-light mb-4 leading-tight">
          <span className="magic font-bold">Hi</span>, I'm Maksymilian
          <br />
          <span className="magic font-bold">Front-End</span> Developer & 
          <br/>
          <span className="magic font-bold">Computer Science</span> Student
        </h1>
      </div>
    </section>
  );
}