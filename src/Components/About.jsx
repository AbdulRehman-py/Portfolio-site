import React from "react";

const About = () => {
  return (
    <section className="flex flex-col justify-center gap-10 p-global ">
<div className="p-4 ">
        <h2 className="text-darkyel text-4xl font-k2d mb-2 ">About</h2>

        <p className="text-blue1 font-mono text-lg">
          I am a front-end developer committed to creating clean, efficient code
          and intuitive interfaces. My enthusiasm for responsive, user-friendly
          designs drives continuous learning and improvement. I thrive in
          collaborative environments and seamlessly contribute to any team. I
          provide dedicated and adaptable services. If you have tasks that
          require careful handling, I am ready to take on the challenge.
        </p>
      </div>

      <div className="p-4 flex flex-col gap-4">
        <span className="font-mono text-darkyel  text-[1.5rem]">
          Personal Info
        </span>
        <div>
          <ul className="text-blue1 font-mono text-lg">
            <li>
              <strong>Name:</strong> Abdul Rehman
            </li>
            <li>
              <strong>Date of Birth:</strong> 25.04.2004
            </li>
            <li>
              <strong>Email:</strong>
              <a
                href="mailto:abdulrehmans30@outlook.com"
                
              >
                abdulrehmans30@outlook.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +92 301 9231 525
            </li>
            <li>
              <strong>City:</strong> Faislabad
            </li>
          </ul>
        </div>
      </div>

      
    </section>
  );
};

export default About;
