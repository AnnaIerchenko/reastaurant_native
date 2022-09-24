import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image ,FlatList} from 'react-native';
import RootNavigator from './src/navigation';




export default function App() {
  return (
    <NavigationContainer>
 
     <RootNavigator />
      <StatusBar style='light'/>
    
    </NavigationContainer>
  );
}

