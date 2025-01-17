import { Card, CardContent, Link, Text } from "@jamsr-ui/react";

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
      }: ProductCardProps)
 {
  return (
    <Card className="border border-zinc-500 cursor-pointer">
      <CardContent className="flex gap-1">
        <img 
          src={images[0]} 
          className="basis-2/3  rounded-lg overflow-hidden bg-cover" 
          alt={title} 
        />
        <div className="basis-1/3 grid grid-flow-row gap-1 ">
          {images.slice(1).map((img, index) => (
            <img 
              key={index} 
              src={img} 
              className="rounded-lg overflow-hidden bg-cover" 
              alt={`${title} - ${index + 2}`} 
            />
          ))}
        </div>
      </CardContent>
      <CardContent className="text-center">
        <Text as="h5" variant="h4">{title}</Text>
        <Text as="h3" className="text-foreground-400 font-semibold">{subtitle}</Text>
        <Link underline="always" className="text-white hover:text-blue-400" href={linkHref}>
          {linkText}
        </Link>
      </CardContent>
    </Card>
  );
}
