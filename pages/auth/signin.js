import { async } from '@firebase/util'
import React from 'react'
import {getProviders} from 'next-auth/react'
import Image from 'next/image'

export default function signin ({ providers })  {
  return (
    <div className=' '>
        <img  src="/images/signinlogo.jpg"  width="100%" height="20%"  alt="loginImg"  />
        <div className='flex items-center justify-center'>
           {Object.values(providers).map((provider) =>(
            <div className='items-center justify-center'>
              <img className='w-40 object-cover' src='/images/profile.jpg'  height="100" width="100" alt="websiteLogo" />
              <h3 className='font-bold items-center hover:text-red-600 brightness-200 pb-3'>Enjoy the way you Wish</h3>
              <button className='text-center justify-cente bg-red-600 rounded-full  p-3 text-white hover:bg-black' >  SignIn with {provider.name}</button>
            </div>
        ))}
        </div>
    </div>
  )
}

export async function getServerSideProps(){
    const providers = await getProviders();
    return{
        props: {
            providers,
        },
    }
}
