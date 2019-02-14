import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export class TopTitle extends Component {
  render() {
    return (
      <header>
        <Link to="/newSongs" className="logo">
          <img src={require('../../assets/imgs/logo.png')} />
        </Link>
        <a className="download">下载酷狗</a>
        <Link to="/search" className="search">
          <img src={require('../../assets/imgs/search.png')} />
        </Link>
      </header>
    )
  }
}

export default TopTitle
