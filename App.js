import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('./assets/University-of-Ghana.jpg')} 
        style={styles.background}
      >
        <Text>WELCOME TO LEGON'S BUS SERVICE</Text>
        <TextInput 
          style={styles.area} 
          placeholder="Username" 
          placeholderTextColor="#888" 
        />
        <TextInput 
          style={styles.area} 
          placeholder="Password" 
          secureTextEntry={true} 
          placeholderTextColor="#888"
        />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  area: {
    borderColor: "black",
    borderWidth: 1, 
    width: 120,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
    marginVertical: 10, 
  },
});
