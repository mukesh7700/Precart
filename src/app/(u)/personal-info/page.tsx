"use client"
import { AvatarUsage } from "@/components/AvatarUsage"

import { FileUpload } from "@/components/svgs"
import { Button, Card, CardContent, CardHeader, Collapsible, CollapsibleContent, CollapsibleTrigger, Input,} from "@jamsr-ui/react"
import { useDisclosure } from "@jamsr-ui/hooks";
import { useState } from "react";

const collapsibleItems = [
  { id: 1, heading: "Name", subHeading: "James Collins" },
  { id: 2, heading: "Email", subHeading: "jamescollins@site.so " },
  { id: 3, heading: "Phone hrp0m ", subHeading: "+(01) 222 333 444 " },
  { id: 4, heading: "Password", subHeading: "123 Main Street" },
];

const page = () => {
  const [collapsibleStates, setCollapsibleStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleToggle = (id) => {
    setCollapsibleStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className='p-5 w-full'>
      <div className='p-2 flex items-center gap-3 border-b border-neutral-500 '>
       <AvatarUsage className="h-[70px] w-[70px]" />
       
       <Button variant="outlined" startContent={<FileUpload/>} size="md" className="px-2 py-1" >Upload Photo</Button>
       
      </div>
      {collapsibleItems.map((item) => (
        <div key={item.id} className="border-b border-neutral-500 p-2">
          <Collapsible
            isOpen={collapsibleStates[item.id]}
            onOpenChange={() => handleToggle(item.id)}
          >
            <Card className="bg-transparent">
              <CardHeader
                className="p-0"
                heading={item.heading}
                subHeading={item.subHeading}
                endContent={
                  <Button
                    variant="text"
                    size="lg"
                    onClick={() => handleToggle(item.id)}
                    className="underline underline-offset-4 px-2"
                  >
                    {collapsibleStates[item.id] ? "Cancel" : "Edit"}
                  </Button>
                }
              />
              <CollapsibleContent>
                <CardContent className="p-0 pt-2">
                  <div className="w-1/3">
                    <Input
                      className=""
                      placeholder=""
                      value={item.subHeading}
                    />
                    <Button className="mt-2">Save changes</Button>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </div>
      ))}
      <div  className="border-b border-neutral-500 p-2">
          
            <Card className="bg-transparent">
              <CardHeader
                className="p-0"
                heading="rr"
                subHeading="rr"
                endContent={
                  <Button
                    variant="text"
                    size="lg"
                    
                    className="underline underline-offset-4 px-2"
                  >
                    tt
                  </Button>
                }
              />
              
                <CardContent className="p-0 pt-2">
                  <div className="w-1/3">
                    <Input
                      className=""
                      placeholder=""
                      
                    />
                    <Button className="mt-2">Save changes</Button>
                  </div>
                </CardContent>
              
            </Card>
          
        </div>
      

    </div>
  )
}

export default page