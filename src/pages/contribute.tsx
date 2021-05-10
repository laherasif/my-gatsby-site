import React from "react"
import './styles/contribution.css'
import Footer from "./footer";
import bread  from '../images/bread.jpg'

export default function Contributation() {
    return (
        <div>
            <div className="contribute">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="title">
                                <h2>How to Contribute</h2>
                                <p >
                                    Lorem is a paragraph which is used for dummy text</p>
                            </div>
                        </div>
                    </div>

                    <section>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="section-vision">
                                    <h2>Give us a Tip</h2>
                                    <p className="loram">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                      </p>
                                    <p className="loram2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                      </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="section-image">
                                    <img src={bread} alt="lunch" />

                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="section-image">
                                    <img src={bread} alt="lunch" />

                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="section-write" style={{ paddingLeft: '30px' }}>
                                    <h2>Write with us </h2>
                                    <p className="loram">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                      </p>
                                    <p className="loram2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                      </p>
                                     
                                     <div className="bulluts-list">
                                         <ul>
                                             <li>Loram is paragraph</li>
                                             <li>Loram is paragraph</li>
                                             <li>Loram is paragraph</li>
                                         </ul>
                                     </div>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>
            </div>
            <Footer/>
        </div>
    )
}