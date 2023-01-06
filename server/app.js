const express = require('express');
const app = express();
// Your code here

const port = 5005;
app.listen(port, () => console.log('Server is listening on port', port));

app.use('/', express.static('assets'));
app.use('/', express.static('assets/scripts'));
// app.use('/stylesheets', express.static('assets/css'));
app.use("/stylesheets", express.static(`${__dirname}/assets/css`));



// home page
app.get('/assets/css/application.css', (req, res,) => {
  console.log('Route handler');
  // res.status(200).send('Hello for now')
  res.sendFile(__dirname + '/assets/css/application.css');
  // res.send('Welcome')
});


// app.use(express.static(`${__dirname}/assets/scripts`));
// app.use("/scripts", express.static(`assets/scripts`));