import {getProviders, signIn} from 'next-auth/react'
import Image from 'next/image';

export default function signin ({ providers })  {
  return (
    <div className='flex justify-center mt-20 space-x-7'>
        <img className='hidden object-cover md:w-44 md:h-80 rotate-6 md:inline-flex' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVmMH2LqdQN7pS0AiXtDA4fW6KlVu4YqcQKQ&usqp=CAU"  
         alt="loginPageImg"  />
         <div className=''>
          {Object.values(providers).map((provider) =>(
             <div className='flex flex-col items-center'>
                   <Image className='w-100 object-cover' src="/favicon.png" alt="logo" width={50} height={50}/>  
                   <p className='text-center text-sm italic my-10'>This app is Created for Learning Purposes</p>
                   <button onClick={() =>signIn(provider.id, {callbackUrl: "/"})} className='bg-red-600 text-white rounded-full p-3 hover:bg-black items-center justify-center font-semibold'>SignIn with {provider.name}</button>
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
