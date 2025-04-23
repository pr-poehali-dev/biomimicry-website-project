import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BiomimicryImageProvider, { BiomimicryImageType } from "./biomimicry-image-provider";

interface BiomimicryCardProps {
  title: string;
  description: string;
  imageType: BiomimicryImageType;
}

const BiomimicryCard: React.FC<BiomimicryCardProps> = ({
  title,
  description,
  imageType,
}) => {
  // Сокращенное описание для предпросмотра
  const shortDescription = description.length > 150 
    ? `${description.substring(0, 150)}...` 
    : description;
  
  // Состояние для модального окна с полным описанием
  const [showFullDescription, setShowFullDescription] = React.useState(false);
  
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <BiomimicryImageProvider 
          type={imageType} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-nature text-nature-dark">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm">
          {showFullDescription ? description : shortDescription}
        </p>
      </CardContent>
      
      <CardFooter>
        <Button 
          variant="outline" 
          className="text-nature-dark border-nature hover:bg-nature/10"
          onClick={() => setShowFullDescription(!showFullDescription)}
        >
          {showFullDescription ? "Свернуть" : "Подробнее"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BiomimicryCard;
