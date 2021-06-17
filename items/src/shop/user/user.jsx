import { divide } from "lodash";
import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import { Footer } from "../footer.jsx";

export class User extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h2>个人中心</h2>
        <Footer></Footer>
      </div>
    );
  }
}
