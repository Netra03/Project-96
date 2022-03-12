//YOUR FIREBASE LINKS
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
      room_name = localStorage.getItem("room_name");

      function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}     
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}