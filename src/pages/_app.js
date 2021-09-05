import '../styles/globals.scss'
import { Provider } from 'react-redux'
import store from '../store'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeMneY7Ght4ChcPGW_zaYrAcmffqE58gI",
    authDomain: "bookclub-54c6d.firebaseapp.com",
    projectId: "bookclub-54c6d",
    storageBucket: "bookclub-54c6d.appspot.com",
    messagingSenderId: "826775187385",
    appId: "1:826775187385:web:5475a81d16473e3f121068",
    measurementId: "G-BBN6D5690F"
  };

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={ store }>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
