import CircularGallery from "@/components/CircularGallery";
import { portfolioData } from "@/data/portfolio";
import { X } from "lucide-react";

export function Achievements({ onClose }: { onClose?: () => void }) {
  const { achievements } = portfolioData;

  const galleryItems = achievements.map((ach) => ({
    image: ach.image,
    text: ach.title
  }));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 sm:p-6 animate-fade-in-up">
      <div className="relative w-full max-w-7xl h-[85vh] flex flex-col overflow-hidden bg-background border border-muted-foreground/20 rounded-2xl shadow-2xl p-6 md:p-12">
        
        {onClose && (
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors z-50"
            aria-label="Close modal"
          >
            <X className="w-8 h-8" />
          </button>
        )}

        <div className="space-y-2 text-center md:text-left mb-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground pr-12">
            Achievements
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            A visual gallery of milestones, certifications, and awards. Scroll or drag to explore.
          </p>
        </div>

        {/* Circular Gallery Container */}
        <div className="flex-1 w-full rounded-xl overflow-hidden border border-muted-foreground/20 bg-muted/10 relative">
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            fontUrl="https://fonts.googleapis.com/css2?family=Outfit:wght@700&display=swap"
            font="bold 30px Outfit"
          />
        </div>

      </div>
    </div>
  );
}
