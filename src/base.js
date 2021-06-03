import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB6zLeT5qmPATz8XPQZWECTryRk2CrgmvY",
  authDomain: "catch-of-the-day-sok.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-sok-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//named export

export { firebaseApp };

//default export

export default base;
