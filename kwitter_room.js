var firebaseConfig = {
    apiKey: "AIzaSyCFspEezmLw3KYfRRriImUfhzleLG5JfTM",
    authDomain: "kwitter-project-fbd0c.firebaseapp.com",
    databaseURL: "https://kwitter-project-fbd0c-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-fbd0c",
    storageBucket: "kwitter-project-fbd0c.appspot.com",
    messagingSenderId: "68979369871",
    appId: "1:68979369871:web:3bdf4c3f11d5a042964dfa",
    measurementId: "G-PM83E8C8DQ"
  };

  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
  function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
  
function getData() {  firebase.database().ref("/").on('value', function (snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
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

