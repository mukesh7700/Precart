import { Divider, MenuItem } from '@jamsr-ui/react'
import Link from 'next/link'
import data from '@/data/Menu'
import React from 'react'

const Menu1 = () => {
  return (
    <>
  {data.map((item, index) => (
    <React.Fragment key={index}>
      <div className="py-1">
        {item.items.map((subItem, subIndex) => (
          <Link href={subItem.url} key={subIndex}>
            <MenuItem className="py-3" startContent={subItem.icon}>
              <span>{subItem.title}</span>
            </MenuItem>
          </Link>
        ))}
      </div>
      {index !== data.length - 1 && <Divider className="mx-2" />}
    </React.Fragment>
  ))}
</>

    
  )
}

export default Menu1