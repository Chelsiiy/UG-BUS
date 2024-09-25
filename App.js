import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, TextInput, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('./assets/University-of-Ghana.jpg')} 
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.welcomeText}>WELCOME TO LEGON'S BUS SERVICE</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Username" 
            placeholderTextColor="#888" 
          />
          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            secureTextEntry={true} 
            placeholderTextColor="#888"
          />
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20, 
    textAlign: 'center',
  },
  input: {
    borderColor: "black",
    borderWidth: 1, 
    width: 250, 
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff', 
  },
});
