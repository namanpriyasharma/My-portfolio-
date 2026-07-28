import ChromaGrid from "@/components/ChromaGrid";
import FloatingLines from "@/components/FloatingLines";
import { portfolioData } from "@/data/portfolio";

export function Projects() {
  const { projects } = portfolioData;

  const gridItems = projects.map((p, i) => {
    // Generate some dynamic gradient colors based on index for the grid
    const colors = [
      { border: "#4F46E5", grad: "linear-gradient(145deg, #4F46E5, #000)" },
      { border: "#10B981", grad: "linear-gradient(210deg, #10B981, #000)" },
      { border: "#F59E0B", grad: "linear-gradient(165deg, #F59E0B, #000)" },
      { border: "#EF4444", grad: "linear-gradient(195deg, #EF4444, #000)" },
    ];
    const theme = colors[i % colors.length];

    return {
      image: p.image || `https://picsum.photos/seed/${p.id}/800/600?grayscale`, // Placeholder if no image provided
      title: p.name,
      subtitle: p.description, // Show the full description instead of tech stack
      handle: "View Project",
      borderColor: theme.border,
      gradient: theme.grad,
      url: p.demoUrl || p.repoUrl // Prefer demo url
    };
  });

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-background overflow-hidden">
      
      {/* FloatingLines Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <FloatingLines 
          linesGradient={undefined}
          topWavePosition={undefined}
          middleWavePosition={undefined}
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
        
        {/* Section Header */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A deeper dive into some of the systems and applications I've built.
          </p>
        </div>

        {/* ChromaGrid Integration */}
        <div className="w-full relative min-h-[500px]">
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
