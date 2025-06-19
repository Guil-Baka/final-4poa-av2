import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  ownerMode?: boolean; // Optional prop to indicate if the user is the owner
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
  condition,
  img,
  description,
  phone,
  price,
  ownerMode,
}: ListItemProps) {
  // Default image URL (you can use any placeholder image you like)
  const defaultImage = "https://via.placeholder.com/300x200?text=Sem+Imagem";

  // Normalize img prop to always be an array for easier handling (up to 5 images)
  // Filter out empty strings or falsy values
  let images: string[] = (Array.isArray(img) ? img : [img])
    .filter(Boolean)
    .slice(0, 5);

  // If no images, use the default image
  if (images.length === 0) {
    images = [defaultImage];
  }

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

  // Handle click event for the delete button (if needed)

  const handleDelete = () => {
    // Call the API to delete the product by ID
    console.log("Deleting item with ID:", id);
    fetch(`http://localhost:8080/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete item");
        }
        // Optionally, trigger a callback or refresh the list
        console.log("Item deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
    // console.log("Delete item clicked");
  };

  return (
    <div className="flex w-full min-h-[320px] bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-300 ease-in-out cursor-pointer mx-auto">
      {/* Image Section */}
      <div className="ml-8 flex justify-center max-w-xs p-6">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="w-48 h-48 ">
                {!imageErrors[index] ? (
                  <img
                    src={src}
                    alt={`Imagem ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg "
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-lg">
                    <FileQuestion className="text-gray-500" size={32} />
                  </div>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Info Section */}
      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          <div className="flex flex-row">
            <p className="text-lg font-semibold text-black">{name}</p>
            {ownerMode && (
              <button
                type="button"
                className="ml-2 p-2 rounded hover:bg-red-100 transition-colors"
                title="Excluir"
                onClick={handleDelete}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>

          <p className="text-md text-emerald-700 font-bold">{price}</p>
          <p className="text-sm text-gray-700 mt-2">{description}</p>
        </div>
        <div>
          <div className="flex items-center gap-2 mt-4">
            <Badge
              className={`${
                conditionStyles[condition]?.bg ?? "bg-gray-400"
              } text-black`}
            >
              <Tooltip>
                <TooltipTrigger>{condition}</TooltipTrigger>
                <TooltipContent>
                  <p>
                    {conditionStyles[condition]?.tooltip ??
                      "Condição desconhecida."}
                  </p>
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
