import { teamData } from './data/teamData';

function Team() {
  return (
    <section id="team" className="team section-bg">
      <div className="container" >

        <div className="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
        </div>

        <div className="row">
          {teamData.map((tdata) => (
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={tdata.id}>
              <div className="member"  >
                <div className="member-img">
                  <img src={tdata.profile} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="https://twitter.com/"><i className="bi bi-twitter"></i></a>
                    <a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{tdata.name}</h4>
                  <span>{tdata.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Team
