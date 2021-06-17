import _ from "lodash";
import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Footer } from "../footer.jsx";
import { SideTop } from "./SideTop.jsx";
import "./goods.less";
import "./goodsFun.js";
import $ from "jquery";
import { Goodlist } from "./goodlist.jsx";
import { carsub, caradd, ad } from "./goodsReducer";

// import { Addcart } from "./addcar.jsx";

export class Goods extends React.Component {
  constructor(props) {
    super(props);
    this.state = { store: props.store };
  }

  render() {
    const store = this.props.store;
    return (
      <div className="over">
        <SideTop store={store}></SideTop>
        <div className="goods">
          <Goodlist store={store}></Goodlist>
          <Footer></Footer>
        </div>
        {this.state.store.getState().addQueue.queue === null ? (
          <div className="addcar">
            <div className="addcar1">
              <div className="doc">
                <div className="img">
                  <img />
                </div>
                <div className="num">
                  <div className="pra">
                    销售价 ￥<span></span>
                  </div>
                  <div className="rest"></div>
                </div>
                <div className="close">x</div>
              </div>
              <div className="button">
                <div>
                  <span>购买数量</span>
                </div>
                <div className="number">
                  <button
                    className="sub"
                    onClick={() => store.dispatch(carsub())}
                  >
                    -
                  </button>

                  <input
                    id="num"
                    name="num"
                    type="text"
                    value={this.state.store.getState().addQueue.num}
                  />
                  <button
                    className="add"
                    onClick={() => store.dispatch(caradd())}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="operate">
                <button className="addcars">加入购物车</button>
                <button className="pay">立即购买</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="addcar">
            <div className="addcar1">
              <div className="doc">
                <div className="img">
                  <img
                    src={this.state.store.getState().addQueue.queue.tea_imga}
                    alt=""
                  />
                </div>
                <div className="num">
                  <div className="pra">
                    销售价 ￥
                    <span>
                      {this.state.store.getState().addQueue.queue.tea_price}
                    </span>
                  </div>
                  <div className="rest">
                    库存{this.state.store.getState().addQueue.queue.had_sale}件
                  </div>
                </div>
                <div className="close">x</div>
              </div>
              <div className="button">
                <div>
                  <span>购买数量</span>
                </div>
                <div className="number">
                  <button
                    className="sub"
                    onClick={() => store.dispatch(carsub())}
                  >
                    -
                  </button>

                  <input
                    id="num"
                    name="num"
                    type="text"
                    value={this.state.store.getState().addQueue.num}
                  />
                  <button
                    className="add"
                    onClick={() => store.dispatch(caradd())}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="operate">
                <button
                  className="addcars"
                  onClick={() => {
                    store.dispatch(
                      ad(this.state.store.getState().addQueue.queue.id)
                    );
                  }}
                >
                  加入购物车
                </button>
                <button className="pay">立即购买</button>
              </div>
            </div>
          </div>
        )}
        <div className="shadow"></div>
      </div>
    );
  }
}
