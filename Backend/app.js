let express = require('express')
let app = express();
var prompt = require('prompt-sync')();
var watson  = require('watson-developer-cloud');
var workspace = '95670c50-309f-41df-8d89-cba03a8f85e1';
var input;
let http = require('http');
let server = http.Server(app);

var assistant = new watson.AssistantV1({
    iam_apikey: 'q9VxJGkTyKa2oV6qb5Wxm1HsAWlNqKHpVq7n8RVfAdnO',
    version: '2018-09-20',
    url: 'https://gateway-lon.watsonplatform.net/assistant/api',
    
  });
let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

// io.on('connection', (socket) => {
//     console.log('user connected');
//     socket.on('disconnect', function(){
//         console.log('user disconnected');
//       });
// });

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});

io.on('connection', function(socket){
    
      console.log('message: ' + socket);
      input= msg;
      assistant.message({
        workspace_id: workspace,
        input: {'text': input}
      },  function(err, response) {
        if (err)
          console.log('error:', err);
        else
          console.log(JSON.stringify(response, null, 2));
      });

      
    
  });












