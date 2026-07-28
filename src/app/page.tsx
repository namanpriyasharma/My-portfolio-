"use client";

import { useState } from "react";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Achievements } from "@/sections/Achievements";
import { About } from "@/sections/About";

export default function Home() {
  const [showAchievements, setShowAchievements] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <div className="w-full max-w-7xl mx-auto">
        <Hero onOpenAchievements={() => setShowAchievements(true)} />
        <Projects />
        <About />
      </div>
      
      {showAchievements && (
        <Achievements onClose={() => setShowAchievements(false)} />
      )}
    </main>
  );
}
