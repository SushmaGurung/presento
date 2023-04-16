import React from 'react'

function Home() {
    return (
        <section id="hero" className="d-flex align-items-center">
            <img src="../../../assets/img/hero-bg.jpg" alt="" />
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

    )
}

export default Home
