import React, { Component } from 'react'
import TopNav from '../../components/TopNav'
import SingerClassify from '../../components/SingerClassify'
import './style.css'
class Singer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: {
        hot: [
          {
            id: 41,
            content: '热门歌手',
          },
        ],
        china: [
          {
            id: 51,
            content: '华语男歌手',
          },
          {
            id: 52,
            content: '华语女歌手',
          },
          {
            id: 53,
            content: '华语组合',
          },
        ],
      },
    }
  }
  render() {
    return (
      <div className="singer">
        <SingerClassify dataArray={this.state.categories.hot} />
        <SingerClassify dataArray={this.state.categories.china} />
      </div>
    )
  }
}

export default TopNav(Singer, 4)
