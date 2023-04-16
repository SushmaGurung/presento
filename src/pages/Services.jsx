import { serviceData } from "./data/serviceData"

const Services = () => {
  return (
    <section  className="services section-bg ">
      <div className="container" >

        <div className="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
        </div>

        <div className="row">
          {serviceData.map((sdata)=>(

          <div className="col-md-6" key={sdata.id}>
            <div className="icon-box"  data-aos-delay="100">
              <i className={sdata.icon}></i>
              <h4><a href="#">{sdata.title}</a></h4>
              <p>{sdata.desc}</p>
            </div>
          </div>
          ))}

          
        </div>

      </div>
    </section>
  )
}

export default Services
