
import { View, Text } from 'react-native'
import React, { useState } from 'react'

//NAVIGATION
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//COMPONENTS
import Animation from './src/components/Animation'


//PAGES
import Login from './src/pages/Login'
import Home from './src/pages/Home'

//AGUA
import Agua from './src/pages/Agua/Agua'
import InfoPedido from './src/pages/InfoPedido'
import HomeEmpreendimento from './src/components/HomeEmpreendimento'

//LIMPEZA
import Limpeza from './src/pages/Limpeza/Limpeza'
import LimpezaInfoPedido from './src/pages/Limpeza/LimpezaInfoPedido'
import LimpezaHomeEmpreendimento from './src/pages/Limpeza/LimpezaHomeEmpreendimento'

//LUZ
import Luz from './src/pages/Luz/Luz'
import LuzHomeEmpreendimento from './src/pages/Luz/LuzHomeEmpreendimento'
import LuzInfoPedido from './src/pages/Luz/LuzInfoPedido'




export default function App() {
  const [Trocar, setTrocar] = useState(true)

  const Stack = createStackNavigator()
  // function eve(){
  //   setTrocar(true)
  // }
  // setTimeout(eve, 8000)


  //</script>
  return (
    <>
      {Trocar === true ?
        (
          <NavigationContainer>
             <Stack.Navigator>
               <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} /> 
               <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />

               <Stack.Screen options={{ headerShown: false }} name='Agua' component={Agua} />
               <Stack.Screen name='HomeEmpreendimento' options={{ headerShown: false }} component={HomeEmpreendimento} />
               <Stack.Screen name='InfoPedido' options={{ headerShown: false }} component={InfoPedido} />


               <Stack.Screen options={{ headerShown: false }} name='Luz' component={Luz} />
               <Stack.Screen options={{ headerShown: false }} name='LuzHomeEmpreendimento' component={LuzHomeEmpreendimento} />
               <Stack.Screen options={{ headerShown: false }} name='LuzInfoPedido' component={LuzInfoPedido} /> 



               <Stack.Screen options={{ headerShown: false }} name='Limpeza' component={Limpeza} />
               <Stack.Screen name='LimpezaInfoPedido' options={{ headerShown: false }} component={LimpezaInfoPedido} />
               <Stack.Screen name='LimpezaHomeEmpreendimento' options={{ headerShown: false }} component={LimpezaHomeEmpreendimento} /> 

             </Stack.Navigator>
           </NavigationContainer>


        )
        : (
          <View className="flex-1 items-center justify-center">
            <Animation/>
          </View>
        )
      }
    </>
  )
}