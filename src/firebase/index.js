import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyDargjRYa9qfuubJBY3vx1ivsf9ex2M_AY",
    authDomain: "reactnativetrial-6f71b.firebaseapp.com",
    databaseURL: "https://reactnativetrial-6f71b.firebaseio.com",
    projectId: "reactnativetrial-6f71b",
    storageBucket: "reactnativetrial-6f71b.appspot.com",
    messagingSenderId: "347113876403",
    appId: "1:347113876403:web:88838be58ef4f803"
  };
  // Initialize Firebase

export const Fire = firebase.initializeApp(firebaseConfig);