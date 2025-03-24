import { useTheme } from '@/context/ThemeContext';
import { TagsInput } from '@jamsr-ui/react'
import React from 'react'

const AppliesFilter = () => {
  const {theme} = useTheme();
    const defaultValue = ["Tag 1", "Tag 2", "Tag 3"];
  return (
    <div className={`p-2 rounded-md mb-2 ${ theme === "light" ? "bg-neutral-100" : "bg-black" }`}>
        <TagsInput defaultValue={defaultValue}   label="Applies Filter" />
    </div>
  )
}

export default AppliesFilter