import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

//IMAGE
import Logo from '../images/Logo.jpg'

//COMPONENTS
import Input from '../components/Input'

//GRADIENTE
import { LinearGradient } from 'expo-linear-gradient'

//FIREBASE
import { auth } from '../../server/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login({navigation}) {
    //<script>
    const [email, setEmail] = useState("ikaroassis08@gmail.com")
    const [senha, setSenha] = useState("ikaroass")

     async function handleLogin(){        
        if (email === '' || senha === "") {
          Alert.alert("[ERRO] Preencha Todos os Campos")
          return;
        }
        await signInWithEmailAndPassword(auth,email,senha)
        .then(()=>{
            Alert.alert("[SUCESSO] Usuário Logado")
            navigation.navigate("Home")
  
          }).catch(()=>{
            Alert.alert("[ERRO] Algo deu Errado")
          })
    }

    //</script>

  return (
    <>
        <LinearGradient colors={['#27272a','#333333','#18181b']}>
                <View  className="h-full items-center justify-center ">
                    <Image source={Logo} className="w-[130px] h-[130px] rounded-full  mt-[-100px] mb-[30px]" />
                    <View className="w-[260px]">
                        <Input placeholder='Digite o seu email...' type="email" value={email} onChangeText={setEmail} />
                        <Input placeholder='********' secureTextEntry={true} value={senha} onChangeText={setSenha} />

                        <TouchableOpacity onPress={handleLogin} className='h-[36px] rounded border-none bg-[#FFF607] justify-center  '>
                            <Text className="text-[18px] text-black font-medium text-center ">Acessar</Text>
                        </TouchableOpacity>
                        <Text className="text-white"></Text>
                    </View>
                </View>    
                </LinearGradient>
        </>
  )
}