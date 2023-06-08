import { View, Text, Image } from 'react-native'
import React from 'react'


//IMAGES
import img from '../images/aea_intro.gif'
export default function Animation() {
  return (
    <View className="">
        <Image source={img} className="w-[500px] h-[500px]"/>
    </View>
  )
}