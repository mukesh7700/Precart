"use client";

import { FileUpload } from "@/components/svgs";
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  Input,
  Text,
} from "@jamsr-ui/react";
import { useState } from "react";
import AuthenticationCard from "@/components/AuthenticationCard";
import Link from "next/link";

type CollapsibleState = Record<number, boolean>;

const collapsibleItems = [
  { id: 1, heading: "Name", subHeading: "James Collins" },
  { id: 2, heading: "Email", subHeading: "jamescollins@site.so" },
  { id: 3, heading: "Phone", subHeading: "+(01) 222 333 444" },
  { id: 4, heading: "Password", subHeading: "123 Main Street" },
];

const Page = () => {
  // Tracks edit mode for each item
  const [editMode, setEditMode] = useState<CollapsibleState>({});
  // Tracks the input values for each item
  const [inputValues, setInputValues] = useState<Record<number, string>>(
    () =>
      collapsibleItems.reduce((acc, item) => {
        acc[item.id] = item.subHeading;
        return acc;
      }, {} as Record<number, string>)
  );

  const handleEditToggle = (id: number) => {
    setEditMode((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleInputChange = (id: number, value: string) => {
    setInputValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSave = (id: number) => {
    // You can perform your save logic here (API call etc.)
    console.log(`Saving item ${id}:`, inputValues[id]);
    handleEditToggle(id);
  };

  return (
    <div className="p-5 w-full">
      {/* Avatar Section */}
      <div className="p-2 pb-3 flex items-center gap-3 border-b border-neutral-500">
        <Link rel="stylesheet"  href="https://i.pravatar.cc/300?u=20" >
        <Avatar
          alt="image"
          className="flex h-[70px] w-[70px]"
          src="https://i.pravatar.cc/300?u=20"
          width={100}
          height={100}
          
        />
        </Link>

        <Button
          variant="outlined"
          startContent={<FileUpload />}
          size="md"
          className="px-2 py-1"
        >
          Upload Photo
        </Button>
      </div>

      {/* Collapsible Items */}
      {collapsibleItems.map((item) => {
        const isEditing = editMode[item.id] || false;

        return (
          <div
            key={item.id}
            className="border-b border-neutral-500 p-4 flex items-center gap-2 justify-between"
          >
            <div className="w-1/2">
              <h1 className="mb-2">{item.heading}</h1>
              <Input
                size="md"
                value={inputValues[item.id]}
                disabled={!isEditing}
                onChange={(e) => handleInputChange(item.id, e.target.value)}
                className={`w-1/2  ${isEditing ? "text-current" : ""}`}
              />

              {/* Show Save button in edit mode */}
              
            </div>

            {/* Toggle between Edit and Save */}
            <div>
            {isEditing && (
                <Button className=" ui-hover:bg-primary" onClick={() => handleSave(item.id)} color="primary">
                  Save
                </Button>
              )}
              
                <Button
                  disableRipple
                  disableAnimation
                  variant="text"
                  size="lg"
                  className={`px-2 py-1 tracking-wider ui-hover:text-neutral-500 ${isEditing ? "text-red-600 ui-hover:text-red-400" : ""}`}
                  onClick={() => handleEditToggle(item.id)}
                >
                  {isEditing ? "Cancel" : "Edit"}
                </Button>
              
            </div>
          </div>
        );
      })}

      {/* Two-factor Authentication Section */}
      <div className="border-b border-neutral-500 p-4 py-6">
        <Card className="bg-transparent border-none">
          <CardHeader
            className="p-0"
            heading="Two-factor authentication"
            subHeading="Add a layer of security. Require a code in addition to your password."
            endContent={
              <Dialog>
                <DialogTrigger>
                  <Button
                    disableRipple
                    size="lg"
                    variant="text"
                    className="underline underline-offset-4 px-2"
                  >
                    Turn On
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <AuthenticationCard />
                </DialogContent>
              </Dialog>
            }
          />
        </Card>
      </div>

      {/* Deactivate Account Section */}
      <div className="border-neutral-500 p-4 py-6">
        <Card className="bg-transparent border-none">
          <CardHeader
            className="p-0"
            heading="Deactivate your account"
            subHeading="This will immediately delete all of your data. This action is not reversible, so please continue with caution."
            endContent={
              <Dialog>
                <DialogTrigger>
                  <Button
                    size="lg"
                    variant="text"
                    disableRipple
                    disableAnimation
                    color="danger"
                    className="ui-hover:bg-transparent underline underline-offset-4 px-2"
                  >
                    Deactivate
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader />
                  <DialogBody className="flex flex-col gap-4">
                    <Text as="h3" variant="h4" className="leading-0">
                      Are you sure?
                    </Text>

                    <Text as="p">
                      Are you sure you want to deactivate your account?
                    </Text>
                  </DialogBody>
                  <DialogFooter>
                    <DialogTrigger action="close">
                      <Button
                        variant="text"
                        className="border border-neutral-500"
                      >
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
  );
};

export default Page;
