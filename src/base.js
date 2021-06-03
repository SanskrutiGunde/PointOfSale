import Rebase from "re-base";
import firebase from "firebase";
let ApiKey;
if (process.env.NODE_ENV !== "production") {
  ApiKey = process.env.REACT_APP_API_KEY;
} else {
  ApiKey = process.env.POS_API_KEY;
}

const firebaseApp = firebase.initializeApp({
  apiKey: ApiKey,
  authDomain: "catch-of-the-day-sok.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-sok-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//named export

export { firebaseApp };

//default export

export default base;
