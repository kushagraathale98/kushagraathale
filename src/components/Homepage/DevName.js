import React from 'react'

export default function DevName() {
    return (
        <div>
            <section className="home-slider owl-carousel js-fullheight">
              <div className="slider-item js-fullheight">
                <div className="overlay" />
                <div className="container">
                  <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
                    <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                      <p><a href="#" className="scroll">Hello! I'm</a></p>
                      <h1 className="mb-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Kushagra Athale</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-item js-fullheight">
                <div className="overlay" />
                <div className="container">
                  <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
                    <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                      <p><a href="#" className="scroll">I'm from India</a></p>
                      <h1 className="mb-3" data-scrollax="properties: {translateY: '30%', opacity: 1.6}">A Web Designer</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
    )
}
