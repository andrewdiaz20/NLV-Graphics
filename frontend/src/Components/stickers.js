import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./Navigation";
import Footer from "./Footer";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Stickers() {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/sticker')
      .then(response => setStickers(response.data))
      .catch(error => console.error('error:', error));
  }, []);

  const fetchStickers = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/sticker`;
    // Add your fetch logic here
  };

  return (
    <div className="stickersBody">
      <Navbar />
      <main className="headerStickers">
        <h1>Stickers & Labels</h1>
      </main>
      <div>
        {stickers.map(sticker => (
          <div key={sticker._id}>
            <h2>{sticker.name}</h2>
            <p>{sticker.description}</p>
            <p>{sticker.price}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Stickers;