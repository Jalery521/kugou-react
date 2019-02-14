import React, { Component } from 'react'
import './style.css'
class MediaItemList extends Component {
  render() {
    return (
      <div className="mediaItemList">
        {this.props.dataArray.map(item => {
          return (
            <div className="mediaItem" key={item.id}>
              <div className="mediaItem-left">
                <img src={item.img} alt="" />
              </div>
              <div className="mediaItem-middle">
                <p>{item.content}</p>
                {item.subcontent ? (
                  <div className="mediaItem-middle-sub">
                    <img src={item.subcontent.icon || require('../../assets/imgs/icon_music.png')} alt="" />
                    {item.subcontent.content}
                  </div>
                ) : null}
              </div>
              <div className="mediaItem-right">
                <img src={item.icon || require('../../assets/imgs/arrow_icon.png')} alt="" />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MediaItemList
