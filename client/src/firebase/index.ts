// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import firebaseui from 'firebaseui'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEANSUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

// データベースを初期化する
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
// const ui = new firebaseui.auth.AuthUI(auth);
export { db, auth, provider }
