import { SparklesIcon } from '@heroicons/react/solid'
import React from 'react'
import {Input} from "./Input"

export const Feed = () => {
  return (
    <div className='lg:ml-[70px]  border-l border-r border-gray-300  lg:min-w-[430px]  sm:ml-[73px] flex-grow max-w-xl'>
        <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-300 '>
            <h2 className='text-lg sm:text-xl font-bold cursor-pointer '>Home</h2>
            <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9 '>
                <SparklesIcon className='h-5' />
            </div>
        </div>
        <Input />
    </div>
  )
}