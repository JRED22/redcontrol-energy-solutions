import { useState } from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  type: "youtube" | "vimeo" | "local";
}

const videos: Video[] = [
  {
    id: "1",
    title: "Instalación de Sistemas Eléctricos",
    description: "Proceso completo de instalación de tableros eléctricos industriales",
    thumbnail: "https://www.smartgen.cn/yun/data/products/20220722/0310fa08f3f235207922193e672dd07b.png",
    videoUrl: "Z6Uvko3t_vU", // Reemplazar con ID real de YouTube
    type: "youtube"
  },
  {
    id: "2",
    title: "Automatización con PLC",
    description: "Demostración de automatización industrial con controladores programables",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    videoUrl: "dQw4w9WgXcQ", // Reemplazar con ID real de YouTube
    type: "youtube"
  },
  {
    id: "3",
    title: "Sistemas de Climatización",
    description: "Instalación y configuración de sistemas HVAC modernos",
    thumbnail: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    videoUrl: "dQw4w9WgXcQ", // Reemplazar con ID real de YouTube
    type: "youtube"
  }
];

const VideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const getVideoEmbedUrl = (video: Video) => {
    switch (video.type) {
      case "youtube":
        return `https://www.youtube.com/embed/${video.videoUrl}`;
      case "vimeo":
        return `https://player.vimeo.com/video/${video.videoUrl}`;
      case "local":
        return video.videoUrl;
      default:
        return "";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20" id="videos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
          </div>
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Videos Ilustrativos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo funcionan nuestros productos en acción
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {videos.map((video) => (
                <CarouselItem key={video.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card
                    className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 h-full"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {video.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {video.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </div>
          </Carousel>
        </div>

        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedVideo?.title}</DialogTitle>
            </DialogHeader>
            {selectedVideo && (
              <div className="aspect-video w-full">
                <iframe
                  src={getVideoEmbedUrl(selectedVideo)}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default VideoShowcase;
