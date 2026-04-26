import { Children, type CSSProperties, type HTMLAttributes, type ReactNode } from "react"

import { cn } from "@/lib/utils"

type OrbitingCirclesProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  radius?: number
  speed?: number
  reverse?: boolean
  iconSize?: number
  showOrbitPath?: boolean
}

export function OrbitingCircles({
  children,
  className,
  radius = 130,
  speed = 1,
  reverse = false,
  iconSize = 32,
  showOrbitPath = true,
  ...props
}: OrbitingCirclesProps) {
  const items = Children.toArray(children)
  const duration = `${Math.max(1, 18 / Math.max(speed, 0.2))}s`
  const orbitDirection = reverse ? "reverse" : "normal"
  const iconDirection = reverse ? "normal" : "reverse"

  return (
    <div className={cn("absolute inset-0", className)} {...props}>
      {showOrbitPath && (
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: radius * 2,
            height: radius * 2,
          }}
        >
          <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.09),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_70%)] blur-lg" />
          <div className="absolute inset-0 rounded-full border border-slate-300/60 dark:border-slate-600/70 transition-colors duration-300" />
          <div
            className="absolute inset-[2px] rounded-full border border-dashed border-sky-400/45 animate-spin"
            style={{
              animationDuration: duration,
              animationDirection: orbitDirection,
            }}
          />
          <div
            className="absolute inset-0 animate-spin"
            style={{
              animationDuration: duration,
              animationDirection: orbitDirection,
            }}
          >
            <span className="absolute top-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.55)]" />
          </div>
          <div className="absolute inset-[12%] rounded-full border border-slate-300/40 dark:border-slate-600/60 transition-colors duration-300" />
        </div>
      )}

      {items.map((item, index) => {
        const angle = (360 / Math.max(items.length, 1)) * index
        const itemStyle: CSSProperties = {
          transform: `rotate(${angle}deg) translateX(${radius}px)`,
        }

        return (
          <div
            key={`orbit-item-${index}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div
              className="animate-spin"
              style={{
                animationDuration: duration,
                animationDirection: orbitDirection,
              }}
            >
              <div style={itemStyle}>
                <div
                  className="relative flex animate-spin items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-1.5 shadow-[0_6px_16px_rgba(15,23,42,0.12)] dark:shadow-[0_6px_16px_rgba(15,23,42,0.4)] [&>svg]:h-full [&>svg]:w-full transition-colors duration-300"
                  style={{
                    animationDuration: duration,
                    animationDirection: iconDirection,
                    width: iconSize,
                    height: iconSize,
                  }}
                >
                  {item}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}