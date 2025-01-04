import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router";
import { useLocation } from "react-router";
import {motion} from "framer-motion"

const navLinks = [
  { id: 1, delay : 0.2, name: "Home", path: "/" },
  { id: 2, delay : 0.4, name: "Skills", path: "/skills" },
  { id: 3, delay : 0.6, name: "Projects", path: "/projects" },
  { id: 4, delay : 0.8, name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <motion.nav
      initial={{opacity:0 ,scale:0.7}}
      animate={{opacity:1 ,scale:1}}
      transition={{duration:0.4 , stiffness:120 , damping:60}}
      className="font-roboto flex mx-auto px-2 rounded-lg py-2 mt-5 bg-white/30 backdrop-blur-md border border-white/20 justify-center items-center md:gap-7 shadow-md h-[50px] w-full sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%]">
      {/* Nav links */}
      <div>
        <ul className="flex justify-center items-center gap-5">
          {navLinks.map((link) => {
            return (
              <motion.li
                initial={{opacity:0 , y:-10}}
                animate={{opacity:1 , y:0}}
                transition={{duration:0.5 , delay:link.delay , stiffness:100}}
                key={link.id}>
                <Link
                  className={`text-[12px] sm:text-[14px] md:text-lg ${
                    location.pathname === link.path && "bg-black text-white"
                  } hover:text-white hover:bg-black p-2 rounded-lg transition-all 2s ease-linear`}
                  to={link.path}
                >
                  {link.name}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* Professional links icons */}
      <div className="flex justify-center items-center gap-3">
        <motion.a
          initial={{opacity:0 , y:-10}}
          animate={{opacity:1 , y:0}}
          whileHover={{y: -5 , transition:{duration:0 , delay : 0 }}}
          transition={{duration:0.5 , delay: 1 , stiffness:100}}
          className="hover:text-blue-500 cursor-pointer hover:shadow-[0_0_10px_#007bff] rounded-lg p-1 transition-all 2s ease-linear"
          href="https://www.linkedin.com/in/muhammad-irfan-datalytics"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin fontSize="20px" className="sm:text-22 md:text-25" />
        </motion.a>
        <motion.a
          initial={{opacity:0 , y:-10}}
          animate={{opacity:1 , y:0}}
          transition={{duration:0.5 , delay: 1.2 , stiffness:100}}
          whileHover={{y: -5 , transition:{duration:0 , delay : 0 }}}
          className="cursor-pointer hover:shadow-[0_0_10px_black] rounded-lg p-1 transition-all 2s ease-linear"
          href="https://github.com/irfan5006"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareGithub fontSize="20px" className="sm:text-22 md:text-25" />
        </motion.a>
      </div>
    </motion.nav>
  );
}
