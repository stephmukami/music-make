require("dotenv").config();

const express = require('express');
const createError = require("http-errors");
const path = require('path');
const methodOverride = require("method-override");
const morgan = require('morgan');  // Require morgan for logging
const osc = require('node-osc'); // Import node-osc

const app = express();

const cors = require('cors');
app.use(cors());


const port = parseInt(process.env.PORT) || process.argv[3] || 8080;



// OSC Setup
const oscClient = new osc.Client('127.0.0.1', 4560); // Sonic Pi's default OSC port is 4560. Change IP if Sonic Pi is on a different machine.
oscClient.on('error', (err) => {
  console.error('OSC Client Error:', err);
});

// Route to change transpose value
app.post('/api/set-transpose', (req, res) => {
  const transposeValue = req.body.transpose; // Get the transpose value from the request body

  if (typeof transposeValue === 'number') { // Validate input
    // Send OSC message to Sonic Pi
    oscClient.send('/set_transpose', transposeValue, (err) => { // Assuming you've set up a /set_transpose handler in Sonic Pi
      if (err) {
        console.error('Error sending OSC message:', err);
        res.status(500).json({ error: 'Error setting transpose value' });
      } else {
        console.log(`Transpose value set to: ${transposeValue}`);
        res.json({ message: 'Transpose value updated successfully' });
      }
    });
  } else {
    res.status(400).json({ error: 'Invalid transpose value. Must be a number.' });
  }
});




// Middleware
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));
app.use(morgan("dev"));  // Use morgan for logging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/api/music-make", (req, res) => {
  res.json({"msg": " you are successfully accessing music make"});
});



// Accessing modular routes
const airtimeRouter = require("./routes/airtime");
app.use("/api/send-ui-airtime", airtimeRouter);

// Error handling
// 404 page
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

module.exports = app;
// Start server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
