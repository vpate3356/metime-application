import React, { useState } from 'react';
import styles from '@/styles/Home.module.css'

const GOOGLE_MAPS_API_KEY = "AIzaSyBRl3qhbvxVzrw2K0JJhGCL6kECdc-9lc0"  

const SurveyPage = () => {
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState({});
  const [radius, setRadius] = useState('');
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [addressError, setAddressError] = useState('');


  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    setAddressError('');
  };

  const handleSetRadius = (event) => {
    const value = event.target.value;
    if (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 50000)) {
      setRadius(value);
    }
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
    if (address === '' || radius === '') {
      alert('Please answer all questions.');
      return;
    }
    const encodedAddress = encodeURIComponent(address);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GOOGLE_MAPS_API_KEY}`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setLocation(data.results[0].geometry.location);
        const formData = {
          address: address,
          latitude: data.results[0].geometry.location.lat,
          longitude: data.results[0].geometry.location.lng,
          radius : radius,
          interests : interests
        };
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        };
        const submitResponse = await fetch('/api/submit', options);
        if (submitResponse.ok) {
          console.log('Form data submitted successfully');
          setSubmitted(true);
        } else {
          console.error('Unable to submit form data');
        }
      } else {
        console.error('Unable to fetch location data');
      }
    } catch (error) {
      console.error(error);
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
        <h1 style={styles.header}>Please fill out Our Onboarding Form to Get Started:</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
            <label style={styles.label} htmlFor="address">Enter a address in the following format (123 Happy Dr, Riverside,CA 92507):</label>
            <br />
            <input style={styles.input} type="text" id="address" value={address} onChange={handleAddressChange} />
            <label style={styles.label} htmlFor="radius">Please enter how big of a radius you want in meters? (max 50,000 meters):</label>
            <br />    
            <input style={styles.input} type="text" id="radius" value={radius} onChange={handleSetRadius} />

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
      maxWidth: '700px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #fff',
      borderRadius: '60px',
      fontFamily: 'Josefin_Sans',
    },
    header: {
      fontSize: '24px',
      margin: '0',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#3B3935',
      fontWeight: 'bold',
    },
    form: {
      marginTop: '20px',
    },
    label: {
      fontSize: '20px',
      marginBottom: '5px',
      display: 'block',
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
      backgroundColor: '#80B996',
      color: '#FFF',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      display: 'block',
      margin: '20px auto 0',
      fontWeight: 'bold',
      fontSize: '18px',
      cursor: 'pointer',
    },
  };

