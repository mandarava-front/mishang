import _, { forEach } from "lodash";
import React from "react";
import { addq } from "./goodsReducer";

//商品列表使用fetch获取数据
export class Goodlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const store = this.props.store;
    var goodarr = store.getState().goodsinfo;
    return (
      <div className="list">
        <ul>
          {goodarr.map((v, i) => (
            <li key={"goods" + i}>
              <div className="imags">
                <img src={v.tea_imga} alt="" />
              </div>
              <div className="info">
                <div className="top">
                  <p>{v.tea_name}</p>
                  <span>已售{v.had_sale}</span>
                </div>
                <div>
                  <span className="price">￥{v.tea_price}</span>
                  <button onClick={() => store.dispatch(addq(v.id))}></button>
                </div>
              </div>
            </li>
          ))}
          <h1>加载更多</h1>
        </ul>
      </div>
    );
  }
}
