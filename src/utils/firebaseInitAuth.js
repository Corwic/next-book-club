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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



/* import { init } from 'next-firebase-auth'
const initAuth = () => {
  init({
    authPageURL: '/signin',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    firebaseAuthEmulatorHost: 'localhost:9099',
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'my-example-app-id',
        clientEmail: 'example-abc123@my-example-app.iam.gserviceaccount.com',
        // The private key must not be accesssible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: 'https://my-example-app.firebaseio.com',
    },
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyCeMneY7Ght4ChcPGW_zaYrAcmffqE58gI', // required
      authDomain: 'bookclub-54c6d.firebaseapp.com',
      //databaseURL: 'https://my-example-app.firebaseio.com',
      projectId: 'bookclub-54c6d',
    },
    cookies: {
      name: 'BookClub', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
  })
}

export default initAuth



*/