import React from 'react';
import { Link } from 'gatsby'
 import './styles/footer.css'
import logo  from '../images/logo.png'

export default function Footer() {
    return (
        <div>
            <footer id="footer" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer__about">
                                <div className="footer__logo" style={{ display: 'flex' }}>
                                    <img src={logo} alt="food_logo" />
                                    <h6 >FOOFIENOR </h6>
                                </div>
                                <span className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
                                <span className="paragraphs">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</span>


                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 ">
                            <div className="footer__widget">
                                <h6>CATAGORIES</h6>
                                <ul >
                                    <li><Link to="/" className="bottom-links">Home</Link></li>
                                    <li><Link to="/" className="bottom-links">About</Link></li>
                                    <li><Link to="/" className="bottom-links">Blogs</Link></li>
                                    <li><Link to="/" className="bottom-links">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 ">
                            <div className="footer__widget">
                                <h6>Tags Used</h6>
                                <ul >
                                    <li><Link to="/" className="bottom-links">My Account</Link></li>
                                    <li><Link to="/" className="bottom-links">Orders Tracking</Link></li>
                                    <li><Link to="/" className="bottom-links">Checkout</Link></li>
                                    <li><Link to="/" className="bottom-links">Wishlist</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 ">
                            <div id="footer__newslatter">
                                <h6>NEWSLETTER</h6>
                                <div className="subscribe-form">
                                <form >
                                    <input type="text"  placeholder="Email Us"/>
                                    <button><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                </form>
                            </div>
                                {/* <form  >
                                    <input type="text" placeholder="Email Us" />
                                    <button className="site-btn"><i className="fa fa-long-arrow-right"></i></button>
                                </form> */}
                                <div id="footer__social">
                                    <Link to="/" className="links"><i className="fa fa-linkedin" /></Link>
                                    <Link to="/" className="links"><i className="fa fa-twitter" /></Link>
                                    <Link to="/" className="links"><i className="fa fa-behance" /></Link>
                                    <Link to="/" className="links"><i className="fa fa-instagram" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )

}