import { useRef, useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface MediaItem {
  type: "image" | "video";
  src: string;
}

interface SpaceCarouselProps {
  media: MediaItem[];
  spaceName: string;
}


const SpaceCarousel = ({ media, spaceName }: SpaceCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  // Track current slide and manage video playback
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const index = api.selectedScrollSnap();
      setCurrentIndex(index);

      // Pause all videos first
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });

      // If current slide is a video, play it and stop autoplay
      const currentMedia = media[index];
      if (currentMedia?.type === "video") {
        autoplayPlugin.current.stop();
        const video = videoRefs.current[index];
        if (video) {
          video.play().catch(() => {
            // Autoplay failed, continue with carousel
            autoplayPlugin.current.play();
          });
        }
      } else {
        autoplayPlugin.current.play();
      }
    };

    api.on("select", onSelect);
    onSelect(); // Run on mount

    return () => {
      api.off("select", onSelect);
    };
  }, [api, media]);

  const handleVideoEnd = useCallback(() => {
    // Move to next slide when video ends
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  return (
    <Carousel
      className="w-full"
      opts={{ loop: true }}
      plugins={[autoplayPlugin.current]}
      setApi={setApi}
    >
      <CarouselContent className="-ml-0">
        {media.map((item, index) => (
          <CarouselItem key={index} className="pl-0">
            <div 
              className={`relative aspect-video rounded-lg overflow-hidden bg-muted transition-all duration-700 ease-out ${
                currentIndex === index 
                  ? "opacity-100 scale-100 blur-10" 
                  : "opacity-10 scale-110 blur-lg"
              }`}
            >
              {item.type === "video" ? (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  onEnded={handleVideoEnd}
                />
              ) : (
                <img
                  src={item.src}
                  alt={`${spaceName} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              )}
    </div>
  </CarouselItem>
))}

      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};

export default SpaceCarousel;
