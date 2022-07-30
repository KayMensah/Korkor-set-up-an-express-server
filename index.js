//NODE JS - SETTING UP AN EXPRESS SERVER
//: TO DO
//1. INSTALL EXPRESS PACKAGE - yarn add express and run it in the terminal
//RUN yarn add -D nodemon to take care of automatic restarting of the server
//ACCEPT REQUEST
//SEND REQUEST

//.1 //SET UP AN EXPRESS SERVER
const express = require("express");

//.2 CREATE A SERVER FROM THE EXPRESS PACKAGE

const handleAllRequests = (requestObject, responseObject) => {
  console.log("Hi I just received a request");
  const url = requestObject.url;
  responseObject.setHeader("content-type", "text/html");
  responseObject.write("<h1>Page not found</h1>");
  responseObject.end();
};

const handleHomeRequest = (req, res) => {
  res.send("<h1>Welcome to my Home page</h1>");
};

const handleLoginRequest = (req, res) => {
  res.send("<h1>Welcome to my Login page</h1>");
};

const handleSignupRequest = (req, res) => {
  res.send("<h1>Welcome to my Sign Up page</h1>");
};

const handleProfileRequest = (req, res) => {
  res.send("<h1>Welcome to my Profile page</h1>");
};

const server = express();

//REGISTER EACH OF THE SPECIFIC ROUTES WITH THE server.use() method
//START THE SERVER
server.use("/profile", handleProfileRequest);
server.use("/login", handleLoginRequest);
server.use("/signup", handleSignupRequest);
server.use("/", handleHomeRequest);
server.use(handleAllRequests);
server.listen(3000, () => {
  console.log("Korkor's server is ready to accept a request");
});
