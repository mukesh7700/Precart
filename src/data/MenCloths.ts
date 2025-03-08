interface menCard {
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
    price: string;
    mainPrice: string;
    isTrending?: boolean;
    colors?: { colorImage: string; colorName: string }[];
  }
  const mencardData: menCard[] = [
    {
      imageSrc: "/images/men/1.jpg",
      altText: "Clothing Item",
      title: "Slim Lyocell Trousers",
      description: "Men's Trousers",
      price: "$50",
      mainPrice: "$200",
      colors: [
        { colorImage: "/images/others/shoes/1.webp", colorName: "Black" },
        { colorImage: "/images/others/shoes/2.webp", colorName: "Blue" }
      ]
    },
    {
      imageSrc: "/images/men/3.jpg",
      altText: "Clothing Item",
      title: "Casual Leather Shoes",
      description: "Men's Footwear",
      price: "$120",
      mainPrice: "$100",
      isTrending: true
    },
    {
      imageSrc: "/images/men/2.jpg",
      altText: "Clothing Item",
      title: "Classic Denim Jacket",
      description: "Men's Outerwear",
      price: "$80",
      mainPrice: "$150"
    },
    {
      imageSrc: "/images/men/4.jpg",
      altText: "Clothing Item",
      title: "Cotton Crew Neck Tee",
      description: "Men's T-Shirt",
      price: "$25",
      mainPrice: "$199"
    },
    {
      imageSrc: "/images/men/6.jpg",
      altText: "Clothing Item",
      title: "Casual Leather Shoes",
      description: "Men's Footwear",
      price: "$120",
      mainPrice: "$299"
    },
    {
      imageSrc: "/images/men/7.jpg",
      altText: "Clothing Item",
      title: "Slim Lyocell Trousers",
      description: "Men's Trousers",
      price: "$50",
      mainPrice: "$200"
    },
    {
      imageSrc: "/images/men/10.jpg",
      altText: "Clothing Item",
      title: "Classic Denim Jacket",
      description: "Men's Outerwear",
      price: "$80",
      mainPrice: "$150"
    },
    {
      imageSrc: "/images/men/8.jpg",
      altText: "Clothing Item",
      title: "Cotton Crew Neck Tee",
      description: "Men's T-Shirt",
      price: "$25",
      mainPrice: "$50",
      isTrending: true,
    },
    {
      imageSrc: "/images/men/11.jpg",
      altText: "Clothing Item",
      title: "Casual Leather Shoes",
      description: "Men's Footwear",
      price: "$120",
      mainPrice: "$220"
    },
    {
      imageSrc: "/images/men/5.jpg",
      altText: "Clothing Item",
      title: "Casual Leather Shoes",
      description: "Men's Footwear",
      price: "$120",
      mainPrice: "$200"
    },
    {
      imageSrc: "/images/men/13.jpg",
      altText: "Clothing Item",
      title: "Casual Leather Shoes",
      description: "Men's Footwear",
      price: "$140",
      mainPrice: "$160"
    },
    ];
  
    export default mencardData;