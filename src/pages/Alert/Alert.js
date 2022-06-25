import React from 'react';
import '../../assets/css/alert.css';

export function Alert() {

    const items = [{
        content: "보호소에서 입양 문의를 읽었습니다"
    },
    {
        content: "회원님과 맞는 성향의 아이가 기다리고 있습니다 !"
    },
    {
        content: "보호소에서 산책 문의를 읽었습니다"
    },
    {
        content: "보호소에서 산책 문의를 읽었습니다"
    },
    {
        content: "회원님과 맞는 성향의 아이가 기다리고 있습니다 !"
    },
    {
        content: "회원님과 맞는 성향의 아이가 기다리고 있습니다 !"
    },
    {
        content: "회원님과 맞는 성향의 아이가 기다리고 있습니다 !"
    },
    {
        content: "회원님과 맞는 성향의 아이가 기다리고 있습니다 !"
    },
    {content:''},
    {content:''}]

  return (
    <div className='alertArea'>
        {items.map((item, key) => {
            return (
                <div className={`alertItem${key%4 == 3?"Border":""}`} key={key}>
                    {item.content?<><div className="profile" />
                    <div className='content'>{item.content}</div></>:<></>}
                </div>
            )
        })}
    </div>
  )
}