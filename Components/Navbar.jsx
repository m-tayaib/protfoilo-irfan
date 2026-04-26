import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router";
import { useLocation } from "react-router";
import {motion} from "framer-motion"
import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler";

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
      className="font-roboto flex flex-col sm:flex-row mx-auto w-[calc(100%-1rem)] sm:w-fit max-w-[780px] px-2 sm:px-3 rounded-lg py-2 bg-white/60 backdrop-blur-md border border-slate-200/70 justify-center items-center gap-2 sm:gap-4 shadow-md transition-colors duration-300 dark:bg-slate-900/70 dark:border-slate-700/70">
      {/* Nav links */}
      <div className="w-full sm:w-auto">
        <ul className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 md:gap-4">
          {navLinks.map((link) => {
            return (
              <motion.li
                initial={{opacity:0 , y:-10}}
                animate={{opacity:1 , y:0}}
                transition={{duration:0.5 , delay:link.delay , stiffness:100}}
                key={link.id}>
                <Link
                  className={`text-[11px] sm:text-[13px] md:text-base px-2 py-1.5 rounded-lg transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                      : "hover:text-white hover:bg-slate-900 dark:hover:bg-slate-100 dark:hover:text-slate-900"
                  }`}
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
      <div className="flex justify-center items-center gap-2 shrink-0">
        <AnimatedThemeToggler />
        <motion.a
          initial={{opacity:0 , y:-10}}
          animate={{opacity:1 , y:0}}
          whileHover={{y: -5 , transition:{duration:0 , delay : 0 }}}
          transition={{duration:0.5 , delay: 1 , stiffness:100}}
          className="hover:text-blue-500 cursor-pointer hover:shadow-[0_0_10px_#007bff] rounded-lg p-1 transition-colors duration-300"
          href="https://www.linkedin.com/in/muhammad-irfan-datalytics"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin fontSize="18px" className="sm:text-22 md:text-25" />
        </motion.a>
        <motion.a
          initial={{opacity:0 , y:-10}}
          animate={{opacity:1 , y:0}}
          transition={{duration:0.5 , delay: 1.2 , stiffness:100}}
          whileHover={{y: -5 , transition:{duration:0 , delay : 0 }}}
          className="cursor-pointer hover:shadow-[0_0_10px_black] dark:hover:shadow-[0_0_10px_#f8fafc] rounded-lg p-1 transition-colors duration-300"
          href="https://github.com/irfan5006"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareGithub fontSize="18px" className="sm:text-22 md:text-25" />
        </motion.a>
      </div>
    </motion.nav>
  );
}
