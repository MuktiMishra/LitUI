// "use client";

// import { cn } from "@/lib/utils";
// import { motion } from "motion/react";
// import Nextjs from "@/components/icons/nextjs";
// import ReactIcon from "@/components/icons/react";
// import ShadcnIcon from "@/components/icons/shadcn";
// import { useState } from "react";
// import Motion from "../icons/motion";
// import Tailwindcss from "../icons/tailwindcss";

// export default function Techstacksectionhero() {
//   const [hoveredItem, setHoveredItem] = useState<string | null>(null);

//   const handleMouseEnter = (iconName: string) => {
//     setHoveredItem(iconName);
//   };

//   const handleMouseLeave = () => {
//     setHoveredItem(null);
//   };

//   return (
//     <div className="z-10 mx-auto flex w-full max-w-full flex-col items-center justify-center">
//       <div className="mx-auto grid grid-cols-3 items-center justify-between gap-6 py-4 sm:flex sm:flex-wrap sm:gap-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
//           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.3,
//             delay: 0.1,
//             ease: [0.23, 1, 0.32, 1],
//           }}
//           className={cn(
//             "relative col-span-1 col-start-1 flex flex-col items-center gap-2 text-white md:col-auto",
//           )}
//           onMouseEnter={() => handleMouseEnter("Next.js")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Nextjs className="h-8 w-8" aria-label="Next.js" />
//           <motion.span
//             animate={{
//               scale: hoveredItem === "Next.js" ? 1.05 : 1,
//             }}
//             transition={{
//               duration: 0.2,
//               ease: "easeInOut",
//             }}
//             className="mt-1 whitespace-nowrap text-center text-xs"
//           >
//             Next.js
//           </motion.span>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
//           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.3,
//             delay: 0.4,
//             ease: [0.23, 1, 0.32, 1],
//           }}
//           className={cn(
//             "relative flex flex-col items-center gap-2 text-blue-600 dark:text-blue-400",
//           )}
//           onMouseEnter={() => handleMouseEnter("TailwindCSS")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Tailwindcss />
//           <motion.span
//             animate={{
//               scale: hoveredItem === "TailwindCSS" ? 1.05 : 1,
//             }}
//             transition={{
//               duration: 0.2,
//               ease: "easeInOut",
//             }}
//             className="mt-1 whitespace-nowrap text-center text-xs text-white"
//           >
//             TailwindCSS
//           </motion.span>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
//           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.3,
//             delay: 0.5,
//             ease: [0.23, 1, 0.32, 1],
//           }}
//           className={cn(
//             "relative flex flex-col items-center gap-2 text-yellow-500 dark:text-[#F5EA1E]",
//           )}
//           onMouseEnter={() => handleMouseEnter("Motion")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Motion className="h-7 w-7" />
//           <motion.span
//             animate={{
//               scale: hoveredItem === "Motion" ? 1.05 : 1,
//             }}
//             transition={{
//               duration: 0.2,
//               ease: "easeInOut",
//             }}
//             className="mt-1 whitespace-nowrap text-center text-xs text-white"
//           >
//             Motion
//           </motion.span>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
//           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.3,
//             delay: 0.6,
//             ease: [0.23, 1, 0.32, 1],
//           }}
//           className={cn("relative flex flex-col items-center gap-2 text-white")}
//           onMouseEnter={() => handleMouseEnter("Shadcn UI")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <ShadcnIcon className="h-8 w-8 text-white" aria-label="Shadcn/ui" />
//           <motion.span
//             animate={{
//               scale: hoveredItem === "Shadcn UI" ? 1.05 : 1,
//             }}
//             transition={{
//               duration: 0.2,
//               ease: "easeInOut",
//             }}
//             className="mt-1 whitespace-nowrap text-center text-xs"
//           >
//             shadcn/ui
//           </motion.span>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
//           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.3,
//             delay: 0.7,
//             ease: [0.23, 1, 0.32, 1],
//           }}
//           className={cn(
//             "relative col-span-1 col-start-3 flex flex-col items-center gap-2 text-white md:col-auto",
//           )}
//           onMouseEnter={() => handleMouseEnter("React")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <ReactIcon className="h-8 w-8" aria-label="React" />
//           <motion.span
//             animate={{
//               scale: hoveredItem === "React" ? 1.05 : 1,
//             }}
//             transition={{
//               duration: 0.2,
//               ease: "easeInOut",
//             }}
//             className="mt-1 whitespace-nowrap text-center text-xs"
//           >
//             React
//           </motion.span>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Nextjs from "@/components/icons/nextjs";
import ReactIcon from "@/components/icons/react";
import ShadcnIcon from "@/components/icons/shadcn";
import { useState } from "react";
import Motion from "../icons/motion";
import Tailwindcss from "../icons/tailwindcss";

export default function Techstacksectionhero() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="z-10 mx-auto flex w-full max-w-full flex-col items-center justify-center gap-4">
      {/* Built by line */}
      <motion.p
        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="
          text-center text-xs font-medium tracking-wide
          bg-gradient-to-br from-pink-200 via-fuchsia-200 to-rose-200
          bg-clip-text text-transparent
        "
      >
        Built by <span className="font-semibold">Mukti Mishra</span> using
      </motion.p>

      {/* Tech stack */}
      <div className="mx-auto grid grid-cols-3 items-center gap-6 py-3 sm:flex sm:flex-wrap sm:gap-8">
        {[
          { name: "Next.js", icon: <Nextjs className="h-8 w-8" /> },
          { name: "TailwindCSS", icon: <Tailwindcss /> },
          { name: "Motion", icon: <Motion className="h-7 w-7" /> },
          { name: "shadcn/ui", icon: <ShadcnIcon className="h-8 w-8" /> },
          { name: "React", icon: <ReactIcon className="h-8 w-8" /> },
        ].map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.15 + index * 0.1,
              ease: [0.23, 1, 0.32, 1],
            }}
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
            whileHover={{ y: -4 }}
            className={cn(
              "relative flex flex-col items-center gap-2",
              "rounded-xl px-3 py-2",
              "bg-white/5 backdrop-blur-sm",
              "transition-all duration-300",
              "hover:bg-pink-400/10",
              "hover:shadow-[0_10px_30px_-10px_rgba(236,72,153,0.6)]",
            )}
          >
            <motion.div
              animate={{
                scale: hoveredItem === item.name ? 1.08 : 1,
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="text-pink-200"
            >
              {item.icon}
            </motion.div>

            <motion.span
              animate={{
                scale: hoveredItem === item.name ? 1.05 : 1,
                opacity: hoveredItem === item.name ? 1 : 0.8,
              }}
              transition={{ duration: 0.2 }}
              className="mt-1 whitespace-nowrap text-center text-xs text-pink-100"
            >
              {item.name}
            </motion.span>

            {/* soft glow */}
            <div
              className={cn(
                "pointer-events-none absolute inset-0 rounded-xl",
                "opacity-0 transition-opacity duration-300",
                hoveredItem === item.name && "opacity-100",
                "bg-gradient-to-br from-pink-400/10 via-fuchsia-400/10 to-rose-400/10",
              )}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
