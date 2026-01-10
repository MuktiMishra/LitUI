// import HeroSection from "@/components/landing/herosection";
// import { Spotlight } from "../ui/spotlight";
// import LandingNavbar from "./landing-navbar";
// import FeaturesBlock from "../features/features-block";
// import LandingCta from "./landing-cta";
// import LandingFooter from "./landing-footer";

// export default function LandingPage() {
//   return (
//     <div className="bg-black">
//       <LandingNavbar />
//       <div className="mx-auto max-w-[95.8rem]">
//         <div className="mx-auto max-w-7xl px-3 md:px-5 lg:px-8">
//           <HeroSection />
//           <FeaturesBlock />
//           <LandingCta />
//           <Spotlight />
//         </div>
//       </div>
//       <LandingFooter />
//     </div>
//   );
// }
import HeroSection from "@/components/landing/herosection";
import { Spotlight } from "../ui/spotlight";
import LandingNavbar from "./landing-navbar";
import FeaturesBlock from "../features/features-block";
import LandingCta from "./landing-cta";
import LandingFooter from "./landing-footer";

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden bg-[#0a0618]">
      {/* soft ambient gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[140px]" />
        <div className="absolute top-[30%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-rose-500/10 blur-[120px]" />
      </div>

      <LandingNavbar />

      <div className="relative mx-auto max-w-[95.8rem]">
        <div className="mx-auto max-w-7xl px-3 md:px-5 lg:px-8">
          <HeroSection />
          <FeaturesBlock />
          <LandingCta />
          <Spotlight />
        </div>
      </div>

      <LandingFooter />
    </div>
  );
}
