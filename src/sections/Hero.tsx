"use client";

import { Mail, FileDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Spline from '@splinetool/react-spline';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.5 6-6.76a5.5 5.5 0 0 0-1.5-3.89 5 5 0 0 0-.15-3.83s-1.18-.38-3.91 1.4a13.48 13.48 0 0 0-7 0c-2.73-1.78-3.9-1.4-3.9-1.4a5 5 0 0 0-.15 3.83 5.5 5.5 0 0 0-1.5 3.89c0 5.25 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Hero({ onOpenAchievements }: { onOpenAchievements?: () => void }) {
  const { name, hook, supporting, links } = portfolioData.hero;

  const handleSplineMouseDown = (e: any) => {
    console.log("Spline object clicked:", e.target?.name);
    // Open the achievements gallery immediately on click
    if (onOpenAchievements) {
      onOpenAchievements();
    }
  };

  return (
    <section className="relative min-h-[90vh] w-full flex flex-col justify-center overflow-hidden">
      
      {/* 3D Spline Background */}
      <div 
        className="fixed inset-0 z-0 opacity-70 sm:opacity-100"
        onWheelCapture={(e) => {
          // Prevent the scroll event from reaching the Spline canvas
          // This stops the 3D scene from zooming and allows normal page scrolling!
          e.stopPropagation();
        }}
      >
        <Spline 
          scene="https://prod.spline.design/4TEPwiQ6kgOYvssv/scene.splinecode" 
          onMouseDown={handleSplineMouseDown}
          onSplineMouseDown={handleSplineMouseDown}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pointer-events-none">
        <div className="max-w-4xl space-y-8 animate-fade-in-up mt-24">
          
          <p className="text-accent font-mono tracking-wide text-sm md:text-base drop-shadow-md">
            Hi, my name is {name}.
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] drop-shadow-md">
            {hook}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed drop-shadow-md bg-background/20 backdrop-blur-sm p-4 rounded-xl inline-block">
            {supporting}
          </p>

          {/* Buttons require pointer-events-auto so they can be clicked! */}
          <div className="flex flex-wrap items-center gap-6 pt-4 pointer-events-auto">
            <a
              href={links.email}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-foreground text-background font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Get in touch
            </a>
            
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-muted-foreground/50 hover:border-accent text-foreground bg-background/50 backdrop-blur-md font-medium transition-all hover:text-accent shadow-lg"
            >
              <FileDown className="w-5 h-5" />
              Resume
            </a>

            <button
              onClick={onOpenAchievements}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-muted-foreground/50 hover:border-accent text-foreground bg-background/50 backdrop-blur-md font-medium transition-all hover:text-accent shadow-lg cursor-pointer"
            >
              Achievements
            </button>

            <div className="flex items-center gap-4 ml-0 sm:ml-4 border-l-0 sm:border-l border-muted-foreground/50 pl-0 sm:pl-8">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors p-2 -ml-2 drop-shadow-md"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors p-2 drop-shadow-md"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              {links.instagram && (
                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors p-2 drop-shadow-md"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
