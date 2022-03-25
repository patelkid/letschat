//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDGi4HFDdjDC-GJPNKOWOQLqBZ41Y7UvCM",
    authDomain: "kwitter-7751c.firebaseapp.com",
    databaseURL: "https://kwitter-7751c-default-rtdb.firebaseio.com",
    projectId: "kwitter-7751c",
    storageBucket: "kwitter-7751c.appspot.com",
    messagingSenderId: "655410734197",
    appId: "1:655410734197:web:9492634552a466181d843c"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    function addRoom()
    {
          room_name=document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          
            localStorage.setItem("room_name",room_name);

            window.location="let'schat_room.html"
    }
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="let'schat_room.html";
}

function logout ()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}