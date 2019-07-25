import React from 'react'

export default function Projects() {
    return (
        <div>
            <section className="ftco-section">
              <div className="container">
                <div className="row justify-content-center mb-5 pb-5">
                  <div className="col-md-7 text-center heading-section ftco-animate">
                    <span>Portfolio</span>
                    <h2>Checkout a few of my works</h2>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                    <a href="portfolio-single.html" className="image d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("images/work-1.png")'}} data-scrollax=" properties: { translateY: '-30%'}">
                      <div className="icon d-flex text-center justify-content-center align-items-center">
                        <span className="icon-search" />
                      </div>
                    </a>
                    <div className="text">
                      <h4 className="subheading">DevSocial</h4>
                      <h2 className="heading"><a href="portfolio-single.html">A social media website for Developers</a></h2>
                      <p>A social media website built using React JS and Node JS in which developers can share their projects and ideas along with their resume</p>
                      <p><a href="https://github.com/kushagraathale98">View Project</a></p>
                    </div>
                  </div>
                  <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                    <a href="portfolio-single.html" className="image order-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("images/work-2.png")'}} data-scrollax=" properties: { translateY: '-30%'}">
                      <div className="icon d-flex text-center justify-content-center align-items-center">
                        <span className="icon-search" />
                      </div>
                    </a>
                    <div className="text order-1">
                      <h4 className="subheading">Phone Store</h4>
                      <h2 className="heading"><a href="portfoli-singleo.html">An e-commerce website build in React JS</a></h2>
                      <p>A prototype build in React JS that can be reused by shoppers to take their business online.</p>
                      <p><a href="https://github.com/kushagraathale98">View Project</a></p>
                    </div>
                  </div>
                  <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                    <a href="portfolio-single.html" className="image d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("images/work-3.jpg")'}} data-scrollax=" properties: { translateY: '-30%'}">
                      <div className="icon d-flex text-center justify-content-center align-items-center">
                        <span className="icon-search" />
                      </div>
                    </a>
                    <div className="text">
                      <h4 className="subheading">Web Design/UI </h4>
                      <h2 className="heading"><a href="portfolio-single.html">Design isn’t finished until somebody is using it.</a></h2>
                      <p>I try to create an interactive and user friendly user interface.</p>
                      <p><a href="https://www.behance.net/kushagraathale1">View Project</a></p>
                    </div>
                  </div>
                  <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                    <a href="portfolio-single.html" className="image order-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("images/work-4.jpg")'}} data-scrollax=" properties: { translateY: '-30%'}">
                      <div className="icon d-flex text-center justify-content-center align-items-center">
                        <span className="icon-search" />
                      </div>
                    </a>
                    <div className="text order-1">
                      <h4 className="subheading">Photography</h4>
                      <h2 className="heading"><a href="portfoli-singleo.html">I try to capture my perception of the world</a></h2>
                      <p>View some of my clicks on Instagram</p>
                      <p><a href="https://www.instagram.com/kushagra_athale/">View Photos</a></p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </section>
        </div>
    )
}
