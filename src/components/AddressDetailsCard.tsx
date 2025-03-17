import { useTheme } from '@/context/ThemeContext'
import { Button, Divider } from '@jamsr-ui/react'
import React from 'react'
import { Cardimg, NextArrow, Pen, Print } from './svgs'

const AddressCard = () => {
    const {theme} = useTheme()
  return (
    <div>
        <div
            className={`p-4 rounded-lg ${
              theme === "light" ? "bg-white" : "bg-black"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
              <div>
                <h1>Shipping address </h1>
                <p className="text-sm text-neutral-400 leading-6">
                  James Collins
                  <br />
                  280 Suzanne Throughway
                  <br />
                  New York, Breannabury, OR 45801, US,
                  <br />
                  +44 000 000 0001
                </p>
              </div>
              <div className="grid grid-rows-2">
                <div>
                    <h1>Contact details </h1>
                    <p className="text-sm text-neutral-400 leading-6">jamescollins@site.so </p>
                </div>
                <div>
                    <h1>Payment method  </h1>
                    <p className="text-sm text-neutral-400 leading-6 flex gap-1 items-center"><span><Cardimg className=" h-4 w-4"/></span>  MasterCard •••• 4242 </p>
                </div>
              </div>
              <div>
                <ul className="text-sm ">
                    <li className="flex justify-between items-center mb-2">
                        <p>Subtotal</p>
                        <p>$229</p>
                    </li>
                    <li className="flex justify-between items-center mb-2">
                        <p>Shipping</p>
                        <p>$Free</p>
                    </li>
                    <li className="flex justify-between items-center mb-2">
                        <p>Estimated Tax</p>
                        <p>$0</p>
                    </li>
                    <li className="flex justify-between items-center mb-2 text-neutral-500">
                        <p>Sale</p>
                        <p>-$20</p>
                    </li>
                    <li className="flex justify-between items-center mb-2">
                        <p>Total</p>
                        <p> USD $229 </p>
                    </li>
                </ul>
              </div>
              
            </div>
            <div className="flex justify-between items-center py-2">
                <Button disableAnimation disableRipple variant="outlined" startContent={<Pen className="h=4 w-4"/>}>Change address</Button>
                <Button disableAnimation disableRipple variant="outlined" startContent={<Print className="h=4 w-4"/>}>View or Print receipt</Button>
            </div>
            <Divider/>
            <div className="flex justify-between items-center pt-2">
                <h1 className="text-neutral-500">Something wrong? <Button disableAnimation disableRipple variant="text" className="px-0 ui-hover:text-blue-500 underline underline-offset-4" endContent={<NextArrow className="h=3 w-3 px-0"/>}>Change address</Button> </h1>
                <Button disableAnimation disableRipple variant="outlined" className="text-danger ui-hover:text-danger-400">Cancel order</Button>
            </div>
          </div>
    </div>
  )
}

export default AddressCard