import React from "react";

function NavBar() {
    return (
        <div id="header-wrap">
            <nav id="header" className="Navigation">
                <ul className="NavBAR">
                    <li>
                        <img className="nlvGraphicsLogo"src="0f542a_923835a140ab4c7d8333171021b708ae~mv2.webp" alt="NLV-Graphics logo"/>
                    </li>
                    <li className="NavLINK">
                        <a href="/">Home</a>
                    </li>
                    <li className="NavLINK">
                        <a href="/Stickers">Stickers & Labels</a>
                    </li>
                    <li className="NavLINK">
                        <a href="/Drinkware">Drinkware</a>
                    </li>
                    <li className="NavLINK">
                        <a href="/Banners">Banners</a>
                    </li>
                    <li className="NavLINK">
                        <a href="/Large_Format_Printing">Large Format Printing</a>
                    </li>
                    <li className="NavLINK">
                        <a href="/Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;