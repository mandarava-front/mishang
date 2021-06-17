import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { hashHistory } from "React-router";
export class SideTop extends React.Component {
  constructor(props) {
    super(props);

    this.state = { secondNav: [], store: props.store.getState().goods };
  }
  componentDidMount() {}
  chan(e) {
    let hit = e.target.innerHTML;
    this.state.store.map((v, i) => {
      if (v[hit] !== undefined) {
        this.setState({ secondNav: v[hit] });
      }
    });
  }
  render() {
    return (
      <div className="top">
        <div className="search">
          <div className="touch">
            <img src={require("../img/btn.png")} alt="" />
          </div>
          <div className="se">
            <input type="search" name="" id="" placeholder="请输入搜索的商品" />
            <div className="sp">
              <img src={require("../img/search.png")} alt="" />
            </div>
          </div>
        </div>
        <div className="condition">
          <ul>
            <li>
              <a href=":;">综合</a>
            </li>
            <li>
              <a href=":;">销量</a>
            </li>
            <li>
              <a href=":;">新品</a>
            </li>
            <li>
              <a href=":;">价格</a>
            </li>
            <li>
              <a href=":;">筛选</a>
            </li>
          </ul>
        </div>
        <div className="side">
          <div className="side1">
            <ul>
              {this.state.store.map((v, i) => (
                <li key={i + "cata"} onClick={this.chan.bind(this)}>
                  {Object.keys(v)[0]}
                </li>
              ))}
            </ul>
          </div>
          <div className="side2">
            <ul>
              {this.state.secondNav.map((v, i) => (
                <li key={i + "cata"}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
