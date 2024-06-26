import NavBar from './Navigation';
import Footer from './Footer';

function Home() {
  return (
    <body>
      <NavBar />
      <main className='homePICTURE'>
        <img src='Main Banner 1000x700.webp' alt='NLV-Banner' />
      </main>
      <section className='liveInColor'>
        <img className='liveincolorPicture'src='Life_in_full_color.webp' alt='Live life in full color'/>
      </section>

      {/* About us section */}

      <section className='aboutUS'>
        <header className='headers'>
          <h2>About Us</h2>
        </header>
        <div className='leftSideBar'>
          {/* i am left sidebar */}
        </div>
        <div className='aboutInfo'>
          <p className='aboutUSP'>
            NLV Graphics is a printing and graphics shop that provides high-quality printing services for all your needs. We specialize in custom apparel printing, including T-shirts, sweatshirts, hats, and more. We also offer laser engraving services for insulated drinkware and glassware, custom die-cut stickers, posters, signs, and large-format printing. Our team of experts can put your logo on almost anything. In addition to printing services, we provide graphic design services and laser engraving services to make your product stand out. Contact us today to learn more about our services and how we can help you with your printing needs.</p>
          <img className='aboutUsPic'src='OIP.jpg' alt='Motion Graphics' />
        </div>
        <div className='rightSideBar'>
          {/* i am right side bar */}
        </div>
        <footer className='footers'>
          {/* i am the footer */}
        </footer>
      </section>

      {/* End of About us section */}

      <section className='whoweAre'>
        <header className='whoareweHeaders'>
          <h2>Who We Are</h2>
          </header>
        <div className='whoareweLeft'>
        </div>
        <div className='whoareweText'>
        <p>This is your About section. This space is a great opportunity to give a full background on who you are, what you do and what your site has to offer. Your users are genuinely interested in learning more about you, so don’t be afraid to share personal anecdotes to create a more friendly quality.</p>
        <p>Double click on the text box to start editing your content and make sure to add all the relevant details you want site visitors to know. If you’re a business, talk about how you started and share your professional journey. Explain your core values, your commitment to customers and how you stand out from the crowd. Add a photo, gallery or video for even more engagement.</p>
        </div>
        <div className='whoareweRight'>
        </div>
      </section>
      <Footer/>
    </body>
  );
}
export default Home;