import React, { useState } from 'react';
import "./food.css"
 

const MyForm = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleClick = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>Open Form</button>
      {isFormVisible && (
        <form>
          <h2>Choose an Option</h2>
          <label>
            Food:
            <input type="text" name="food" />
          </label>
          <br />
          <label>
            Rating:
            <select>
            <option value="option1">0</option>
            <option value="option2">1</option>
            <option value="option3">2</option>
            <option value="option3">3</option>
            <option value="option3">4</option>
            <option value="option3">5</option>
            </select>

          </label>
          <br />
          <label>
            Shopping:
            <input type="text" name="shopping" />
          </label>
          <br />
          <label>
            Nightlife:
            <input type="text" name="nightlife" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default MyForm;