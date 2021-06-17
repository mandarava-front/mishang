import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, IndexRoute } from "react-router-dom";
import { IndexLink, Switch } from "react-router";
import "./shop/shopping.less";
import { Home } from "./shop/home/home.jsx";
import { Cart } from "./shop/cart/cart.jsx";
import { Goods } from "./shop/allgoods/goods.jsx";
import { User } from "./shop/user/user.jsx";
import { createStore } from "redux";
import { goods, caradd, carsub } from "./shop/allgoods/goodsReducer";
const store = createStore(goods);
function render() {
  ReactDOM.render(
    <div className="content">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/goods">
            <Goods store={store}></Goods>
          </Route>
          <Route path="/cart">
            <Cart store={store}></Cart>
          </Route>
          <Route path="/user" component={User} />
        </Switch>
      </Router>
    </div>,
    document.getElementById("home")
  );
}
render();
store.subscribe(render);
