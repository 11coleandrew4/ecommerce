import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  let [phrase, setPhrase] = useState('');

  useEffect(() => {
    axios
      .get(`https://corporatebs-generator.sameerkumar.website/`)
      .then((res) => {
        console.log(res.data.phrase);
        console.log(typeof res.data.phrase);
        setPhrase(res.data.phrase);
      })
      .catch((err) => {
        console.log(`ERROR: ${err}`);
      });
  }, []);

  const fetchBS = () => {
    axios
      .get(`https://corporatebs-generator.sameerkumar.website/`)
      .then((res) => {
        console.log(res.data.phrase);
        console.log(typeof res.data.phrase);
        setPhrase(res.data.phrase);
      })
      .catch((err) => {
        console.log(`ERROR: ${err}`);
      });
  };

  return (
    <div
      id="container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        src={
          'https://s3.amazonaws.com/ellevate-app-uploads-production/blog_posts/7513/featured_image/original/469034205_copy.jpg?1473282673'
        }
        style={{ width: '50vw' }}
      ></img>
      <h1 style={{ textAlign: 'center' }}>{phrase}</h1>
      <button
        onClick={() => {
          fetchBS();
        }}
      >
        New BS
      </button>
    </div>
  );
}

export default App;
