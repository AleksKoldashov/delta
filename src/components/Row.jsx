import React, { useState } from 'react'
import LineChart from './LineChart'
import '../App.css'
export default function Row({...props}) {
  const [togle, setTogle]=useState(false)
  const [value, setValue]=useState()

  const fun=(a, b)=>{
    const c = Math.trunc(a/b*100)-100
    return c
  }

  return (
    <>
        <div className='row'
        onClick={(e)=>[setTogle(!togle), setValue(props.item.id)]}
        >
        <div className='col1'>{props.item.Indicator}</div>
        <div className='col2'>{props.item.nowDay}</div> 
        <div 
        className='col3'
        style={{backgroundColor: fun(props.item.nowDay, props.item.Yesterday) >= 0 ? "beige" : "bisque"}}
        >{props.item.Yesterday}
        <div
          style={{color: fun(props.item.nowDay, props.item.Yesterday) >= 0 ? "green" : "red"}}
        >{fun(props.item.nowDay, props.item.Yesterday)}%</div></div>
        <div className='col4'>{props.item.nowWeek}</div>
        </div>
        {togle ? value===props.item.id ? <div className='line'><LineChart a={props.item.nowDay} b={props.item.Yesterday}/></div> : null :null}
    </>
  )
}
