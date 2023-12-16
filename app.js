const express=require("express");
const app = express();
app.use(express.json());

const {sequelize,User} = require("./models");

const http = require("http"); // Imports the built-in Node.js http module, which is used to create an HTTP server.
const {Server} = require("socket.io"); // Destructures the Server class from the socket.io module. socket.io is a library for real-time web applications, and the Server class is used to create a WebSocket server.

const cors = require('cors');
app.use(cors()); // Enable CORS for all routes
const server = http.createServer(app); // Creates an HTTP server using the Express application (app). This server will handle HTTP requests.

const io = new Server(server,{
    cors:{
        origin:['http://localhost:3000']// client running url 
    },
}); // Creates a new instance of the Server class from socket.io and attaches it to the existing HTTP server (server). It also configures CORS for WebSocket connections. In this case, it allows connections from http://localhost:3000


//create
app.post("/users",async(req,res)=>{
    const {firstName,lastName,email}= req.body
    try {
        // Attempt to create a new user in the database
        const user = await User.create({firstName,lastName,email})

        // Send the created user as a JSON response
        res.send(user)
    } catch (error) {
        // If an error occurs during user creation, log the error and send a 500 Internal Server Error response
        console.log(error)
        res.status(500)
        res.send(error)
    }
})

//retrieve
app.get("/users",async(req,res)=>{
    try {
        // Attempt to create a new user in the database
        const user = await User.findAll()

        // Send the created user as a JSON response
        res.send(user)
    } catch (error) {
        // If an error occurs during user creation, log the error and send a 500 Internal Server Error response
        console.log(error)
        res.status(500)
        res.send(error)
    }
})

//retrieve single record
app.get("/users/:id",async(req,res)=>{
    const idVal= req.params.id
    try {
        const users = await User.findOne({
            where:{id:idVal},
        })
        return res.send(users)
    } catch (error) {
        console.log(error)
        res.status(500)
        res.send(error)
    }
})


app.listen(7000,async ()=>{
    console.log("database connected")
    await sequelize.authenticate() // await sequelize.authenticate() is used to ensure that the Sequelize ORM establishes a connection to the database before starting the Express.js server. If there is an issue with the database connection, an error will be logged to the console, and the server won't be started.
})


io.on("connection", (socket) => {
    console.log("A user connected");
  /*
  EXAMPLE:
    // Notify clients about changes in the database
    Product.afterCreate((product) => {
      io.emit("newProduct", product);
    });
  */
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
});
