import Carousel2 from "@/components/Carousel2";
import womencardData from "@/data/WomenCloths";

interface Props {
  params: { id: string };
}

const Page = ({ params }: Props) => {
  const title = decodeURIComponent(params.id); // Get title from URL
  const card = womencardData.find((item) => item.title === title); // Find product by title

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
