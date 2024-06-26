import React from "react";
import { Link } from "react-router-dom";
import "../components/CSS/home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mainImage from "../assets/main.png";
import mainTwoImage from "../assets/mainTwo.png";
import mainThreeImage from "../assets/mainThree.png";
import mainFourImage from "../assets/mainFour.png";
import mainFiveImage from "../assets/mainFive.png";
import mainSixImage from "../assets/mainSix.png";
import mainSevenImage from "../assets/mainSeven.png";

import tennisBallImage from "../assets/tennis_ball_sm.png";
import tennisImage from "../assets/tennis.png";
import winCupImage from "../assets/trophy_gold.png";
import Login from "./Login";
import BuyToken from "./BuyToken";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slideToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">Home</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <div className="mainImage__setting">
              <Slider {...settings}>
                <div>
                  <img
                    src={mainImage}
                    alt="Image 1"
                    className="mainSliderImage__setting"
                  />
                </div>
                <Link to="/tennis-dna">
                  <img
                    src={mainTwoImage}
                    alt="Image 2"
                    className="mainSliderImage__setting"
                  />
                </Link>
                <div>
                  <img
                    src={mainSevenImage}
                    alt="Image 3"
                    className="mainSliderImage__setting"
                  />
                </div>
                <div>
                  <img
                    src={mainFiveImage}
                    alt="Image 4"
                    className="mainSliderImage__setting"
                  />
                </div>
                <div>
                  <img
                    src={mainFourImage}
                    alt="Image 5"
                    className="mainSliderImage__setting"
                  />
                </div>
                <div>
                  <img
                    src={mainSixImage}
                    alt="Image 6"
                    className="mainSliderImage__setting"
                  />
                </div>
                <div>
                  <img
                    src={mainThreeImage}
                    alt="Image 7"
                    className="mainSliderImage__setting"
                  />
                </div>
              </Slider>
            </div>
            <div className="crossLine">
              <div className="crossLeftLine" />
              <abbr>Our Mission</abbr>
              <div className="crossRightLine" />
            </div>
            <p className="mission__detail">
              <strong>Tennis FairPlay</strong> enhances your tennis experience
              by discovering your Tennis DNA and sharing comments and
              information through an interactive platform which provides members
              direct access to fellow tennis players. Tennis FairPlay advocates
              fairness with a playfair governance. As a community partner,
              Tennis FairPlay’s mandate is to increase tennis participation and
              introduce the sport of tennis to non players by reaching out to
              people with disabilities, youths, adults and seniors adopting
              healthier lifestyle choices.
            </p>
            <div className="crossLine">
              <div className="crossLeftLine" />
              <abbr>How to buy</abbr>
              <div className="crossRightLine" />
            </div>
            <BuyToken />
            <div className="crossLine">
              <div className="crossLeftLine" />
              <abbr>video series</abbr>
              <div className="crossRightLine" />
            </div>
            <button className="viewAllVideos__button">View All Videos</button>
            <div className="crossLine">
              <div className="crossLeftLine" style={{ width: "35%" }} />
              <abbr>membership benefits</abbr>
              <div className="crossRightLine" style={{ width: "35%" }} />
            </div>
            <div className="membershipBenefit__container">
              <div className="membershipBenefit__box">
                <div className="benefitBox__title">
                  <img
                    src={tennisBallImage}
                    className="tennisBallImage__setting"
                  />
                  <p>Become A Member</p>
                </div>
                <div className="benefitBox__detail">
                  <p>
                    <strong>Create</strong> Your Player Profile
                  </p>
                  <p>
                    <strong>Discover</strong> Your Tennis DNA
                  </p>
                  <div className="tennisFairPlay__url">
                    <a
                      href="https://dna.tennisfairplay.com"
                      target="_blank"
                      className="aTag__setting__home"
                    >
                      https://dna.tennisfairplay.com
                    </a>
                  </div>
                  <p>
                    <strong>Assess</strong> Your Strokes
                  </p>
                  <p>
                    <strong>Receive</strong> Your Tennis RairPlay Membership
                  </p>
                  <p>
                    <strong>Review</strong> Your Member Benefits
                  </p>
                </div>
              </div>

              <div className="membershipBenefit__box">
                <div className="benefitBox__title">
                  <img src={tennisImage} className="tennisImage__setting" />
                  <p>Participate</p>
                </div>
                <div className="benefitBox__detail">
                  <p>
                    <strong>Find</strong> a Compatible Match
                  </p>
                  <p>
                    <strong>Check</strong> Tennis Even Canlendar
                  </p>
                  <p>
                    <strong>Comment/Share</strong> because We Care
                  </p>
                  <p>
                    <strong>Connect/Interact</strong> with Players, Clubs,
                    Groups & Associations
                  </p>
                  <p>
                    <strong>Juniors</strong> Send us your Story
                  </p>
                </div>
              </div>

              <div className="membershipBenefit__box">
                <div className="benefitBox__title">
                  <img src={winCupImage} className="winCupImage__setting" />
                  <p>Win!</p>
                </div>
                <div className="benefitBox__detail">
                  <p>
                    <strong>Instant</strong> Draw Entry
                  </p>
                  <p>
                    <strong>Monthly</strong> Prizes
                  </p>
                  <p>
                    <strong>Create</strong> New Friendships
                  </p>
                  <p>
                    <strong>Sponsorship</strong> Opportunities
                  </p>
                  <p>
                    <strong>Partake</strong> in an Interactive Global Tennis
                    Community
                  </p>
                </div>
              </div>
            </div>
            <div className="crossLine">
              <div className="crossLeftLine" />
              <abbr>photo gallery</abbr>
              <div className="crossRightLine" />
            </div>
            <button className="viewAllVideos__button">
              View All Photo Albums
            </button>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Home;
