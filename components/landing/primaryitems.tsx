// "use client";
// import React from "react";
// import { eliteItems, introItems, primaryItems } from "@/contants";
// import Anchor from "../ui/anchor-single";
// import TextShimmer from "@/app/(primary)/components/text-shimmer/_components/text-shimmer";

// const PrimaryItems = () => {
//   const sortedPrimaryItems = [...primaryItems].sort((a, b) =>
//     a.name.localeCompare(b.name),
//   );

//   const sortedEliteItems = [...eliteItems].sort((a, b) =>
//     a.name.localeCompare(b.name),
//   );

//   return (
//     <div className="flex flex-col gap-6 pr-6">
//       <div className="flex flex-col gap-1">
//         <div className="px-3 py-2 text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70">
//           Getting Started
//         </div>
//         <div className="grid gap-1">
//           {introItems.map((item) => (
//             <Anchor key={item.name + item.href} href={item.href}>
//               {item.name}
//             </Anchor>
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-col gap-1">
//         <div className="px-3 py-2 text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70">
//           Featured Components
//         </div>

//         <div className="grid gap-1">
//           {sortedEliteItems.map((item) => (
//             <Anchor key={item.name + item.href} href={item.href}>
//               {item.name}
//             </Anchor>
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-col gap-1">
//         <div className="px-3 py-2 text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70">
//           Basic Components
//         </div>

//         <div className="grid gap-1">
//           {sortedPrimaryItems.map((item) => (
//             <Anchor key={item.name + item.href} href={item.href}>
//               {item.name}
//             </Anchor>
//           ))}
//           <div>
//             <TextShimmer
//               className="mt-4 cursor-default pl-3 text-xs"
//               repeatDelay={0.5}
//               delay={1.5}
//             >
//               New drops incoming...
//             </TextShimmer>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrimaryItems;
"use client";
import React from "react";
import { eliteItems, introItems, primaryItems } from "@/contants";
import Anchor from "../ui/anchor-single";
import TextShimmer from "@/app/(primary)/components/text-shimmer/_components/text-shimmer";

const PrimaryItems = () => {
  const sortedPrimaryItems = [...primaryItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const sortedEliteItems = [...eliteItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div className="flex flex-col gap-7 pr-6">
      {/* Getting Started */}
      <div className="flex flex-col gap-1.5">
        <div
          className="
            px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.25em]
            bg-gradient-to-r from-pink-300 via-fuchsia-300 to-rose-300
            bg-clip-text text-transparent
          "
        >
          Getting Started
        </div>
        <div className="grid gap-1">
          {introItems.map((item) => (
            <Anchor key={item.name + item.href} href={item.href}>
              {item.name}
            </Anchor>
          ))}
        </div>
      </div>

      {/* Featured Components */}
      <div className="flex flex-col gap-1.5">
        <div
          className="
            px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.25em]
            bg-gradient-to-r from-rose-300 via-pink-300 to-fuchsia-300
            bg-clip-text text-transparent
          "
        >
          Featured Components
        </div>

        <div className="grid gap-1">
          {sortedEliteItems.map((item) => (
            <Anchor key={item.name + item.href} href={item.href}>
              {item.name}
            </Anchor>
          ))}
        </div>
      </div>

      {/* Basic Components */}
      <div className="flex flex-col gap-1.5">
        <div
          className="
            px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.25em]
            bg-gradient-to-r from-fuchsia-300 via-pink-300 to-rose-300
            bg-clip-text text-transparent
          "
        >
          Basic Components
        </div>

        <div className="grid gap-1">
          {sortedPrimaryItems.map((item) => (
            <Anchor key={item.name + item.href} href={item.href}>
              {item.name}
            </Anchor>
          ))}

          {/* Coming Soon */}
          <div className="pl-3 pt-3">
            <TextShimmer
              className="
                cursor-default text-xs font-medium
                bg-gradient-to-r from-pink-200 via-fuchsia-200 to-rose-200
                bg-clip-text text-transparent
              "
              repeatDelay={0.5}
              delay={1.5}
            >
              New drops incoming…
            </TextShimmer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryItems;
