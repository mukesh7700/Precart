import { Button, Input } from '@jamsr-ui/react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto max-w-[1280px]   flex justify-center items-center '>
        <div className='min-w-lg'>
            <h1 className='text-xl font-semibold text-center '>Reset password  </h1>
            <p className='text-sm text-neutral-500 text-center mb-5'>We’ll send you a link to reset your password. </p>
            <div className='mb-5'>
                <Input size="lg"  variant="standard" className=''  placeholder="Email" />
               
            </div>
           
            
            <Button size='lg' color='primary' className='w-full mb-5' >Submit</Button>
            <p className='text-sm text-neutral-500 text-center mb-5'>You didn’t forget your password?<Link href="/login" className=' underline underline-offset-4'> Log in</Link> </p>
        </div>
    </div>
  )
}

export default page