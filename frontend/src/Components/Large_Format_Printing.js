import NavBar from './Navigation';
import Footer from './Footer';

function Large_Format_Printing(){
    return(
        <body className='largeformatprintingBody'>
            <NavBar/>
            <main className='headerLargeformatprinting'>
                <h1>Large Format Printing</h1>
            </main>
            <Footer/>
        </body>
    )
};

export default Large_Format_Printing;