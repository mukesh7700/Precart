import Image from 'next/image';
import Link from 'next/link';

type Item = {
  name: string;
  image: string;
  link?: string;
};

type ItemListProps = {
  items: Item[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <section className="flex p-5 justify-center gap-6 items-center">
      {items.map((item, index) => (
        <div key={index} className="text-center">
          <Link href={item.link || "#"}>
            <Image
              src={item.image}
              width={300}
              height={500}
              alt={item.name}
              className="h-18  md:h-26 w-18 md:w-26  mb-2 rounded-full hover:outline-2 outline-offset-4 outline-zinc-600"
            />
          </Link>
          <p className="text-md">{item.name}</p>
        </div>
      ))}
    </section>
  );
};

export default ItemList;
