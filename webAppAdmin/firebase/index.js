import {initializeApp} from 'firebase/app';
import {getStorage, setStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC_XedgmH1RX2sKRIVp4ErR9XDhdx4UEow",
  authDomain: "monepas-d56a2.firebaseapp.com",
  projectId: "monepas-d56a2",
  storageBucket: "monepas-d56a2.appspot.com",
  messagingSenderId: "787743293088",
  appId: "1:787743293088:web:47a262e7edba30e9c9d3c5",
  measurementId: "G-767091NJTH"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);