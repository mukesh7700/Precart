
import { Button, Menu, MenuItem } from '@jamsr-ui/react'
import { ChevronUpIcon } from "@jamsr-ui/shared-icons";
import React from 'react'


const Order = () => {
  return (
    <div className="flex justify-center">
      <Menu
        classNames={{
          popover: "min-w-[300px]",
        }}
        trigger={<Button endContent={<ChevronUpIcon />}>Open Me</Button>}
      >
        <MenuItem className="text-red-600 text-6xl">Undo</MenuItem>
        <MenuItem>Info</MenuItem>
        <MenuItem>Search</MenuItem>
        <MenuItem isDisabled>Redo</MenuItem>
        <MenuItem>Cut</MenuItem>
        <MenuItem isDisabled>Edit</MenuItem>
        <MenuItem color="danger">Delete</MenuItem>
      </Menu>
    </div>
  )
}

export default Order