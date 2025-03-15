import { projects } from "../constants";

const Work = () => {
  return (
    <section className='p-global'>
      <div>
        <h2 className="font-mono text-blue1 m-0 text-6xl font-semibold">
            <span>My</span>
            <span className="block text-blue1 mt-2 ">Work</span>
          </h2>
          <p className='font-mono text-blue1 mt-2'>Developed scalable and visually appealing web applications, including high-profile landing pages, dynamic bookmark pages, and intricate multi-step forms using React and Tailwind. Worked on over 20 projects. I am also a Certified Cloud Applied Generative AI Engineer (GenEng) with a keen interest in generative AI. </p>
          </div>
          <div className="mt-8">
            <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card grid gap-2">
                <h3 className="font-mono text-blue1 text-2xl font-semibold">{project.title}</h3>
                <p className="font-mono text-blue1 mt-2">{project.description}</p>
                <img src={project.image} alt="img" className="rounded-[12px] "   />
              </div>
            ))}
            </div>
          </div>
     
    </section>
  )
}

export default Work