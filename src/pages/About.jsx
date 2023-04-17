import {aboutData} from "./data/aboutData";

function About() {
    return (
        <section id="about" className="about section-bg">
            <div className="container" >

                <div className="row no-gutters">
                    <div className="content col-xl-5 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Voluptatem dignissimos provident quasi</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Duis aute irure dolor in reprehenderit
                            </p>
                            <a href="/#" className="about-btn"><span>About us</span> <i className="bx bx-chevron-right"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">

                                {aboutData.map((adata)=>(

                                <div className="col-md-6 icon-box"  key={adata.id}>
                                    <i className={adata.icon}></i>
                                    <h4>{adata.sub_title}</h4>
                                    <p>{adata.sub_desc}</p>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
