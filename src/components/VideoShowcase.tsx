import { useState } from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    videoUrl: "dQw4w9WgXcQ", // Reemplazar con ID real de YouTube
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
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Mira cómo funcionan nuestros productos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestros videos demostrativos y conoce de primera mano la calidad de nuestros servicios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card
              key={video.id}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
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
          ))}
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
