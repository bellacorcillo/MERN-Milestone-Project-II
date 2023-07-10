router.post('/submit', (req, res) => {
    const { restaurant, rating, comment } = req.body;
  
    // Create a new review object
    const newReview = new Review({
      restaurant,
      rating,
      comment,
    });
  
    // Save the review to the database
    newReview.save((err, result) => {
      if (err) {
        console.error('Error:', err);
        res.status(500).send('Error adding review');
      } else {
        console.log('Review added successfully:', result);
        res.status(200).send('Review added successfully');
      }
    });
  });
  
  module.exports = router;
  