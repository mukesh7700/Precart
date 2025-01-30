import { Avatar, type AvatarProps } from "@jamsr-ui/react";

export const AvatarUsage = (props: Partial<AvatarProps>) => {
  
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
