import React, { useState } from "react";
import { FileQuestion } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

interface ListItemProps {
  id: string;
  name: string;
  price: string;
  condition: "Funcionando" | "Funcionando Parcialmente" | "Quebrado";
  img: string | string[];
  description: string;
  phone: string;
}

const conditionStyles: Record<
  ListItemProps["condition"],
  { bg: string; tooltip: string }
> = {
  Funcionando: {
    bg: "bg-lime-500",
    tooltip:
      "De acordo com o vendedor o item está em perfeito estado de funcionamento.",
  },
  "Funcionando Parcialmente": {
    bg: "bg-amber-500",
    tooltip:
      "De acordo com o vendedor o item funciona, mas possui algum problema ou limitação.",
  },
  Quebrado: {
    bg: "bg-red-500",
    tooltip:
      "De acordo com o vendedor o item está quebrado e pode não funcionar como esperado.",
  },
};

export default function ListItem({
  id,
  name,
  price,
  condition,
  img,
  description,
  phone,
}: ListItemProps) {
  // Normalize img prop to always be an array for easier handling (up to 5 images)
  // Filter out empty strings or falsy values
  const images: string[] = (Array.isArray(img) ? img : [img])
    .filter(Boolean)
    .slice(0, 5);

  // Track which images have load errors
  const [imageErrors, setImageErrors] = useState<boolean[]>(
    Array(images.length).fill(false)
  );

  const handleImageError = (index: number) => {
    setImageErrors((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <div className="flex w-full min-h-[320px] bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-300 ease-in-out cursor-pointer mx-auto">
      {/* Image Section */}
      <div className="ml-8 flex justify-center max-w-xs p-6">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {images.length > 0 ? (
              images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="w-full h-full m-auto shadow-md hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center">
                    <img
                      className="rounded-lg max-w-full max-h-full object-cover"
                      src={
                        imageErrors[index]
                          ? "https://via.placeholder.com/150"
                          : src
                      }
                      alt={`Imagem do produto ${name} (${index + 1})`}
                      onError={() => handleImageError(index)}
                    />
                  </div>
                </CarouselItem>
              ))
            ) : (
              <CarouselItem>
                <div className="w-fit h-fit m-auto shadow-md flex items-center justify-center">
                  <img
                    className="rounded-lg max-w-full max-h-full object-cover"
                    src="https://via.placeholder.com/150"
                    alt="Nenhuma imagem disponível"
                  />
                </div>
              </CarouselItem>
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Info Section */}
      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          <p className="text-lg font-semibold text-black">{name}</p>
          <p className="text-md text-emerald-700 font-bold">{price}</p>
          <p className="text-sm text-gray-700 mt-2">{description}</p>
        </div>
        <div>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={`${conditionStyles[condition].bg} text-black`}>
              <Tooltip>
                <TooltipTrigger>{condition}</TooltipTrigger>
                <TooltipContent>
                  <p>{conditionStyles[condition].tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </Badge>
          </div>
          <div className="mt-4">
            <span className="text-xs text-gray-500">Contato:</span>
            <span className="text-sm text-gray-900 ml-2">{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}