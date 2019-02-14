import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default (OtherComponent, id) => {
  return class TopNav extends Component {
    render() {
      const navList = [
        {
          id: 1,
          title: '新歌',
          path: '/newSongs',
        },
        {
          id: 2,
          title: '排行',
          path: '/rank',
        },
        {
          id: 3,
          title: '歌单',
          path: '/songList',
        },
        {
          id: 4,
          title: '歌手',
          path: '/singer',
        },
      ]
      let checkedId = id || 1
      return (
        <div>
          <div className="navList">
            {navList.map(item => {
              return (
                <Link to={item.path} className={checkedId === item.id ? 'navItem active' : 'navItem'} key={item.id}>
                  {item.title}
                </Link>
              )
            })}
          </div>
          <OtherComponent />
        </div>
      )
    }
  }
}
