/**
 * index.js
 *
 */
"use strict";
console.log("Hello from index.js");
// press
const express = require("express");
const path = require("path");



const homeRouter = require("./routes/public/homeRouter");
const accountRouter = require("./routes/account/accountRouter");
const app = express();
// middleware
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.urlencoded({extended: false}));
// set folder named, public as the src folder for all static content
app.use("/static", express.static(path.join(__dirname, "public")));


// app.get("/", (req, res) => { 

//     res.sendFile(path.join(__dirname + "/views/index.html"));
    
// });

app.use("", homeRouter); 
app.use("/account", accountRouter);



const PORT_NUMBER = 8080;

app.listen(PORT_NUMBER, () => {
    console.log(`Server is listening on port ${PORT_NUMBER}`);
}   );