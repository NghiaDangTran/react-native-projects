import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Category from './screens/Category';
import { NavigationContainer, } from '@react-navigation/native'
import { createNativeStackNavigator, } from '@react-navigation/native-stack'
import Meal from './screens/Meal';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style='light'></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Category" component={Category}
          
          options={{title:'All Categories'}} >

            {/* <Category></Category> */}
          </Stack.Screen>
          <Stack.Screen name="Meal" component={Meal}>

          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    </>
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
