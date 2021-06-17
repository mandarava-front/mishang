import React from "react";
import "./show.css";
export function Show() {
  return (
    <div className="show">
      <div className="shows col-md-10 col-md-offset-1">
        <div className="content">
          <img src={require("../../img/content1.jpg")} alt="" />
        </div>
        <div className="content">
          <img src={require("../../img/content2.jpg")} alt="" />
        </div>
        <div className="content">
          <img src={require("../../img/content3.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
}
