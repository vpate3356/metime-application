import React, { useState } from 'react';

const SurveyPage = () => {
  const [location, setLocation] = useState('');
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ location, interests })
      });

      if (res.ok) {
        console.log('Form submitted successfully!');
        setSubmitted(true);
      } else {
        console.log('An error occurred:', res.statusText);
      }
    } catch (error) {
      console.log('Error submitting form:', error);
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
  
  if (submitted) {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>Thank you for completing your MeTime Onboarding!</h1>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Enter where you are located below:</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label} htmlFor="location">Enter a address in the following format (123 Happy Dr Riverside, CA 92507):</label>
        <br />
        <input style={styles.input} type="text" id="location" value={location} onChange={handleLocationChange} />
        <h2 style={styles.header}>What are your interests?</h2>
        {interestOptions.map((interest) => (
          <label key={interest}>
            <input style={styles.checkbox} type="checkbox" value={interest} onChange={handleInterestChange} />
            {interest}
            <br />
          </label>
        ))}
        <button style={styles.button} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SurveyPage;



  //styles for the survey form 
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '60px',
    },
    header: {
      fontSize: '24px',
      marginTop: '0',
    },
    form: {
      marginTop: '20px',
    },
    label: {
      fontSize: '18px',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      marginBottom: '10px',
    },
    checkbox: {
      marginRight: '10px',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px',
    },
  };
