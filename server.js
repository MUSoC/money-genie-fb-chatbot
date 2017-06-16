
                var http = require('http');
                var fs = require('fs');
                //404 respnse
                function send404response(response){
                    response.writeHead(404 , {"Content-Type": "text/plain"});
                    response.write("Error 404: Page not found");
                    response.end();
                }

                function onRequest(request, response) {
                  if (request.method == 'GET' && request.url== '/'){
                      response.writeHead( 200 ,{"Content-Type": "text/html"});
                      fs.createReadStream("./serv.html").pipe(response);
                  }
                  else{
                      send404response(response);

                  }
                }
                http.createServer(onRequest).listen(9650);
                console.log("Server is now running...");