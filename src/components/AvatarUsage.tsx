import { Avatar, type AvatarProps } from "@jamsr-ui/react";
import { useId } from "react";

export const AvatarUsage = (props: Partial<AvatarProps>) => {
  const id = useId();
  return (
    <Avatar
      alt="image"
      className="flex"
      src="/Men1.jpg"
      width={200}
      height={200}
      {...props}
    />
  );
};
