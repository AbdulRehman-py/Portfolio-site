import { navLinks, socialLinks } from "../constants";

const Nav = () => {
  return (
    <header className="flex px-[12rem] py-4 ">
      <nav id="nav" className="flex w-full items-center justify-between">
        <a href="#home" className="text-[#03045E] font-k2d p-0 m-0 text-[1.2rem] font-bold text-center">Abdul Rehman</a>
        <ul className="flex justify-between items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a className="font-k2d text-blue1" href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 items-center">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} className="w-6 h-6 fill-blue1" aria-label={link.alt} dangerouslySetInnerHTML={{ __html: link.svg }}></a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
