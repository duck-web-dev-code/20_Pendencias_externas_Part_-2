import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

//ICONS
import AntDesign from '@expo/vector-icons/MaterialIcons'

//IMAGE
import Logo from '../images/Logo.jpg'

//GRADIENTE
import { LinearGradient } from 'expo-linear-gradient'

//NAVIGATION 
import { useNavigation } from '@react-navigation/native'

//ZOONABLE
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'

//DB
import { db } from '../../server/firebase'
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc } from 'firebase/firestore'


//PLANTAS
import Jurema from './Plantas/Jurema'
import BoaEsperanca from './Plantas/BoaEsperanca'
import Colinas from './Plantas/Colinas'
import BosqueReal from './Plantas/BosqueReal'
import BosqueReal2 from './Plantas/BosqueReal2'
import Bemviver from './Plantas/BemViver'
import OnildoSilva2 from './Plantas/OnildoSilva2'
import JardimImperial from './Plantas/JardimImperial'


export default function HomeEmpreendimento({ route }) {
  const navigation = useNavigation()
  const Empreendiento = route.params.Emp
  const [pedido, setPedido] = useState([])
  const Selected_pedido = []


  useEffect(() => {
    const Ref_Pedido = collection(db, "Agua")
    const queryRef = query(Ref_Pedido, orderBy("created", 'asc'))
    const unsub = onSnapshot(queryRef, (snapshot) => {

      const list = []

      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          empreendimento: doc.data().empreendimento,
          quadra: doc.data().quadra,
          numero: doc.data().numero,
          status: doc.data().status,
          pedido: doc.data().pedido,
          cor: doc.data().cor

        })
      })
      setPedido(list)

    })

  }, [])

  //CONDICIONAL PARA SELECIONAR OS PEDIDOS POR EMPREENDIMENTOS
  pedido.forEach((item) => {
    if (item.empreendimento == Empreendiento) {
      Selected_pedido.push(item)
    }
  })




  return (
    <LinearGradient colors={['#18181b', '#27272a', '#333333']} className="h-full overflow-hidden pt-[30px]" >
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Agua")} className="w-14 ml-[80%] mt-4  items-end">
          <AntDesign name='close' size={50} color='#fdec00' />
        </TouchableOpacity>
        <Text className="text-white text-[20px] text-center mt-2">Empreendimento: {Empreendiento}</Text>


      </View>

      {/* ZOONABLE */}
      <ReactNativeZoomableView
        maxZoom={3.0}
        minZoom={0.9}
        className="  rounded overflow-hidden bg-white">
        {Empreendiento == "Jurema" && (
          <View className=" rotate-90 relative top-[-250px] "><Jurema Pedido={Selected_pedido} /></View>

        )}


        {Empreendiento == "Boa Esperança" && (
          <View className=" rotate-[90deg] scale-[0.38] relative top-[-290px] "><BoaEsperanca Pedido={Selected_pedido} /></View>

        )}

        {Empreendiento == "Colinas" && (
          <View className=" rotate-90 scale-[0.38]  top-[-250px] relative "><Colinas Pedido={Selected_pedido} /></View>

        )}

        {Empreendiento == "Bosque Real" && (
          <View className=" rotate-90 scale-[0.42]  top-[-270px] relative "><BosqueReal Pedido={Selected_pedido} /></View>

        )}
        {Empreendiento == "Bosque Real 2" && (
          <View className=" rotate-90 scale-[0.45]  top-[-300px] right-[35px] relative "><BosqueReal2 Pedido={Selected_pedido} /></View>

        )}
        {Empreendiento == "Bem viver" && (
          <View className=" rotate-90 scale-[0.48]  top-[-320px] right-[20px] relative "><Bemviver Pedido={Selected_pedido} /></View>

        )}
        {Empreendiento == "Onildo Silva 2" && (
          <View className=" rotate-90 scale-[0.48]  top-[-300px] right-[-20px] relative "><OnildoSilva2 Pedido={Selected_pedido} /></View>

        )}
          {Empreendiento == "Jardim Imperial" && (
          <View className=" rotate-[50deg] scale-[0.52]  top-[-250px] right-[270px] relative "><JardimImperial Pedido={Selected_pedido} /></View>

        )}




      </ReactNativeZoomableView>


    </LinearGradient>


  )
}


