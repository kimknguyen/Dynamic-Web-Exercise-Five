const express = require('express'); 
const router = express.Router(); 
const firestore = require("firebase/firestore"); 
const db = firestore.getFirestore(); 


const submitForm = `
    <form action="/create/submit">
        <label> Title
            <input type="text" name="postTitle" placeholder="put title here" />
        </label>

        <label> Text
            <input type="text" name="postText" />
        </label>

        <label> Author
            <input type="text" name="author" />
        </label>

            <button type= "submit">Submit</button>
    </form>

`

router.get('/', (req, res) => {
    res.send(submitForm); 
    }); 
  
router.get('/submit', (req, res) => {
    const queryParams = req.query; 
    const title = queryParams.postTitle; 
    const text = queryParams.postText; 
    const author = queryParams.author; 

    const id = title.replace(/\s+/g, "-").toLowerCase(); 

    const setBlogPost = firestore.setDoc(firestore.doc(db, "posts", "hi"), {
        postTitle: title, 
        postText: text, 
        author: author, 
        }); 

    setBlogPost
    .then(() => {
        res.send(`

            <h1>thanks</h1> 
            <p><a href="/create">Submit another post</a>.</p> 
    
            `); 
        })

    .catch((error) => {
        console.warn(error); 
        res.send(`Error: Submitting:${error.toString()}` )

            
        })
    
    });



module.exports = router; 
