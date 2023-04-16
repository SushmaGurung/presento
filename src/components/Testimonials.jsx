import { testData } from '../pages/data/testData'

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
        </div>

        <div className="d-flex flex-column test-content">
          <div className="">
            {
              testData.map((test) => (

                <div className="swiper-slide" key={test.id}>
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src={test.profile} className="testimonial-img" alt="" />
                      <h3>{test.name}</h3>
                      <h4>{test.position}</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        {test.msg}
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
