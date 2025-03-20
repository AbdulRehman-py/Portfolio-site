import { navLinks, socialLinks } from "../constants";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Close the menu when the screen size is larger than the breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close the menu
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      id="Home"
      className="flex md:px-[8rem] py-4 px-[2rem] exsmall:px-[4rem] relative z-10"
    >
      <nav id="nav" className="flex w-full items-center justify-between">
        {/* Logo */}
        <a
          href="#Home"
          className="text-[#03045E] font-k2d p-0 m-0 text-[1rem] font-bold"
        >
          Abdul Rehman
        </a>

        {/* Hamburger Button */}
        <div className="md:hidden z-50">
          <button
            className="relative w-8 h-8 flex items-center justify-center"
            onClick={handleMenuToggle}
            aria-label="Toggle Navigation"
          >
            {isOpen ? (
              // Cross Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#03045E" // Explicitly set stroke color for visibility
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#03045E" // Explicitly set stroke color for visibility
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`fixed top-0 left-0 w-full h-full bg-darkyel flex flex-col items-center justify-center gap-4 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0 z-20" : "-translate-x-full z-10"
          } md:static md:flex-row md:bg-transparent md:translate-x-0 md:flex`}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="font-k2d text-blue1"
                onClick={handleLinkClick} // Close menu on link click
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div
          className={`${
            isOpen
              ? "flex z-30 flex-wrap gap-6 fixed bottom-[10rem] left-1/2 transform -translate-x-1/2"
              : "hidden md:flex gap-6 items-center"
          }`}
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 fill-blue1"
              aria-label={link.alt}
              dangerouslySetInnerHTML={{ __html: link.svg }}
            ></a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
