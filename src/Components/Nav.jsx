import { navLinks, socialLinks,  } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleclick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="Home" className="flex md:px-[8rem] py-4 px-[2rem] exsmall:px-[4rem] ">
      <nav id="nav" className="flex w-full items-center justify-between">
        <a href="#Home" className="text-[#03045E] font-k2d p-0 m-0  text-[1rem] font-bold ">Abdul Rehman</a>
        <div className="md:hidden relative z-20">
          <button onClick={handleclick}>
            <svg className="w-6 h-6" fill="blue1" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <ul className={`fixed top-0  z-10 left-0 w-full h-full bg-darkyel flex flex-col items-center justify-center gap-4 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:static md:flex-row md:bg-transparent md:translate-x-0 md:flex`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a className="font-k2d text-blue1" href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className={`${isOpen ? "flex flex-wrap gap-6 z-10 fixed pt-[12rem] top-0 right-0 w-full h-full items-center justify-center transition-all duration-500 ease-in-out" : "hidden md:flex gap-6 items-center"} transition-all duration-500 ease-in-out`}>
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} className="w-6 h-6 fill-blue1" aria-label={link.alt} dangerouslySetInnerHTML={{ __html: link.svg }}></a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;