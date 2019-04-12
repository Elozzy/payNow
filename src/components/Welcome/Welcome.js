import React, { Component } from 'react'

export default class Welcome extends Component  {
 
 render() {
     return (
         <div>
              
    
            <section className="wellcome_area clearfix" id="home">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                    <div className="col-12 col-md">
                        <div className="wellcome-heading">
                        <h2>PayNow</h2>
                        <h3>P</h3>
                        <p>Everything You Need. To Start Selling Online Beautifully</p>
                        </div>
                        <div className="get-start-area">
                        {/* Form Start */}
                        <form action="#" method="post" className="form-inline">
                            <input type="email" className="form-control email" placeholder="name@company.com" />
                            <input type="submit" className="submit" defaultValue="Get Started" />
                        </form>
                        {/* Form End */}
                        </div>
                    </div>
                    </div>
                </div>
                {/* Welcome thumb */}
                <div className="welcome-thumb wow fadeInDown" data-wow-delay="0.5s">
                    <img src="img/bg-img/welcome-img.png" alt />
                </div>
                </section>
    </div>
  )
        
 }
}
