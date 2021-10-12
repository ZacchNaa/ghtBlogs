import firebase from "firebase/app";
import "firebase/firestore"


const firebaseConfig = {
	apiKey: "AIzaSyCKghSr84W40SMSa6dmJPqF0zghKByfMPk",
	authDomain: "ghtblogs.firebaseapp.com",
	projectId: "ghtblogs",
	storageBucket: "ghtblogs.appspot.com",
	messagingSenderId: "845129898434",
	appId: "1:845129898434:web:a09b00c0ee22deddedde5b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()
