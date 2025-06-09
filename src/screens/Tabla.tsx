/*
  ╔════════════════════════════════════╗
  ║   Nombre: Rafael Adolfo Rosa       ║
  ║   Matrícula: 2023-1025             ║
  ╚════════════════════════════════════╝
*/

import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Screen } from 'react-native-screens'

export const TablaScreen = () => {
  const [inputValue, setInputValue] = useState('')

  const inputValueChange = (value: string) => {
    if (/^\d*$/.test(value)) setInputValue(value)
  }

  const numeros = Array.from({ length: 14 }, (_, i) => i + 1)

  return (
    <Screen style={styles.screen}>
      <View style={styles.tablaContainer}>
        <View style={styles.tabla}>
          {numeros.map((e) => (
            <Text
              key={e}
              style={styles.tablaRow}
            >
              {e} x {inputValue} = {e * +inputValue}
            </Text>
          ))}
        </View>
      </View>
      <TextInput
        value={inputValue}
        onChangeText={inputValueChange}
        placeholder='Introduce un numero'
        placeholderTextColor='gray'
        style={styles.input}
        keyboardType='numeric'
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 10 },
  tablaContainer: {
    flex: 1
  },
  tabla: {
    backgroundColor: '#333',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    gap: 20
  },
  tablaRow: {
    fontSize: 18,
    color: 'white'
  },
  input: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    fontSize: 24,
    color: 'white'
  }
})
