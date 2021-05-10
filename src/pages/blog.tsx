import React, { useState } from 'react';
import './styles/blog.css'
import { Link } from 'gatsby'
import Footer from "./footer";
import logo  from '../images/logo.png'
import food  from '../images/food.jpg'
import fastfood  from '../images/fastfood.jpg'

export default function Blog() {
    const [show, setShow] = useState(false)

    const Toggle = () => {
        setShow(!show)
    }
    return (
        <div>
            <div className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="title">
                                <h2>Blogs</h2>

                            </div>
                        </div>
                    </div>

                    <section>
                        <div className="row">
                            <div className="col-lg-7 col-xl-7 col-md-7 ">
                                <div className="blog-section-image">
                                    <img src={food} alt="lunch" className="river" />
                                    <img src={logo} className="logo" alt="food_logo" />


                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-5 col-md-5">

                                <div className="section-filter">
                                    <form>
                                        <div className="form-group has-search">
                                            <span className="fa fa-search form-control-feedback" >
                                            </span>
                                            <input type="text" className="form-control" placeholder="Search" />
                                        </div>
                                    </form>

                                    <div className="filter-form ">
                                        <span className="fa fa-filter form-control-feedback" ></span>
                                        <p className="filter"></p>
                                        <span className="filter-text">Filter</span>
                                        <i className={show ? "fa fa-plus" : "fa fa-minus"} onClick={() => Toggle()}></i>
                                    </div>
                                    {show ?
                                        <div className="textfield">
                                            <textarea className="form-control" cols="10" rows="10"  ></textarea>
                                        </div>
                                        : null}
                                </div>

                            </div>

                        </div>
                    </section>

                    <section className="section-card">

                        <main className="grid">
                        <article>
                                <Link to="/title"> <img className="card-img-top" src={fastfood} alt="Card cap" /></Link>
                                <div className="text">
                                    <h3 className="card-title">
                                        Lorem ispurm
                                                <br></br>
                                        Heading
                                                </h3>
                                    <p className="card-text">Loram ispum is a paragraph which is used for dummy text purpose.</p>
                                </div>
                                <div className="card-btn">
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

                                <div className="card-footer ">
                                    <div className="date">
                                        <p>01 May 2021</p>

                                    </div>
                                    <div className="stars" >
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </article>
                                <article>
                                <Link to="/title"> <img className="card-img-top" src={fastfood} alt="Card cap" /></Link>
                                <div className="text">
                                    <h3 className="card-title">
                                        Lorem ispurm
                                                <br></br>
                                        Heading
                                                </h3>
                                    <p className="card-text">Loram ispum is a paragraph which is used for dummy text purpose.</p>
                                </div>
                                <div className="card-btn">
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

                                <div className="card-footer ">
                                    <div className="date">
                                        <p>01 May 2021</p>

                                    </div>
                                    <div className="stars" >
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <Link to="/title"> <img className="card-img-top" src={fastfood} alt="Card cap" /></Link>
                                <div className="text">
                                    <h3 className="card-title">
                                        Lorem ispurm
                                                <br></br>
                                        Heading
                                                </h3>
                                    <p className="card-text">Loram ispum is a paragraph which is used for dummy text purpose.</p>
                                </div>
                                <div className="card-btn">
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

                                <div className="card-footer ">
                                    <div className="date">
                                        <p>01 May 2021</p>

                                    </div>
                                    <div className="stars" >
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </article>

                        </main>

                    </section>
                    <section >

                        <main className="grid">
                        <article>
                                <Link to="/title"> <img className="card-img-top" src={fastfood} alt="Card cap" /></Link>
                                <div className="text">
                                    <h3 className="card-title">
                                        Lorem ispurm
                                                <br></br>
                                        Heading
                                                </h3>
                                    <p className="card-text">Loram ispum is a paragraph which is used for dummy text purpose.</p>
                                </div>
                                <div className="card-btn">
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

                                <div className="card-footer ">
                                    <div className="date">
                                        <p>01 May 2021</p>

                                    </div>
                                    <div className="stars" >
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </article>
                                <article>
                                <Link to="/title"> <img className="card-img-top" src={fastfood} alt="Card cap" /></Link>
                                <div className="text">
                                    <h3 className="card-title">
                                        Lorem ispurm
                                                <br></br>
                                        Heading
                                                </h3>
                                    <p className="card-text">Loram ispum is a paragraph which is used for dummy text purpose.</p>
                                </div>
                                <div className="card-btn">
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

                                <div className="card-footer ">
                                    <div className="date">
                                        <p>01 May 2021</p>

                                    </div>
                                    <div className="stars" >
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <Link to="/title"> <img className="card-img-top" src={fastfood} alt="Card cap" /></Link>
                                <div className="text">
                                    <h3 className="card-title">
                                        Lorem ispurm
                                                <br></br>
                                        Heading
                                                </h3>
                                    <p className="card-text">Loram ispum is a paragraph which is used for dummy text purpose.</p>
                                </div>
                                <div className="card-btn">
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

                                <div className="card-footer ">
                                    <div className="date">
                                        <p>01 May 2021</p>

                                    </div>
                                    <div className="stars" >
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </article>

                        </main>

                    </section>


                </div>
            </div>
            <Footer />
        </div>
    )
}