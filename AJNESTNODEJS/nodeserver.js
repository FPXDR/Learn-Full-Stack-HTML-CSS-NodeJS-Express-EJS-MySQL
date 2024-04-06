const express = require('express') // install express: Terminal > npm install express -- save
const app = express()
const port = 8080

//Define Variables
let id = 654100223499;
let status = "Single";
//Add Variables
let user_list = [
    { name : "Nester", address: "BKK" , birth_year: 2003},
    { name: "Parin", address : "SKN", birth_year: 1997},
    { name: "FLUKE", address: "KHH", birth_year: 1998}
];


//Add Frontend and Backend
var frontend = [
    {topinfo : "Front End Developer",
    infoskill1 : "Front End Developer Program  developer for the home page (HTML,CSS JavaScript)"
    }
];

var backend = [
    {topinfo2: "Back End Developer",
    infoskill2: "Back End Developer Program  developer for the Database (Python, JavaScript, NodeJS, MySQL)"
    }
];

//Add Resume Fonts Variables
var contrntfront1 = "I'am Parin Wattnaklang"
var contrntfront2 = "a Full Stack Developer"
var contrntfront3 = "Full Stack Web Development a developer or  engineer who can build both the front end  and the back end of a website. (HTML CSS NodeJS Express EJS MySQL)"


//obj_user_list
//Set and Call Ejs
app.set('view engine' , 'ejs')

//Connect public folder
app.use(express.static('public'))

//Creating App --> Pointer(=> {Object})
//Back-End NodeJs Display
app.get("/Hello",(req,res) =>{
    res.send("Hello NodeJs")
})
//New Font-End EJS Show HTML Display
app.get("/",(req, res) =>{
    res.render('index',{userid : id, status : status, obj_user_list : user_list})
})

//Connect index2.ejs
app.get("/index2", (req,res)=>{
    res.render('index2', {
        obj_Frontend: frontend,
        obj_Backend: backend,
        contrntfront1 : contrntfront1,contrntfront2: contrntfront2, contrntfront3: contrntfront3
    })
})

//Open Server
app.listen(port,() =>{
    console.log("Server is Listening on port: " , port)
})