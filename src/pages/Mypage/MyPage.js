import React from 'react'
import storage from '../../services/store'

export function MyPage() {
    function logout() {
        storage.remove("user")
        window.location.replace("/")
    }
    return <div><button onClick={() => logout()}>๋ก๊ทธ์์</button></div>
}