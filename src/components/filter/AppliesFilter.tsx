import { TagsInput } from '@jamsr-ui/react'
import React from 'react'

const AppliesFilter = () => {
    const defaultValue = ["Tag 1", "Tag 2", "Tag 3"];
  return (
    <div className="p-2 rounded-md bg-black mb-2">
        <TagsInput defaultValue={defaultValue}   label="Applies Filter" />
    </div>
  )
}

export default AppliesFilter