import { View, Text, TouchableOpacity, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { db } from '../../server/firebase'
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc, updateDo, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

//EMPREENDIMENTOS
import HomeEmpreendimento from '../components/HomeEmpreendimento'

//NAVIGATION 
import { useNavigation } from '@react-navigation/native'


export default function InfoPedido({ route }) {
    //<script>


    const navigation = useNavigation()

    const IdUpdate = route.params.IdMaster

    //
    const Empreendimento = route.params.empreendimento
    const quadra = route.params.quadra
    const lot = route.params.numero
    const status = route.params.status
    const cor = route.params.cor

    const [open, setOpen] = useState(false)
    const Status_Update = ['Solicitado', "Iniciando", "Concluido"]

    const [plant, setPlant] = useState(false)

    function handleSabe() {
        if (open === false) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }



    async function StatusFunction(e) {

        await updateDoc(doc(db, "Agua", IdUpdate), {
            status: e.item
        }).then(navigation.navigate("Agua"))
        if(e.item=="Solicitado"){
            await updateDoc(doc(db, "Agua", IdUpdate), {
                cor: "blue",
            }).then()
        }else if(e.item=="Iniciando"){
            await updateDoc(doc(db, "Agua", IdUpdate), {
                cor: "yellow",
            }).then()
        }else{
            await updateDoc(doc(db, "Agua", IdUpdate), {
                cor: "green",
            }).then()
        }
    }

    
    
    function OpenPlant() {
        if (plant == false) {
            setPlant(true)
            navigation.navigate("HomeEmpreendimento", {
                Emp: Empreendimento,
            })

        } else {
            setPlant(false)
        }
    }

    //</script>

    return (

        <LinearGradient colors={['#18181b', '#27272a', '#333333']} className=" items-center pt-[40px] w-full h-full">

            {open == false ? (
                <>
                    <Text className="text-white text-[24px] font-bold my-4">Informações da Solicitação</Text>

                    <View className="border items-center border-white px-10 py-4">
                        <Text className="text-center text-white">#{route.params.id}</Text>
                        <Text className="text-center text-white">Empreendimento: {route.params.empreendimento}</Text>
                        <Text className="text-center text-white">Quadra: {route.params.quadra}</Text>
                        <Text className="text-center text-white">Lote: {route.params.numero}</Text>

                        <TouchableOpacity onPress={handleSabe} className=" mt-[30px] p-2 w-[50%] rounded border border-[#fdec00] bg-zinc-800">
                            <Text className="text-center text-[15px] text-white">Status: {route.params.status} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={(OpenPlant)} className=" m-1 p-2 w-[50%] rounded border border-[#fdec00] bg-zinc-800">
                            <Text className="text-center text-[15px] text-white">Ver na planta</Text>
                        </TouchableOpacity>


                    </View>
                </>
            ) : (
                <>
                    <Text className="text-white text-[24px] font-bold my-4">Atualizando Solicitação</Text>
                    {Status_Update.map((item, index) => (
                        <TouchableOpacity onPress={() => StatusFunction({ item })} key={index} className=" m-2 p-3 border border-[#fdec00] bg-zinc-800">
                            <Text className="text-center text-[15px] text-white">{item}</Text>
                        </TouchableOpacity>
                    ))}

                </>
            )}



        </LinearGradient>
    )
}