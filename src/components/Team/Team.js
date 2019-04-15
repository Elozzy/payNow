import React, { Component } from 'react'

export default class Team extends Component {
  render() {
    return (
      <div>
                {/* ***** Our Team Area Start ***** */}
        <section className="our-Team-area bg-white section_padding_100_50 clearfix" id="team">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                {/* Heading Text  */}
                <div className="section-heading">
                  <h2>Our Team</h2>
                  <div className="line-shape" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="single-team-member">
                  <div className="member-image">
                    <img src="img/team-img/team-1.jpg" alt />
                    <div className="team-hover-effects">
                      <div className="team-social-icon">
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                        <a href="#"> <i className="fa fa-instagram" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="member-text">
                    <h4>Jackson Nash</h4>
                    <p>Tax Advice</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="single-team-member">
                  <div className="member-image">
                    <img src="img/team-img/team-2.jpg" alt />
                    <div className="team-hover-effects">
                      <div className="team-social-icon">
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                        <a href="#"> <i className="fa fa-instagram" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="member-text">
                    <h4>Alex Manning</h4>
                    <p>CEO-Founder</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="single-team-member">
                  <div className="member-image">
                    <img src="img/team-img/team-3.jpg" alt />
                    <div className="team-hover-effects">
                      <div className="team-social-icon">
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                        <a href="#"> <i className="fa fa-instagram" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="member-text">
                    <h4>Ollie Schneider</h4>
                    <p>Business Planner</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="single-team-member">
                  <div className="member-image">
                    <img src="img/team-img/team-4.jpg" alt />
                    <div className="team-hover-effects">
                      <div className="team-social-icon">
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                        <a href="#"> <i className="fa fa-instagram" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="member-text">
                    <h4>Roger West</h4>
                    <p>Financer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Our Team Area End ***** */}
      </div>
    )
  }
}
