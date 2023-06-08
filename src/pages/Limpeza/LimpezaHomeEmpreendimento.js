import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

//ICONS
import AntDesign from '@expo/vector-icons/MaterialIcons'



//GRADIENTE
import { LinearGradient } from 'expo-linear-gradient'

//NAVIGATION 
import { useNavigation } from '@react-navigation/native'

//ZOONABLE
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'

//DB
import { db } from '../../../server/firebase'
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc } from 'firebase/firestore'


//PLANTAS
import Jurema from '../../components/Plantas/Jurema'

export default function LimpezaHomeEmpreendimento({ route }) {
    const navigation = useNavigation()
    const Empreendiento = route.params.Emp
    const [pedido, setPedido] = useState([])
    const Selected_pedido = []


useEffect(() => {
    const Ref_Pedido = collection(db, "Limpeza")
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
        if (item.empreendimento == Empreendiento ) {
            Selected_pedido.push(item)
        }
      })




    return (
        <LinearGradient colors={['#18181b', '#27272a', '#333333']} className="h-full overflow-hidden pt-[30px]" >
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Limpeza")} className="w-14 ml-[80%] mt-4  items-end">
                    <AntDesign name='close' size={50} color='#fdec00' />
                </TouchableOpacity>
                <Text className="text-white text-[20px] text-center mt-4">Empreendimento: {Empreendiento}</Text>


            </View>

            {/* ZOONABLE */}
            <ReactNativeZoomableView
                zoomEnabled={true}
                maxZoom={3.0}
                minZoom={0.9}
                zoomStep={0.25}
                initialZoom={0.9}
                bindToBorders={true}
                className=" h-full w-full rounded overflow-hidden bg-white">
                {Empreendiento == "Jurema" && (
                    <View className=" rotate-90 relative top-[-250px] "><Jurema Pedido={Selected_pedido} /></View>
                )}


                {Empreendiento == "Brandao" && (<Text className="text-white">Brandao</Text>)}
            </ReactNativeZoomableView>
        </LinearGradient>


    )
}


