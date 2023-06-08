import { TextInput } from 'react-native'
import React from 'react'

export default function Input(props) {
  return (
    <>
    <TextInput  className="border-none rounded py-[5px] text-[18px] px-[3px] mb-[16px]  bg-white" {...props}/>
    </>
    
  )
}