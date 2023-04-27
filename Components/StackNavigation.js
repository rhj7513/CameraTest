import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
// 화면이동 navigator
// npm install @react-navigation/stack --save해줬음
import { createStackNavigator } from '@react-navigation/stack';

// 즐겨찾기 관련 import
import BookMarkScreen from '../Pages/BookMark/BookMarkMain';
import MedicineDetailScreen from '../Pages/Medicine/MedicineDetail';
import Lists from '../Components/Lists';

// 약 관련 import
import MedicineMain from '../Pages/Medicine/MedicineMain';
import MedicineDetail from '../Pages/Medicine/MedicineDetail';

// bottomTab
// import BottomTabNavigationApp from './BottomTabNavigationApp';
import BottomTab from './BottomTab';

const bookMar = 'BookMar';
const medicineDetail = 'MedicineDetail';

// navigation
const Stack = createStackNavigator();

// // 즐겨찾기 navigation
// const StarStack = createStackNavigator();

const MedicinStack = createStackNavigator();

export default function Navigation (){
  return (
    <Stack.Navigator initialRouteName='bottom'>
        <Stack.Screen name='bottom' component={BottomTab} options={ {headerShown:false}} />
        <Stack.Screen name="Main" component={MedicineMain} />
        <Stack.Screen name="Detail" component={MedicineDetail} />
        {/* <StarStack.Screen name={medicineDetail} component={BookMarkScreen} options={{}} />
        <StarStack.Screen  name={bookMar} component={MedicineDetailScreen} options={{}} /> */}
    </Stack.Navigator>
  );
}





// <NavigationContainer>
//       <StarStack.Navigator initialRouteName="star">
//         <StarStack.Screen name="star" component={Star} />
//         <StarStack.Screen name="stardetail" component={StarDetail} />
//       </StarStack.Navigator>
//     </NavigationContainer>
