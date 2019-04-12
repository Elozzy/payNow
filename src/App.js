import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Welcome from './components/Welcome/Welcome';
import Mainsection from './components/Mainpage/Mainsection';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      <Welcome/>
      <Mainsection />
      
        <section className="awesome-feature-area bg-white section_padding_0_50 clearfix" id="features">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Heading Text */}
                <div className="section-heading text-center">
                  <h2>Awesome Features</h2>
                  <div className="line-shape" />
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Feature Start */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-feature">
                  <i className="ti-user" aria-hidden="true" />
                  <h5>Awesome Experience</h5>
                  <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
              {/* Single Feature Start */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-feature">
                  <i className="ti-pulse" aria-hidden="true" />
                  <h5>Fast and Simple</h5>
                  <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
              {/* Single Feature Start */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-feature">
                  <i className="ti-dashboard" aria-hidden="true" />
                  <h5>Clean Code</h5>
                  <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
              {/* Single Feature Start */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-feature">
                  <i className="ti-palette" aria-hidden="true" />
                  <h5>Perfect Design</h5>
                  <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
              {/* Single Feature Start */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-feature">
                  <i className="ti-crown" aria-hidden="true" />
                  <h5>Best Industry Leader</h5>
                  <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
              {/* Single Feature Start */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-feature">
                  <i className="ti-headphone" aria-hidden="true" />
                  <h5>24/7 Online Support</h5>
                  <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Awesome Features End ***** */}
        {/* ***** Video Area Start ***** */}
        <div className="video-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Video Area Start */}
                <div className="video-area" style={{backgroundImage: 'url(img/bg-img/video.jpg)'}}>
                  <div className="video-play-btn">
                    <a href="https://www.youtube.com/watch?v=f5BBJ4ySgpo" className="video_btn"><i className="fa fa-play" aria-hidden="true" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ***** Video Area End ***** */}
        {/* ***** Cool Facts Area Start ***** */}
        <section className="cool_facts_area clearfix">
          <div className="container">
            <div className="row">
              {/* Single Cool Fact*/}
              <div className="col-12 col-md-3 col-lg-3">
                <div className="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                  <div className="counter-area">
                    <h3><span className="counter">90</span></h3>
                  </div>
                  <div className="cool-facts-content">
                    <i className="ion-arrow-down-a" />
                    <p>APP <br /> DOWNLOADS</p>
                  </div>
                </div>
              </div>
              {/* Single Cool Fact*/}
              <div className="col-12 col-md-3 col-lg-3">
                <div className="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.4s">
                  <div className="counter-area">
                    <h3><span className="counter">120</span></h3>
                  </div>
                  <div className="cool-facts-content">
                    <i className="ion-happy-outline" />
                    <p>Happy <br /> Clients</p>
                  </div>
                </div>
              </div>
              {/* Single Cool Fact*/}
              <div className="col-12 col-md-3 col-lg-3">
                <div className="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.6s">
                  <div className="counter-area">
                    <h3><span className="counter">40</span></h3>
                  </div>
                  <div className="cool-facts-content">
                    <i className="ion-person" />
                    <p>ACTIVE <br />ACCOUNTS</p>
                  </div>
                </div>
              </div>
              {/* Single Cool Fact*/}
              <div className="col-12 col-md-3 col-lg-3">
                <div className="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.8s">
                  <div className="counter-area">
                    <h3><span className="counter">10</span></h3>
                  </div>
                  <div className="cool-facts-content">
                    <i className="ion-ios-star-outline" />
                    <p>TOTAL <br />APP RATES</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Cool Facts Area End ***** */}
        {/* ***** App Screenshots Area Start ***** */}
        <section className="app-screenshots-area bg-white section_padding_0_100 clearfix" id="screenshot">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                {/* Heading Text  */}
                <div className="section-heading">
                  <h2>App Screenshots</h2>
                  <div className="line-shape" />
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {/* App Screenshots Slides  */}
                <div className="app_screenshots_slides owl-carousel">
                  <div className="single-shot">
                    <img src="img/scr-img/app-1.jpg" alt />
                  </div>
                  <div className="single-shot">
                    <img src="img/scr-img/app-2.jpg" alt />
                  </div>
                  <div className="single-shot">
                    <img src="img/scr-img/app-3.jpg" alt />
                  </div>
                  <div className="single-shot">
                    <img src="img/scr-img/app-4.jpg" alt />
                  </div>
                  <div className="single-shot">
                    <img src="img/scr-img/app-5.jpg" alt />
                  </div>
                  <div className="single-shot">
                    <img src="img/scr-img/app-3.jpg" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** App Screenshots Area End *****====== */}
        {/* ***** Pricing Plane Area Start *****==== */}
        <section className="pricing-plane-area section_padding_100_70 clearfix" id="pricing">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Heading Text  */}
                <div className="section-heading text-center">
                  <h2>Pricing Plan</h2>
                  <div className="line-shape" />
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-12 col-md-6 col-lg-3">
                {/* Package Price  */}
                <div className="single-price-plan text-center">
                  {/* Package Text  */}
                  <div className="package-plan">
                    <h5>Starter Plan</h5>
                    <div className="ca-price d-flex justify-content-center">
                      <span>$</span>
                      <h4>29</h4>
                    </div>
                  </div>
                  <div className="package-description">
                    <p>Up to 10 users monthly</p>
                    <p>Unlimited updates</p>
                    <p>Free host &amp; domain</p>
                    <p>24/7 Support</p>
                    <p>10 Unique Users</p>
                  </div>
                  {/* Plan Button  */}
                  <div className="plan-button">
                    <a href="#">Select Plan</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                {/* Package Price  */}
                <div className="single-price-plan text-center">
                  {/* Package Text  */}
                  <div className="package-plan">
                    <h5>Basic Plan</h5>
                    <div className="ca-price d-flex justify-content-center">
                      <span>$</span>
                      <h4>49</h4>
                    </div>
                  </div>
                  <div className="package-description">
                    <p>Up to 10 users monthly</p>
                    <p>Unlimited updates</p>
                    <p>Free host &amp; domain</p>
                    <p>24/7 Support</p>
                    <p>10 Unique Users</p>
                  </div>
                  {/* Plan Button  */}
                  <div className="plan-button">
                    <a href="#">Select Plan</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                {/* Package Price  */}
                <div className="single-price-plan active text-center">
                  {/* Package Text  */}
                  <div className="package-plan">
                    <h5>Advenced Plan</h5>
                    <div className="ca-price d-flex justify-content-center">
                      <span>$</span>
                      <h4>69</h4>
                    </div>
                  </div>
                  <div className="package-description">
                    <p>Up to 10 users monthly</p>
                    <p>Unlimited updates</p>
                    <p>Free host &amp; domain</p>
                    <p>24/7 Support</p>
                    <p>10 Unique Users</p>
                  </div>
                  {/* Plan Button  */}
                  <div className="plan-button">
                    <a href="#">Select Plan</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                {/* Package Price  */}
                <div className="single-price-plan text-center">
                  {/* Package Text  */}
                  <div className="package-plan">
                    <h5>Community Plan</h5>
                    <div className="ca-price d-flex justify-content-center">
                      <span>$</span>
                      <h4>99</h4>
                    </div>
                  </div>
                  <div className="package-description">
                    <p>Up to 10 users monthly</p>
                    <p>Unlimited updates</p>
                    <p>Free host &amp; domain</p>
                    <p>24/7 Support</p>
                    <p>10 Unique Users</p>
                  </div>
                  {/* Plan Button  */}
                  <div className="plan-button">
                    <a href="#">Select Plan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Pricing Plane Area End ***** */}
        {/* ***** Client Feedback Area Start ***** */}
        <section className="clients-feedback-area bg-white section_padding_100 clearfix" id="testimonials">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10">
                <div className="slider slider-for">
                  {/* Client Feedback Text  */}
                  <div className="client-feedback-text text-center">
                    <div className="client">
                      <i className="fa fa-quote-left" aria-hidden="true" />
                    </div>
                    <div className="client-description text-center">
                      <p>“ I have been using it for a number of years. I use Colorlib for usability testing. It's great for taking images and making clickable image prototypes that do the job and save me the coding time and just the general hassle of hosting. ”</p>
                    </div>
                    <div className="star-icon text-center">
                      <i className="ion-ios-star" />
                      <i className="ion-ios-star" />
                      <i className="ion-ios-star" />
                      <i className="ion-ios-star" />
                      <i className="ion-ios-star" />
                    </div>
                    <div className="client-name text-center">
                      <h5>Aigars Silkalns</h5>
                      <p>Ceo Colorlib</p>
                    </div>
                  </div>
                  {/* Client Feedback Text  */}
                  <div className="client-feedback-text text-center">
                    <div className="client">
                      <i className="fa fa-quote-left" aria-hidden="true" />
                    </div>
                    <div className="client-description text-center">
                      <p>“ I use Colorlib for usability testing. It's great for taking images and making clickable image prototypes that do the job and save me the coding time and just the general hassle of hosting. ”</p>
                    </div>
                    <div className="star-icon text-center">
                      <i className="ion-ios-star" />
                      <i className="ion-ios-star" />
                      <i className="ion-ios-star" />
                      <i className="ion-ios-star" />
                      <i className="ion-ios-star" />
                    </div>
                    <div className="client-name text-center">
                      <h5>Jennifer</h5>
                      <p>Developer</p>
                    </div>
                  </div>
                  {/* Client Feedback Text  */}
                  <div className="client-feedback-text text-center">
                    <div className="client">
                      <i className="fa fa-quote-left" aria-hidden="true" />
                    </div>
                    <div className="client-description text-center">
                      <p>“ I have been using it for a number of years. I use Colorlib for usability testing. It's great for taking images and making clickable image prototypes that do the job.”</p>
                    </div>
                    <div className="star-icon text-center">
                      <i className="ion-ios-star" />
                      <i className="ion-ios-star" />
                      <i className="ion-ios-star" />
                      <i className="ion-ios-star" />
                      <i className="ion-ios-star" />
                    </div>
                    <div className="client-name text-center">
                      <h5>Helen</h5>
                      <p>Marketer</p>
                    </div>
                  </div>
                  {/* Client Feedback Text  */}
                  <div className="client-feedback-text text-center">
                    <div className="client">
                      <i className="fa fa-quote-left" aria-hidden="true" />
                    </div>
                    <div className="client-description text-center">
                      <p>“ I have been using it for a number of years. I use Colorlib for usability testing. It's great for taking images and making clickable image prototypes that do the job and save me the coding time and just the general hassle of hosting. ”</p>
                    </div>
                    <div className="star-icon text-center">
                      <i className="ion-ios-star" />
                      <i className="ion-ios-star" />
                      <i className="ion-ios-star" />
                      <i className="ion-ios-star" />
                      <i className="ion-ios-star" />
                    </div>
                    <div className="client-name text-center">
                      <h5>Henry smith</h5>
                      <p>Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Client Thumbnail Area */}
              <div className="col-12 col-md-6 col-lg-5">
                <div className="slider slider-nav">
                  <div className="client-thumbnail">
                    <img src="img/bg-img/client-3.jpg" alt />
                  </div>
                  <div className="client-thumbnail">
                    <img src="img/bg-img/client-2.jpg" alt />
                  </div>
                  <div className="client-thumbnail">
                    <img src="img/bg-img/client-1.jpg" alt />
                  </div>
                  <div className="client-thumbnail">
                    <img src="img/bg-img/client-2.jpg" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Client Feedback Area End ***** */}
        {/* ***** CTA Area Start ***** */}
        <section className="our-monthly-membership section_padding_50 clearfix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="membership-description">
                  <h2>Join our Monthly Membership</h2>
                  <p>Find the perfect plan for you — 100% satisfaction guaranteed.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="get-started-button wow bounceInDown" data-wow-delay="0.5s">
                  <a href="#">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** CTA Area End ***** */}
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
        {/* ***** Contact Us Area Start ***** */}
        <section className="footer-contact-area section_padding_100 clearfix" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                {/* Heading Text  */}
                <div className="section-heading">
                  <h2>Get in touch with us!</h2>
                  <div className="line-shape" />
                </div>
                <div className="footer-text">
                  <p>We'll send you epic weekly blogs, whitepapers and things to make your app startup thrive, all FREE!</p>
                </div>
                <div className="address-text">
                  <p><span>Address:</span> 40 Baria Sreet 133/2 NewYork City, US</p>
                </div>
                <div className="phone-text">
                  <p><span>Phone:</span> +11-225-888-888-66</p>
                </div>
                <div className="email-text">
                  <p><span>Email:</span> info.deercreative@gmail.com</p>
                </div>
              </div>
              <div className="col-md-6">
                {/* Form Start*/}
                <div className="contact_from">
                  <form action="#" method="post">
                    {/* Message Input Area Start */}
                    <div className="contact_input_area">
                      <div className="row">
                        {/* Single Input Area Start */}
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required />
                          </div>
                        </div>
                        {/* Single Input Area Start */}
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your E-mail" required />
                          </div>
                        </div>
                        {/* Single Input Area Start */}
                        <div className="col-12">
                          <div className="form-group">
                            <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Your Message *" required defaultValue={""} />
                          </div>
                        </div>
                        {/* Single Input Area Start */}
                        <div className="col-12">
                          <button type="submit" className="btn submit-btn">Send Now</button>
                        </div>
                      </div>
                    </div>
                    {/* Message Input Area End */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Contact Us Area End ***** */}
        {/* ***** Footer Area Start ***** */}
        <footer className="footer-social-icon text-center section_padding_70 clearfix">
          {/* footer logo */}
          <div className="footer-text">
            <h2>Ca.</h2>
          </div>
          {/* social icon*/}
          <div className="footer-social-icon">
            <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
            <a href="#"><i className="active fa fa-twitter" aria-hidden="true" /></a>
            <a href="#"> <i className="fa fa-instagram" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
          </div>
          <div className="footer-menu">
            <nav>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
          {/* Foooter Text*/}
          <div className="copyright-text">
            {/* ***** Removing this text is now allowed! This template is licensed under CC BY 3.0 ***** */}
            <p>Copyright ©2017 Ca. Designed by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
          </div>
        </footer><p>Enter your HTML here</p>
      </div>
    );

  }
}

export default App;
