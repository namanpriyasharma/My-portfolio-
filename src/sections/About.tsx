import ChromaGrid from "@/components/ChromaGrid";
import FloatingLines from "@/components/FloatingLines";
import { portfolioData } from "@/data/portfolio";

export function About() {
  const { about } = portfolioData;

  // Let's create some demo items for the ChromaGrid that represent the user's focus areas, skills, or personas
  const gridItems = [
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      title: "Backend Systems",
      subtitle: "Architecture & Scale",
      handle: "Scalability",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, #4F46E5, #000)",
      url: ""
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      title: "Frontend Engineering",
      subtitle: "React & Next.js",
      handle: "Performance",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #10B981, #000)",
      url: ""
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      title: "Product Focus",
      subtitle: "Business & UX",
      handle: "Viability",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
      url: ""
    }
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-background overflow-hidden border-t border-muted-foreground/10">
      
      {/* FloatingLines Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <FloatingLines 
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* About Content: Text and Photo */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start max-w-6xl mx-auto">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>{about.background}</p>
              <p>{about.curiosity}</p>
              <p className="text-foreground font-medium border-l-2 border-accent pl-4 py-1">{about.uniqueAngle}</p>
              <p>{about.currentFocus}</p>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="w-full max-w-sm lg:w-[400px] aspect-[3/4] relative rounded-2xl overflow-hidden border border-muted-foreground/20 shadow-2xl flex-shrink-0 group">
            <img 
              src="/profile.jpg" 
              alt="Naman Priya Sharma" 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle overlay gradient to blend with the dark theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>

        {/* ChromaGrid Integration */}
        <div className="w-full relative h-[1200px] sm:h-[800px] lg:h-[450px]">
          <ChromaGrid 
            items={gridItems}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>

      </div>
    </section>
  );
}
