// "use client";
// import React from "react";
// import Techstacksectionhero from "./techstacksectionhero";
// import Herobuttons from "./herobuttons";
// import { motion } from "motion/react";

// const HeroSection = () => {
//   return (
//     <div className="flex min-h-[100vh] flex-col items-center justify-center">
//       <div className="z-[3] flex flex-col items-center justify-center gap-20 text-center">
//         <div className="flex flex-col items-center justify-center gap-5">
//           <div className="space-y-6">
//             <motion.h1
//               initial={{
//                 y: 10,
//                 filter: "blur(10px)",
//                 opacity: 0,
//               }}
//               whileInView={{
//                 y: 0,
//                 filter: "blur(0px)",
//                 opacity: 1,
//               }}
//               transition={{
//                 duration: 0.5,
//                 delay: 0.1,
//                 ease: "easeInOut",
//               }}
//               viewport={{ once: true }}
//               className="bg-gradient-stop mx-auto max-w-3xl text-balance bg-gradient-to-br from-neutral-100 via-neutral-100 via-50% to-neutral-100/30 bg-clip-text py-2 text-5xl font-medium leading-[1.1] tracking-tighter text-transparent md:text-6xl lg:text-7xl"
//             >
//               Build Beautiful UI Faster
//             </motion.h1>
//           </div>
//           <motion.p
//             initial={{
//               y: 10,
//               filter: "blur(10px)",
//               opacity: 0,
//             }}
//             whileInView={{
//               y: 0,
//               filter: "blur(0px)",
//               opacity: 1,
//             }}
//             transition={{
//               duration: 0.4,
//               delay: 0.3,
//               ease: "easeInOut",
//             }}
//             viewport={{ once: true }}
//             className="mb-6 max-w-sm text-balance bg-gradient-to-br from-white/70 via-white/70 to-white/30 bg-clip-text text-center text-[0.87rem] text-transparent sm:max-w-[32rem] md:text-[1.15rem]"
//           >
//             Launch sleek, responsive UIs in minutes using
//             ready&#8209;to&#8209;use components built for speed, simplicity, and
//             scalability.
//           </motion.p>
//           <motion.div
//             initial={{
//               y: 5,
//               filter: "blur(5px)",
//               opacity: 0,
//             }}
//             whileInView={{
//               y: 0,
//               filter: "blur(0px)",
//               opacity: 1,
//             }}
//             transition={{
//               duration: 0.3,
//               delay: 0.5,
//               ease: "easeInOut",
//             }}
//             viewport={{ once: true }}
//             className="flex items-center justify-center"
//           >
//             <Herobuttons />
//           </motion.div>
//         </div>
//         <div className="space-y-4">
//           <Techstacksectionhero />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
"use client";
import React from "react";
import Techstacksectionhero from "./techstacksectionhero";
import Herobuttons from "./herobuttons";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center bg-gradient-to-b from-[#0f0a1f] via-[#120b2d] to-[#0a0618]">
      <div className="z-[3] flex flex-col items-center justify-center gap-20 text-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="space-y-6">
            <motion.h1
              initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
              whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="
                mx-auto max-w-3xl text-balance
                bg-gradient-to-br
                from-pink-200 via-fuchsia-200 to-rose-300
                bg-clip-text py-2
                text-5xl font-medium leading-[1.1]
                tracking-tighter text-transparent
                md:text-6xl lg:text-6xl
              "
            >
              Design With Feeling. Ship With Speed.
            </motion.h1>
          </div>

          <motion.p
            initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
            whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="
              mb-6 max-w-sm text-balance text-center
              bg-gradient-to-br
              from-pink-100/80 via-fuchsia-100/70 to-rose-100/50
              bg-clip-text text-transparent
              text-[0.87rem]
              sm:max-w-[32rem]
              md:text-[1.15rem]
            "
          >
            <span className="font-medium">LitUI</span> helps you build expressive,
            elegant interfaces using animated, production-ready components —
            crafted for delight, not just delivery.
          </motion.p>

          <motion.div
            initial={{ y: 5, filter: "blur(5px)", opacity: 0 }}
            whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <Herobuttons />
          </motion.div>
        </div>

        <div className="space-y-4">
          <Techstacksectionhero />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
