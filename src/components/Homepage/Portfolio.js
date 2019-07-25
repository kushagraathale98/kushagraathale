import React from 'react'

export default function Portfolio() {
    return (
        <div>
              <section className="ftco-section">
              <div className="container">
                <div className="row justify-content-center mb-5 pb-5">
                  <div className="col-md-7 text-center heading-section ftco-animate">
                    <span>What i do</span>
                    <h2>My services</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                    <div className="media block-6 services p-3 py-4 d-block text-center">
                      <div className="icon mb-3"><span className="icon-layers" /></div>
                      <div className="media-body">
                        <h3 className="heading">UI/UX Design</h3>
                        <h3 className="heading">Mobile App Design</h3>
                        <h3 className="heading">Responsive Design</h3>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                    <div className="media block-6 services p-3 py-4 d-block text-center">
                      <div className="icon mb-3"><span className="icon-gears" /></div>
                      <div className="media-body">
                        <h3 className="heading">Frontend Development</h3>
                        <h3 className="heading">Web Design</h3>
                       
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                    <div className="media block-6 services p-3 py-4 d-block text-center">
                      <div className="icon mb-3"><span className="icon-camera" /></div>
                      <div className="media-body">
                        <h3 className="heading">Photography</h3>
                        <h3 className="heading">Image Editing</h3>
                       
                      </div>
                    </div>    
                  </div>
                </div>
              </div>
            </section>
        </div>
    )
}
