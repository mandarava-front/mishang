import React from "react";
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import render, { Component } from "react-dom";
import "./banner.css";
export class Banner extends React.Component {
  // constructor() {
  //   super();
  // }
  componentDidMount() {
    var mySwiper1 = new Swiper(".swiper1", {
      loop: true,
      aytoplay: 2000,
      pagination: ".swiper-pagination",
      paginationClickable: true,
    });
  }
  render() {
    return (
      <div className="swiper-container swipwer1">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={require("../img/banner1.jpg")} alt="" />
          </div>
          <div className="swiper-slide">
            <img src={require("../img/banner2.jpg")} alt="" />
          </div>
        </div>
        {/* <!-- 如果需要分页器 --> */}
        <div className="swiper-pagination"></div>
      </div>
    );
  }
}
