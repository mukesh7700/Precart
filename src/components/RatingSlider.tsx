import React from 'react';

type RatingProps = {
  title: string;
  icon: React.ReactNode;
  minLabel: string;
  maxLabel: string;
  value: number; // Value from 0 to 100
};

const RatingSlider: React.FC<RatingProps> = ({ title, icon, minLabel, maxLabel, value }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="text-md font-semibold">{title}</h3>
      </div>
      <div className="relative w-full">
        <div className="h-1 bg-gray-700 rounded-full" />
        <div
          className="absolute top-0 h-1 bg-indigo-500 rounded transition-all duration-300"
          style={{ width: `${value}%` }}
        />
        
      </div>
      <div className="flex justify-between text-sm text-gray-400 mt-2">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
};

export default RatingSlider;