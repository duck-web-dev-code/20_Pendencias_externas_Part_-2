import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

//DB
import { db } from '../../../server/firebase'
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc } from 'firebase/firestore'
//COMPONENT
import Pedidos_List from '../../components/Pedidos_List'

export default function Concluido(props) {
     //<script>

  //NAVIGATION
  const navigation = props.navigation

  //EMPREENDIMENTOS DISPONIVEIS
  const Disp_empreendimento = ["Todos", "Jurema", "Boa Esperança","Colinas","Bosque Real","Bosque Real 2","Bem viver","Onildo Silva 2","Jardim Imperial"]


  //ALL PEDIDOS
  const [pedido, setPedido] = useState([])

  //VARIAVEL PARA RENDERIZAÇÃO DOS ELEMENTOS BASEADO NA VARIAVEL
  const [Select_Empreendimento, setSelect_Empreendimento] = useState("Todos")

  //VARIAVEL QUE SERA GUARDADO OS EMPREENDIMENTO DA CONDICIONAL
  const [open, setOpen] = useState(true)
  const Selected = []

  //USEEFFECT PARA PEGAR AS SOLICITAÇÕES DO BANCO DE DADOS
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
          pedido: doc.data().pedido

        })
      })
      setPedido(list)

    })

  }, [])

  //CONDICIONAL PARA SELECIONAR OS PEDIDOS POR EMPREENDIMENTOS

  pedido.forEach((item) => {
    if (Select_Empreendimento == "Todos" && item.status=="Concluido") {
      Selected.push(item)
    }

    if (item.empreendimento == Select_Empreendimento  && item.status=="Concluido") {
      Selected.push(item)
    }
  })


  //FUNCITION FOR SELECTED
  function selectedOpen() {
    if (open == true) {
      setOpen(false)
    } else {
      setOpen(true)

    }
  }

  function SeletEmpreendimento(e) {
    setSelect_Empreendimento(e.item)
    selectedOpen()

  }



  //</script>
  return (
    <View className='text-white bg-[#333333] w-full h-full flex-col flex-1 my-0 mx-auto max-w-[1200px]'>


    {/*==== VIEW CONDICIONAL DAS SOLICITAÇÕES ====*/}
    <View className="p-2 flex  w-full items-center">
      <TouchableOpacity className=" p-2 w-[80%] bg-white rounded" onPress={selectedOpen}>
        <Text className='text-[19px] text-center font-bold '>{Select_Empreendimento}</Text>
      </TouchableOpacity>

    </View>

    {open==true ? (
      <></>

    ):(
      <View className="bg-[#333] absolute top-0 items-center  justify-center w-full z-10 h-full  pt-4">
        <ScrollView className="w-full">
          {Disp_empreendimento.map((item,index)=>(
            <View className="items-center" key={index}>
            <TouchableOpacity key={index} className=" p-4 mb-4  w-[50%] bg-white rounded" onPress={()=>SeletEmpreendimento({item})}>
            <Text className='text-[19px] text-center font-bold' >{item}</Text>
           </TouchableOpacity>
           </View>
          ))}
        
     
      </ScrollView>
      </View>
    )  } 

  

    <View className=' flex-row  font-bold p-3 border-solid  border-white border-b-4'>
      <Text className="text-white font-bold w-[5%]">#</Text>
      <Text className="text-white font-bold w-[36%]">Empreendimento</Text>
      <Text className="text-white font-bold w-[22%]">Quadra</Text>
      <Text className="text-white font-bold w-[22%]">Numero</Text>
      <Text className="text-white font-bold w-[19%]">Status</Text>
    </View>



    <ScrollView className="px-[2px]">

{Selected.map((item, index) => (
<Pedidos_List IdMaster={item.id} navigation={navigation} key={index} id={index} empreendimento={item.empreendimento} quadra={item.quadra} numero={item.numero} status={item.status} pedido={item.pedido} />

))}


</ScrollView>
  </View>
  )
}