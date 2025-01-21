import { Card, CardContent, Link, Text } from "@jamsr-ui/react";
import Adids from "@/components/svgs/Adids.svg"
interface ProductCardProps {
  images: string[]; // Array of image URLs
  title: string; // Product title
  subtitle: string; // Product subtitle or price
  linkText: string; // Link text
  linkHref: string; // Link URL
}

export default function CardComponent2(
  { 
    images, 
    title, 
    subtitle, 
    linkText, 
    linkHref 
  }: ProductCardProps
) {
  return (
    <Card className="border border-zinc-500 cursor-pointer   grid gap-4 p-1 group">
      {/* Main image and other images in a grid */}
      <div className="grid grid-cols-3 grid-rows-2  gap-2">
        <div className="col-span-2 row-span-2 bg-green-600 p-1    rounded-lg overflow-hidden "
        style={{
          backgroundImage: `url(${images[0]})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        >
        
        </div>
        <div className=" bg-green-500
        rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${images[1]})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        ></div>
        <div className=" bg-green-500  h-36 rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${images[2]})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}></div>
        
        
      </div>
      
      {/* Title, subtitle, and link */}
      <CardContent className="text-center grid gap-2">
        <Text as="h5" variant="h4">{title}</Text>
        <Text as="h3" className="text-foreground-400 font-semibold">{subtitle}</Text>
        <Link underline="always" className="text-white group-hover:text-blue-400 transition-colors duration-300    " href={linkHref}>
          {linkText}
        </Link>
        
      </CardContent>
    </Card>
  );
}
