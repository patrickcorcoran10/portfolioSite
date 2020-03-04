import React from "react";

const About = () => (
  <div>
    <h2>Pat Corcoran</h2>
    <div className="container">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="card card-profile">
            <div className="card-avatar">
              <img className="img" src="headshot.jpeg" alt="" />
            </div>
            <div className="table">
              <h4 className="card-caption">Pat Corcoran</h4>
              <h6 className="category text-muted">Full-Stack Web Devloper</h6>
              <p className="card-description">
                Solving problems has always been a driving factor in Pat's life.
                From his formal education at the University of Dayton, to his
                professional career in State Government, private sector, and
                non-profit organizations, he has always risen to the challenge
                and used his creativity and ingenuity to solve problems. This
                interest is what inspired him to work in the web development
                space.
              </p>
              <p>
                During Pat's time working in the Office of the Governor of
                Illinois, and specifically advancing the Affordable Care Act in
                Illinois, his interest in thoughful web design and the
                full-stack development piqued. Experiencing the issues with the
                Healthcare.gov's site, Pat knew that better understanding the
                world of developing would be paramount to solving complex
                issues.
              </p>
              <p>
                After years of learning through online courses and tinkering
                with websites, Pat decided to enroll in the Northwestern
                Full-Stack Web Development course. Graduating in November 2018,
                Pat started his professional development career and continues to
                be interested in solving problems.
              </p>
              <a href="/contact">
                <button className="btn-info-2">C O N T A C T</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  </div>
);

export default About;
