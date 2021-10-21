import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyB3uuZisR1fbMLXgED6lpROwIvABAUaglo",
  authDomain: "instaclone-76ef5.firebaseapp.com",
  projectId: "instaclone-76ef5",
  storageBucket: "instaclone-76ef5.appspot.com",
  messagingSenderId: "404078283741",
  appId: "1:404078283741:web:890b7aa250747a6a7f8434"
});

const auth=firebase.auth();
const storage=firebase.storage();

export {storage,auth};