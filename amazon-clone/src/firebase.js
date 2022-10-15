import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
    apiKey: "AIzaSyDlBzoHyU6aNi8sNZ8_ceb3MYlDUnlGkDw",
    authDomain: "clone-35191.firebaseapp.com",
    projectId: "clone-35191",
    storageBucket: "clone-35191.appspot.com",
    messagingSenderId: "388437558275",
    appId: "1:388437558275:web:95947e425c1ba9e483fa36"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore();
  const auth =getAuth();

  export {db,auth};