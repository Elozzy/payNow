import React, { Component } from 'react'

export default class Features extends Component {
  render() {
    return (
      <div>
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

      </div>
    )
  }
}
