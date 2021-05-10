import React from "react"
// import 'fontawesome-4.7'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'
import { Link } from 'gatsby'
import Footer from "./footer";
import logo  from '../images/logo.png'

export default function Home() {
  return (
    <div>
      <div className="food">
        <div className="container">

          <section>
            <div className="section-heading">

              <div className="row">
                <div className=" col-xl-3 col-lg-3 col-md-3">
                  <div className="heading">
                    <p>
                      Sub Title
                          </p>
                    <h2>Heading</h2>
                    <p className="loram">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                      </p>

                    <Link to="/blog" className="button  arrow">Explore</Link>

                  </div>
                </div>
                <div className=" col-xl-7 col-lg-7 col-md-6">
                  <div className="heading-logo">
                    <img src={logo} alt="food_logo" />
                  </div>
                </div>
                <div className=" col-xl-2 col-lg-2 col-md-3">
                  <div className="heading-buttons">
                    <ul>
                      <li><Link to="/about" className="btn btn">About</Link></li>
                      <li><Link to="/contribute" className="btn btn">Contribute</Link></li>
                      <li><Link to="/contact" className="btn btn">Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </div>


            </div>
          </section>


          <main className="grid mt-4">
            <article id="first-card">
              <div className="discover">
                <h1>
                  Discover
                  FoodieNor
                        </h1>
                <div className="discovers-card">
                  <ul>
                    <li >Appolizer</li>
                    <li >Main Dishes</li>
                    <li style={{ borderBottom: 'none', color: '#00205B' }}>Sweet Deesert</li>
                  </ul>
                </div>


              </div>
            </article>
            <article id="second-card">
              <div className="dicover-imagecard card">
                <img className="card-img-top" alt="logo-card" src="http://placeimg.com/640/480/nature" />
                <div className="card-body">
                  <div className="title" >
                    <h5 className="card-title ">Blog Heading</h5>
                    <div className="stars " >
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                  </div>

                  <p className="card-text"> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                  <div className="explore-more">
                    <button><i className="fa fa-long-arrow-right"></i></button>
                    <p>Explore More</p>
                  </div>

                </div>
              </div>
            </article>
          <article id="third-card" >
            <div id="reviews" >
                    <div >
                      <h2>Reviews</h2>

                      <div className="input-group  input-group-lg  mb-2">
                        <div className="input-group-prepend">
                          <span className="input-group-text" >
                            <div className="customer_name" >
                              <p id="para">
                                F
                                </p>
                            </div>
                          </span>
                        </div>
                        <p className="form-control " id="review_show"  >
                          <div className="review-data"  >
                            <div className="title" >
                              <h4>Fedore</h4>


                              <p >Loram ispum is a paragraph   </p>

                            </div>
                            <div className="title-star">
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>

                            </div>

                          </div>
                        </p>

                      </div>
                      <div className="input-group input-group-lg  mb-2">
                        <div className="input-group-prepend">
                          <span className="input-group-text two" >
                            <div className="customer_name" >
                            <p id="para">
                                D
                                </p>
                            </div>
                          </span>
                        </div>
                        <p className="form-control " id="review_show"  >
                          <div className="review-data"  >
                            <div className="title" >
                              <h4>Doe</h4>


                              <p >Loram ispum is a paragraph   </p>

                            </div>
                            <div className="title-star">
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>

                            </div>

                          </div>
                        </p>

                      </div>
                      <div className="input-group  input-group-lg">
                        <div className="input-group-prepend">
                          <span className="input-group-text three" >
                            <div className="customer_name" >
                              <p id="para" >
                                G
                                </p>
                            </div>
                          </span>
                        </div>
                        <p className="form-control " id="review_show"  >
                          <div className="review-data"  >
                            <div className="title" >
                              <h4>Gigi</h4>


                              <p >Loram ispum is a paragraph   </p>

                            </div>
                            <div className="title-star">
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>

                            </div>

                          </div>
                        </p>

                      </div>



                    </div>
                  </div>
            </article>
          </main>

          {/* <section>
            <div className="section-discover">
              <div className="row">
                <div className="col-md-3">
                  <div className="discover">
                    <h1>
                      Discover
                      FoodieNor
                        </h1>
                    <div className="discovers-card">
                      <ul>
                        <li >Appolizer</li>
                        <li >Main Dishes</li>
                        <li style={{ borderBottom: 'none', color: '#00205B' }}>Sweet Deesert</li>
                      </ul>
                    </div>


                  </div>
                </div>
                <div className="col-md-5">
                  <div className="dicover-imagecard card">
                    <img className="card-img-top" alt="logo-card" src="http://placeimg.com/640/480/nature" />
                    <div className="card-body">
                      <div className="title" >
                        <h5 className="card-title ">Blog Heading</h5>
                        <div className="stars " >
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                        </div>
                      </div>

                      <p className="card-text"> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                      <div className="explore-more">
                        <button><i className="fa fa-long-arrow-right"></i></button>
                        <p>Explore More</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div id="reviews" >
                    <div >
                      <h2>Reviews</h2>

                      <div className="input-group  input-group-lg">
                        <div className="input-group-prepend">
                          <span className="input-group-text" >
                            <div className="customer_name" >
                              <p id="para" style={{fontSize:'50px' , width:'60px', height:'75' , textAlign:'center'}}>
                                J
                                </p>
                            </div>
                          </span>
                        </div>
                        <p className="form-control " id="review_show"  >
                          <div className="review-data"  >
                            <div className="title" >
                              <h4>Fedore</h4>


                              <p >Loram ispum is a paragraph   </p>

                            </div>
                            <div className="title-star">
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>

                            </div>

                          </div>
                        </p>

                      </div>



                    </div>
                  </div>
                </div>

              </div>
            </div>

          </section> */}


        </div>

      </div>

      <Footer />


    </div>
  )
}


