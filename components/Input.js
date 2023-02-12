import React from 'react'
import Image from 'next/image'
import { EmojiHappyIcon, PhotographIcon } from '@heroicons/react/solid'

export const Input = () => {
  return (
        <div className='flex border-b border-gray-300 p-3 space-x-3 '>
            <Image className='rounded-full cursor-pointer hover:brightness-95' src="/images/profile.jpg" alt="userImage"  height={50} width={50}/>
            <div className='w-full divide-y divide-gray-300'>
                <div className=''>
                    <textarea className='w-full border-none focus:ring-0 text-lg  placeholder:gray-700 tracking-wide min-h-[50px] text-gray-700 ' role='2'  placeholder='what happening...'></textarea>
                </div>
                <div className='flex items-center justify-between pt-2.5 '>
                     <div className='flex '>
                        <PhotographIcon  className='h-10 w-10 hoverEffect p-2 text-red-600 selection<Accordion.Collapse>
                            <div>Body element to collapse</div>
                        </Accordion.Collapse>'/>
                        <EmojiHappyIcon className='h-10 w-10 hoverEffect p-2 text-red-600 selection<Accordion.Collapse>
                            <div>Body element to collapse</div>
                        </Accordion.Collapse>'/>
                     </div>
                     <button className='bg-red-600 text-white px-4 py-1.5 rounded-full hover:bg-black font-bold shadow-md  disabled:opacity-50'>Tweet</button>
                </div>
            </div>
        </div>
  )
}