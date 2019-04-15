import React from 'react'

export default function Contact() {
  return (
    <div>
          <section className="footer-contact-area section_padding_100 clearfix" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                {/* Heading Text  */}
                <div className="section-heading">
                  <h2>Get in touch with us!</h2>
                  <div className="line-shape" />
                </div>
                
                <div className="address-text">
                  <p><span>Address:</span> </p>
                </div>
                <div className="phone-text">
                  <p><span>Phone:</span> </p>
                </div>
                <div className="email-text">
                  <p><span>Email:</span> </p>
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

    </div>
  )
}
