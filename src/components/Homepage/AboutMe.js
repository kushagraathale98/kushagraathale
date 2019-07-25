import React from 'react'
import {Link} from 'react-router-dom'
export default function AboutMe() {
    return (
        <div>
            <section className="ftco-section about-section">
              <div className="container">
                <div className="row d-flex" data-scrollax-parent="true">
                  <div className="col-md-4 author-img" style={{backgroundImage: 'url(images/author-1.jpg)'}} data-scrollax=" properties: { translateY: '-70%'}" />
                  <div className="col-md-2" />
                  <div className="col-md-6 wrap ftco-animate">
                    <div className="about-desc">
                      <h1 className="bold-text">About</h1>
                      <div className="p-5">
                        <h2 className="mb-5">Kushagra Athale</h2>
                        <p>I'm a Frontend Developer and UI designer. I try to build creative and interactive user interface.</p>
                        <p><a href="#">Checkout my resume</a></p>
                        <ul className="ftco-footer-social list-unstyled mt-4">
                         
                         
                          <li><a href="https://www.instagram.com/kushagra_athale/"><span className="icon-instagram" /></a></li>
                          <li><a href="https://in.linkedin.com/in/kushagra-athale-256a28157"><span className="icon-linkedin" /></a></li>
                          <li><a href="https://github.com/kushagraathale98"><span className="icon-github" /></a></li>
                        </ul>
                        <h5>Contact me here!</h5>
                        <p>Email: <Link to="#">kushagraathale@gmail.com</Link></p>
                        <p>Phone: <Link to="#">+91-8770814542</Link></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
    )
}
