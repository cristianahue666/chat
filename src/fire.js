import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCtQWWqHi0Jr9KntlH7-FW_p2YY-cTrH-M",
    authDomain: "vue-firebase-cris.firebaseapp.com",
    databaseURL: "https://vue-firebase-cris.firebaseio.com",
    projectId: "vue-firebase-cris",
    storageBucket: "vue-firebase-cris.appspot.com",
    messagingSenderId: "469947355450"
  }
firebase.initializeApp(config)
var auth = firebase.auth()
var database = firebase.database()


export {
    auth,
    database

}
 