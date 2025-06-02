import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();

  // Fetch product data using `id` here...

  return (
    <div>
      <h1>Product Details for ID: {id}</h1>
      {/* Render product info here */}
    </div>
  );
}
