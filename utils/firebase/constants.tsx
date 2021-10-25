export const firebaseConfig = {
    apiKey: "AIzaSyDPp0mkAm0e5tGxfY-Ec8MNoYk7M42HP20",
    authDomain: "intraline-fbe11.firebaseapp.com",
    projectId: "intraline-fbe11",
    storageBucket: "intraline-fbe11.appspot.com",
    messagingSenderId: "779522276800",
    appId: "1:779522276800:web:13e842937557f9992d5c25",
    measurementId: "G-35NFNMWCRY"
}

export const login_actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
    bundleId: 'com.example.ios'
    },
    android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
}