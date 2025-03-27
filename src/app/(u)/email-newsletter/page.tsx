import { IconButton, Popover, Text } from '@jamsr-ui/react'
import React from 'react'
import { InfoIcon } from "@jamsr-ui/shared-icons";

const Email = () => {
  return (
    <div className=' p-5 h-[500px] flex justify-start items-center'>
      <Popover
        trigger={
          <IconButton label="Popover Trigger" className='relative'>
            <InfoIcon />
          </IconButton>
        }
        className="max-w-[1280px] w-full p-2 absolute   right-1/2 transform -translate-y-1/2"
        
      >
        <Text as="p">This is a Popover content</Text>
      </Popover>
    </div>
  )
}

export default Email