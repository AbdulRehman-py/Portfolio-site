const Hero = () => {
    return (
      <section className="mt-[6rem] px-[8rem] py-4 flex justify-between">
        <div>
          <p className="font-semibold font-mono text-blue1">
            <span className="text-blue1 font-mono m-0">Hello, </span>
            I'm Abdul Rehman
          </p>
          <h1 className="font-k2d text-blue1 m-0 text-6xl font-semibold">
            <span>Frontend</span>
            <span className="block text-blue1 mt-2">Developer</span>
          </h1>
          <span className="font-k2d text-[1.1rem] py-2 px-1 text-blue1 ">
            Based in Pakistan
          </span>
          <div className="flex flex-col gap-4 mt-8">
            <div>
              <button
                className="bg-darkyel border-1-darkbrown outline-none rounded-lg font-mono text-darkbrown px-6 py-2"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
        <div className="pr-6 flex flex-col items-center">
          <img
            src="/download.svg"
            alt="work img"
            className="rotate-[-26deg] ml-8 mb-0"
            width={100}
            height={60}
          />
          <div className="ring-goal rounded-full p-12 border-[15px] border-darkbrown mt-[-4rem]"></div>
        </div>
      </section>
    );
  };

  export default Hero;