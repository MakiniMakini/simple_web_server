//creating a basic server
const port = 3000,
      http = require("http") //This module is saved as a constant because you don’t plan on reassigning the variable.
      httpStatus = require("http-status-codes"),
      //you use the http variable as a reference to the HTTP module to create a server, 
      //using that module’s createServer function, 
      //and store the resulting server in a variable called app.
      app = http.createServer((request, response) => {
          //The createServer function generates a new instance of http.Server,
          // a built-in Node.js class with tools for evaluating HTTP communication. 
          console.log("Received an incoming request!") //You log that a request was received from the client 
          //use the response parameter in the callback function to send content back to the user, from whom you first received a request
          response.writeHead(httpStatus.OK, {
              "Content-Type": "text/html"
          });
          let responseMessage = "<h1> Hello, Universe!</h1>"; //assign a local variable
          response.write(responseMessage);
          response.end();
          console.log('Sent a response : ${responseMessage}') //You also log your response at this point so you can see that a response was sent from the server itself.
      });

      app.listen(port);
         console.log("The sewrver has started and is listening to port number: ${port} ");