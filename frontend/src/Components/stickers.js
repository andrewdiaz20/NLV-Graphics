import React from "react";
import NavBar from "./Navigation";
import Footer from "./Footer";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Stickers(){
    return (
        <body className="stickersBody">
            <NavBar/>
            <main className="headerStickers">
                <h1>Stickers & Labels</h1>
            </main>
            <Footer/>
        </body>
    )
};
export default Stickers;