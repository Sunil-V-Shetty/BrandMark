import React from 'react';
import Header from './components/Header';
import WeatherWidget from './components/WeatherWidget';
import Footer from './components/Footer';
import CarouselComponent from './components/CarouselComponent';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <img src="/assets/hero-image.jpg" alt="Hero" className="hero-image" />
          <div className="weather-widget">
            <WeatherWidget />
          </div>
        </section>
        
        {/* First Content Section */}
        <section className="content-section">
          <div className="text-content">
            <h2>Create a unique, professional<br /> logo for your business</h2>
            <p>Kickstart your brand with business card designs, social media graphics,<br /> app icons, letterheads, and more.</p>
            <button className="cta-button">Create a Logo</button>
          </div>
          <div className="image-content">
            <img src="/assets/logo-example.png" alt="Logo Example" />
          </div>
        </section>

        {/* Carousel Section */}
        <section className="carousel-section">
          <CarouselComponent />
        </section>

        {/* Second Content Section */}
        <section className="content-section brand-section">
          <div className="image-content">
            <img src="/assets/brand-image.jpg" alt="Brand Example" />
          </div>
          <div className="text-content">
            <h1>Build a beautiful brand on time and on budget</h1>
            <p>Kickstart your business with thousands of ready-to-use design assets.</p>
            <ul>
              <li>Logo design files &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; • Business card designs</li>
              <li>Letterhead templates &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; • Presentation templates</li>
              <li>Social profile icons &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; • Animated designs</li>
              <li>Social media designs &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;• Brand guide</li>
            </ul>
            <button className="example-button">See Example Assets</button>
          </div>
        </section>

        {/* Third Content Section */}
        <section className="content-section customization-section">
          <div className="text-content">
            <h2>The only logo maker<br /> with free<br /> customization</h2>
            <p>We’ll personally help you customize your<br /> logo with the purchase of any package.</p>
          </div>
          <div className="image-content">
            <img src="/assets/customization-image.jpeg" alt="Customization" />
          </div>
        </section>

        {/* Latest Customer Creations Section */}
        <section className="latest-creations">
          <h2>Latest customer<br /> creations</h2>
          <p>See why over 2,70,12002 users have<br /> created a logo with Brandmark</p>
          <div className="box-container">
            <div className="box square-box">Skadoosh</div>
            <div className="box circle-box">Panda</div>
          </div>
          <div className="box-container">
            <div className="box circle-box">Orange</div>
            <div className="box square-box">Martin</div>
          </div>
        </section>

        {/* Scrollable Section with Image */}
        <section className="scrollable-section">
          <img src="/assets/scroll-image.jpeg" alt="Scrollable Content" className="scroll-image" />
        </section>

        {/* Alternating Content Section */}
        <section className="content-section alternating-section">
          <div className="image-content">
            <img src="/assets/alternating-image1.jpeg" alt="Alternating Content 1" />
          </div>
          <div className="text-content">
            <h2>Engage with your audience</h2>
            <p>Create visually stunning and cohesive brand materials<br /> that resonate with your customers.</p>
          </div>
        </section>

        <section className="content-section alternating-section">
          <div className="text-content">
            <h2>Seamless Integration</h2>
            <p>Integrate your designs across multiple platforms with ease, ensuring consistency and professionalism.</p>
          </div>
          <div className="image-content">
            <img src="/assets/alternating-image2.jpeg" alt="Alternating Content 2" />
          </div>
        </section>

        {/* New Section for Creating Logos */}
        <section className="create-logo-section" style={{ backgroundColor: 'white', textAlign: 'center', padding: '40px 20px' }}>
          <h2 style={{ color: 'black', fontSize: '24px' }}>Create your unique logo design</h2>
          <p style={{ color: 'black', fontSize: '18px' }}>Generate unlimited logos for free</p>
          <button className="cta-button" style={{ backgroundColor: '#007BFF', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', margin: '20px auto', display: 'block' }}>Create a Logo</button>
        </section>

        {/* New Section with Buttons and Related Texts */}
        <section className="action-section" style={{ backgroundColor: '#454545', padding: '40px 20px', textAlign: 'center' }}>
          <div className="action-buttons">
            {/* First Row of Buttons with Related Texts */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginBottom: '40px' }}>
              <div style={{ margin: '10px' }}>
                <button style={{ backgroundColor: '#FFD700', color: 'black', padding: '10px 20px', borderRadius: '5px', border: 'none', fontSize: '16px' }}>Create your logo</button>
                <p style={{ color: 'white', marginTop: '10px', fontSize: '12px' }}>Try Brandmark for free,<br /> no account needed</p>
              </div>
              <div style={{ margin: '10px' }}>
                <button style={{ backgroundColor: '#FF69B4', color: 'black', padding: '10px 20px', borderRadius: '5px', border: 'none', fontSize: '16px' }}>Support</button>
                <p style={{ color: 'white', marginTop: '10px', fontSize: '12px' }}>Have questions or need help?<br /> Start here.</p>
              </div>
              <div style={{ margin: '10px' }}>
                <button style={{ backgroundColor: '#32CD32', color: 'black', padding: '10px 20px', borderRadius: '5px', border: 'none', fontSize: '16px' }}>Tools</button>
                <p style={{ color: 'white', marginTop: '10px', fontSize: '12px' }}>Check out our free tools for color,<br /> font and logo design</p>
              </div>
            </div>
            {/* Second Row of Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <div style={{ margin: '10px' }}>
                <button style={{ backgroundColor: 'white', color: 'black', padding: '10px 20px', borderRadius: '5px', border: 'none', fontSize: '16px' }}>Terms of service</button>
              </div>
              <div style={{ margin: '10px' }}>
                <button style={{ backgroundColor: 'white', color: 'black', padding: '10px 20px', borderRadius: '5px', border: 'none', fontSize: '16px' }}>Privacy policy</button>
              </div>
            </div>
          </div>
        </section>

        {/* Cross Square Layout */}
        <section className="cross-square-section" style={{ backgroundColor: '#454545', padding: '40px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="square" style={{ backgroundColor: '#8A2BE2', width: '100px', height: '100px', margin: '10px' }}></div>
            <div className="square" style={{ backgroundColor: '#FFA500', width: '100px', height: '100px', margin: '10px' }}></div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;
