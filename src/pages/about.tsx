import React from "react"
import './styles/about.css'
import Footer from "./footer";
// import bread  from '../'

export default function About() {
    return (
        <div>
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="title">
                                <h2>About</h2>
                                <p >
                                    Lorem is a paragraph</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-section">
                        <section className="first-section">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="section-vision">
                                        <h2>Our Vision</h2>
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
                                        <img src="" alt="lunch" />

                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="second-section">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="section-image">
                                        <img src="" alt="lunch" />

                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="section-vision" >
                                        <h2>Our Approch</h2>
                                        <p className="loram">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                      </p>
                                        <p className="loram2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                      </p>
                                    </div>
                                </div>

                            </div>
                        </section>
                        <section className="third-section">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="section-vision">
                                        <h2>Our Process</h2>
                                        <p className="loram">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                      </p>
                                        <p className="loram2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                      </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="section-image">
                                        <img src="" alt="lunch" />

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}