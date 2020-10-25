import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './components/index'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

let customFonts ={
  'bold': require('./assets/fonts/Poppins-Medium.ttf'),
  'regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'medium': require('./assets/fonts/Poppins-Medium.ttf'),

};

class App extends React.Component {
  state = {
    fontsLoaded: false,
  };
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <Index />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App
