import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                 <div className="KW_progressContainer">
          <div className="KW_progressBar">
          </div>
        </div>
        <div className="page">
          <nav id="colorlib-main-nav" role="navigation">
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i /></a>
            <div className="js-fullheight colorlib-table">
              <div className="img" style={{backgroundImage: 'url(images/author-2.jpg)'}} />
              <div className="colorlib-table-cell js-fullheight">
                <div className="row no-gutters">
                  <div className="col-md-12 text-center">
                    <h1 className="mb-4"><a href="index.html" className="logo">Kushagra Athale</a></h1>
                    <ul>
                      <li className="active"><a href="/" ><span><small>01</small>Home</span></a></li>
                      <li><a href="/about"><span><small>02</small>About Me</span></a></li>
                      
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <header>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="colorlib-navbar-brand">
                      <a className="colorlib-logo" href="index.html"><span className="logo-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />Kushagra Athale</a>
                    </div>
                    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
                  </div>
                </div>
              </div>
            </header>
          </div>
            </div>
            
        )
    }
}
