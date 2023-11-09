const express = require('express'); 
const app = express(); 
const firebase = require("firebase/app"); 
const port = 4000; 

const firebaseConfig = {
    apiKey: "AIzaSyBfBYUXbmoBI8mNernPXT94hcgplqylQHo",
    authDomain: "exercise-five-fall2023.firebaseapp.com",
    projectId: "exercise-five-fall2023",
    storageBucket: "exercise-five-fall2023.appspot.com",
    messagingSenderId: "979464080464",
    appId: "1:979464080464:web:b826d7e98a837a3b9a1555"
  };

firebase.initializeApp(firebaseConfig); 

const indexRoute = require("./routes/index"); 
const singlePostRoute = require('./routes/singlePost'); 
//const createPostRoute = require('./routes/createPost'); 

app.use("/", indexRoute); 
app.use("/post", singlePostRoute); 


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  }); 