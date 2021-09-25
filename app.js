const http = require('http');

const app = http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('Welcome!\n', 'utf-8');
});

app.listen(3001,  () =>{
  console.log("3001번 포트 서버 성공했어요~~")
});