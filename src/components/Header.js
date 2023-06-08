import { View, StyleSheet,Image } from 'react-native'
import React from 'react'

//IMAGE
import Logo from '../images/Logo.jpg'


export default function Header(props) {
  return (
    <View >
    <View style={styles.container} className="bg-zinc-800 flex flex-row items-center justify-between px-8 w-full py-4 shadow-2xl border-b-[0.5px] border-[#fedc00] shadow-[#fedc00]">
      <Image source={Logo} className="w-[60px] h-[60px] rounded-full"/>    
    
    {props.children}
    </View>
    
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === 'android' ? 40 : 0
    },
  });
  