import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import TopTitle from '../components/topTitle'
import NewSongs from '../views/NewSongs'
import Rank from '../views/Rank'
import SongList from '../views/SongList'
import Singer from '../views/Singer'
import Search from '../views/Search'
import MusicPlayer from '../components/MusicPlayer'
import './index.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      isPlay: false,
      songInfo: {
        cover: 'http://singerimg.kugou.com/uploadpic/softhead/200/20181010/20181010161310788.jpg',
        songname: '时间的远方',
        singername: '张杰',
      },
    }
  }
  render() {
    return (
      <Router>
        <div className={this.state.isShow ? 'showPlayer' : ''}>
          <TopTitle />
          <MusicPlayer isPlay={this.state.isPlay} isShow={this.state.isShow} songInfo={this.state.songInfo} />
          <Switch>
            <Route path="/newSongs" exact component={NewSongs} />
            <Route path="/rank" exact component={Rank} />
            <Route path="/songList" exact component={SongList} />
            <Route path="/singer" exact component={Singer} />
            <Route path="/search" exact component={Search} />
            <Redirect path="/" to="/newSongs" />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
