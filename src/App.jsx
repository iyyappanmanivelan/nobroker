import React, { useState } from "react";
import {
  Arrow90degLeft,
  ArrowUpRight,
  CardImage,
  Check,
  ChevronBarDown,
  ChevronDown,
  CurrencyRupee,
  GeoAlt,
  GeoAltFill,
  Heart,
  HeartFill,
  Person,
  PersonCircle,
  PersonFill,
  Search,
  StarFill,
  StarHalf,
  WindowX,
  XCircle,
} from "react-bootstrap-icons";
import houseimages from "../src/image/home.jpeg";
import chennai from "../src/image/Chennai.jpg";
import kolkata from "../src/image/Kolkata.avif";
import mumbai from "../src/image/mumbai.jpg";
import bangalore from "../src/image/banglore.jpg";
import noida from "../src/image/noida.jpg";
import ghaziabad from "../src/image/ghaziabad.jpg";
import delhi from "../src/image/delhi.webp";
import pune from "../src/image/pune.jpg";
import faridabad from "../src/image/faridabad.jpg";
import house from "../src/image/house.png";
import handcoin from "../src/image/handcoin.png";
import phone from "../src/image/phone.png";
import badge from "../src/image/hand2.png";
import hall from "../src/image/hall.jpg";
import hall2 from "../src/image/hall2.webp";
import appartment from "../src/image/appartment.jpg";
import singlehome from "../src/image/singlehome.jpg";
import houseshift from "../src/image/houseshift.jpg";
import homeloan from "../src/image/homeloan.jpg";
import aggrement from "../src/image/aggrement.jpg";
import paint from "../src/image/housepaint.jpg";
import rentreceipt from "../src/image/rentrecipt.webp";
import verified from "../src/image/renthouse.jpeg";
import independent from "../src/image/featureimg1.jpg";
import flats from "../src/image/featureimg2.jpg";
import villas from "../src/image/featureimg3.avif";
import plot from "../src/image/featureimg4.avif";
import colving from "../src/image/featureimg5.jpg";
import office from "../src/image/featureimg6.avif";
import appartmentbg from '../src/image/contact-bg.jpeg'

