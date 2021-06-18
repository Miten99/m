var firebaseConfig = {
    apiKey: "AIzaSyDHnmNHS90v1paHOTcxQ6vL3WzlVK5gl-I",
    authDomain: "website-project-aaf0b.firebaseapp.com",
    databaseURL: "https://website-project-aaf0b-default-rtdb.firebaseio.com",
    projectId: "website-project-aaf0b",
    storageBucket: "website-project-aaf0b.appspot.com",
    messagingSenderId: "742291424009",
    appId: "1:742291424009:web:a2087ca8f7b4a70c0d49d8"
}
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}
