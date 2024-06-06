import React from "react";

function NavBar() {
    return (
        <nav className="Navigation">
            <ul className="NavBAR">
                <li className="NavLINK">
                    <a href="/">Home</a>
                </li>
                <li className="NavLINK">
                    <a href="/Stickers.Labels">Stickers & Labels</a>
                </li>
                <li className="NavLINK">
                    <a href="/Drinkware">Drinkware</a>
                </li>
                <li className="NavLINK">
                    <a href="/Banners">Banners</a>
                </li>
                <li className="NavLINK">
                    <a href="/Large.Format.Printing">Large Format Printing</a>
                </li>
                <li className="NavLINK">
                    <a href="/Contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;