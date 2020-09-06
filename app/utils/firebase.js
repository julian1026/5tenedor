import firebase from 'firebase/app';

const firebaseConfig={
    apiKey: "AIzaSyC6kBIr_KPM3CsMcxVSOBV_wawxZhPiJrU",
    authDomain: "tenedores-eadcf.firebaseapp.com",
    databaseURL: "https://tenedores-eadcf.firebaseio.com",
    projectId: "tenedores-eadcf",
    storageBucket: "tenedores-eadcf.appspot.com",
    messagingSenderId: "221822588985",
    appId: "1:221822588985:web:67362afc4215d4aa2715e8"
}

export const firebaseApp=firebase.initializeApp(firebaseConfig);