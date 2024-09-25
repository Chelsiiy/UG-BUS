import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <image source="./university-of-ghana/assets"></image>
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
