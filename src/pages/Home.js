import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

//IMAGE
import Agua from '../images/Torneira.png'
import Luz from '../images/Luz.png'
import Limpeza from '../images/Limpeza.png'

//COMPONENTS
import Header from '../components/Header'
import LogOut from '../components/LogOut'
import { LinearGradient } from 'expo-linear-gradient'


export default function Home({ navigation }) {

    //<script>
    function NavigationAgua() {
        navigation.navigate("Agua")
    }
    function NavigationLuz() {
        navigation.navigate("Luz")
    }
    function NavigationLimpeza() {
        navigation.navigate("Limpeza")
    }
    const x = [
        {
            image: Agua,
            text: "Agua",
            nav: NavigationAgua
        },
        {
            image: Luz,
            text: 'Luz',
            nav: NavigationLuz
        },
        {
            image: Limpeza,
            text: "Limpeza",
            nav: NavigationLimpeza
        }
    ]

    //</script>
    return (
        <View>
            <Header>
                <LogOut navigation={navigation} />
            </Header>
            <LinearGradient colors={['#27272a', '#333333', '#18181b']}>
                <View className="flex items-center w-full h-full  ">
                    {
                        x.map((item, key) => (

                            <TouchableOpacity key={key} className="mt-[24px]" onPress={item.nav}>
                                <View className="flex flex-col bg-[#FFF607] px-8 py-4 rounded-[10px] items-center hover:scale-105  cursor-pointer">
                                    <Image className='w-[120px] h-[120px]' source={item.image} />
                                    <Text className="text-[24px] font-bold mt-1">{item.text}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }

                </View>
            </LinearGradient>
        </View>
    )
}
