"use client"
import React, { useState } from 'react'
import { Select, SelectItem, type SelectProps } from "@jamsr-ui/react";
import { Card, CardContent, Tab, Tabs } from "@jamsr-ui/react";
const TabContent = () => (
  <Card>
    <CardContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </CardContent>
  </Card>
);


const page = (props: Partial<SelectProps>) => {
  const [value, setValue] = useState<string[]>(["apple"]);
  return (
    <div className='p-5 w-full'>
      <div className='flex justify-between items-center w-full'>
        <div className='text-lg font-semibold w-1/2'>Order history
        </div>
        <div className='flex items-center gap-2 w-1/2 justify-end  '>

        2 orders <span className='text-neutral-500'> placed in:</span> 
        
        </div>
      </div>
      <div>
      <Tabs defaultValue="photos" variant='underlined' className='border-b pb-0 mb-0'>
      <Tab value="photos" heading="Photos" className='pb-0'>
      </Tab>
      <Tab value="music" heading="Music">
       
      </Tab>
      <Tab value="videos" heading="Videos">
        
      </Tab>
    </Tabs>
    
      </div>
    </div>
  )
}

export default page