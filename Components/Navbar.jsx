import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

import { Link } from "react-router";
import { useLocation } from "react-router";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Skills", path: "/skills" },
  { id: 3, name: "Projects", path: "/projects" },
  { id: 4, name: "Contact", path: "/contact" },
];
export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="font-roboto   flex  mx-auto md:max-w-[40%]  px-2 rounded-lg py-2 mt-5 bg-white/30 backdrop-blur-md  border border-white/20 justify-center items-center    md:gap-7 shadow-md h-[50px] ">
      {/* nav links */}
      <div>
        <ul className="flex justify-center items-center gap-5">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  className={`text-[14px] ${
                    location.pathname === link.path && "bg-black text-white"
                  } md:text-lg hover:text-white hover:bg-black p-2 rounded-lg transition-all 2s ease-linear`}
                  to={link.path}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* professional links icons */}
      <div className="flex justify-center items-center gap-3">
        <a
          className="hover:text-blue-500  cursor-pointer hover:shadow-[0_0_10px_#007bff] hover:-translate-y-1 rounded-lg p-1 transition-all 2s ease-linear"
          href="https://www.linkedin.com/in/muhammad-irfan-datalytics"
        >
          <FaLinkedin fontSize={25} />
        </a>
        <a
          className="cursor-pointer hover:shadow-[0_0_10px_black] hover:-translate-y-1 rounded-lg p-1 transition-all 2s ease-linear"
          href="https://github.com/irfan5006"
        >
          <FaSquareGithub fontSize={25} />
        </a>
      </div>
    </nav>
  );
}
