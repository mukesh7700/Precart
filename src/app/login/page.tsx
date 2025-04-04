"use client";
import { Button, Checkbox, Input } from '@jamsr-ui/react'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();

    const handleCreateAccount = () => {
        router.push('/registration');
      };
  return (
    <div className='container mx-auto max-w-[1280px]   flex justify-center items-center '>
        <div className='min-w-lg'>
            <h1 className='text-xl font-semibold text-center mb-5'>Log In </h1>
            <div>
                <Input size="lg"  variant="standard" className=''  placeholder="Email" />
               
            </div>
            <div className='mt-5'>
                <Input size="lg"  variant="standard" className=''  placeholder="Password" isSecuredText />
               
            </div>
            <div className='flex justify-between items-center my-5'>
                <Checkbox label='Remember me' />
                <Link href="/forgot-password" className='text-sm text-neutral-500 underline underline-offset-4'>Forgot Password ?</Link>

            </div>
            <Button size='lg' color='primary' className='w-full mb-5' >Log In</Button>
            <Button size='lg' variant='outlined' className='w-full ' onClick={handleCreateAccount}>Create account</Button>
        </div>
    </div>
  )
}

export default Page