import '../styles/globals.scss'
import { Provider } from 'react-redux'
import store from '../store'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from '../utils/firebaseConfig'

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
