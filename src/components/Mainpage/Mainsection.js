import React from 'react'

export default function Mainsection() {
  return (
    <div>
              <section className="special-area bg-white section_padding_100" id="about">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Section Heading Area */}
                <div className="section-heading text-center">
                  <h2>Why PayNow</h2>
                  <div className="line-shape" />
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Special Area */}
              <div className="col-12 col-md-4">
                <div className="single-special text-center wow fadeInUp" data-wow-delay="0.2s">
                  <div className="single-icon">
                    <i className="ti-mobile" aria-hidden="true" />
                  </div>
                  <h4>Easy to use</h4>
                  <p>We have a user-friendly payment and integration method which is easy to use</p>
                </div>
              </div>
              {/* Single Special Area */}
              <div className="col-12 col-md-4">
                <div className="single-special text-center wow fadeInUp" data-wow-delay="0.4s">
                  <div className="single-icon">
                    <i className="ti-ruler-pencil" aria-hidden="true" />
                  </div>
                  <h4>Powerful Design</h4>
                  <p>Our design was engineered with users in mind.</p>
                </div>
              </div>
              {/* Single Special Area */}
              <div className="col-12 col-md-4">
                <div className="single-special text-center wow fadeInUp" data-wow-delay="0.6s">
                  <div className="single-icon">
                    <i className="ti-settings" aria-hidden="true" />
                  </div>
                  <h4>Customizability</h4>
                  <p>Highly customizable interface to suit any user need be it enterprise or normal user. </p>
                </div>
              </div>
            </div>
          </div>
          {/* Special Description Area */}
          <div className="special_description_area mt-150">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="special_description_img">
                    <img src="img/bg-img/special.png" alt />
                  </div>
                </div>
                <div className="col-lg-6 col-xl-5 ml-xl-auto">
                  <div className="special_description_content">
                    <h2>Get App</h2>
                    <p>You can get our app on the following platform.</p>
                    <div className="app-download-area">
                      <div className="app-download-btn wow fadeInUp" data-wow-delay="0.2s">
                        {/* Google Store Btn */}
                        <a href="#">
                          <i className="fa fa-android" />
                          <p className="mb-0"><span>available on</span> Google Store</p>
                        </a>
                      </div>
                      <div className="app-download-btn wow fadeInDown" data-wow-delay="0.4s">
                        {/* Apple Store Btn */}
                        <a href="#">
                          <i className="fa fa-apple" />
                          <p className="mb-0"><span>available on</span> Apple Store</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
