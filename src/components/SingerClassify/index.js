import React, { Component } from 'react'
import './style.css'
class SingerClassify extends Component {
  render() {
    return (
      <div className="singerClassify">
        {this.props.dataArray.map(item => {
          return (
            <div className="singerClassify-item" key={item.id}>
              <div className="singerClassify-item-left">{item.content}</div>
              <div className="singerClassify-item-right">
                <img src={item.icon || require('../../assets/imgs/arrow_icon.png')} alt="" />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default SingerClassify
