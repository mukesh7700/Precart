"use client";


import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Chip,
  Divider,
  IconButton,
  LinearProgress,
  Rating,
  Select,
  SelectItem,
} from "@jamsr-ui/react";
import Carousel2 from "@/components/Carousel2";
import Breadcrumb from "@/components/Breadcrumb";
import Carousel3 from "@/components/Carousel3";
import {
  Batch,
  Clock,
  ComfortIcon,
  DownArrow,
  FitIcon,
  Heart,
  QualityIcon,
  Return,
  StarIcon,
} from "@/components/svgs";
import Link from "next/link";
import TabImageSwiper from "@/components/TabImageSwiper";
import mencardData from "@/data/MenCloths";
import ShopingCard from "@/components/ShopingCard";
import RatingSlider from "@/components/RatingSlider";
import ProductReview from "@/components/ProductReview";

const  productImages = [
  
  '/images/others/shoes/1.webp',
  '/images/others/shoes/2.webp',
  '/images/others/shoes/3.webp',
  '/images/others/shoes/4.webp',
  '/images/others/shoes/5.webp',
  '/images/others/shoes/6.webp',
  '/images/others/shoes/7.webp',
];

const reviews = [
  {
    reviewer: "runMiles",
    reviewTitle: "Comfortable relaxed fit",
    reviewText:
      "The most stylish and funky slippers I've ever owned! Much admired by friends and family.",
    timePosted: "13 hours ago",
    images: [
      "/images/men/1.jpg", // Replace with actual URLs
      "/images/men/2.jpg",
    ],
    helpfulVotes: 2,
    notHelpfulVotes: 0,
  },
  {
    reviewer: "runMiles",
    reviewTitle: "Comfortable relaxed fit",
    reviewText:
      "The most stylish and funky slippers I've ever owned! Much admired by friends and family.",
    timePosted: "13 hours ago",
    images: [
      "/images/men/1.jpg", // Replace with actual URLs
      "/images/men/2.jpg",
    ],
    helpfulVotes: 2,
    notHelpfulVotes: 0,
  },
  {
    reviewer: "runMiles",
    reviewTitle: "Comfortable relaxed fit",
    reviewText:
      "The most stylish and funky slippers I've ever owned! Much admired by friends and family.",
    timePosted: "13 hours ago",
    images: [
      "/images/men/1.jpg", // Replace with actual URLs
      "/images/men/2.jpg",
    ],
    helpfulVotes: 2,
    notHelpfulVotes: 0,
  },
  {
    reviewer: "runMiles",
    reviewTitle: "Comfortable relaxed fit",
    reviewText:
      "The most stylish and funky slippers I've ever owned! Much admired by friends and family.",
    timePosted: "13 hours ago",
    images: [
      "/images/men/1.jpg", // Replace with actual URLs
      "/images/men/2.jpg",
    ],
    helpfulVotes: 2,
    notHelpfulVotes: 0,
  },
  {
    reviewer: "runMiles",
    reviewTitle: "Comfortable relaxed fit",
    reviewText:
      "The most stylish and funky slippers I've ever owned! Much admired by friends and family.",
    timePosted: "13 hours ago",
    images: [
      "/images/men/1.jpg", // Replace with actual URLs
      "/images/men/2.jpg",
    ],
    helpfulVotes: 2,
    notHelpfulVotes: 0,
  },
];


