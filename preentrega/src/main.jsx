import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/Firebase/firebase.jsx'
import { Firestore } from 'firebase/firestore'
import { FirebaseError } from 'firebase/app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
