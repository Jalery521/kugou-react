import React, { Component } from 'react'
import './style.css'
class SongItemList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLeft: this.props.showLeft || false,
      rightIcon: this.props.rightIcon || require('../../assets/imgs/download_icon_2.png'),
    }
  }
  render() {
    return (
      <div className="songItemList">
        {this.props.dataArray.map((item, index) => {
          return (
            <div key={item.id} className="songItem" onClick={this.handleSongItemClick.bind(this, item)}>
              {this.state.showLeft ? <div className="songItem-left">{index + 1}</div> : null}
              <div className="songItem-middle">
                {item.singername} - {item.songname}
              </div>
              <div className="songItem-right">
                <img src={this.state.rightIcon} alt="" />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  handleSongItemClick = item => {
    console.log(item)
  }
}

export default SongItemList
