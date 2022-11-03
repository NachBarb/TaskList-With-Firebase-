import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyCpLNL35u36M6j6BBx16silCYp8CuHW750",
    authDomain: "task-list-nb.firebaseapp.com",
    projectId: "task-list-nb",
    storageBucket: "task-list-nb.appspot.com",
    messagingSenderId: "17486751855",
    appId: "1:17486751855:web:9db03e2b6963bded47859a"
};

export default firebase.initializeApp(firebaseConfig);