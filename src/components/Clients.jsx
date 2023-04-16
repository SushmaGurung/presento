import React from 'react'

function Clients() {
  return (
    <section id="clients" className="clients">
    <div className="container" >

      <div className="clients-slider swiper">
        <div className="swiper-wrapper align-items-center">
          <div className="swiper-slide"><img src="../../public/assets/img/clients/client-1.png" className="img-fluid" alt=""/></div>
          <div className="swiper-slide"><img src="../../public/assets/img/clients/client-2.png" className="img-fluid" alt=""/></div>
          <div className="swiper-slide"><img src="../../public/assets/img/clients/client-3.png" className="img-fluid" alt=""/></div>
          <div className="swiper-slide"><img src="../../public/assets/img/clients/client-4.png" className="img-fluid" alt=""/></div>
          <div className="swiper-slide"><img src="../../public/assets/img/clients/client-5.png" className="img-fluid" alt=""/></div>
          <div className="swiper-slide"><img src="../../public/assets/img/clients/client-6.png" className="img-fluid" alt=""/></div>
          <div className="swiper-slide"><img src="../../public/assets/img/clients/client-7.png" className="img-fluid" alt=""/></div>
          <div className="swiper-slide"><img src="../../public/assets/img/clients/client-8.png" className="img-fluid" alt=""/></div>
        </div>
        <div className="swiper-pagination"></div>
      </div>

    </div>
  </section>
  )
}

export default Clients
