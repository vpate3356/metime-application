import React, { useState } from 'react';

const SurveyPage = () => {
  const [location, setLocation] = useState('');
  const [interests, setInterests] = useState([]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleInterestChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest !== value));
    }
  };

  const interestOptions = [
    'Art',
    'Books',
    'Cooking',
    'Dancing',
    'Fashion',
    'Film',
    'Fitness',
    'Food',
    'Gaming',
    'Hiking',
    'Music',
    'Photography',
    'Sports',
    'Travel',
    'Writing',
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can do something with the location and interests here, e.g. send them to a server
    console.log('Location:', location);
    console.log('Interests:', interests);
  };

  return (
    <div>
      <h1>Enter where you are located below:</h1>
      <label htmlFor="location">Enter a address in the following format (123 Happy Dr Riverside, CA 92507):</label>
      <br />
      <input type="text" id="location" value={location} onChange={handleLocationChange} />
      <h2>What are your interests?</h2>
      {interestOptions.map((interest) => (
        <label key={interest}>
          <input type="checkbox" value={interest} onChange={handleInterestChange} />
          {interest}
          <br />
        </label>
      ))}
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SurveyPage;
