import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
      
    <div className='home__row'>
    <Product id='1' title='The lean startup' price={9.99} image='https://kitaabnow.com/wp-content/uploads/2021/04/The-Lean-Startup.jpg' rating={5} />
    <Product
            id="2"
            title="Kenwood kMix Stand Mixer"
            price={300}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
    </div>
    <div className='home__row'>
    <Product
            id="3"
            title="Samsung LC49RG90SSUXEN 49' "
            price={300}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="4"
            title="Smart speaker with Alexa"
            price={100}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="5"
            title="New Apple iPad Pro "
            price={1000}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
    </div>
    <div className='home__row'>

    <Product
            id="6"
            title="Samsung LC49RG90SSUXEN 49' "
            price={2000}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
    </div>

    </div></div>
  );
}

export default Home
