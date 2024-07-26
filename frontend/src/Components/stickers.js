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
                <div className="card">
                    <img className="imageItem"src="CookieMonster-WhiteBorder_88d204cd-78ac-461c-8304-b851220eef9e.webp" alt="Cookie-monster-sticker"/>
                    <h1 className="parent">Cookie Monster Stickers</h1>
                    <p className="child child-1">$19.99</p>
                    {/* <p className="child child-2">hguyt ksou hsy g tsuyfd kfof sh</p>
                    <p className="child child-3"><button>Email!</button></p> */}
                </div>
            <Footer/>
        </body>
    )
};

export default Stickers;