function App() {
  const [heart, setheart] = useState(false);
  const[trie , settrie]=useState(false)
  const[frees,setfrees]=useState(false)
  const[basics,setbasics]=useState(false);
  const[standards,setstandards]=useState(false)

  const heartselect = () => {
    setheart(!heart);
  };

  const premium=()=>{
    settrie(!trie)
  }
  const free=()=>{
    setfrees(!frees)
  }

  const standard=()=>{
    setstandards(!standards)
  }

  const basic=()=>{
    setbasics(!basics)
  }
  return (
    <>
      <header className="header-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-3">
              <div className="location flex-concept text-center">
                <div className="location-logo">
                  <GeoAltFill />
                </div>
                <div className="location-list">
                  <select>
                    <option>Chennai</option>
                    <option>Delhi</option>
                    <option>Bengalore</option>
                    <option>Hyderabad</option>
                    <option>Mumbai</option>
                  </select>
                </div>
                <div className="free-post bg-light">
                  <p>
                    Post Property <span className="free-name">Free</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="person-icon text-center">
                <div className="person-logo">
                  <PersonFill className="personimg" />
                </div>
                <div className="person-content">
                  <p>No To Brokers</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="login-section text-center flex-concept">
                <div className="shortlist">
                  <HeartFill className="mx-2" />
                  <p>Shortlist</p>
                </div>
                <div className="login-btn flex-concept">
                  <div className="login-logo">
                    <PersonFill />
                  </div>
                  <div className="login mx-2">
                    <p>Login</p>
                  </div>
                  <div className="signup">
                    <p>Signup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="navlist">
        <div className="container">
          <div className="page-list">
            <ul className="page-types">
              <li className="active">Home</li>
              <li>
                Buy{" "}
                <span>
                  <ChevronDown />
                </span>
              </li>
              <li>
                Sell{" "}
                <span>
                  <ChevronDown />
                </span>
              </li>
              <li>
                Rent{" "}
                <span>
                  <ChevronDown />
                </span>
              </li>
              <li>
                Service{" "}
                <span>
                  <ChevronDown />
                </span>
              </li>
              <li>
                Advice{" "}
                <span>
                  <ChevronDown />
                </span>
              </li>
              <li>
                Help{" "}
                <span>
                  <ChevronDown />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="house-image">
        <div className="image-set">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="house">
                  <div className="house-overlay"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="house">
                  <div className="house-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="enquiry-list">
          <div className="container">
            <div className="b-name">
              <h1>
                GET YOUR <span className="dreamhouse"> DREAM HOUSE</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="house-details">
          <div className="container">
            <div className="house-type">
              <ul className="type-list">
                <li>PG</li>
                <li>Sell</li>
                <li>Buy</li>
                <li>Plot</li>
                <li>Commercial</li>
              </ul>
            </div>
            <div className="house-information bg-white">
              <div className="information-types">
                <ul className="inform-type-list">
                  <li>Category</li>
                  <li>City</li>
                  <li>Beds & Baths</li>
                  <li>Sale Price</li>
                  <li></li>
                </ul>
              </div>
              <div className="information-collect">
                <ul className="inform-collect-list">
                  <li>
                    Villas{" "}
                    <span>
                      <ChevronDown />
                    </span>
                  </li>
                  <li>
                    Property City{" "}
                    <span>
                      <ChevronDown />
                    </span>
                  </li>
                  <li>
                    Beds | Baths{" "}
                    <span>
                      <ChevronDown />
                    </span>
                  </li>
                  <li>
                    Sales Price{" "}
                    <span>
                      <ChevronDown />
                    </span>
                  </li>
                  <li>
                    Search{" "}
                    <span>
                      <Search />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="properties my-5">
        <div className="container">
          <div className="prop text-center">
            <div className="prop-name">
              <h3>Properties By Area</h3>
            </div>
            <div className="prop-content">
              <p>
                Highlight the Best of Your Properties By Using The List Category
                Shortcode. You can List Categories, Area, Types, Cities And
                states Of Your choice
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="place-images">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="place-pic">
                    <img src={chennai} className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6 details">
                  <div className="place-info">
                    <div className="area">
                      <h4>Chennai</h4>
                    </div>
                    <div className="area-address">
                      <p>36 House 26 villas Etc..</p>
                    </div>
                    <div className="reviews-star">
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarHalf />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-5">
                <div className="col-md-6">
                  <div className="place-pic">
                    <img src={kolkata} className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6 details">
                  <div className="place-info">
                    <div className="area">
                      <h4>Kolkata</h4>
                    </div>
                    <div className="area-address">
                      <p>36 House 26 villas Etc..</p>
                    </div>
                    <div className="reviews-star">
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarHalf />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-5">
                <div className="col-md-6">
                  <div className="place-pic">
                    <img src={mumbai} className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6 details">
                  <div className="place-info">
                    <div className="area">
                      <h4>Mumbai</h4>
                    </div>
                    <div className="area-address">
                      <p>36 House 26 villas Etc..</p>
                    </div>
                    <div className="reviews-star">
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarHalf />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="place-pic">
                    <img src={bangalore} className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6 details">
                  <div className="place-info">
                    <div className="area">
                      <h4>Banglore</h4>
                    </div>
                    <div className="area-address">
                      <p>36 House 26 villas Etc..</p>
                    </div>
                    <div className="reviews-star">
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarHalf />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-5">
                <div className="col-md-6">
                  <div className="place-pic">
                    <img src={noida} className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6 details">
                  <div className="place-info">
                    <div className="area">
                      <h4>Noida</h4>
                    </div>
                    <div className="area-address">
                      <p>36 House 26 villas Etc..</p>
                    </div>
                    <div className="reviews-star">
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarHalf />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-5">
                <div className="col-md-6">
                  <div className="place-pic">
                    <img src={ghaziabad} className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6 details">
                  <div className="place-info">
                    <div className="area">
                      <h4>Ghaziabad</h4>
                    </div>
                    <div className="area-address">
                      <p>36 House 26 villas Etc..</p>
                    </div>
                    <div className="reviews-star">
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarHalf />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="place-pic">
                    <img src={delhi} className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6 details">
                  <div className="place-info">
                    <div className="area">
                      <h4>Delhi</h4>
                    </div>
                    <div className="area-address">
                      <p>36 House 26 villas Etc..</p>
                    </div>
                    <div className="reviews-star">
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarHalf />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-5">
                <div className="col-md-6">
                  <div className="place-pic">
                    <img src={pune} className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6 details">
                  <div className="place-info">
                    <div className="area">
                      <h4>Pune</h4>
                    </div>
                    <div className="area-address">
                      <p>36 House 26 villas Etc..</p>
                    </div>
                    <div className="reviews-star">
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarHalf />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-5">
                <div className="col-md-6">
                  <div className="place-pic">
                    <img src={faridabad} className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6 details">
                  <div className="place-info">
                    <div className="area">
                      <h4>Faridabad</h4>
                    </div>
                    <div className="area-address">
                      <p>36 House 26 villas Etc..</p>
                    </div>
                    <div className="reviews-star">
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarFill />
                      </div>
                      <div className="star">
                        <StarHalf />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="selection">
        <div className="selection-content properties pt-4">
          <div className="container text-center">
            <div className="select-name ">
              <h4>Why Select Us</h4>
            </div>
            <div className="select-info">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus nisi fugit voluptatum, incidunt expedita, .
              </p>
            </div>
          </div>
        </div>

        <div className="seclection-list py-5">
          <div className="container">
            <div className="select-boxes">
              <div className="box">
                <div className="box-logo">
                  <img src={handcoin} className="img-fluid" />
                </div>
                <div className="box-name">
                  <h4>Save Brokerage Free</h4>
                </div>
                <div className="box-content">
                  <p>
                    Unlock savings and streamline your Property journey with our
                    brokerage free-free platform
                  </p>
                </div>
                <div className="read">
                  <p>Read more</p>
                </div>
              </div>
              <div className="box">
                <div className="box-logo">
                  <img src={house} className="img-fluid" />
                </div>
                <div className="box-name">
                  <h4>Save Brokerage Free</h4>
                </div>
                <div className="box-content">
                  <p>
                    Unlock savings and streamline your Property journey with our
                    brokerage free-free platform
                  </p>
                </div>
                <div className="read">
                  <p>Read more</p>
                </div>
              </div>
              <div className="box">
                <div className="box-logo">
                  <img src={phone} className="img-fluid" />
                </div>
                <div className="box-name">
                  <h4>Save Brokerage Free</h4>
                </div>
                <div className="box-content">
                  <p>
                    Unlock savings and streamline your Property journey with our
                    brokerage free-free platform
                  </p>
                </div>
                <div className="read">
                  <p>Read more</p>
                </div>
              </div>
              <div className="box">
                <div className="box-logo">
                  <img src={badge} className="img-fluid" />
                </div>
                <div className="box-name">
                  <h4>Save Brokerage Free</h4>
                </div>
                <div className="box-content">
                  <p>
                    Unlock savings and streamline your Property journey with our
                    brokerage free-free platform
                  </p>
                </div>
                <div className="read">
                  <p>Read more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="latest-property my-5">
        <div className="latest properties">
          <div className="container">
            <div className="latest text-center">
              <div className="latest-name">
                <h4>Latest Property</h4>
              </div>
              <div className="latest-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, dolorem doloribus aperiam rerum cupiditate maiores .
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="latest-prop-list ">
          <div className="container">
            <div className="latest-house">
              <div className="house-pic">
                <div className="house-logo">
                  <img src={hall} className="img-fluid"></img>
                  <div className="img-details">
                    <h4>verified</h4>
                  </div>
                  <div className="heart-pic" onClick={heartselect}>
                    <HeartFill
                      className={heart === true ? "hear-color" : "hear"}
                    />
                  </div>
                  <div className="likes">
                    <CardImage /> 6
                  </div>
                </div>
                <div className="house-info">
                  <div className="house-detail">
                    <p>1BHK FLOAT ,2BEADROOM & BALCONY</p>
                  </div>
                  <div className="house-price">
                    <h3>
                      <CurrencyRupee /> 5 Lakhs | 1000 sq.ft
                    </h3>
                  </div>
                  <div className="house-information">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eveniet repellendus, suscipit et similique, .
                    </p>
                  </div>
                  <div className="house-location">
                    <div className="house-area">
                      <p>Mylapor,chennai</p>
                    </div>
                    <div className="house-date">
                      <p>2days before</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="house-pic">
                <div className="house-logo">
                  <img
                    src={appartment}
                    className="img-fluid"
                    style={{ height: "169px", objectFit: "cover" }}
                  ></img>
                  <div className="img-details">
                    <h4>verified</h4>
                  </div>
                  <div className="heart-pic" onClick={heartselect}>
                    <HeartFill
                      className={heart === true ? "hear-color" : "hear"}
                    />
                  </div>
                  <div className="likes">
                    <CardImage /> 6
                  </div>
                </div>
                <div className="house-info">
                  <div className="house-detail">
                    <p>1BHK FLOAT ,2BEADROOM & BALCONY</p>
                  </div>
                  <div className="house-price">
                    <h3>
                      <CurrencyRupee /> 5 Lakhs | 1000 sq.ft
                    </h3>
                  </div>
                  <div className="house-information">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eveniet repellendus, suscipit et similique, .
                    </p>
                  </div>
                  <div className="house-location">
                    <div className="house-area">
                      <p>Mylapor,chennai</p>
                    </div>
                    <div className="house-date">
                      <p>2days before</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="house-pic">
                <div className="house-logo">
                  <img src={singlehome} className="img-fluid"></img>
                  <div className="img-details">
                    <h4>verified</h4>
                  </div>
                  <div className="heart-pic" onClick={heartselect}>
                    <HeartFill
                      className={heart === true ? "hear-color" : "hear"}
                    />
                  </div>
                  <div className="likes">
                    <CardImage /> 6
                  </div>
                </div>
                <div className="house-info">
                  <div className="house-detail">
                    <p>1BHK FLOAT ,2BEADROOM & BALCONY</p>
                  </div>
                  <div className="house-price">
                    <h3>
                      <CurrencyRupee /> 5 Lakhs | 1000 sq.ft
                    </h3>
                  </div>
                  <div className="house-information">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eveniet repellendus, suscipit et similique, .
                    </p>
                  </div>
                  <div className="house-location">
                    <div className="house-area">
                      <p>Mylapor,chennai</p>
                    </div>
                    <div className="house-date">
                      <p>2days before</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="house-pic">
                <div className="house-logo">
                  <img src={hall2} className="img-fluid"></img>
                  <div className="img-details">
                    <h4>verified</h4>
                  </div>
                  <div className="heart-pic" onClick={heartselect}>
                    <HeartFill
                      className={heart === true ? "hear-color" : "hear"}
                    />
                  </div>
                  <div className="likes">
                    <CardImage /> 6
                  </div>
                </div>
                <div className="house-info">
                  <div className="house-detail">
                    <p>1BHK FLOAT ,2BEADROOM & BALCONY</p>
                  </div>
                  <div className="house-price">
                    <h3>
                      <CurrencyRupee /> 5 Lakhs | 1000 sq.ft
                    </h3>
                  </div>
                  <div className="house-information">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eveniet repellendus, suscipit et similique, .
                    </p>
                  </div>
                  <div className="house-location">
                    <div className="house-area">
                      <p>Mylapor,chennai</p>
                    </div>
                    <div className="house-date">
                      <p>2days before</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="list-more text-center mt-4">
          <div className="list-button">
            <button className="text-white">List more property</button>
          </div>
        </div>
      </section>

      <section className="explore-service">
        <div className="exploring properties my-5">
          <div className="container">
            <div className="exploring text-center">
              <div className="latest-name">
                <h4>Explore Our Services</h4>
              </div>
              <div className="latest-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, dolorem doloribus aperiam rerum cupiditate maiores .
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="explore-images">
          <div className="container">
            <div className="explore ">
              <div className="explore-img-list">
                <div className="explore-pic">
                  <img src={houseshift} className="img-fluid" />
                </div>

                <div className="explore-content">
                  <h3>PACKERS & MOVERS</h3>
                  <p>
                    Relocate Seamlessly With Our Trusted Packers & Movers
                    services
                  </p>
                  <h6>
                    <PersonCircle className="follower text-dark" /> 360 people
                  </h6>
                </div>
              </div>

              <div className="explore-img-list">
                <div className="explore-pic">
                  <img src={homeloan} className="img-fluid" />
                </div>

                <div className="explore-content">
                  <h3>HOME LOAN</h3>
                  <p>
                    Relocate Seamlessly With Our Trusted Packers & Movers
                    services
                  </p>
                  <h6>
                    <PersonCircle className="follower text-dark" /> 360 people
                  </h6>
                </div>
              </div>

              <div className="explore-img-list">
                <div className="explore-pic">
                  <img src={aggrement} className="img-fluid" />
                </div>

                <div className="explore-content">
                  <h3>SALE AGREEMENT</h3>
                  <p>
                    Relocate Seamlessly With Our Trusted Packers & Movers
                    services
                  </p>
                  <h6>
                    <PersonCircle className="follower text-dark" /> 360 people
                  </h6>
                </div>
              </div>
            </div>
            <div className="explore my-3">
              <div className="explore-img-list">
                <div className="explore-pic">
                  <img src={paint} className="img-fluid" />
                </div>

                <div className="explore-content">
                  <h3>PAINTING </h3>
                  <p>
                    Relocate Seamlessly With Our Trusted Packers & Movers
                    services
                  </p>
                  <h6>
                    <PersonCircle className="follower text-dark" /> 360 people
                  </h6>
                </div>
              </div>

              <div className="explore-img-list">
                <div className="explore-pic">
                  <img src={rentreceipt} className="img-fluid" />
                </div>

                <div className="explore-content">
                  <h3>RENT RECEIPTS</h3>
                  <p>
                    Relocate Seamlessly With Our Trusted Packers & Movers
                    services
                  </p>
                  <h6>
                    <PersonCircle className="follower text-dark" /> 360 people
                  </h6>
                </div>
              </div>

              <div className="explore-img-list">
                <div className="explore-pic">
                  <img src={verified} className="img-fluid" />
                </div>

                <div className="explore-content">
                  <h3> VERIFIED TALENTS</h3>
                  <p>
                    Relocate Seamlessly With Our Trusted Packers & Movers
                    services
                  </p>
                  <h6>
                    <PersonCircle className="follower text-dark" /> 360 people
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="latest-property my-5">
        <div className="latest properties">
          <div className="container">
            <div className="latest text-center">
              <div className="latest-name">
                <h4>Latest Property</h4>
              </div>
              <div className="latest-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, dolorem doloribus aperiam rerum cupiditate maiores .
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="latest-prop-list my-5 ">
          <div className="container">
            <div className="latest-house">
              <div className="house-pic">
                <div className="house-logo">
                  <img src={hall} className="img-fluid"></img>
                  <div className="heart-pic" onClick={heartselect}>
                    <HeartFill
                      className={heart === true ? "hear-color" : "hear"}
                    />
                  </div>
                  <div className="likes">
                    <CardImage /> 6
                  </div>
                </div>
                <div className="house-info">
                  <div className="house-detail">
                    <p>1BHK FLOAT ,2BEADROOM & BALCONY</p>
                  </div>
                  <div className="house-price">
                    <h3>
                      <CurrencyRupee /> 15,000 | 2800 sq.ft
                    </h3>
                  </div>
                  <div className="house-information">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eveniet repellendus, suscipit et similique, .
                    </p>
                  </div>
                  <div className="house-location">
                    <div className="house-area">
                      <p>Avadi, chennai</p>
                    </div>
                    <div className="house-date">
                      <p>Contact Owner</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="house-pic">
                <div className="house-logo">
                  <img
                    src={appartment}
                    className="img-fluid"
                    style={{ height: "169px", objectFit: "cover" }}
                  ></img>

                  <div className="heart-pic" onClick={heartselect}>
                    <HeartFill
                      className={heart === true ? "hear-color" : "hear"}
                    />
                  </div>
                  <div className="likes">
                    <CardImage /> 6
                  </div>
                </div>
                <div className="house-info">
                  <div className="house-detail">
                    <p>1BHK FLOAT ,2BEADROOM & BALCONY</p>
                  </div>
                  <div className="house-price">
                    <h3>
                      <CurrencyRupee /> 11,000| 525 sq.ft
                    </h3>
                  </div>
                  <div className="house-information">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eveniet repellendus, suscipit et similique, .
                    </p>
                  </div>
                  <div className="house-location">
                    <div className="house-area">
                      <p>Avadi, chennai</p>
                    </div>
                    <div className="house-date">
                      <p>Contact Owner</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="house-pic">
                <div className="house-logo">
                  <img src={singlehome} className="img-fluid"></img>

                  <div className="heart-pic" onClick={heartselect}>
                    <HeartFill
                      className={heart === true ? "hear-color" : "hear"}
                    />
                  </div>
                  <div className="likes">
                    <CardImage /> 6
                  </div>
                </div>
                <div className="house-info">
                  <div className="house-detail">
                    <p>1BHK FLOAT ,2BEADROOM & BALCONY</p>
                  </div>
                  <div className="house-price">
                    <h3>
                      <CurrencyRupee /> 12,000 | 600 sq.ft
                    </h3>
                  </div>
                  <div className="house-information">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eveniet repellendus, suscipit et similique, .
                    </p>
                  </div>
                  <div className="house-location">
                    <div className="house-area">
                      <p>Bandra Mumbai</p>
                    </div>
                    <div className="house-date">
                      <p>Contact Owner</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="house-pic">
                <div className="house-logo">
                  <img src={hall2} className="img-fluid"></img>

                  <div className="heart-pic" onClick={heartselect}>
                    <HeartFill
                      className={heart === true ? "hear-color" : "hear"}
                    />
                  </div>
                  <div className="likes">
                    <CardImage /> 6
                  </div>
                </div>
                <div className="house-info">
                  <div className="house-detail">
                    <p>1BHK FLOAT ,2BEADROOM & BALCONY</p>
                  </div>
                  <div className="house-price">
                    <h3>
                      <CurrencyRupee /> 15,000 | 400 sq.ft
                    </h3>
                  </div>
                  <div className="house-information">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eveniet repellendus, suscipit et similique, .
                    </p>
                  </div>
                  <div className="house-location">
                    <div className="house-area">
                      <p>Narela, Delhi</p>
                    </div>
                    <div className="house-date">
                      <p>Contact Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="list-more text-center mt-4">
          <div className="list-button">
            <button className="text-white">List more property</button>
          </div>
        </div>
      </section>

      <section className="feature-property">
        <div className="feature properties">
          <div className="container">
            <div className="featurelist text-center">
              <div className="latest-name">
                <h4>Features Of The Property</h4>
              </div>
              <div className="latest-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, dolorem doloribus aperiam rerum cupiditate maiores .
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-images">
          <div className="container">
            <div className="image-visit">
              <div className="free-house">
                <div className="free-pic">
                  <img
                    src={independent}
                    className="img-fluid"
                    style={{ height: "238px" }}
                  />
                </div>
                <div className="free-name">
                  <h4>independent House</h4>
                  <h3>
                    <Arrow90degLeft />
                  </h3>
                </div>
                <div className="feature-count">
                  <p>10+ Properties</p>
                </div>
              </div>

              <div className="free-house">
                <div className="free-pic">
                  <img src={flats} className="img-fluid" />
                </div>
                <div className="free-name">
                  <h4>Flats</h4>
                  <h3>
                    <Arrow90degLeft />
                  </h3>
                </div>
                <div className="feature-count">
                  <p>20+ Properties</p>
                </div>
              </div>

              <div className="free-house mb-4">
                <div className="free-pic">
                  <img src={villas} className="img-fluid" />
                </div>
                <div className="free-name">
                  <h4>Villas</h4>
                  <h3>
                    <Arrow90degLeft />
                  </h3>
                </div>
                <div className="feature-count">
                  <p>16+ Properties</p>
                </div>
              </div>
            </div>

            <div className="image-visit">
              <div className="free-house">
                <div className="free-pic">
                  <img
                    src={plot}
                    className="img-fluid"
                    style={{ height: "238px" }}
                  />
                </div>
                <div className="free-name">
                  <h4>Plot</h4>
                  <h3>
                    <Arrow90degLeft />
                  </h3>
                </div>
                <div className="feature-count">
                  <p>19+ Properties</p>
                </div>
              </div>

              <div className="free-house">
                <div className="free-pic">
                  <img src={colving} className="img-fluid" />
                </div>
                <div className="free-name">
                  <h4>Colving Space</h4>
                  <h3>
                    <Arrow90degLeft />
                  </h3>
                </div>
                <div className="feature-count">
                  <p>59+ Properties</p>
                </div>
              </div>

              <div className="free-house">
                <div className="free-pic">
                  <img src={office} className="img-fluid" />
                </div>
                <div className="free-name">
                  <h4>Office Area</h4>
                  <h3>
                    <Arrow90degLeft />
                  </h3>
                </div>
                <div className="feature-count">
                  <p>19+ Properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="articles my-5">
        <div className="article-update properties text-center my-5">
          <div className="container">
            <div className="article-top">
              <h3>Articles And Updates</h3>
            </div>
            <div className="article-content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo voluptatem recusandae numquam enim pariatur.
              </p>
            </div>
          </div>
        </div>

        <div className="articles-description">
          <div className="container">
            <div className="description-list">
              <div className="description">
                <div className="description-name">
                  <p>INTERIOR</p>
                </div>
                <div className="description-content">
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur
                  </h5>
                </div>

                <div className="description-info">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet, reprehenderit! Voluptate ullam velit quis, maiores
                    eveniet tempora, ipsum voluptas{" "}
                  </p>
                </div>

                <div className="description-date">
                  <p>ON 26.01.2003</p>
                  <ArrowUpRight />
                </div>
              </div>

              <div className="description">
                <div className="description-name">
                  <p>INTERIOR</p>
                </div>
                <div className="description-content">
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur{" "}
                  </h5>
                </div>

                <div className="description-info">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet, reprehenderit! Voluptate ullam velit quis, maiores
                    eveniet tempora, ipsum voluptas{" "}
                  </p>
                </div>

                <div className="description-date">
                  <p>ON 26.01.2003</p>
                  <ArrowUpRight />
                </div>
              </div>

              <div className="description">
                <div className="description-name">
                  <p>INTERIOR</p>
                </div>
                <div className="description-content">
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur{" "}
                  </h5>
                </div>

                <div className="description-info">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet, reprehenderit! Voluptate ullam velit quis, maiores
                    eveniet tempora, ipsum voluptas{" "}
                  </p>
                </div>

                <div className="description-date">
                  <p>ON 26.01.2003</p>
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clients-comment my-3">
        <div className="clients properties text-center">
          <div className="container">
            <div className="client-top">
              <h5>Why Client Say About Us</h5>
            </div>
            <div className="client-content">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, autem. Voluptatum maiores </p>
            </div>
          </div>
        </div>

        <div className="client-section my-5">
          <div className="container-fluid">
            <div className="client-speech">
              <div className="client-list">
                <div className="client-name">
                  <PersonCircle/> Jothika
                </div>
                <div className="clinet-address">
                  <p>Australia | May, 2017</p>
                </div>
                <div className="client-stars ">
                  <StarFill/>
                  <StarFill/>
                  <StarFill/>
                  <StarFill/>
                  <StarHalf/>
                </div>
                <div className="client-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui inventore recusandae repudiandae magnam saepe totam sequi praesentium velit at excepturi, et veniam dolorum laudantium ullam dolor deserunt nam optio?</p>
                </div>
                <div className="client-read">
                  <p>Read More...</p>
                </div>
              </div>
              <div className="client-list">
                <div className="client-name">
                  <PersonCircle/> Ashok
                </div>
                <div className="clinet-address">
                  <p>Delhi | March, 2006</p>
                </div>
                <div className="client-stars ">
                  <StarFill/>
                  <StarFill/>
                  <StarFill/>
                  <StarFill/>
                  <StarHalf/>
                </div>
                <div className="client-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui inventore recusandae repudiandae magnam saepe totam sequi praesentium velit at excepturi, et veniam dolorum laudantium ullam dolor deserunt nam optio?</p>
                </div>
                <div className="client-read">
                  <p>Read More...</p>
                </div>
              </div>
              <div className="client-list">
                <div className="client-name">
                  <PersonCircle/> Ganapathy
                </div>
                <div className="clinet-address">
                  <p>Chennai | April, 2020</p>
                </div>
                <div className="client-stars ">
                  <StarFill/>
                  <StarFill/>
                  <StarFill/>
                  <StarFill/>
                  <StarHalf/>
                </div>
                <div className="client-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui inventore recusandae repudiandae magnam saepe totam sequi praesentium velit at excepturi, et veniam dolorum laudantium ullam dolor deserunt nam optio?</p>
                </div>
                <div className="client-read">
                  <p>Read More...</p>
                </div>
              </div>
              <div className="client-list">
                <div className="client-name">
                  <PersonCircle/> John 
                </div>
                <div className="clinet-address">
                  <p>Berlin | June, 2012</p>
                </div>
                <div className="client-stars ">
                  <StarFill/>
                  <StarFill/>
                  <StarFill/>
                  <StarFill/>
                  <StarHalf/>
                </div>
                <div className="client-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui inventore recusandae repudiandae magnam saepe totam sequi praesentium velit at excepturi, et veniam dolorum laudantium ullam dolor deserunt nam optio?</p>
                </div>
                <div className="client-read ">
                  <p>Read More...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plans">
        <div className="right-plan properties text-center">
          <div className="container">
            <div className="plan-name">
              <h4>The Right Plan Select Your Dream Home</h4>
            </div>
            <div className="plan-info">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus fuga reprehenderit labore maxime voluptatem. ? Rem.</p>
            </div>
          </div>
        </div>

        <div className="customer-plans">
          <div className="container">
            <div className="plan-list">
              <div className="free" onClick={free}>
                <div className="plan-type">
                  <h5>Free</h5>
                </div>
                <div className="plan-system">
                  <ul>
                    <li><span><Check/></span>  Upload video up to 720p resolution</li>
                    <li className="non"><span><Check/></span>  Achievment & Post Scheduling</li>
                    <li className="non" ><span><Check/></span>  Set Your Rates</li>
                    <li className="non" ><span><Check/></span>  Excluscive Deals</li>
                    <li className="non"><span><XCircle/></span>  Advanced Statistics</li>
                  </ul>
                </div>
                <div className={frees === false?"choose-btn":"choose-btn2"}>
                  <button>Choose</button>
                </div>
                <div className={frees === true ?"choose-btn-try":"choose-btn-try2"}>
                  <button>Try Now</button>
                </div>
              </div>

              <div className="free" onClick={basic}>
                <div className="plan-type">
                  <h5>Basic</h5>
                </div>
                <div className="plan-system">
                  <ul>
                    <li><span><Check/></span>  Upload video up to 720p resolution</li>
                    <li><span><Check/></span>  Achievment & Post Scheduling</li>
                    <li className="non" ><span><Check/></span>  Set Your Rates</li>
                    <li className="non" ><span><Check/></span>  Excluscive Deals</li>
                    <li className="non" ><span><XCircle/></span>  Advanced Statistics</li>
                  </ul>
                </div>
                <div className="plan-rate">
                  <CurrencyRupee/>123/<span>month</span>
                </div>
                <div className={basics === false?"choose-btn":"choose-btn2"}>
                  <button>Choose</button>
                </div>
                <div className={basics === true ?"choose-btn-try":"choose-btn-try2"}>
                  <button>Try Now</button>
                </div>
              </div>

              <div className="free" onClick={standard}>
                <div className="plan-type">
                  <h5>Standard</h5>
                </div>
                <div className="plan-system">
                  <ul>
                    <li><span><Check/></span>  Upload video up to 720p resolution</li>
                    <li><span><Check/></span>  Achievment & Post Scheduling</li>
                    <li><span><Check/></span>  Set Your Rates</li>
                    <li><span><Check/></span>  Excluscive Deals</li>
                    <li className="non" ><span><XCircle/></span>  Advanced Statistics</li>
                  </ul>
                </div>
                <div className="plan-rate">
                  <CurrencyRupee/>123/<span>month</span>
                </div>
                <div className={standards === false?"choose-btn":"choose-btn2"}>
                  <button>Choose</button>
                </div>
                <div className={standards=== true ?"choose-btn-try":"choose-btn-try2"}>
                  <button>Try Now</button>
                </div>
              </div>

              <div className="free" onClick={premium}>
                <div className="plan-type">
                  <h5>Premium</h5>
                </div>
                <div className="plan-system">
                  <ul>
                    <li><span><Check/></span> Upload video up to 720p resolution</li>
                    <li><span><Check/></span>  Achievment & Post Scheduling</li>
                    <li><span><Check/></span> Set Your Rates</li>
                    <li><span><Check/></span>  Excluscive Deals</li>
                    <li><span><Check/></span>  Advanced Statistics</li>
                  </ul>
                </div>
                <div className="plan-rate">
                  <CurrencyRupee/>123/<span>month</span>
                </div>
                <div className={trie === false?"choose-btn":"choose-btn2"}>
                  <button>Choose</button>
                </div>
                <div className={trie === true ?"choose-btn-try":"choose-btn-try2"}>
                  <button>Try Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact my-5">
        <div className="container">
          <div className="background-view">
            <div className="upper-apply"></div>
            <div className="contact-view properties text-light ">
                 <div className="container">
                 <div className="contact-name text-center">
                  <h2>General Enquires</h2>
                 </div>
                 <div className="contact-info text-center">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptas reprehenderit numquam.
                  </p>
                 </div>
                 </div>
            </div>

            <div className="customer-details">
              <div className="container">
                <div className="detail-list">
                  <div className="name contact-display">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email id"/>
                  </div>
                  <div className="location-select contact-display">
                    <select>
                      <option>Select Location</option>
                      <option>Chennai</option>
                      <option>Delhi</option>
                      <option>Mumbai</option>
                      <option>Kerala</option>
                    </select>

                    <select>
                      <option>Select Property</option>
                      <option>Flat</option>
                      <option>Rent</option>
                      <option>Single House</option>
                    </select>
                  </div>
                  <div className="enquiry-msg">
                    <textarea rows="5" cols="80">
                      Your Enquiry
                    </textarea>
                  </div>
                  <div className="contact-submit text-right">
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default App;
