import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { BarChart3, Database } from "lucide-react"
import {
  SiApachespark,
  SiDash,
  SiFastapi,
  SiGooglesheets,
  SiJupyter,
  SiNumpy,
  SiOpenai,
  SiPandas,
  SiPlotly,
  SiPython,
  SiScikitlearn,
  SiStreamlit,
  SiTensorflow,
} from "react-icons/si"

type IconName = keyof typeof techIcons

type OrbitingCirclesDemoProps = {
  title?: string
  outerIcons?: IconName[]
  innerIcons?: IconName[]
}

const techIcons = {
  python: { Icon: SiPython, color: "text-[#3776AB]" },
  sklearn: { Icon: SiScikitlearn, color: "text-[#F7931E]" },
  tensorflow: { Icon: SiTensorflow, color: "text-[#FF6F00]" },
  fastapi: { Icon: SiFastapi, color: "text-[#009688]" },
  streamlit: { Icon: SiStreamlit, color: "text-[#FF4B4B]" },
  dash: { Icon: SiDash, color: "text-[#008DE4]" },
  pandas: { Icon: SiPandas, color: "text-[#150458] dark:text-[#6F7CFB]" },
  numpy: { Icon: SiNumpy, color: "text-[#4DABCF]" },
  powerbi: { Icon: BarChart3, color: "text-[#F2C811]" },
  sql: { Icon: Database, color: "text-[#CC2927]" },
  jupyter: { Icon: SiJupyter, color: "text-[#F37626]" },
  sheets: { Icon: SiGooglesheets, color: "text-[#0F9D58]" },
  plotly: { Icon: SiPlotly, color: "text-[#3F4F75] dark:text-[#A8B4D6]" },
  spark: { Icon: SiApachespark, color: "text-[#E25A1C]" },
  openai: { Icon: SiOpenai, color: "text-[#0F172A] dark:text-[#E2E8F0]" },
}

const defaultOuterIcons: IconName[] = [
  "python",
  "sklearn",
  "tensorflow",
  "pandas",
  "numpy",
]

const defaultInnerIcons: IconName[] = ["jupyter", "powerbi", "fastapi", "openai"]

function TechIcon({ name }: { name: IconName }) {
  const { Icon, color } = techIcons[name]

  return (
    <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-slate-900 transition-colors duration-300">
      <Icon className={`h-[78%] w-[78%] ${color}`} />
    </div>
  )
}

export function OrbitingCirclesDemo({
  title = "Selected Skill",
  outerIcons = defaultOuterIcons,
  innerIcons = defaultInnerIcons,
}: OrbitingCirclesDemoProps) {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={42}>
        {outerIcons.map((iconName, index) => (
          <TechIcon key={`outer-${iconName}-${index}`} name={iconName} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={34} radius={100} reverse speed={2.2}>
        {innerIcons.map((iconName, index) => (
          <TechIcon key={`inner-${iconName}-${index}`} name={iconName} />
        ))}
      </OrbitingCircles>

      <div className="pointer-events-none absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 px-4 py-2 text-center shadow-sm transition-colors duration-300">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 dark:text-slate-300">
          ORBITING STACK
        </p>
        <p className="text-xs font-bold text-slate-800 dark:text-slate-100">{title}</p>
      </div>
    </div>
  )
}
