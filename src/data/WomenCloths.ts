interface WomenCard {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  price: string;
  isTrending?: boolean;
  productImages?: string[]
  colors?: { colorImage: string; colorName: string }[]
  rating?: number
}
const womencardData: WomenCard[] = [
    {
      imageSrc: "/images/women/1.jpg",
      altText: "Clothing Item",
      title: "Slim Lyocell Trousers",
      description: "Men's Trousers",
      price: "$50",
      isTrending: true,
      colors: [
        { colorImage: "/images/others/shoes/1.webp", colorName: "Black" },
        { colorImage: "/images/others/shoes/2.webp", colorName: "Blue" }
      ],
      productImages:[
        "/images/women/1.jpg",
        '/images/others/shoes/1.webp',
        '/images/others/shoes/2.webp',
        '/images/others/shoes/3.webp',
        '/images/others/shoes/4.webp',
      ]
    },
    {
      imageSrc: "/images/women/2.jpg",
      altText: "Clothing Item",
      title: "Casual Leather Shoes",
      description: "Men's Footwear",
      price: "$120",
    },
    {
      imageSrc: "/images/women/7.jpg",
      altText: "Clothing Item",
      title: "Classic Denim Jacket",
      description: "Men's Outerwear",
      price: "$80",
    },
    {
      imageSrc: "/images/women/8.jpg",
      altText: "Clothing Item",
      title: "Cotton Crew Neck Tee",
      description: "Men's T-Shirt",
      price: "$25",
      isTrending: true,
    },
    {
      imageSrc: "/images/women/9.jpg",
      altText: "Clothing Item",
      title: "Casual Leather Shoes",
      description: "Men's Footwear",
      price: "$120",
    },
    {
      imageSrc: "/images/women/10.jpg",
      altText: "Clothing Item",
      title: "Slim Lyocell Trousers",
      description: "Men's Trousers",
      price: "$50",
    },
    {
      imageSrc: "/images/women/12.jpg",
      altText: "Clothing Item",
      title: "Classic Denim Jacket",
      description: "Men's Outerwear",
      price: "$80",
      isTrending: true,
    },
    {
      imageSrc: "/images/women/13.jpg",
      altText: "Clothing Item",
      title: "Cotton Crew Neck Tee",
      description: "Men's T-Shirt",
      price: "$25",
    },
    {
      imageSrc: "/images/women/14.jpg",
      altText: "Clothing Item",
      title: "Casual Leather Shoes",
      description: "Men's Footwear",
      price: "$120",
      isTrending: true,
    },
    {
      imageSrc: "/images/women/15.jpg",
      altText: "Clothing Item",
      title: "Casual Leather Shoes",
      description: "Men's Footwear",
      price: "$120",
    },
    {
      imageSrc: "/images/women/16.jpg",
      altText: "Clothing Item",
      title: "Casual Leather Shoes",
      description: "Men's Footwear",
      price: "$120",
      isTrending: true,
    },
    {
      imageSrc: "/images/women/17.jpg",
      altText: "Clothing Item",
      title: "Casual Leather Shoes",
      description: "Men's Footwear",
      price: "$120",
    },
    {
      imageSrc: "/images/women/18.jpg",
      altText: "Clothing Item",
      title: "Classic Denim Jacket",
      description: "Men's Outerwear",
      price: "$80",
    },
    {
      imageSrc: "/images/women/19.jpg",
      altText: "Clothing Item",
      title: "Cotton Crew Neck Tee",
      description: "Men's T-Shirt",
      price: "$25",
    },
  ];

  export default womencardData;