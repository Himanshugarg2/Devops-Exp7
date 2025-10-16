const http = require('http');

const options = { host: 'localhost', port: process.env.PORT || 3000, path: '/' };

http.get(options, res => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    try {
      const json = JSON.parse(body);
      if (json.message) {
        console.log('OK');
        process.exit(0);
      } else {
        console.error('Bad response');
        process.exit(1);
      }
    } catch (e) {
      console.error('Not JSON');
      process.exit(1);
    }
  });
}).on('error', e => { console.error(e); process.exit(1); });
