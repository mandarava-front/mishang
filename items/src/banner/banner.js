import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import React from "react";
import "./banner.css";
import "./bannerfun";
import { render } from "react-dom";

export class Carousel extends React.Component {
  componentDidMount() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, //这里是自动轮播
      autoplay: 5000,
      pagination: ".swiper-pagination",
      paginationClickable: true,
      prevButton: ".swiper-button-prev",
      nextButton: ".swiper-button-next",
      onSlideChangeEnd: function (swiper) {
        $(".swiper-slide-active img").addClass("scale");
        setTimeout(fn, 2000);
        function fn() {
          $(".swiper-slide-active img").removeClass("scale");
        }
      },
    });
  }
  render() {
    return (
      <div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={require("../../img/slide1.jpg")} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={require("../../img/slide2.jpg")} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={require("../../img/slide3.jpg")} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={require("../../img/slide4.jpg")} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={require("../../img/slide5.jpg")} alt="" />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        {/* 如果需要导航按钮     */}
        <div className="swiper-button-prev swiper-button-white"></div>
        <div className="swiper-button-next swiper-button-white"></div>
      </div>
    );
  }
}
