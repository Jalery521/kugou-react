import React, { Component } from 'react'
import TopNav from '../../components/TopNav'
import MediaItemList from '../../components/MediaItemList'
import './style.css'
class Rank extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mediaItemList: [
        {
          id: 21,
          img: 'http://imge.kugou.com/mcommon/400/20190118/20190118110641691638.jpg',
          content: '酷狗飙升榜',
        },
        {
          id: 22,
          img: 'http://imge.kugou.com/mcommon/400/20181019/20181019122513972113.jpg',
          content: '酷狗TOP500',
        },
        {
          id: 23,
          img: 'http://imge.kugou.com/mcommon/400/20181019/20181019122440628627.jpg',
          content: '网络红歌榜',
        },
        {
          id: 24,
          img: 'http://imge.kugou.com/mcommon/400/20181019/20181019122331572959.jpg',
          content: 'DJ热歌榜',
        },
        {
          id: 25,
          img: 'http://imge.kugou.com/mcommon/400/20181019/20181019122306857444.jpg',
          content: '华语新歌榜',
        },
      ],
    }
  }
  render() {
    return (
      <div className="rank">
        <MediaItemList dataArray={this.state.mediaItemList} />
      </div>
    )
  }
}

export default TopNav(Rank, 2)
