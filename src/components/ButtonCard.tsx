import React from 'react';

import { Avatar } from '@jamsr-ui/react';
import Link from 'next/link';

type ButtonCardProps = {
  href: string;
  src:string;
  label: string;
  count: number;
};

const ButtonCard: React.FC<ButtonCardProps> = ({href, src, label, count}) => {
  return (
    <Link href={href} className="w-fit border border-neutral-500 rounded-full flex items-center gap-3 p-1 group">
      <Avatar
      alt={label}
      
      src={src}
      width={100}
      height={100}
      className='w-[35px] h-[35px] bg-cover'
    />
      <p className='text-md font-semibold me-2 group-hover:text-blue-400'>{label} <span>({count})</span></p>
    </Link>
  );
};

export default ButtonCard;
