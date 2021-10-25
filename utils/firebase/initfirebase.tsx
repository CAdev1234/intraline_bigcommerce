import { getAuth } from '@firebase/auth'
// import { initializeApp, getApps } from 'firebase/app'

import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app'
import { firebaseConfig } from './constants'

let firebaseApp: FirebaseApp

// if(getApps().length) {
//     firebaseApp = getApp()
// }else {
//     firebaseApp = initializeApp(firebaseConfig, 'intraline')
// }

firebaseApp = initializeApp(firebaseConfig, 'intraline')

export default firebaseApp