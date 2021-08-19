import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCnEIXsuPHfmvhdzyugOxVwFaSMpap2-NY',
  authDomain: 'peru-neutro.firebaseapp.com',
  databaseURL: 'https://peru-neutro-default-rtdb.firebaseio.com',
  projectId: 'peru-neutro',
  storageBucket: 'peru-neutro.appspot.com',
  messagingSenderId: '401782634973',
  appId: '1:401782634973:web:19945e07bf3aad398f5e34',
  measurementId: 'G-RG3RTF2VDW',
};

// Initialize Firebase

const peruNeutro = firebase.initializeApp(firebaseConfig);
const db = peruNeutro.database();
const auth = peruNeutro.auth();

export { db, authAdmin, auth };
