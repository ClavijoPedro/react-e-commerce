import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDAcdKKJ7laJ7E_pn_5tO51Ct7BcSCv-Ng",
    authDomain: "react-e-commerce-d2efd.firebaseapp.com",
    projectId: "react-e-commerce-d2efd",
    storageBucket: "react-e-commerce-d2efd.appspot.com",
    messagingSenderId: "361257935332",
    appId: "1:361257935332:web:2d4528171cfc1bbc4227f1"
};
       
const app = initializeApp(firebaseConfig);      
export const getFirebase = () => app;
export { getFirestore };