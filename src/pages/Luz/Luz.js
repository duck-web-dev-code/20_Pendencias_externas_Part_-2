import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

//PAGES
import AllPedidos from './AllPedidos'
import Concluido from './Concluido'
import EmAndamento from './EmAndamento'
import NotConcluido from './NotConcluido'

//COMPONENTS
import Header from '../../components/Header'

//ICONS
import Icon from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/MaterialIcons'

//GRADIENT
import { LinearGradient } from 'expo-linear-gradient'

//DATABASE
import { auth } from '../../../server/firebase'
import { signOut } from 'firebase/auth'



export default function Luz({navigation}) {
    //<script>

  //CLOSE AND OPEN MODAL
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState("AllPedidos")


  function HandleOpen() {
    if (open == false) {
      setOpen(true)

    } else {
      setOpen(false)
    }
  }


  //FUNCTION FOR REDIRECT COMPONENTS PAGES
  function FAllPedidos() {
    setPage("AllPedidos")
    setOpen(false)

  }
  function FConcluidos() {
    setPage("Concluidos")
    setOpen(false)

  }
  function FEmAndamento() {
    setPage("EmAndamento")
    setOpen(false)

  }
  function FNotConcluido() {
    setPage("NotConcluido")
    setOpen(false)

  }
  async function CloseOut() {
    setOpen(false)
    await signOut(auth)
    navigation.navigate("Login")

  }

  //VARIABLE FOR FUNCTION PAGES
  const pages = [
    {
      Text: "Todas as Solicitações",
      PageName: FAllPedidos
    },
    {
      Text: "Solicitações Concluidos",
      PageName: FConcluidos
    }
    ,
    {
      Text: "Solicitações EmAndamento",
      PageName: FEmAndamento
    }
    ,
    {
      Text: "Solicitações Não Concluido",
      PageName: FNotConcluido
    }, {
      Text: "Sair",
      PageName: CloseOut
    }
  ]


  //</script>
  return (
    <>
    <Header>
      <TouchableOpacity onPress={HandleOpen}>
        <Icon name='menu' size={40} color='#fdec00' />
      </TouchableOpacity>
    </Header>


    {open === true ?
      (

        <LinearGradient colors={['#27272a', '#333333', '#18181b']} className=" w-full h-full fixed top-[-10%]">
          <View className=" ">
            <TouchableOpacity onPress={HandleOpen} className=" w-[90px] items-end px-[20px] py-[10px]">
              <AntDesign name='close' size={50} color='#fdec00' />
            </TouchableOpacity>

            <View className="flex flex-col items-center justify-center">
              {pages.map((index, key) => (
                <TouchableOpacity key={key} className="m-8 p-3 border border-[#fdec00] bg-zinc-800" onPress={index.PageName}>
                  <Text className="text-white text-[20px] font-bold">{index.Text}</Text>
                </TouchableOpacity>

              ))}

            </View>
          </View>
        </LinearGradient>
      ) : (
        <>
          {page == "AllPedidos" && (<AllPedidos navigation={navigation} />)}
          
          {page == "Concluidos" && (<Concluido navigation={navigation} />)}
          {page == "EmAndamento" && (<EmAndamento navigation={navigation} />)}
          {page == "NotConcluido" && (<NotConcluido navigation={navigation} />)}

        </>
      )

    }
  </>
  )
}