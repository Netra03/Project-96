
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAmTdA-QYJHRIsDoD-UGST9cBdrdJtHjv8",
      authDomain: "kwiter-10734.firebaseapp.com",
      databaseURL: "https://kwiter-10734-default-rtdb.firebaseio.com",
      projectId: "kwiter-10734",
      storageBucket: "kwiter-10734.appspot.com",
      messagingSenderId: "369207307028",
      appId: "1:369207307028:web:7d7e917db998138360b001"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + " !";

    function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class = 'room_name' id=" + Room_names + " onclick ='redirect(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function rediectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}