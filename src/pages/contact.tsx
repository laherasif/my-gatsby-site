import React from 'react';
import './styles/contact.css'
import { Link } from 'gatsby'
import Footer from "./footer";

export default function Contact() {
    return (
        <div >

            <div className="contact">
                <div className="container">
                    <div className="color-form">
                        <div className="contact-form">
                            <h2>Contact</h2>
                            <p className="loram">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                                </p>
                        </div>


                    </div>
                    <div className="Bottom-form" ></div>
                    <div className="form-data">
                        <div className="form">
                            <div className="row">
                                <div className="col-lg-7 col-xl-7 col-md-12 ">
                                    <div className="contact-forms">
                                        <h2>Send us a message</h2>
                                        <div className="form-group row">
                                            <div className="col-lg-6 col-xl-6 col-md-12">
                                                <input type="text" placeholder="enter value" className="form-control" name="" />
                                            </div>
                                            <div className="col-lg-6 col-xl-6 col-md-12">
                                                <input type="text" placeholder="enter value" className="form-control" name="" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-6 col-xl-6 col-md-12">
                                                <input type="text" placeholder="enter value" className="form-control" name="" />
                                            </div>
                                            <div className="col-lg-6 col-xl-6 col-md-12">
                                                <input type="text" placeholder="enter value" className="form-control" name="" />
                                            </div>
                                        </div>
                                        <div className="form-group row">

                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <textarea placeholder="enter value" className="form-control" name=""></textarea>
                                            </div>
                                        </div>

                                        <div className="form-group row">

                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <div className="sub-btn">

                                                <sapn className="sub">Submit</sapn>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="social-form">
                                        <h3>Info</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                        <div id="social-links">
                                            <Link to="/" className="links"><i className="fa fa-linkedin" /></Link>
                                            <Link to="/" className="links"><i className="fa fa-twitter" /></Link>
                                            <Link to="/" className="links"><i className="fa fa-behance" /></Link>
                                            <Link to="/" className="links"><i className="fa fa-instagram" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </div>
    )
}