import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
    //firebase config
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore();
  const auth =getAuth();

  export {db,auth};
