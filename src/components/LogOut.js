import React from 'react'
import { TouchableOpacity } from 'react-native'

//ICONS
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

//DATABASE

import { auth } from '../../server/firebase'
import {signOut} from 'firebase/auth'
export default function LogOut(props) {

    //<script>
const navigation = props.navigation
async function handleLogOut(){
  await signOut(auth)
  navigation.navigate("Login")
}

  return (
    <TouchableOpacity onPress={handleLogOut}>
    <Icon name='logout' size={30} color='#fdec00'/>
    </TouchableOpacity>
  )
}