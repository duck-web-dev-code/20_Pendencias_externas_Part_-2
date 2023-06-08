import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LimpezaPedido_List(props) {
    //<script>
    const navigation = props.navigation

    //</script>
    return (
        <>
        <TouchableOpacity onPress={()=>navigation.navigate('LimpezaInfoPedido',
        {
            IdMaster:props.IdMaster,
            id:props.id,
            empreendimento:props.empreendimento,
            quadra:props.quadra,
            numero:props.numero,
            status:props.status,
            cor:props.cor,
            nav:navigation
        })}>
            <View className=' flex-row  font-bold p-3 rounded pr-4 my-2 border-solid border-white border-2'>
                <Text className="text-white font-bold w-[5%]">{props.id}</Text>
                <Text className="text-white font-bold w-[36%]">{props.empreendimento}</Text>
                <Text className="text-white font-bold w-[22%]">{props.quadra}</Text>
                <Text className="text-white font-bold w-[22%]">{props.numero}</Text>
                <Text className="text-white font-bold w-[19%]">{props.status}</Text>
            </View>
        </TouchableOpacity>
        
</>
        
    )
}
