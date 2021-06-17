import React from "react";

import { HashRouter, Route, Link } from "react-router-dom";
import "./footer.less";
export function Footer() {
  return (
    <div className="foot">
      <HashRouter>
        <ul>
          <li>
            <Link to="/">
              <div>
                <span>
                  <img src={require("./img/home_s1.png")} alt="" />
                </span>
                首页
              </div>
            </Link>
          </li>
          <li>
            <Link to="/goods">
              <div>
                <span>
                  <img src={require("./img/goods_s1.png")} alt="" />
                </span>
                全部商品
              </div>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <div>
                <span>
                  <img src={require("./img/cart_s1.png")} alt="" />
                </span>
                购物车
              </div>
            </Link>
          </li>
          <li>
            <Link to="/user">
              <div>
                <span>
                  <img src={require("./img/user_s1.png")} alt="" />
                </span>
                我的
              </div>
            </Link>
          </li>
        </ul>
      </HashRouter>
    </div>
  );
}
