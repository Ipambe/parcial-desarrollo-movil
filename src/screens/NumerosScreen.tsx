/*
  ╔════════════════════════════════════╗
  ║   Nombre: Rafael Adolfo Rosa       ║
  ║   Matrícula: 2023-1025             ║
  ╚════════════════════════════════════╝
*/

import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Screen } from 'react-native-screens'

export const NumerosScreen = () => {
  const [numeros, setNumeros] = useState({
    first: '',
    second: '',
    third: ''
  })

  const numerosChange = (key: keyof typeof numeros, value: string) => {
    if (!/^\d*$/.test(value)) return

    switch (key) {
      case 'first':
        setNumeros({ ...numeros, first: value })
        break

      case 'second':
        setNumeros({ ...numeros, second: value })
        break

      case 'third':
        setNumeros({ ...numeros, third: value })
        break
      default:
        break
    }
  }

  const numerosArray = [+numeros.first, +numeros.second, +numeros.third]

  const max = Math.max(...numerosArray)
  const min = Math.min(...numerosArray)
  const avg = (
    numerosArray.reduce((a, b) => a + b) / numerosArray.length
  ).toFixed(2)

  return (
    <Screen style={styles.screen}>
      <View style={styles.inputsContainer}>
        <TextInput
          value={numeros.first}
          onChangeText={(text) => numerosChange('first', text)}
          placeholder='Introduce el primer numero'
          placeholderTextColor='gray'
          style={styles.input}
          keyboardType='numeric'
        />
        <TextInput
          value={numeros.second}
          onChangeText={(text) => numerosChange('second', text)}
          placeholder='Introduce el segundo numero'
          placeholderTextColor='gray'
          style={styles.input}
          keyboardType='numeric'
        />
        <TextInput
          value={numeros.third}
          onChangeText={(text) => numerosChange('third', text)}
          placeholder='Introduce tercer numero'
          placeholderTextColor='gray'
          style={styles.input}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.results}>
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Más grande</Text>
          <Text style={styles.boxResult}>{max}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Más pequeño</Text>
          <Text style={styles.boxResult}>{min}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Promedio</Text>
          <Text style={styles.boxResult}>{avg}</Text>
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 10 },
  inputsContainer: { gap: 10 },

  input: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    fontSize: 24,
    color: 'white'
  },
  results: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    gap: 30
  },
  box: {
    flex: 1,
    height: 100,
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  boxTitle: {
    fontSize: 16,
    color: '#eee',
    marginBottom: 10
  },
  boxResult: {
    color: 'white',
    fontSize: 24
  }
})
