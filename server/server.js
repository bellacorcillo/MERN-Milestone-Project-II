// server.js
const express = require('express');
const multer = require('multer'); // for handling multipart/form-data, which is used for file uploads
const app = express();
const port = 3003;

const upload = multer({
  dest: 'uploads/' // this saves your file into a directory called "uploads"
});

app.use(express.json());

app.post('/your-endpoint', upload.single('restaurantImage'), (req, res) => {
  console.log(req.body);
  console.log(req.file); // this contains information about the uploaded file
  res.status(200).json({ message: 'Form data received' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
