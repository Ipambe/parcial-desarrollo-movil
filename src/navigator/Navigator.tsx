/*
  ╔════════════════════════════════════╗
  ║   Nombre: Rafael Adolfo Rosa       ║
  ║   Matrícula: 2023-1025             ║
  ╚════════════════════════════════════╝
*/

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/HomeScreen'
import { TablaScreen } from '../screens/Tabla'
import { NumerosScreen } from '../screens/NumerosScreen'

const Stack = createNativeStackNavigator()

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
      />
      <Stack.Screen
        name='Tabla'
        component={TablaScreen}
      />
      <Stack.Screen
        name='Numeros'
        component={NumerosScreen}
      />
    </Stack.Navigator>
  )
}
