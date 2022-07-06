import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAkm15JRmuKF7M033y_KyAGTHEKYueR50A',
  authDomain: 'next-typescript-chat.firebaseapp.com',
  projectId: 'next-typescript-chat',
  storageBucket: 'next-typescript-chat.appspot.com',
  messagingSenderId: '1054367301775',
  appId: '1:1054367301775:web:5d2ba473aa0f28e33b70fa',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

if (location.hostname === 'localhost') {
  connectAuthEmulator(auth, 'localhost:9099');
  connectFirestoreEmulator(firestore, 'localhost', 8080);
}

export { auth, firestore };
