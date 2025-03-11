const Nav = () => {
  return (
    <header className="flex   px-8 py-4 ">
      <nav id="nav" className="flex px-8 w-full items-center " >
      <a href="#home" className="text-[#03045E] font-mono p-0 m-0 text-center mr-auto">Home</a>
        <ul className="flex justify-between items-center gap-8">
  
          <li>
            <a href="#about" className="text-[#03045E] font-mono">About</a>
          </li>
          <li>
            <a href="#services" className="text-[#03045E] font-mono">Services</a>
          </li>
          <li>
            <a href="#contact" className="text-[#03045E] font-mono">Contact</a>
          </li>
          <li>
            <a href="#projects" className="text-[#03045E] font-mono">Projects</a>
          </li>
        </ul>
       
      </nav>
    </header>
  );
};

export default Nav;