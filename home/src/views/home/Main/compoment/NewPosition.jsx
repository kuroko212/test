import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import SwipperPosition from './SwipperPosition'

export default function NewPosition() {
    const [tags,setTags]=useState([]);
    
    //假设进行请求返回的数据是以数组类型返回
    useEffect(()=>{
        Axios.get('/getList').then(res=>{
            console.log(res.data);
            setTags(res.data);
        });
    },[])

 

    return (
        <div className='newPosition'>
            <SwipperPosition headtext='最新职位' list={tags}/>
            <div className="right">
                <a href="#" style={{marginBottom:"20px"}}>
                    <img style={{width:'179px'}} src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" alt=""/>
                </a>
                <a href="#">
                    <img style={{width:'260px'}} src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt=""/>
                </a>
            </div>
        </div>
    )
}
