import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h2 id="portfolio-header">Portfolio</h2>
        <br />
        <div className="cards-6 section-transparent">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card card-profile">
                  <div className="card-image">
                    <img className="img" src="illinois.png" alt="" />
                    <div className="card-caption">
                      {" "}
                      Illinois Politics Scrape{" "}
                    </div>
                  </div>
                  <div className="table">
                    <h6>Cheerio Scrape</h6>
                    <p className="card-description">
                      {" "}
                      Heroku-deployed application allows users to stay
                      up-to-date with the current political reporting in
                      Springfield and Chicago.
                    </p>
                    <a href="https://illinois-pol-scraper.herokuapp.com/">
                      <button className="btn-info-2">V I E W</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-profile">
                  <div className="card-image">
                    <img className="img" src="golf.jpg" alt="golf" />
                    <div className="card-caption">Beaver Creek</div>
                  </div>
                  <div className="table">
                    <h6>React.JS</h6>
                    <p className="card-description">
                      {" "}
                      Enhanced Full-Stack app now allows potential golfers to
                      book tee-times through the site.{" "}
                    </p>
                    <a href="https://morning-coast-79159.herokuapp.com/">
                      <button className="btn-info-2">V I E W</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-profile">
                  <div className="card-image">
                    <img className="img" src="burger.jpg" alt="" />
                    <div className="card-caption"> Burger's For Sale</div>
                  </div>
                  <div className="table">
                    <h6>ReactJs</h6>
                    <p className="card-description">
                      {" "}
                      Burger Board is a live updating burger list that allows
                      the user to view, consume or create new burgers to put on
                      the menu.{" "}
                    </p>
                    <a href="https://react-burgers.herokuapp.com/">
                      <button className="btn-info-2">V I E W</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cards-6 section-transparent">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card card-profile">
                  <div className="card-image">
                    <img className="img" src="white-sox-team.jpg" alt="" />
                    <div className="card-caption">
                      {" "}
                      Chicago White Sox Pick-to-Click Game{" "}
                    </div>
                  </div>
                  <div className="table">
                    <h6>React.js</h6>
                    <p className="card-description">
                      {" "}
                      Simple game written in react.js. Uses props and state to
                      generate a game with the Chicago White Sox 2018 roster.
                    </p>
                    <a href="https://sox-pick-to-click.herokuapp.com/">
                      <button className="btn-info-2">V I E W</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-profile">
                  <div className="card-image">
                    <img className="img" src="shoppingCart.png" alt="" />
                    <div className="card-caption">Bamazon</div>
                  </div>
                  <div className="table">
                    <h6>MySQL w/ Node.JS</h6>
                    <p className="card-description">
                      Online shop allows customers to buy products, supervisors
                      to manage inventory & Sales Dept. to track sales metrics.{" "}
                    </p>
                    <a href="https://patrickcorcoran10.github.io/bamazon/">
                      <button className="btn-info-2">V I E W</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-profile">
                  <div className="card-image">
                    <img className="img" src="b2b.jpeg" alt="" />
                    <div className="card-caption"> B2B Sales Qualifier</div>
                  </div>
                  <div className="table">
                    <h6>ReactJs, Sequelize, NodeJs, Express, and ChartJS-2.</h6>
                    <p className="card-description">
                      {" "}
                      This ReactJs, MySQL, Express, NodeJs application helps
                      qualify potiential business leads for the user. It takes
                      information for potential B2B clients, calculates the
                      increase in revenue, as well as return on investment and
                      displays the information both numerically and graphically.
                    </p>
                    <a href="https://moorhouse.herokuapp.com/">
                      <button className="btn-info-2">V I E W</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
