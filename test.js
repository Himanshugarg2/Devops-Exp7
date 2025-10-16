const http = require('http');

const options = { host: 'localhost', port: process.env.PORT || 3000, path: '/' };

http.get(options, res => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(body);
      if (json.message && json.message.includes('Hello')) {
        console.log(' Test passed');
        process.exit(0);
      } else {
        console.error(' Test failed: unexpected response');
        process.exit(1);
      }
    } catch (err) {
      console.error(' Not JSON or parse error:', err.message);
      process.exit(1);
    }
  });
}).on('error', err => {
  console.error(' Connection error:', err.message);
  process.exit(1);
});

