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

user_name = localStorage.getItem ("user_name");
room_name = localStorage.getItem ("room_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addRoom () {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room_name"
        });
        localStorage.setItem("room_name",room_name);
        window.location = "kwitter_room.html"; 
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id =" + Room_names +  " onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}
getData();

function redirectToRoomName (name) {
      console.log (name);
      localStorage.setItem("room_name", name);
      window.location =  "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_login.html";
      
}

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value = "";
}
