import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileQuestion } from "lucide-react";

interface ListItemProps {
  id: string;
  name: string;
  price: string;
  condition: string;
  img: string;
}

export default function ListItem({
  id,
  name,
  price,
  condition,
  img,
}: ListItemProps) {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="flex flex-col items-center py-4 px-8 m-auto max-w-2xs min-w-2xs max-h-96 min-h-96 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 hover:cursor-pointer transition-colors duration-300 ease-in-out"
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-pressed="false"
    >
      <div className="w-full overflow-hidden rounded-t-lg flex items-center justify-center min-h-[140px]">
        {!imageError ? (
          <img
            src={img}
            alt={name}
            onError={() => setImageError(true)}
            className="object-contain max-h-36"
          />
        ) : (
          <FileQuestion className="w-24 h-24 text-gray-400" />
        )}
      </div>
      <div className="flex flex-col items-start justify-between p-4">
        <p className="text-md text-black-500 font-semibold">{name}</p>
        <p className="text-md text-black-500">{price}</p>
        <p className="text-sm text-gray-500">{condition}</p>
      </div>
    </div>
  );
}
