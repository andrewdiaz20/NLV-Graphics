import NavBar from './Navigation';

function Home() {
  return (
    <body>
      <NavBar/>
      <main className='homePICTURE'>
        <img src='maxresdefault.jpg'alt='8 best AI TOOLS for designers'/>
      </main>
      <section className='liveInColor'>
        <img/>
      </section>
      <section className='aboutUS'>
        <h2>About Us</h2>
        <div className='aboutInfo'>
        <p className='aboutUSP'>
        NLV Graphics is a printing and graphics shop that provides high-quality printing services for all your needs. We specialize in custom apparel printing, including T-shirts, sweatshirts, hats, and more. We also offer laser engraving services for insulated drinkware and glassware, custom die-cut stickers, posters, signs, and large-format printing. Our team of experts can put your logo on almost anything. In addition to printing services, we provide graphic design services and laser engraving services to make your product stand out. Contact us today to learn more about our services and how we can help you with your printing needs.</p>
        <img src='OIP.jpg'alt='Motion Graphics'/>
        </div>
      </section>
      <section>

      </section>
    </body>
  );
} 
export default Home;