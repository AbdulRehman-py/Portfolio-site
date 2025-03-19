import { projects } from "../constants";


const Work = () => {
  return (
    <section id="Work" className="py-[4rem] px-[4rem]  md:p-global">
      <div>
        <h2 className="font-mono text-blue1 m-0 md:text-6xl exsmall:text-3xl text-2xl font-semibold">
          <span>My</span>
          <span className="block text-blue1 mt-2 ">Work</span>
        </h2>
        <p className="font-mono text-blue1 mt-2 text-[0.9rem] md:text-lg">
          Developed scalable and visually appealing web applications, including
          high-profile landing pages, dynamic bookmark pages, and intricate
          multi-step forms using React and Tailwind. Worked on over 20 projects.
          I am also a Certified Cloud Applied Generative AI Engineer (GenEng)
          with a keen interest in generative AI.{" "}
        </p>
      </div>
      <div className="mt-20">
        <h3 className="font-k2d text-2xl md:text-4xl mb-20  text-blue1">View Projects</h3>
        <div className="grid col-span-1 gap-20 ">
          {projects.map((project, index) => (
            <div key={index} className="project-card grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <h3 className="font-mono text-blue1 sm:text-2xl text-[1.1rem] font-semibold">
                  {project.title}
                </h3>
                <p className="font-mono text-blue1 mt-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <a href={project.repourl} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white px-[3.2rem] sm:px-8 py-2 rounded-lg font-mono text-blue1">Repo</button>
                  </a>
                  <a href={project.liveurl} target="_blank" rel="noopener noreferrer">
                    <button className="bg-darkyel px-4 py-2 rounded-lg font-mono text-darkbrown">Live Preview</button>
                  </a>
                </div>
              </div>
              <div>
                <img src={project.image} alt="img" className="rounded-[12px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
