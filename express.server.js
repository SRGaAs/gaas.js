const express = require('express');
const app = express();

app.use(express.static(__dirname + '/example'));
app.listen(8000, function() {
  console.log('Static server is running on port 8000!');
});
