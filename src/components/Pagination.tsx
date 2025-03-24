import { IconButton } from '@jamsr-ui/react';
import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-center gap-4 ">
      <IconButton
      label='Previous'
      disableRipple={true}
      variant='text'
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`text-lg transition ${
          currentPage === 1
            ? 'text-gray-500 '
            : 'hover:text-white'
        }`}
      >
        &#10094;
      </IconButton>

      <div className="flex items-center gap-2 text-sm">
        <span
          className=" bg-neutral-800 rounded-md px-3 p-2  "
        >
          {currentPage}
        </span>
        <span className="text-gray-400 px-3 p-2">of</span>
        <span className="text-gray-400 px-3 p-2">{totalPages}</span>
      </div>

      <IconButton
      disableRipple={true}
      variant='text'
      label='Next'
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`text-lg transition ${
          currentPage === totalPages
            ? 'text-gray-500 '
            : 'hover:text-white'
        }`}
      >
        &#10095;
      </IconButton>
    </div>
  );
};

export default Pagination;
