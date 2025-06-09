/*
  ╔════════════════════════════════════╗
  ║   Nombre: Rafael Adolfo Rosa       ║
  ║   Matrícula: 2023-1025             ║
  ╚════════════════════════════════════╝
*/

import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { Screen } from 'react-native-screens'

interface HomeScreenProps {
  navigation: {
    navigate: (ruta: string) => void
  }
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <Screen style={styles.screen}>
      <Text style={styles.title}>Home screen</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tabla')}
        >
          <Text style={styles.buttonText}>Navegar a la tabla</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Numeros')}
        >
          <Text style={styles.buttonText}>Navegar a los numeros</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.profileContainer}
        onPress={() => Linking.openURL('https://github.com/Ipambe')}
      >
        <Image
          source={require('../assets/adolfo.png')}
          style={styles.image}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Rafael Adolfo Rosa</Text>
          <Text style={styles.profileSubtle}>Developer</Text>
        </View>
      </TouchableOpacity>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16
  },
  title: {
    fontSize: 32,
    marginBottom: 16
  },
  buttonsContainer: {
    flex: 1,
    gap: 8
  },
  button: {
    backgroundColor: '#3bf',
    padding: 10,
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 24
  },
  profileContainer: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 100,
    gap: 20
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 100
  },
  profileInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 4
  },
  profileName: {
    color: 'white',
    fontSize: 24,
    fontStyle: 'italic'
  },
  profileSubtle: {
    color: '#ccc',
    fontSize: 20,
    fontStyle: 'italic'
  }
})
