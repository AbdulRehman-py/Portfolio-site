const Hero = () => {
    return (
      <section className="mt-[6rem] md:px-[8rem] exsmall:px-[4rem] px-[1.5rem] flex  justify-between">
        <div>
          <p className="font-semibold font-mono text-blue1 ">
            <span className="text-blue1 font-mono  m-0">Hello, </span>
            I'm Abdul Rehman
          </p>
          <h1 className="font-k2d text-blue1 m-0 md:text-6xl exsmall:text-4xl text-2xl font-semibold">
            <span>Frontend</span>
            <span className="block text-blue1 mt-2">Developer</span>
          </h1>
          <span className="font-k2d exsmall:text-[1.1rem] text-[1rem] py-2 px-1 text-blue1 ">
            Based in Pakistan
          </span>
          <div className="flex flex-col gap-4 mt-8">
            <div>
              <a href="/resume.pdf" download={true}>
              <button
                className="bg-darkyel text-darkbrown font-mono font-bold  rounded-lg hover:bg-darkbrown  hover:text-darkyel transition duration-300 px-6 py-2"
              >
                Resume
              </button>
              </a>
            </div>
          </div>
        </div>
        <div className="pr-6 flex flex-col items-center">
          <img
            src="/download.svg"
            alt="work img"
            className="rotate-[-26deg] ml-8 mb-0  "
            width={100}
            height={60}
          />
          <div className="ring-goal rounded-full md:p-12 p-10 md:border-[15px]  border-[10px] border-darkbrown mt-[-4rem]"></div>
        </div>
      </section>
    );
  };

  export default Hero;