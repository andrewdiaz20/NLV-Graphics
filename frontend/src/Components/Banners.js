import NavBar from "./Navigation";
import Footer from "./Footer";

function Banner(){
    return(
        <body className="bannersBody">
            <NavBar/>
            <main className="headerBanners">
                <h1>Banners</h1>
            </main>
            <Footer/>
        </body>
    )
};

export default Banner;