const ProductPage = () => {
 

  const sizes = Array.from({ length: (12 - 6.5) / 0.5 + 1 }, (_, i) =>
    (6.5 + i * 0.5).toFixed(1)
  );

  return (
    <div className="container mx-auto max-w-[1280px] px-2 py-10 ">
      <div className="md:flex gap-4">
        <div className="md:w-1/2 h-fit md:sticky top-[70px]">
          <div className="mb-2  ">
            <Breadcrumb />
          </div>
          <Carousel2 images={productImages} />
        </div>
        <div className="md:w-1/2 max-w-[500px]">
          <h1 className="text-md text-neutral-500">Men&lsquo;s Trousers</h1>
          <h1 className="text-2xl font-semibold">Slim Lyocell Trousers</h1>
          <h1 className="text-xl font-semibold ">$50</h1>
          <div className="py-2">
            <Rating
              isReadonly
              defaultValue={ 3}
              classNames={{
                starWrapper: " data-[checked=true]:text-yellow-400",
                star: "size-3",
              }}
            />
            <p className="text-sm text-neutral-500 tracking-tight">
              Includes reviewers who received this item for free{" "}
            </p>
          </div>
          
            <div className="py-2">
              <h3 className="text-md font-medium mb-2"> Colors:</h3>
              <div className="flex gap-2">
                
                  <div >
                    <Avatar
                      src="/images/others/shoes/2.webp"
                      alt="red"
                      className="size-10 cursor-pointer border border-neutral-300  transition-all"
                    />
                    <p className="text-xs text-neutral-500 text-center mt-1">
                      Red
                    </p>
                  </div>
                  <div >
                    <Avatar
                      src="/images/others/shoes/1.webp"
                      alt="Blue"
                      className="size-10 cursor-pointer border border-neutral-300  transition-all"
                    />
                    <p className="text-xs text-neutral-500 text-center mt-1">
                    Blue
                    </p>
                  </div>
                
              </div>
            </div>
          
          <Carousel3 />
          <div className="py-2">
            <p className="text-md font-semibold">Sizes</p>
            <div className="py-2 grid grid-cols-4 gap-4">
              {sizes.map((num) => (
                <button
                  key={num}
                  className="border border-neutral-300 py-2 text-sm rounded-md"
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
          <div className="py-2 flex gap-2 justify-between items-center">
            <Select className="w-[60px]" defaultValue={["1"]}>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <SelectItem value={String(num)} key={num}>
                  {num}
                </SelectItem>
              ))}
            </Select>
            <Button
              size="lg"
              className="flex-grow bg-neutral-300 text-black ui-hover:bg-neutral-200"
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
          <div className="py-2 text-center text-neutral-500 tracking-wide">
            <h1>
              4 interest-free payments of $10 with{" "}
              <span className="font-bold text-current"> Klarna.</span>
            </h1>
            <Link
              href="#"
              className="underline underline-offset-4 hover:text-blue-500"
            >
              Learn more
            </Link>
          </div>
          <div className="py-2">
            <h1 className="text-lg font-semibold">Shipping</h1>
            <p className="text-sm text-neutral-500 tracking-wide">
              You&apos;ll see our shipping options at checkout.
            </p>
            <ul className="py-4 text-semibold">
              <li className="flex gap-2 mb-2">
                <Batch className=" h-6 w-6" /> <p>Secure checkout</p>
              </li>
              <li className="flex gap-2">
                
                <Return className=" h-6 w-6" />
                <p>30 days return</p>
              </li>
            </ul>
          </div>
          <div className="py-2">
            <Accordion isMultiple >
              <AccordionItem aria-label="Accordion 1" heading="Description">
                <div>
                  <p className="py-2 text-sm text-neutral-500">
                    Sink into pure, simple comfort the moment you step in the
                    door. mahabis classic has a pared-back design for those who
                    love the beautiful yet understated things in life.{" "}
                  </p>
                  <ul className="list-disc pl-5 text-neutral-500">
                    <li className="py-2">Iconic, understated design.</li>
                    <li className="py-2">Premium felt upper.</li>
                    <li className="py-2">100% wool lining. </li>
                    <li className="py-2">
                      Machine washable at 30°, remove insoles and wash ugbru a
                      wool/delicates cycle.{" "}
                    </li>
                    <li className="py-2">
                      Neoprene heel gently secures your foot in place.{" "}
                    </li>
                    <li className="py-2">
                      Contoured footbed for extra support.{" "}
                    </li>
                    <li className="py-2">Eco-friendly packaging </li>
                    <li className="py-2">
                      One tree planted for every pair bought
                    </li>
                  </ul>
                </div>
              </AccordionItem>
              <AccordionItem aria-label="Accordion 2" heading="Size and Fit">
                <div className="py-2">
                  <ul className="list-disc pl-5 text-neutral-500">
                    <li className="py-2">
                      For wider feet, we suggest going up a size
                    </li>
                    <li className="py-2">
                      If you&apos;re usually a half size, we recommend going for
                      the larger size.
                    </li>
                  </ul>
                </div>
              </AccordionItem>
              <AccordionItem
                aria-label="Accordion 3"
                heading="Shipping and Returns"
              >
                <div className="py-2 text-sm text-neutral-500">
                  <p>
                    Free standard shipping ugbru orders over $50 and free 30-day
                    returns.
                    <Link
                      href="#"
                      className="underline underline-offset-4 hover:text-blue-400"
                    >
                      
                      Learn more.
                    </Link>
                  </p>
                  <p>
                    Returns must be received within 30 days of shipping
                    confirmation. In order to process your return, items must be
                    unworn and tags must be attached.
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="py-2">
            <h1 className="text-lg font-semibold">Goes well with...</h1>
            <TabImageSwiper
              items={mencardData.slice(0, 6).map((card, index) => (
                <ShopingCard
                  href="/product/women/categories/product-details"
                  key={index}
                  imageSrc={card.imageSrc}
                  altText={card.altText}
                  title={card.title}
                  description={card.description}
                  price={card.price}
                  isTrending={card.isTrending}
                  imageContainerClassName="h-[150px] md:h-[ 150px]"
                  imageLikeClassName="hidden "
                  imageTrendingClassName="hidden"
                  showInfoText="Quick view"
                />
              ))}
            />
          </div>
        </div>
      </div>
      <section className="pt-10">
        <div className="flex items-center justify-between py-3">
          <h1 className="text-xl font-semibold">Reviews</h1>

          <div className="flex items-center gap-2 w-1/2 justify-end text-sm">
            <p> 4 of 12 reviews</p>
            <Divider orientation="vertical" className="h-4" />
            <p>Sort By:</p>
            <Select className="max-w-fit" defaultValue={["Newest"]}>
              <SelectItem value="Relevant">Relevant</SelectItem>
              <SelectItem value="Helpful">Helpful</SelectItem>
              <SelectItem value="Newest">Newest</SelectItem>
              <SelectItem value="Highest rated">Highest rated</SelectItem>
              <SelectItem value="Lowest rated">Lowest rated</SelectItem>
            </Select>
          </div>
        </div>
        <Divider />
        <div className="flex gap-4 py-6">
          <div className="basis-1/3 h-full sticky top-[70px]">
            <div className="flex items-center gap-3 py-3">
              <h1 className="text-4xl font-semibold ">4.7</h1>
              <div>
                <Rating
                  isReadonly
                  defaultValue={5}
                  classNames={{
                    starWrapper: " data-[checked=true]:text-blue-500",
                    star: "size-3",
                  }}
                />
                <p className="text-sm text-neutral-500 ">
                  12 reviews
                  <span>
                    <Chip
                      size="sm"
                      className="ml-2 "
                      color="success"
                      variant="flat"
                    >
                      {" "}
                      Verified by Shop
                    </Chip>
                  </span>
                </p>
              </div>
            </div>
            <Divider />
            <div className=" py-3 ">
              <h1 className="text-md font-semibold mb-2 ">Rating snapshot </h1>
              <ul className="text-sm text-neutral-500">
                <li className="flex items-center gap-2 mb-2 w-full">
                  <p>5 stars</p>{" "}
                  <LinearProgress progress={80} className="w-[80%]" size="lg" />{" "}
                  <p>10</p>
                </li>
                <li className="flex items-center gap-2 mb-2 w-full">
                  <p>4 stars</p>{" "}
                  <LinearProgress progress={10} className="w-[80%]" size="lg" />{" "}
                  <p>1</p>
                </li>
                <li className="flex items-center gap-2 mb-2 w-full">
                  <p>3 stars</p>{" "}
                  <LinearProgress progress={10} className="w-[80%]" size="lg" />{" "}
                  <p>1</p>
                </li>
                <li className="flex items-center gap-2 mb-2 w-full">
                  <p>2 stars</p>{" "}
                  <LinearProgress progress={0} className="w-[80%]" size="lg" />{" "}
                  <p>0</p>
                </li>
                <li className="flex items-center gap-2 mb-2 w-full">
                  <p>1 stars</p>{" "}
                  <LinearProgress progress={0} className="w-[80%]" size="lg" />{" "}
                  <p>0</p>
                </li>
              </ul>
            </div>
            <Divider />
            <div className="py-3">
              <h1 className="text-md font-semibold text-current mb-2 ">
                Filter by star rating
              </h1>
              <div className="grid grid-cols-5 gap-2">
                <div className="border border-neutral-500 py-3  flex items-center justify-center gap-2   rounded-md">
                  
                    <p className="text-center">1 </p>
                    <StarIcon className="w-5 h-5" />
                 
                </div>
                <div className="border border-neutral-500 flex items-center justify-center gap-2  rounded-md">
                  
                    <p className="text-center">2 </p>
                    <StarIcon className="w-5 h-5" />
                  
                </div>
                <div className="border border-neutral-500 flex items-center justify-center gap-2 rounded-md">
                 
                    <p className="text-center">3 </p>
                    <StarIcon className="w-5 h-5" />
                  
                </div>
                <div className="border border-neutral-500  flex items-center justify-center gap-2  rounded-md">
                 
                    <p className="text-center">4 </p>
                    <StarIcon className="w-5 h-5" />
                  
                </div>
                <div className="border border-neutral-500 flex items-center justify-center gap-2 rounded-md">
                  
                    <p className="text-center">5 </p>
                    <StarIcon className="w-5 h-5" />
                  
                </div>
              </div>
            </div>
            <Divider />
            <div className="py-3">
              <h1 className="text-md font-semibold  mb-2 ">Customer rating</h1>
              <RatingSlider
                title="Quality"
                icon={<QualityIcon className="w-5" />}
                minLabel="Runs tight"
                maxLabel="Runs loose"
                value={20}
              />
              <RatingSlider
                title="Fit"
                icon={<FitIcon className="w-5" />}
                minLabel="Runs small"
                maxLabel="Runs tight"
                value={10}
              />
              <RatingSlider
                title="Comfort"
                icon={<ComfortIcon className="w-5" />}
                minLabel="Uncomfortable"
                maxLabel="Very comfortable"
                value={50}
              />
            </div>
          </div>
          <div className="basis-2/3">
            {reviews.map((review, index) => (
              <ProductReview
                reviewer={review.reviewer}
                reviewTitle={review.reviewTitle}
                reviewText={review.reviewText}
                timePosted={review.timePosted}
                images={review.images}
                helpfulVotes={review.helpfulVotes}
                notHelpfulVotes={review.notHelpfulVotes}
                key={index}
              />
            ))}
            <div className="flex justify-center py-5">
              <Button
                disableAnimation
                variant="outlined"
                endContent={<DownArrow className="w-4 h-4" />}
                className="mx-auto"
              >
                View all reviews
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <h1 className="text-2xl font-semibold mb-2">You may also like</h1>
        <TabImageSwiper
          items={mencardData.slice(0, 6).map((card, index) => (
            <ShopingCard
              href="/product/women/categories/product-details"
              key={index}
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              description={card.description}
              price={card.price}
              isTrending={card.isTrending}
              onLike={() => console.log("liked")}
              showInfoText="Quick view"
            />
          ))}
        />
      </section>
    </div>
  );
};

export default ProductPage;
