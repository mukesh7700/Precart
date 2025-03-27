import {
  Avatar,
  Button,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  Select,
  SelectItem,
} from "@jamsr-ui/react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Clock, Close, Fire, Heart } from "./svgs";
import { useState } from "react";

interface CardComponentProps {
  href: string;
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  price: string;
  mainPrice: string;
  onLike?: () => void;
  showInfoText?: string;
  className?: string;
  isTrending?: boolean;
  colors?: { colorImage: string; colorName: string }[];
}

export default function CardComponent({
  href,
  imageSrc,
  altText,
  title,
  description,
  price,
  mainPrice,
  onLike = () => {},
  showInfoText = "Show Info",
  className = "",
  isTrending = false,
  colors = [],
}: CardComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const sizes = Array.from({ length: (12 - 6.5) / 0.5 + 1 }, (_, i) =>
    (6.5 + i * 0.5).toFixed(1)
  );

  const handleAddToCart = () => {
    console.log("Selected Color:", selectedColor);
    console.log("Selected Size:", selectedSize);
    console.log("Quantity:", quantity);

    setSelectedColor(null);
    setSelectedSize(null);
    setQuantity(1);
  };

  return (
    <>
      <Link href={href} className={`text-start cursor-pointer ${className}`}>
        <div className="relative h-[300px] md:h-[400px] rounded-lg group transition-transform duration-300 overflow-hidden">
          {isTrending && (
            <Chip size="sm" color="success" className="absolute top-3 left-3  text-white pe-3 font-semibold">
              <Fire className="h-3 w-3" /> Trending
            </Chip>
          )}

          <Image
            width={200}
            height={200}
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover"
          />

          <div
            className="absolute p-1 top-3 right-3 bg-white text-black rounded-full cursor-pointer"
            onClick={onLike}
          >
            <Heart className="h-6 w-6" />
          </div>

          <Button
            className="text-md ui-hover:none  font-semibold hover:text-current absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-neutral-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            size="sm"
            disableAnimation
            disableRipple
            startContent={<MdOutlineRemoveRedEye />}
            onClick={handleInfo}
          >
            {showInfoText}
          </Button>
        </div>
        <div className="px-1">
          <h1 className="text-md font-semibold mt-2">{title}</h1>
          <p className="text-sm font-semibold text-neutral-500">{description}</p>
          <p className="text-sm font-semibold text-neutral-500">{price}</p>
        </div>
      </Link>

      <Dialog
        className="overflow-visible max-h-[500px] min-w-[900px]"
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        closeButton={
          <IconButton
            label="button"
            className="absolute -right-3 -top-3 p-1 z-50"
            radius="full"
            onClick={() => setIsOpen(false)}
          >
            <Close />
          </IconButton>
        }
      >
        <DialogContent>
          <div className="flex w-full">
            <div className="basis-1/2 overflow-hidden rounded-s-lg">
              <Image
                width={200}
                height={200}
                src={imageSrc}
                alt={altText}
                className="w-full max-h-[500px] h-full object-cover"
              />
            </div>
            <div className="basis-1/2 flex flex-col h-full">
              <div className="py-5 px-4 ">
                <div className="flex justify-between">
                  <div>
                    <p className="text-md text-neutral-500">{description}</p>
                    <h1 className="text-xl font-semibold">{title}</h1>
                  </div>
                  <div>
                    <p className="text-neutral-500 font-semibold line-through">
                      {mainPrice}
                    </p>
                    <p className="text-md text-red-500 font-semibold">
                      {price}
                    </p>
                  </div>
                </div>
              </div>
              <div className="overflow-y-auto flex-grow h-[320px] px-4">
                {colors.length > 0 && (
                  <div>
                    <p className="text-md font-semibold">Colors</p>
                    <div className="flex py-2 gap-3">
                      {colors.map((color, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedColor(color.colorName)}
                          className={`rounded-full border ${
                            selectedColor === color.colorName
                              ? "border-sky-500"
                              : ""
                          }`}
                        >
                          <Avatar
                            alt={color.colorName}
                            src={color.colorImage}
                            width={50}
                            height={50}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <p className="text-md font-semibold">Sizes</p>
                  <div className="py-2 grid grid-cols-3 gap-4">
                    {sizes.map((num) => (
                      <button
                        key={num}
                        onClick={() => setSelectedSize(Number(num))}
                        className={`outline-1 py-2 rounded-lg ${
                          selectedSize === Number(num)
                            ? "outline-2 outline-sky-500"
                            : ""
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm flex items-center text-orange-400">
                    <Clock className="w-4 h-4" />
                    Low in stock
                  </p>
                </div>
              </div>
              <div className="p-4 flex gap-2 justify-between items-center">
                <Select
                  className="w-[60px]"
                  defaultValue={["1"]}
                  onValueChange={(value) => setQuantity(Number(value))}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <SelectItem value={String(num)} key={num}>
                      {num}
                    </SelectItem>
                  ))}
                </Select>
                <Button
                  size="lg"
                  className="flex-grow bg-neutral-300 text-black ui-hover:bg-neutral-200"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Button>
                <IconButton
                  label="like"
                  disableAnimation
                  disableRipple
                  className=" bg-transparent border border-neutral-500"
                >
                  <Heart className="h-6 w-6" />
                </IconButton>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
