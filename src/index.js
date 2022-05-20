import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBHPe5AIwJvMHDDEg3uCIj-XuLa10qWgk4',
  authDomain: 'mundialito-f43cc.firebaseapp.com',
  projectId: 'mundialito-f43cc',
  storageBucket: 'mundialito-f43cc.appspot.com',
  messagingSenderId: '79907307172',
  appId: '1:79907307172:web:389017f826fb0bea4c7031'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
