import React from "react";
import "./header.less";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
export function Header() {
  return (
    <div className="container-fulid">
      <div className="headtop">
        <div className="row ">
          <div className="imag col-md-10 col-xs-12 col-lg-10 col-sm-10 col-md-offset-2 col-sm-offset-2 col-lg-offset-2">
            <div className="xs-logo visible-xs-inline-block">
              <img src={require("../../img/xs-logo.png")} alt="" />
            </div>
            <img src={require("../../img/logo1.png")} className="hidden-xs" />
          </div>
        </div>
      </div>
      <div className="navs hidden-xs">
        <div className="row">
          <div className="logo2 col-xs-2 col-md-2 col-lg-2">
            <img
              src={require("../../img/logo2.png")}
              alt=""
              className="pull-right"
            />
          </div>
          <div className="nav1 col-xs-10 col-md-10 col-lg-10">
            <div className="main-nav-item-group ">
              <a
                href="/"
                target="_self"
                className="main-nav-item"
                iscurrent="1"
              >
                网站首页
              </a>
              <a
                href="./home.html"
                target="_blank"
                className="main-nav-item"
                iscurrent="1"
              >
                觅尚良茶
              </a>
              <a
                href="/"
                target="_self"
                className="main-nav-item"
                iscurrent="1"
              >
                觅尚精选
              </a>
              <a
                href="/"
                target="_self"
                className="main-nav-item"
                iscurrent="1"
              >
                觅尚茶具
              </a>
              <a
                href="/"
                target="_self"
                className="main-nav-item"
                iscurrent="1"
              >
                在线商城
              </a>
              <a
                href="/"
                target="_self"
                className="main-nav-item"
                iscurrent="1"
              >
                招商加盟
              </a>
              <a
                href="/"
                target="_self"
                className="main-nav-item"
                iscurrent="1"
              >
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
      {console.log($("img"))}
    </div>
  );
}
