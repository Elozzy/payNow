import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer-social-icon text-center section_padding_70 clearfix">
          {/* footer logo */}
          <div className="footer-text">
            <h2>PayNow</h2>
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
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          {/* Foooter Text*/}
          <div className="copyright-text">
            <p>Copyright {(new Date().getFullYear())} </p>
          </div>
        </footer>
      </div>
    )
  }
}
