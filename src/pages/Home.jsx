import React from 'react';
import Counts from '../components/Counts';
import Tags from '../components/Tags';
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';
import Faqs from '../components/Faqs';
import Pricing from '../components/Pricing';
import pic from "./hero-bg.jpg";
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Services from './Services';
import Team from './Team';

function Home({themes}) {
    return (
        <>
        <section id="hero" className="d-flex align-items-center" >
            <img src={pic} alt="hero" />
            <div className="container" >
                <div className="row">
                    <div className="col-xl-6">
                        <h1 className='text-light'>Bettter digital experience with Presento</h1>
                        <h2>We are team of talented designers making websites with Bootstrap</h2>
                        <a href="#about" className="btn-get-started scrollto">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
        <About/>
        <Portfolio/>
        <Clients/>
        <Services/>
        <Tags themes={themes}/>
        <Counts/>
        <Team/>
        <Pricing/>
        <Faqs/>
        <Testimonials/>
        <Contact/>
        
        </>


    )
}

export default Home
