import { useState, useEffect } from "react"
import { useParams, useNavigate, Link} from "react-router-dom"
import Navbar from "./Navigation";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


function Stickers() {
  const [sticker, setSticker] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `${process.env.REACT_APP_BACKEND_URL}/sticker/`;
      const response = await fetch(url);
      const data = await response.json();
      setSticker(data);
      console.log(data);
      console.log('Hello world')
    }
    fetchData();
  }, []);

  return (
    <div className="stickersBody">
      <Navbar />
      <main className="headerStickers">
        <h1>Stickers & Labels</h1>
        {sticker.map((sticker) => (
          <Card className='stickersCss' key={sticker.id} sx={{ maxWidth: 800 }}>
            <div style={{ position: 'relative' }}>
              <p>{sticker.name}</p>
            </div>
          </Card>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default Stickers;

