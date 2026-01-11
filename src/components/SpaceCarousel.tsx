import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
  return (
    <Carousel className="w-full">
      <CarouselContent>
{media.map((item, index) => (
  <CarouselItem key={index}>
    <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
      {item.type === "image" && (
        <img
          src={item.src}
          alt={`${spaceName} - Image ${index + 1}`}
          className="w-full h-full object-cover"
        />
      )}

      {item.type === "video" && (
        <video
          src={item.src}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
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
