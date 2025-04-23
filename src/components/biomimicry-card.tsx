import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ImageLoader from "@/components/ui/image-loader";
import { Button } from "@/components/ui/button";

interface BiomimicryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  action?: string;
  onClick?: () => void;
}

const BiomimicryCard: React.FC<BiomimicryCardProps> = ({
  title,
  description,
  imageSrc,
  action = "Подробнее",
  onClick
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-48 w-full">
        <ImageLoader 
          src={imageSrc} 
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-nature">{title}</CardTitle>
        <CardDescription>{description.slice(0, 100)}...</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {description.slice(0, 150)}...
        </p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full hover:bg-nature hover:text-white"
          onClick={onClick}
        >
          {action}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BiomimicryCard;
