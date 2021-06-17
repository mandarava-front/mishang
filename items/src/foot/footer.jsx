import React from "react";
import "./foot.less";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
export function Footer() {
  return (
    <div className="foot">
      <div className="footer">
        <div className="row rows">
          <div className="footnav col-xs-12 col-sm-9 col-md-9 col-lg-9">
            <div>
              <a
                href="/"
                target="_self"
                className="main-nav-item"
                iscurrent="1"
              >
                网站首页
              </a>
              <a
                href="/"
                target="_self"
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
            <p>
              <span>
                电话：400-886-8716 Copyright @ 觅尚（郑州）生物科技有限公司{" "}
              </span>
              <span> 豫ICP备20000353号-1</span>
            </p>
          </div>
          <div className="ewm col-md-3">
            <img src={require("../../img/ewm.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
