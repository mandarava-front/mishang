import React from "react";
import ReactDOM from "react-dom";
import { Banner } from "./banner.jsx";
import { Goods } from "./goods.jsx";
import { Footer } from "../footer.jsx";
export class Home extends React.Component {
  render() {
    return (
      <div>
        <Banner></Banner>
        <Goods></Goods>
        <Footer></Footer>
      </div>
    );
  }
}
