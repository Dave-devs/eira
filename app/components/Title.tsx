import React from 'react'

interface TitleProps {
    text1: string;
    text2: string;
}

export default function Title({text1, text2}: TitleProps) {
  return (
   <div className='inline-flex items-center gap-2 mb-3 font-playfair'>
    <p className='text-gray-500'>{text1} <span className='text-gray-700 dark:text-gray-50 font-medium'>{text2}</span></p>
    <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700 dark:bg-gray-50'></p>
   </div>
  )
}
