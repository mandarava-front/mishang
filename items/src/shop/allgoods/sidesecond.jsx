import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

export class SideTop extends React.Component {
  constructor() {
    super();
  }
  render() {
    const store = this.props.store;
    return (
      <div className="side2">
        <ul>
          {/* <li>
                <span href="#">全部</span>
              </li>
              <li>
                <span href="#">商品一</span>
              </li> */}
          {store.getState().goods.map((v, i) => (
            <li key={i + "cata"}>
              <span href="#">{Object.keys(v)[0]}</span>

              {console.log(Object.keys(v)[0])}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
