import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Projects", path: "/projects" },
  { id: 4, name: "Contact", path: "/contact" },
];
export default function Navbar() {
  return (
    <nav className="flex  mx-auto md:max-w-[40%] rounded-lg py-2 mt-5 backdrop-blur-sm bg-white/30  justify-center items-center gap-7 shadow-md h-[50px] ">
      {/* nav links */}
      <div>
        <ul className="flex justify-center items-center gap-5">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link className="text-lg hover:text-white hover:bg-black p-2 rounded-lg transition-all 2s ease-linear" to={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* professional links icons */}
      <div className="hover:text-blue-500 cursor-pointer hover:shadow-[0_0_10px_#007bff] hover:-translate-y-1 rounded-lg p-1 transition-all 2s ease-linear">
        <a href="https://www.linkedin.com/in/muhammad-irfan-datalytics//">
          <FaLinkedin fontSize={25} />
        </a>
      </div>
    </nav>
  );
}
