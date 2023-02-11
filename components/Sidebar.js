import React from 'react'
import Image from 'next/image'
import SidebarMeenuItem from './SidebarMenuItem'
import { BellIcon, BookmarkIcon, ClipboardCheckIcon, DotsCircleHorizontalIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon } from '@heroicons/react/solid'

const Sidebar = () => {
  return (
    <div className=' sm:flex flex-col p-2 lg:items-start  h-full'>
      {/* logo */}
      <div className='hoverEffect p-0' >
     <Image src="/favicon.png" alt="logo" width={50} height={50}/>  
      </div>

      {/* Menu */}
    <div className='mt-4 mb-2.5 lg:items-start'>
      <SidebarMeenuItem  text="Home"  Icon={HomeIcon}/>
      <SidebarMeenuItem  text="Explore"  Icon={HashtagIcon}/>
      <SidebarMeenuItem  text="Notifications"  Icon={BellIcon}/>
      <SidebarMeenuItem  text="Messages"  Icon={InboxIcon}/>
      <SidebarMeenuItem  text="BookMark"  Icon={BookmarkIcon}/>
      <SidebarMeenuItem  text="Lists"  Icon={ClipboardCheckIcon}/>
      <SidebarMeenuItem  text="Profile"  Icon={UserIcon}/>
      <SidebarMeenuItem  text="More"  Icon={DotsCircleHorizontalIcon}/>
    </div>
      {/* Button */}
    <button className='bg-red-600 text-white rounded-full w-56 h-12 font-bold shadow-md hover:bg-black text-lg hidden lg:inline'>Tweet</button>

      {/* Mini-Profile */}
      <div className='hoverEffect text-gray-700 flex items-center justify-center lg:justify-start mt-auto '>
      <Image className='rounded-full lg:mr-2 ' src="/favicon.png" alt="UserImage" width={50} height={50}/>
      <div className='leadin-5 hidden lg:inline '>
        <h4 className='font-bold '>Jobhikar</h4>
        <p className='text-gray-500'>jobhikar@quiz</p>
      </div>
      <DotsCircleHorizontalIcon  className='h-5 lg:ml-8  hidden lg:inline'/>
      </div>
    </div>
  )
}

export default Sidebar