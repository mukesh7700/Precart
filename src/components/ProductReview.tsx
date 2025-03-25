import { FC } from "react";

import { Button, Chip, Divider, Rating } from "@jamsr-ui/react";
import { Batch, ThumbsDownIcon, ThumbsUpIcon } from "./svgs";
import Image from "next/image";

interface ProductReviewProps {
  reviewer?: string;
  reviewTitle?: string;
  reviewText?: string;
  timePosted?: string;
  images?: string[];
  helpfulVotes?: number;
  notHelpfulVotes?: number;
}

const ProductReview: FC<ProductReviewProps> = ({
  reviewer,
  reviewTitle,
  reviewText,
  timePosted,
  images = [
    "https://via.placeholder.com/100", // Replace with actual URLs
    "https://via.placeholder.com/100",
  ],
  helpfulVotes,
  notHelpfulVotes,
}) => {
  return (
    <div className="p-6">
      {/* Rating and time */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Rating value={4} classNames={{
                    starWrapper: " data-[checked=true]:text-blue-500",
                    star: "size-4",
                  }} />
          <Chip variant="flat" size="sm">
            Highly recommended
          </Chip>
        </div>
        <div className="text-sm text-neutral-500">{timePosted}</div>
      </div>

      {/* Title */}
      <h3 className="text-md font-semibold  mb-4">{reviewTitle}</h3>

      {/* Images */}
      <div className="flex gap-4 mb-2">
        {images.map((imgSrc, index) => (
          <Image
           height={80}
           width={80}
            key={index}
            src={imgSrc}
            alt={`Review Image ${index + 1}`}
            className="w-20 h-20 object-cover rounded"
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="mb-4 text-sm">{reviewText}</p>

      {/* Reviewer Info */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex gap-2 items-center">
          <span className="font-semibold">{reviewer}</span>
          <div className="flex items-center text-neutral-500 text-sm gap-1">
            <Batch className="w-4 h-4 " />
            Verified customer
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-400">
        <span>Helpful?</span>
        <Button
          disableRipple
          variant="text"
          size="sm"
          className="flex items-center gap-1 text-gray-400 hover:text-white"
        >
          <ThumbsUpIcon size={16} />
          <span>({helpfulVotes})</span>
        </Button>
        <Button
          disableRipple
          variant="text"
          size="sm"
          className="flex items-center gap-1 text-gray-400 hover:text-white"
        >
          <ThumbsDownIcon size={16} />
          <span>({notHelpfulVotes})</span>
        </Button>
        <Button
          disableRipple
          variant="text"
          size="sm"
          className="flex items-center gap-1 text-gray-400 hover:text-white"
        >
          <span>Report</span>
        </Button>
      </div>
      </div>

      {/* Actions */}
      <Divider/>
    </div>
    
  );
};

export default ProductReview;
