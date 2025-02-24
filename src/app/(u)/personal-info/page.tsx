"use client"
import { AvatarUsage } from "@/components/AvatarUsage"

import { Close, FileUpload } from "@/components/svgs"
import { Button, Card, CardContent, CardHeader, Collapsible, CollapsibleContent, Dialog, DialogBody, DialogContent, DialogFooter, DialogHeader, DialogTrigger, IconButton, Input, Text,  } from "@jamsr-ui/react"
import { useDisclosure } from "@jamsr-ui/hooks";
import { useState } from "react";
import AuthenticationCard from "@/components/AuthenticationCard";


type CollapsibleState = Record<number, boolean>;

const collapsibleItems = [
  { id: 1, heading: "Name", subHeading: "James Collins" },
  { id: 2, heading: "Email", subHeading: "jamescollins@site.so " },
  { id: 3, heading: "Phone hrp0m ", subHeading: "+(01) 222 333 444 " },
  { id: 4, heading: "Password", subHeading: "123 Main Street" },
];


const Page = () => {
  const [collapsibleStates, setCollapsibleStates] = useState<CollapsibleState>({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const [activeButtons, setActiveButtons] = useState<CollapsibleState>({});


  const handleToggle = (id: number) => {
    setCollapsibleStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleButtonClick = (id: number) => {
    setActiveButtons((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle active state
    }));
  };

  const {  onClose,  } = useDisclosure();

  return (
    <div className='p-5 w-full'>
      <div className='p-2 flex items-center gap-3 border-b border-neutral-500 '>
        <AvatarUsage  />

        <Button variant="outlined" startContent={<FileUpload />} size="md" className="px-2 py-1" >Upload Photo</Button>

      </div>
      {collapsibleItems.map((item) => (
        <div key={item.id} className="border-b border-neutral-500 p-4">
          <Collapsible
            isOpen={collapsibleStates[item.id]}
            onOpenChange={() => handleToggle(item.id)}
          >
            <Card className="bg-transparen border-none">
              <CardHeader
                className="p-0"
                heading={item.heading}
                subHeading={item.subHeading}
                endContent={
                  <Button
                    variant="text"
                    disableRipple
                    size="lg"
                    onClick={() => {
                      handleToggle(item.id);
                      handleButtonClick(item.id);
                    }
                    }
                    className={`underline underline-offset-4 px-2 ${activeButtons[item.id]
                      ? "text-blue-500" // Active color
                      : "" // Default color
                      }`}
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
                    <Button  className="mt-2">Save changes</Button>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </div>
      ))}
      <div className="border-b border-neutral-500 p-4">

        <Card className="bg-transparent border-none">
          <CardHeader
            className="p-0"
            heading="Two-factor authentication "
            subHeading="Add a layer of security. Require a code in addition to your password."
            endContent={
              <Dialog>
                <DialogTrigger>
                  <Button disableRipple size="lg" variant="text" className="underline underline-offset-4 px-2">Turn gbx61</Button>
                </DialogTrigger>
                <DialogContent>
                  <AuthenticationCard />
                </DialogContent>
              </Dialog>
            }
          />



        </Card>

      </div>
      <div className="  border-neutral-500 p-4">

        <Card className="bg-transparent border-none">
          <CardHeader
            className="p-0"
            heading="Deactivate your account "
            subHeading="This will immediately delete all of your data. This action is not reversible, so please continue with caution."
            endContent={
              <Dialog closeButton={
                <IconButton
                label="Icon Button Usage"
                  className="absolute right-2 top-2  rounded-full"
                  variant="solid"
                  
                  onClick={onClose}
                >
                  <Close/>
                </IconButton>
                
              } 
              >
                <DialogTrigger>
                  <Button size="lg" variant="text" disableRipple color="danger" className="underline underline-offset-4 px-2">Deactivate</Button>
                </DialogTrigger>
                <DialogContent>
                <DialogHeader></DialogHeader>
        <DialogBody className="flex flex-col gap-4">
          <Text as="h3" variant="h4" className="leading-0">Are you sure? </Text>
          
            <Text as="p">
            Are you sure you want to deactivate your account? 
            </Text>
          
          
        </DialogBody>
        <DialogFooter>
          <DialogTrigger action="close">
            <Button variant="text" className="border border-neutral-500" >
              Cancel
            </Button>
          </DialogTrigger>
          <DialogTrigger action="close">
            <Button color="danger">Submit</Button>
          </DialogTrigger>
        </DialogFooter>
                </DialogContent>
              </Dialog>
            }
          />



        </Card>

      </div>


    </div>
  )
}

export default Page