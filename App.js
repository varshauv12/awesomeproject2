import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Packages from './src/Packages';
import 'react-native-gesture-handler';
import RecievingPackages from './src/RecievingPackages';
import SendPackages from './src/SendPackages';
import Pickup from './src/Pickup';
import { firebase } from './config';

// import firebase from 'firebase/app';
// import 'firebase/database';

const Stack = createStackNavigator();
// const firebaseConfig = {
//   apiKey: "AIzaSyDhLsjv_ZZOLOiVFV3I9vo4JzfIFK_aKqU",
//   authDomain: "test-bb52b.firebaseapp.com",
//   projectId: "test-bb52b",
//   storageBucket: "test-bb52b.appspot.com",
//   messagingSenderId: "340575576084",
//   appId: "1:340575576084:web:908d60be8cde67136e0701",
//   measurementId: "G-SBGF871C80"
// };
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export { firebase };
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   databaseURL: 'YOUR_DATABASE_URL',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_STORAGE_BUCKET',
//   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//   appId: 'YOUR_APP_ID',
// };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pickup" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Packages" component={Packages} />
        <Stack.Screen name="RecievingPackage" component={RecievingPackages} />
        <Stack.Screen name="SendPackages" component={SendPackages} />
        <Stack.Screen name="Pickup" component={Pickup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
