import Carousel2 from "@/components/Carousel2";
import womencardData from "@/data/WomenCloths";

const Page = async ({ params }: { params: { id: string } }) => {
  const index = parseInt(params.id); // Convert the id to a number
  const card = womencardData[index]; // Get the product by index

  if (!card) {
    return <div className="text-red-500 text-xl">Product not found 😞</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{card.title}</h1>
      <img src={card.imageSrc} alt={card.altText} className="w-80 rounded-lg shadow-lg my-4" />
      <p>{card.description}</p>
      <p className="font-semibold line-through">{card.price}</p>
      <p className="text-xl font-semibold">{card.price}</p>
      <Carousel2 />
    </div>
  );
};

export default Page;
