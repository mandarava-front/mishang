import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { Header } from "./header/header.js";
import { Carousel } from "./banner/banner";
import { Show } from "./show/show";
import { Footer } from "./foot/footer.jsx";
import "./index.css";
import "./fun.js";
ReactDOM.render(
  <div>
    <Header></Header>
    <Carousel></Carousel>
    <div className="depart">
      <img src={require("../img/depart.png")} alt="" />
    </div>
    <Show></Show>
    <div className="depart">
      <img src={require("../img/depart.png")} alt="" />
    </div>
    <Footer></Footer>
  </div>,
  document.getElementById("app")
);
