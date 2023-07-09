import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import "./food.css"

const MyForm = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [formState, setFormState] = useState({
    restaurantName: '',
    cuisine: '',
    favoriteDish: '',
    restaurantImage: null
  });

  const handleClick = () => {
    setFormVisible(!isFormVisible);
  };

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleFileChange = (event) => {
    setFormState({
      ...formState,
      restaurantImage: event.target.files[0]
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    console.log(rating);
    // here you can make a fetch or axios call to send the data to your server
    // make sure your backend server is set up to receive this data
  };

  return (
    <div>
      <button onClick={handleClick}>Open Form</button>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <h2>Choose an Option</h2>
          <label>
            Name of Restaurant:
            <input type="text" name="restaurantName" value={formState.restaurantName} onChange={handleChange} />
          </label>
          <br />
          <label>
            Cuisine Type:
            <input type="text" name="cuisine" value={formState.cuisine} onChange={handleChange} />
          </label>
          <br />
          <label>
            Favorite Dish:
            <input type="text" name="favoriteDish" value={formState.favoriteDish} onChange={handleChange} />
          </label>
          <br />
          <label>
            Upload Image:
            <input type="file" name="restaurantImage" onChange={handleFileChange} />
          </label>
          <br />
          <label>
            Rating:
            <StarRatings
              rating={rating}
              starRatedColor="blue"
              changeRating={changeRating}
              numberOfStars={5}
              name='rating'
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
 
export default Food;
