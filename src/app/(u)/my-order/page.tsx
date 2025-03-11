"use client"


import { Card, CardContent, Select, SelectItem, Tab, Tabs } from "@jamsr-ui/react";
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
 
const tab =[
  {heading:"Order", value:"order", content:<TabContent/>},
  {heading:"Payment", value:"payment", content:<TabContent/>},
  {heading:"Shipping", value:"shipping", content:<TabContent/>},
  
]

const page = () => {
  
  return (
    <div className='p-5 w-full'>
      <div className='flex justify-between items-center w-full'>
        <div className='text-lg font-semibold w-1/2'>Order history
        </div>
        <div className='flex items-center gap-2 w-1/2 justify-end  '>

        2 orders <span className='text-neutral-500'> placed in:</span>
        <Select
        className="max-w-fit "
        defaultValue={["2025"]}
      >
        <SelectItem value="2023">2023</SelectItem>
        <SelectItem value="2024">2024</SelectItem>
        <SelectItem value="2025">2025</SelectItem>
        
      </Select> 
        
        </div>
      </div>
      <div  className="border border-neutral-500">
      <Tabs variant="underlined" color="" classNames={{base: "p-0 ",}}  aria-label="Tabs variants">
          {tab.map((item, index) => (
            <Tab key={index} value={item.value} heading={item.heading} className=" text-md font-semibold hover:bg-default">
              <div className="border-t border-neutral-500 -mt-2">
              {item.content}
              </div>
              
            </Tab>
          ))}
        </Tabs>
      </div>
      
    </div>
  )
}

export default page