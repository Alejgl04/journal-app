// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvs } from '../helpers/getEnvs';

const{
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvs();

// Testing
const firebaseConfig = {
  apiKey:VITE_APIKEY,
  authDomain:VITE_AUTHDOMAIN,
  projectId:VITE_PROJECTID ,
  storageBucket:VITE_STORAGEBUCKET,
  messagingSenderId:VITE_MESSAGINGSENDERID, 
  appId:VITE_APPID,
}
// const firebaseConfig = {
//   apiKey: "AIzaSyDx0n9PnhKO6MK8FIbP7-l22DtYJA_EK3U",
//   authDomain: "react-course-153f1.firebaseapp.com",
//   projectId: "react-course-153f1",
//   storageBucket: "react-course-153f1.appspot.com",
//   messagingSenderId: "1020685827022",
//   appId: "1:1020685827022:web:f498c6816cd95cd951899f"
// }

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDx0n9PnhKO6MK8FIbP7-l22DtYJA_EK3U",
//   authDomain: "react-course-153f1.firebaseapp.com",
//   projectId: "react-course-153f1",
//   storageBucket: "react-course-153f1.appspot.com",
//   messagingSenderId: "1020685827022",
//   appId: "1:1020685827022:web:2ca52f1a1b45455d51899f"
// };

// Initialize Firebase
export const firebaseApp  = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth( firebaseApp );
export const firebaseDb   = getFirestore( firebaseApp );