import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTMjQBWiSsRNxL5YGFjLYj6MTrHTJNsXw",
  authDomain: "netflix-clone-2af90.firebaseapp.com",
  projectId: "netflix-clone-2af90",
  storageBucket: "netflix-clone-2af90.appspot.com",
  messagingSenderId: "1009430586314",
  appId: "1:1009430586314:web:0e8b87ac2cb83a011ea533",
};

// this initialises our connection to the firebase application at the backend
// the below variable (i.e. firebaseApp) stores the connection
const firebaseApp = firebase.initializeApp(firebaseConfig);

// below we will make firestore and auth references

// firebaseApp is the variable we just intialised. As the credentials(configuration) was passed in firebase.initializeApp() to intialise the connection, hence it knows which database to refer to.
// firestore is the real time database. It will allow us to keep track of what the user's subscription is.
// this initializes a fire store connection which is stored inside db variable.
// we can use that database object or listen to communicate with the database and documents delete documents and that kind of thing
const db = firebaseApp.firestore();

// This will authenticate the changes that we will make to the database.
// This will initialise the auth service and we are storing the reference in the auth variable.
// so now in the future if we want to sign someone up or lock them out etc we're going to be using methods that are now going to be attached to this constant auth.
const auth = firebase.auth();

// As databse will be modified in other JS files, therefore they will be needing authentication and hence we will export the authentiction from here.
export { auth };

// exporting database stored in db, to modify the database.
export default db;
