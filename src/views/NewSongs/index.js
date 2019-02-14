import React, { Component } from 'react'
import TopNav from '../../components/TopNav'
import Carousel from '../../components/Carousel'
import SongItemList from '../../components/SongItemList'
import './style.css'
class NewSongs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slideArr: [
        { original: 'http://imge.kugou.com/mobilebanner/20190202/20190202004116196153.jpg' },
        { original: 'http://imge.kugou.com/mobilebanner/20190202/20190202010256462733.jpg' },
        { original: 'http://imge.kugou.com/mobilebanner/20190202/20190202010818279283.jpg' },
        { original: 'http://imge.kugou.com/mobilebanner/20190202/20190202011636593338.jpg' },
      ],
      songList: [
        {
          songname: '时间的远方',
          singername: '张杰',
          id: 1,
        },
        {
          songname: '时间的远方',
          singername: '张杰',
          id: 2,
        },
        {
          songname: '时间的远方',
          singername: '张杰',
          id: 3,
        },
        {
          songname: '时间的远方',
          singername: '张杰',
          id: 4,
        },
        {
          songname: '时间的远方',
          singername: '张杰',
          id: 5,
        },
        {
          songname: '时间的远方',
          singername: '张杰',
          id: 6,
        },
        {
          songname: '时间的远方',
          singername: '张杰',
          id: 7,
        },
      ],
    }
  }
  render() {
    return (
      <div className="newSongs">
        <Carousel imgs={this.state.slideArr} />
        <SongItemList showLeft={false} dataArray={this.state.songList} />
      </div>
    )
  }
}

export default TopNav(NewSongs)
