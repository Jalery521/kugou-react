import React, { Component } from 'react'
import './style.css'
class MusicPlayer extends Component {
  render() {
    return this.props.isShow ? (
      <div className="musicPlayer">
        <div className="musicPlayer-left">
          <div className="musicPlayer-left-cover">
            <img src={this.props.songInfo.cover} alt="" />
          </div>
          <div className="musicPlayer-left-content">
            <p className="musicPlayer-left-songName">{this.props.songInfo.songname}</p>
            <p className="musicPlayer-left-singerName">{this.props.songInfo.singername}</p>
          </div>
        </div>
        <div className="musicPlayer-right">
          {this.props.isPlay ? (
            <img src={require('../../assets/imgs/pause_icon.png')} alt="" />
          ) : (
            <img src={require('../../assets/imgs/play_icon.png')} alt="" />
          )}
          <img src={require('../../assets/imgs/next_icon.png')} alt="" />
          <img src={require('../../assets/imgs/download_icon.png')} alt="" />
        </div>
      </div>
    ) : null
  }
}

export default MusicPlayer
