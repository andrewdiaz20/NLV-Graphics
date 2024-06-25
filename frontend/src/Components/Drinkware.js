import React from "react";
import NavBar from "./Navigation";
import Footer from "./Footer";

function Drinkware(){
    return(
        <body className="drinkwareBody">
            <NavBar/>
            <main className="headerDrinkware">
                <h1>DRINKWARE</h1>
            </main>
            <Footer/>
        </body>
    )
}

export default Drinkware;