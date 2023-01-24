import * as React from 'react';
import { useState, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import WebView from 'react-native-webview';
import { View, StatusBar } from 'react-native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return(
  <View style= {{flex: 1}}>
    <StatusBar barStyle= "dark-content" backgroundColor={'#ffffff'} />
    <WebView source={{uri: 'https://www.v-order.com.co/admin/restaurantes'}} style = {{marginTop: 20}} />
    </View>
  );
}
export default App;
