import React from 'react'

export default function SwipperPosition(props) {
    console.log(props&&props.positionList);
    return (
        <div className='swipperPosition'>
            <div className="head">
                <span>{props&&props.headtext}</span>
                <a href="#">更多</a>
            </div>
            <ul className="positionList">
                {
                    props.list&&props.list.map((item,index)=>{
                        return <li key={index+'a'}>
                            <a href='#'>{item.title}</a>
                            <span style={{width:'70px',height:'50px',textAlign:'right',color:'rgba(31,56,88,0.60)'}} >{item.time+'分钟前'}</span>
                            <span style={{width:'202px',height:'50px',marginRight:'70px'}}>{item.city}</span>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
