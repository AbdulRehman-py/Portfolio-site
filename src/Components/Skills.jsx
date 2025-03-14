// filepath: c:\Users\ABDUL\OneDrive\Desktop\Portfolio-site\src\Components\Skills.jsx
import { skillsIcons } from "../constants";

const Skills = () => {
  return (
    <section className="p-global">
      <h2 className="font-mono font-bold text-4xl text-darkyel mb-2">Skills</h2>
      <p className="text-blue1 font-mono px-2">
        My main area of expertise is front-end development (client-side of the
        web). I have a solid foundation in HTML, CSS, and JavaScript, with
        experience in building small and medium web applications using React. I
        enjoy creating custom plugins, features, animations, and interactive
        layouts. Additionally, I utilize Tailwind CSS to design clean and
        intuitive user interfaces.
      </p>
      <div className="flex items-center justify-between gap-8 flex-wrap">
        {skillsIcons.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-8 mt-8">
            <div
              className="w-[60px] h-[40px] fill-blue1 mb-2"
              dangerouslySetInnerHTML={{ __html: skill.svg }}
              aria-label={skill.alt}
            ></div>
            <span className="text-blue1 font-mono">{skill.alt}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;