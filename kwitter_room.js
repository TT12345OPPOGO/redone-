
var firebaseConfig = {

      apiKey: "AIzaSyAPzGyjwHE-qo9nZBu0N93E7fL5pQkt4eo",
      authDomain: "kwitter-778e3.firebaseapp.com",
      databaseURL: "https://kwitter-778e3-default-rtdb.firebaseio.com",
      projectId: "kwitter-778e3",
      storageBucket: "kwitter-778e3.appspot.com",
      messagingSenderId: "68090830819",
      appId: "1:68090830819:web:d06229e7d06fa1ea524ad6"
    };

      firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
   window.location = "index.html";
}
