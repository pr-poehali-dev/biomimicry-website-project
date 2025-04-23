import React from "react";
import { Button } from "@/components/ui/button";
import BiomimicryImageProvider, { BiomimicryImageType } from "./biomimicry-image-provider";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageType: BiomimicryImageType;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  imageType,
}) => {
  return (
    <div 
      className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <BiomimicryImageProvider 
          type={imageType} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-20 flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white font-nature tracking-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button 
            size="lg" 
            className="bg-nature hover:bg-nature-dark text-white"
          >
            Узнать больше
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
          >
            Примеры
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
