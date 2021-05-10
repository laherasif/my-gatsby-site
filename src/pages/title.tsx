import React from 'react';
import './styles/title.css'
import Footer from "./footer";
import camra  from '../images/camara.jpg'
import logo  from '../images/logo.png'
import selfi  from '../images/selfi.jpg'
export default function Title() {
    return (
        <div className="title">
            <div className="title-img"> </div>
            <div className="title-container">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="heading-title">
                                <p className="heading-para">
                                    Sub Title
                          </p>
                                <h2>Blog Title</h2>
                                <br></br>
                                <div className="title-starss">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <section>

                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="blog-desc">
                                    <p className="blog-loram">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                      </p>
                                    <p className="blog-loram">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                      </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="blog-img">
                                    <img src={camra} alt="carama-man" />
                                    <p>View More ...</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-two">

                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="blog-logo">
                                    <img src={logo} alt="carama-man" />

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="blog-share-history">
                                    <h3>SHARE THIS STORY</h3>
                                    <hr className="span"></hr>

                                    <ul>
                                        <li>Facebook</li>
                                        <li>Twiter</li>
                                        <li>Fiver</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-third">

                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="blog-desc">
                                    <p className="blog-loram">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                      </p>
                                    <p className="blog-loram">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                      </p>
                                    <div className="pizza-list">
                                        <ul>
                                            <li>
                                                <span className="pizza">
                                                    pizza
                                                       <i className="fa fa-close"></i>
                                                </span>

                                            </li>
                                            <li>
                                                <span className="pizza">
                                                    burger
                                                           <i className="fa fa-close"></i>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="pizza">
                                                    noodles
                                                           <i className="fa fa-close"></i>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="pizza">
                                                    pasta
                                                           <i className="fa fa-close"></i>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-xl-4 col-lg-4 col-md-4">
                                <div className="blog-img">
                                    <img src={camra} alt="carama-man" />

                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-forth">
                        <div className="related-blog">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <img src={selfi} alt="selfi"/>
                                    <div className="related-data">

                                    <p>Sub Title</p>
                                    <h2>Blog Title</h2>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <img src={selfi} alt="selfi"/>
                                    <div className="related-data">

                                    <p>Sub Title</p>
                                    <h2>Blog Title</h2>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <img src={selfi} alt="selfi"/>
                                    <div className="related-data">

                                    <p>Sub Title</p>
                                    <h2>Blog Title</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>

            </div>
           <Footer />
        </div>
    )
}