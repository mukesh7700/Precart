"use client"
import React, { useState } from 'react'
import { Select, SelectItem, type SelectProps } from "@jamsr-ui/react";

const page = (props: Partial<SelectProps>) => {
  const [value, setValue] = useState<string[]>(["apple"]);
  return (
    <div className='p-5 w-full'>
      <div className='flex justify-between items-center'>
        <div className='text-lg font-semibold'>Order history
        </div>
        <div className='flex items-center gap-2'>

        2 orders placed in: 
        <Select className="max-w-[100px]  py-1 px-2"  {...props} >
        <SelectItem value="apple">2022</SelectItem>
        <SelectItem value="blueberry">2023</SelectItem>
        <SelectItem value="watermelon">2024</SelectItem>
        
      </Select> 
        </div>
      </div>
    </div>
  )
}

export default page