import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAKOK35j-oe2yWayTvXgyv2Yv3399Jn_HA",
    authDomain: "ecommerce-990c1.firebaseapp.com",
    databaseURL: "https://ecommerce-990c1-default-rtdb.firebaseio.com",
    projectId: "ecommerce-990c1",
    storageBucket: "ecommerce-990c1.appspot.com",
    messagingSenderId: "288119756212",
    appId: "1:288119756212:web:be1320d0e4b91f4e6d8ee1"
  };

const app = getApps.length > 0 ? getApp(): initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export{app, firestore, storage};