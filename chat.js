
const firebaseConfig = {
    apiKey: "AIzaSyDKhI8qr8zI5xrNMMSTwOg2HwXFZqQ9LXg",
    authDomain: "lets-chat-54edd.firebaseapp.com",
    databaseURL: "https://lets-chat-54edd-default-rtdb.firebaseio.com",
    projectId: "lets-chat-54edd",
    storageBucket: "lets-chat-54edd.appspot.com",
    messagingSenderId: "208012962328",
    appId: "1:208012962328:web:b3b81e654a0b23fa04b16d",
    measurementId: "G-E2BKNXR936"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}


