import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Curso de Node.js');
});

server.listen(PORT, () => {
  console.log('servidor escutando!');
  console.log(`http://localhost:${PORT}`)
});
