interface CartCardProps {
    imageSrc: string;
    productName: string;
    color: string;
    size: string;
    quantity: number;
    price: number;
    stock: number; // Out of stock example
    isReturnable: boolean; 
  }
  const CartData: CartCardProps[] = [
    {
      imageSrc: "/images/men/1.jpg",
      productName: "Slim Lyocell Trousers",
      color: "red",
      size: "M",
      quantity: 4,
      price: 50,
      stock: 10,
      isReturnable: true,
    },
    {
      imageSrc: "/images/others/tShirt/1.webp",
      productName: "Casual Leather Shoes",
      color: "White",
      size: "M",
      quantity: 1,
      price: 149,
      stock: 10,
      isReturnable: false,

    },
    {
      imageSrc: "/images/women/2.jpg",
      productName: "Classic Denim Jacket",
      color: "Camo",
      size: "M",
      quantity: 1,
      price: 50,
      stock: 0,
      isReturnable: true,
    },
    {
      imageSrc: "/images/others/shoes/1.webp",
      productName: "Cotton Crew Neck Tee",
      color: "Black",
      size: "S",
      quantity: 2,
      price: 50,
      stock: 10,
      isReturnable: true,
    },
    
    ];
  
    export default CartData;