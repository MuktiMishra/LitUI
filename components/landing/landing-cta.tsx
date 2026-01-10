// "use client";

// import React from "react";
// import { motion } from "motion/react";
// import Link from "next/link";
// import { BookOpen, ChevronRight } from "lucide-react";

// const LandingCta = () => {
//   return (
//     <div className="my-40 flex flex-col items-center gap-6">
//       <motion.h1
//         initial={{
//           y: 10,
//           filter: "blur(10px)",
//           opacity: 0,
//         }}
//         whileInView={{
//           y: 0,
//           filter: "blur(0px)",
//           opacity: 1,
//         }}
//         transition={{
//           duration: 0.5,
//           delay: 0.1,
//           ease: "easeInOut",
//         }}
//         viewport={{ once: true }}
//         className="mx-auto max-w-3xl text-balance bg-gradient-to-br from-neutral-100 via-neutral-100 via-50% to-neutral-100/30 bg-clip-text py-2 text-center text-5xl font-medium leading-relaxed tracking-tighter text-transparent md:text-6xl"
//       >
//         <span className="block leading-[1.1]">Design Smarter.</span>
//         <span className="block leading-[1.1]">Build Faster.</span>
//       </motion.h1>
//       <motion.p
//         initial={{
//           y: 10,
//           filter: "blur(10px)",
//           opacity: 0,
//         }}
//         whileInView={{
//           y: 0,
//           filter: "blur(0px)",
//           opacity: 1,
//         }}
//         transition={{
//           duration: 0.4,
//           delay: 0.1,
//           ease: "easeInOut",
//         }}
//         viewport={{ once: true }}
//         className="mb-6 max-w-sm text-balance bg-gradient-to-br from-white/70 via-white/70 to-white/30 bg-clip-text text-center text-[0.8rem] text-transparent sm:max-w-[32rem] sm:text-[0.87rem] lg:text-[1rem]"
//       >
//         Explore the docs and components to see how effortless UI development can
//         be with ForgeUI.
//       </motion.p>
//       <motion.div
//         initial={{
//           y: 5,
//           filter: "blur(5px)",
//           opacity: 0,
//         }}
//         whileInView={{
//           y: 0,
//           filter: "blur(0px)",
//           opacity: 1,
//         }}
//         transition={{
//           duration: 0.3,
//           delay: 0.1,
//           ease: "easeInOut",
//         }}
//         viewport={{ once: true }}
//         className="flex items-center justify-center"
//       >
//         <CtaButtons />
//       </motion.div>
//     </div>
//   );
// };

// export default LandingCta;

// const CtaButtons = () => {
//   return (
//     <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
//       <Link href="/components/animated-form">
//         <div className="group relative z-20 flex h-9 w-full cursor-pointer items-center justify-center gap-1 rounded-lg bg-neutral-300 px-4 py-1.5 text-[0.9rem] font-semibold text-black no-underline transition-all duration-300 hover:bg-white md:h-10 md:rounded-xl md:px-5 md:py-2 md:text-[1rem]">
//           Explore Components
//         </div>
//       </Link>

//       <Link
//         href="/docs/introduction"
//         className="group flex items-center gap-1.5 text-[0.75rem] text-white md:gap-2 md:text-[1rem]"
//       >
//         <BookOpen className="h-3.5 w-3.5 translate-y-[1px] md:h-4 md:w-4" />
//         Visit the Docs
//         <ChevronRight className="mt-0.5 h-3.5 w-3.5 transition-all duration-200 ease-in-out group-hover:translate-x-2 md:h-4 md:w-4 md:group-hover:translate-x-3" />
//       </Link>
//     </div>
//   );
// };
"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";

const LandingCta = () => {
  return (
    <div className="my-40 flex flex-col items-center gap-6">
      <motion.h1
        initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
        whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="
          mx-auto max-w-3xl text-balance text-center
          bg-gradient-to-br from-pink-200 via-fuchsia-200 to-rose-300
          bg-clip-text py-2
          text-5xl font-medium leading-relaxed
          tracking-tighter text-transparent
          md:text-6xl
        "
      >
        <span className="block leading-[1.1]">Design with delight.</span>
        <span className="block leading-[1.1]">Ship with confidence.</span>
      </motion.h1>

      <motion.p
        initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
        whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="
          mb-6 max-w-sm text-balance text-center
          bg-gradient-to-br from-pink-100/80 via-fuchsia-100/70 to-rose-100/50
          bg-clip-text text-transparent
          text-[0.8rem]
          sm:max-w-[32rem]
          sm:text-[0.9rem]
          lg:text-[1rem]
        "
      >
        Explore LitUI components and documentation to create expressive,
        production-ready interfaces—faster than ever.
      </motion.p>

      <motion.div
        initial={{ y: 5, filter: "blur(5px)", opacity: 0 }}
        whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-center"
      >
        <CtaButtons />
      </motion.div>
    </div>
  );
};

export default LandingCta;

const CtaButtons = () => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
      {/* Primary CTA */}
      <Link href="/components/animated-form">
        <div
          className="
            group relative z-20 flex h-9 w-full cursor-pointer
            items-center justify-center gap-1
            rounded-lg px-4 py-1.5
            text-[0.9rem] font-semibold text-white
            md:h-10 md:rounded-xl md:px-5 md:py-2 md:text-[1rem]

            bg-gradient-to-br
            from-pink-400 via-rose-400 to-fuchsia-400
            shadow-[0_8px_30px_-10px_rgba(236,72,153,0.7)]
            transition-all duration-300

            hover:scale-[1.03]
            hover:shadow-[0_12px_40px_-10px_rgba(236,72,153,0.9)]
            active:scale-[0.98]
          "
        >
          <span className="relative z-10">Explore Components</span>
          <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:rounded-xl" />
        </div>
      </Link>

      {/* Secondary CTA */}
      <Link
        href="/docs/introduction"
        className="
          group flex items-center gap-1.5
          text-[0.75rem] font-medium
          text-pink-200 transition-colors duration-200
          hover:text-pink-100
          md:gap-2 md:text-[1rem]
        "
      >
        <BookOpen className="h-3.5 w-3.5 translate-y-[1px] md:h-4 md:w-4" />
        Visit the Docs
        <ChevronRight
          className="
            mt-0.5 h-3.5 w-3.5
            transition-all duration-200 ease-in-out
            group-hover:translate-x-2
            md:h-4 md:w-4 md:group-hover:translate-x-3
          "
        />
      </Link>
    </div>
  );
};
