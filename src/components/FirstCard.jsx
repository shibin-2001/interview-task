import { Card } from 'antd'
import React from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

const FirstCard = ({content}) => {
  return (
    <Card style={{background:'#202028',border: 'none',display:'flex',flexDirection:'column',justifyContent:'flex-start'}} styles={{body:{padding:'10px'}}}>
      <div>{content?.icon}</div>
      <h5 style={{margin:0,color:'#fff'}}>{content?.name}</h5>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><h1 style={{margin:0,color:'#fff'}}>{content?.value}</h1>
      <p style={{margin:0,color:content?.type === 'increment' ? 'green' : 'red'}}>{content?.type === 'increment' ? <FaCaretUp /> : <FaCaretDown />} {content?.percentage}</p>
      </div>
    </Card>
  )
}

export default FirstCard
