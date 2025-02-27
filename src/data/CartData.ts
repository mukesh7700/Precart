interface CartCardProps {
    imageSrc: string;
    productName: string;
    color: string;
    size: string;
    quantity: number;
    price: number;
  }
  const CartData: CartCardProps[] = [
    {
      imageSrc: "/images/men/1.jpg",
      productName: "Slim Lyocell Trousers",
      color: "red",
      size: "M",
      quantity: 4,
      price: 50,
    },
    {
      imageSrc: "/images/others/tShirt/1.webp",
      productName: "Casual Leather Shoes",
      color: "White",
      size: "M",
      quantity: 1,
      price: 149,
    },
    {
      imageSrc: "/images/women/2.jpg",
      productName: "Classic Denim Jacket",
      color: "Camo",
      size: "M",
      quantity: 1,
      price: 50,
    },
    {
      imageSrc: "/images/others/shoes/1.webp",
      productName: "Cotton Crew Neck Tee",
      color: "Black",
      size: "S",
      quantity: 2,
      price: 50,
    },
    
    ];
  
    export default CartData;