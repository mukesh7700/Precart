import { Button, Checkbox, Input, Radio, RadioGroup } from "@jamsr-ui/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto max-w-[1280px] flex justify-center items-center  ">
      <div className="min-w-lg max-w-lg">
        <h1 className="text-xl font-semibold text-center mb-5">
          Create an account{" "}
        </h1>

        <div className="mb-5">
          <Input
            size="lg"
            variant="standard"
            className=""
            placeholder="Email"
          />
        </div>
        <div className="mb-5">
          <Input
            size="lg"
            variant="standard"
            className=""
            placeholder="password"
            isSecuredText
          />
        </div>
        <div className="mb-5 p-2 border-b border-neutral-500">
          <Input
            size="lg"
            variant="standard"
            className=""
            placeholder="dd/mm/yyyy  "
            label="Date of birth "
          />
          <p className="text-sm text-neutral-500">Enter your birthday in the format MM/DD/YYYY. Please note that once registered, your birthday cannot be edited. </p>
        </div>
        <div className="mb-5 p-2 border-b border-neutral-500" >
          <RadioGroup label="Gender" name="gender" defaultValue="male">
            <Radio name="gender" value="male">
              Male
            </Radio>
            <Radio name="gender" value="female">
              Female
            </Radio>
            <Radio name="gender" value="other">
              Other
            </Radio>
          </RadioGroup>
          <p className="text-sm text-neutral-500">You can receive item recommendations tailored to your registered information, such as your gender. </p>
        </div>
        <div className="mb-5 p-2 border-b border-neutral-500">
            <p className="text-sm mb-2">Subscribe to mailing list to receive $10 off your next online purchase </p>
            <Checkbox label="Email me with news and others "/>
        </div>
        <div className="mb-5 p-2 border-b border-neutral-500">
            <p className="text-sm mb-2">Membership agreement </p>
            <Checkbox label="I accept the Terms and Conditions  "/>
        </div>

        <Button size="lg" color="primary" className="w-full mb-5">
          Create account
        </Button>
        <p className="text-sm text-neutral-500 text-center mb-5">
        Already have an account?
          <Link href="/login" className=" hover:text-blue-400 underline underline-offset-4">
            {" "}
            Log in
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default page;
