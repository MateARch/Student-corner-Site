import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSdyTt1ySDS4JMI_716_AtaLd40S521IM",
  authDomain: "studentcorner-288114.firebaseapp.com",
  databaseURL: "https://studentcorner-288114.firebaseio.com",
  projectId: "studentcorner-288114",
  storageBucket: "studentcorner-288114.appspot.com",
  messagingSenderId: "32149342257",
  appId: "1:32149342257:web:8680ecc68bc9c934582d10",
  measurementId: "G-8HGWCJTRNQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebaseApp.firestore();
export {auth , db , firebaseApp};