// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Review = require('./reviews');

const app = express();
const port = 3003;

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mern-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB database');
});

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get('/api/reviews', (req, res) => {
  Review.find()
    .then((reviews) => res.json(reviews))
    .catch((error) => res.status(400).json('Error: ' + error));
});

app.post('/api/reviews', (req, res) => {
  const { title, description, rating } = req.body;

  const newReview = new Review({
    title,
    description,
    rating,
  });

  newReview
    .save()
    .then(() => res.json('Review added successfully'))
    .catch((error) => res.status(400).json('Error: ' + error));
});

// Serve static files
app.use(express.static('nevada/build'));

// Catch-all route for handling React routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'nevada', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
