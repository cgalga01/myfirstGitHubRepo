import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListOfRecipes from './ListOfRecipes';
import RecipeDetail from './RecipeDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
     <Stack.Navigator initialRouteName='Home'>
     <Stack.Screen name='Home' component={ListOfRecipes} />
     <Stack.Screen name='Recipe' component={RecipeDetail} />  
     </Stack.Navigator>    
   </NavigationContainer> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

