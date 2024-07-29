import React from "react";
import NavBar from "./Navigation";
import Footer from "./Footer";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Stickers() {
    return (
        <body className="stickersBody">
            <NavBar />
            <main className="headerStickers">
                <h1>Stickers & Labels</h1>
            </main>
            <nav aria-label="">
                <ul class="">
                    <li class="card"><a class="card-link" href="#">Previous</a></li>
                    <li class="card"><a class="card-link" href="#">1</a></li>
                    <li class="card"><a class="card-link" href="#">2</a></li>
                    <li class="card"><a class="card-link" href="#">3</a></li>
                    <li class="card"><a class="card-link" href="#">Next</a></li>
                </ul>
            </nav>
            <Footer />
        </body>
    )
};

export default Stickers;