import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginScreen from './LoginScreen';
import AboutScreen from './ProfileScreen';
import MainMenuScreen from './MainMenuScreen';
import DetailScreen from './DetailScreen';
import Teams from './TeamsScreen';



const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    primary: '#02C39A',
    background: 'white',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator styles={styles.container} screenOptions={{
    tabBarOptions: {
      style: {
        backgroundColor: '#fff',
        activeColor: '#02C39A'
      },
    },
  }}>
    <Tabs.Screen name="Home" component={MainMenuScreen}/>
    <Tabs.Screen name="Teams" component={Teams} />
    <Tabs.Screen name="Profile" component={AboutScreen} />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home" styles={styles.container}>
    <Drawer.Screen name="Home" component={TabsScreen} />
    {/* <Drawer.Screen name="Profile" component={AboutScreen} /> */}
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none" styles={styles.container}>
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="App" component={DrawerScreen} />
    <RootStack.Screen name="Detail" component={DetailScreen} />
  </RootStack.Navigator>
);

class App extends React.Component {
  render() {
    return (
      <NavigationContainer theme={MyTheme}>
          <RootStackScreen />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
});

export default App

