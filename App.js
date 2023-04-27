// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// npm install @react-navigation/native --save해줬음
import {NavigationContainer} from '@react-navigation/native';

// bottomtabnavigation은 바꿀거임 우리 앱에 맞게 일단은 사이즈 보려고 넣어둔거임
import BottomTab from './Components/BottomTab';
import Navigation from './Components/StackNavigation';
// import BottomTabNavigationApp from './Navigation/BottomTabNavigationApp';
// import Navigation from './Navigation/Navigation';

// test
// import Test from './Test';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </View>
    // <Test />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

