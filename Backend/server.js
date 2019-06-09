let express = require('express')
let app = express();
var prompt = require('prompt-sync')();
var watson  = require('watson-developer-cloud');
var workspace = '95670c50-309f-41df-8d89-cba03a8f85e1';

let http = require('http');
let server = http.Server(app);


var assistant = new watson.AssistantV1({
  iam_apikey: 'q9VxJGkTyKa2oV6qb5Wxm1HsAWlNqKHpVq7n8RVfAdnO',
  version: '2018-09-20',
  url: 'https://gateway-lon.watsonplatform.net/assistant/api',
  
});
let socketIO = require('socket.io');
let io = socketIO(server);

const port = 3000;

io.on('connection', (socket) => {
    console.log('user connected'+socket.id);
    socket.on('new-message', (message) => {
      console.log(message);
    });
    assistant.message({
      workspace_id: workspace,
      input: {'text': 'Team members of RMS'}
    },  function(err, response) {
      if (err)
        console.log('error:', err);
      else{

        console.log(JSON.stringify(response, null, 2));
        socket.emit('new-message',response)
      }
        


    });
    
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});

io.on('chat', function(socket){
  socket.broadcast.emit('hi');
});