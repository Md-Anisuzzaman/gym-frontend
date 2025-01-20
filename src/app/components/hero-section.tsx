// import { Button } from "@/components/ui/button"

// export function HeroSection() {
//   return (
//     <section className="bg-background text-foreground py-20">
//       <div className="container mx-auto px-4 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Power Gym</h1>
//         <p className="text-lg md:text-xl mb-8">Transform your body, transform your life</p>
//         <Button size="lg">Join Now</Button>
//       </div>
//     </section>
//   )
// }

"use client";
import Image from "next/image";
// import { Button } from "@/components/ui/button";

export function HeroSection() {

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/Black-Fitness-Gym-Banner.png"
        alt="Gym banner"
        // layout="fill"
        fill
        priority
        // objectFit="cover"
        style={{ objectFit: "cover" }}
        quality={100}
      />

      <div className="absolute inset-6 bg-black bg-opacity-50" />
      {/* <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Transform Your Body, Transform Your Life
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Join Power Gym and start your fitness journey today
        </p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
        >
          Start Your Free Trial
        </Button>
      </div> */}
    </section>
  );
}
