import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAdOvpXRc2mUYpX9aOaHsO_Gw3kFhdMW1E",
    authDomain: "hackathon-1-520e3.firebaseapp.com",
    projectId: "hackathon-1-520e3",
    storageBucket: "hackathon-1-520e3.appspot.com",
    messagingSenderId: "963927553828",
    appId: "1:963927553828:web:879d50ca9e14be4526a5b1",
    measurementId: "G-C2QCYL7BMQ"
});

export const db = firebaseApp.firestore();