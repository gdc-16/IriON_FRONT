import React from 'react'
import logo from '../../../assets/logo.png'

export default function Logo(res) {
    const size = res.data
    switch(size) {
        case 1:
            return <img src={logo} alt="로고" style={{width: "120px", height: "30px"}} />
    }
}
