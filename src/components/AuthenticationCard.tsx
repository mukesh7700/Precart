
import {  Dialog, DialogBody,  DialogHeader, Divider,  OtpInput } from '@jamsr-ui/react'
import React from 'react'

import { QRcode } from './svgs';

const AuthenticationCard = () => {
  return (
    <div className=''>
        <Dialog>
            <DialogHeader className='border-b border-neutral-500 '>Enable Two-Factor Authentication </DialogHeader>
            <DialogBody>
            <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-white font-semibold">1</div>
            <div>
              <p className="font-medium">Download app</p>
              <p className="text-gray-400 text-sm">Download a mobile authentication app.</p>
            </div>
          </div>
          
          <Divider orientation="vertical"/>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-white font-semibold">2</div>
            <div>
              <p className="font-medium">Scan QR Code</p>
              <p className="text-gray-400 text-sm">Scan this QR code using a mobile authentication app. This will generate a verification code.</p>
              
              <QRcode className="w-[150px] h-[150px] border border-neutral-500 rounded-lg mt-4"/>
              
            </div>
          </div>
         
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-white font-semibold">3</div>
            <div className="w-full">
              <p className="font-medium">Enter Code</p>
              <p className="text-gray-400 text-sm mb-3">Enter the 2-step verification code from your authenticator app.</p>
              <OtpInput numberOfDigits={6}/>
            </div>
          </div>
        </div>
        
                </DialogBody>   
        </Dialog>
    </div>
  )
}

export default AuthenticationCard