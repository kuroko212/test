import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NewPosition from './Main/compoment/NewPosition'


export default function Home() {
    let [hotList, setHotList] = useState(['JAVA','IOS','数据','算法','安全','视觉','运营','交互','前端'])
    return (
        <div id="home">
            <header>
                <div className="list">
                    <div className="left">
                        <a href="/" className="logo"><img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" height="20" alt=""/></a>
                        <i>|</i>
                        <i>社招官网</i>
                        <NavLink to='/home/main'>首&nbsp;&nbsp;页</NavLink>
                        <NavLink to='/home/aa'>社会招聘</NavLink>
                        <NavLink to='/home/bb'>校园招聘</NavLink>
                        <NavLink to='/home/cc'>了解阿里</NavLink>
                        <NavLink to='/home/cc'>个人中心</NavLink>
                    </div>
                    <div className="login">
                        <span>欢迎来到阿里巴巴集团招聘！</span>
                        <a href="#">登录</a>|
                        <a href="#">登录</a>
                    </div>
                </div>
            </header>
            <div className="main">
                <img src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt=""/>
                <div className="mask">
                    <div className="mask-box">
                        <p>If not now, when?</p>
                        <p>If not me, who?</p>
                        <p style={{fontSize:'32px',marginBottom:'38px'}}>此时此刻，非我莫属！</p>
                        <div className="input">
                            <input type="text" name="" id="" placeholder='请输入职位关键词'/>
                            <button>搜索</button>
                        </div>
                        <div className="hot">
                            <span>热门搜索:&nbsp;&nbsp;</span>
                            {
                                hotList.map((item,index)=>{
                                    return <a href="#" key={index}>{item}</a>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <NewPosition />
            <footer>
                <div className="footer">
                    阿里巴巴集团 Copyright ©1999-2020 版权所有
                </div>
            </footer>
        </div>
    )
}
