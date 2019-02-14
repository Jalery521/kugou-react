import React, { Component } from 'react'
import TopNav from '../../components/TopNav'
import MediaItemList from '../../components/MediaItemList'
import './style.css'
class SongList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songList: [
        {
          id: 31,
          content: '节后开工综合症: 给身体来点活力buff',
          img: 'http://imge.kugou.com/soft/collection/400/20190211/20190211100404174185.jpg',
          subcontent: {
            content: 253346,
          },
        },
        {
          id: 32,
          content: '2019格莱美现场+获奖歌单',
          img: 'http://imge.kugou.com/soft/collection/400/20190211/20190211101157790494.jpg',
          subcontent: {
            content: 152430,
          },
        },
      ],
    }
  }
  render() {
    return (
      <div className="songList">
        <MediaItemList dataArray={this.state.songList} />
      </div>
    )
  }
}

export default TopNav(SongList, 3)
