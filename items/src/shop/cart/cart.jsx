import _ from "lodash";
import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import { Footer } from "../footer.jsx";
import "./cart.less";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cars: props.store.getState().carContent };
  }
  render() {
    return (
      <div className="list1">
        <ul>
          {this.state.cars.length === 0 ? (
            <li></li>
          ) : (
            <div className="carlist">
              {console.log(this.state.cars)}
              {this.state.cars.map((v, i) => (
                <li key={"goods" + i}>
                  <div className="imags">
                    <img src={v.queue.tea_imga} alt="" />
                  </div>
                  <div className="info">
                    <div className="top">
                      <p>{v.queue.tea_name}</p>
                      <span>已售{v.queue.had_sale}</span>
                    </div>
                    <div>
                      <span className="price">￥{v.queue.tea_price}</span>
                    </div>
                  </div>
                </li>
              ))}
            </div>
          )}
        </ul>
        <Footer></Footer>
      </div>
    );
  }
}
