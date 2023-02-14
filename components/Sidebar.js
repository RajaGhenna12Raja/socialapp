import React from 'react'
import Image from 'next/image'
import SidebarMeenuItem from './SidebarMenuItem'
import { BellIcon, BookmarkIcon, ClipboardCheckIcon, DotsCircleHorizontalIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon } from '@heroicons/react/solid'
import {useSession, signIn,signOut} from "next-auth/react"

export default function  Sidebar  ( )  {
const {data:session} = useSession();
console.log(session);
return (
<div className=' sm:flex flex-col p-2 lg:items-start  h-full lg:ml-24 top-0 sticky'>
{/* logo */}
<div className='hoverEffect p-0' >
<Image src="/favicon.png" alt="logo" width={50} height={50}/>  
</div>

{/* Menu */}
<div className='mt-4 mb-2.5 lg:items-start'>
<SidebarMeenuItem  text="Home"  Icon={HomeIcon}/>
<SidebarMeenuItem  text="Explore"  Icon={HashtagIcon}/>
{session && (
  <>
  <SidebarMeenuItem  text="Notifications"  Icon={BellIcon}/>
  <SidebarMeenuItem  text="Messages"  Icon={InboxIcon}/>
  <SidebarMeenuItem  text="BookMark"  Icon={BookmarkIcon}/>
  <SidebarMeenuItem  text="Lists"  Icon={ClipboardCheckIcon}/>
  <SidebarMeenuItem  text="Profile"  Icon={UserIcon}/>
  <SidebarMeenuItem  text="More"  Icon={DotsCircleHorizontalIcon}/>
  </>
  )}
  </div>
  {/* Button */}
  {session ? (
  <>
  <button className='bg-red-600 text-white rounded-full w-56 h-12 font-bold shadow-md hover:bg-black text-lg hidden lg:inline'>Tweet</button>
  <div className='hoverEffect text-gray-700 flex items-center justify-center lg:justify-start mt-2'>
  <Image onClick={signOut} className='rounded-full lg:mr-2'  src={session.user.image} alt="UserImage" width={50} height={50}/>
  <div className='leadin-5 hidden lg:inline '>
  <h4 className='font-bold '>{session.user.name}</h4>
  <p className='text-gray-500'>@{session.user.username}</p>
  </div>
  <DotsCircleHorizontalIcon  className='h-5 lg:ml-8  hidden lg:inline'/>
  </div>
  </>
  ) : (
  <button onClick={signIn} className='bg-red-600 text-white rounded-full w-36 h-12 font-bold shadow-md hover:bg-black text-lg hidden lg:inline'>SignIn</button>
  ) }
  </div>
  )
}