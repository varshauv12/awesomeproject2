// import { firebase } from "@react-native-firebase/firestore";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDhLsjv_ZZOLOiVFV3I9vo4JzfIFK_aKqU",
    authDomain: "test-bb52b.firebaseapp.com",
    projectId: "test-bb52b",
    storageBucket: "test-bb52b.appspot.com",
    messagingSenderId: "340575576084",
    appId: "1:340575576084:web:908d60be8cde67136e0701",
    measurementId: "G-SBGF871C80"
};
  // Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};
