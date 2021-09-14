import '../styles/globals.scss'
import { Provider } from 'react-redux'
import store from '../store'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from '../utils/firebaseConfig'
import { useUser } from '../auth'

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }) {
  const { isLoading, user } = useUser()
  const isAuthed = Component.isAuthed || ((page) => page)
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <Provider store={ store }>
      {getLayout(isAuthed(<Component {...pageProps} user={user} isLoading={isLoading} />))}
    </Provider>
  )
}

export default MyApp
