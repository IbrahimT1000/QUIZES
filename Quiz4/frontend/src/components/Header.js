import React from 'react'
import App from './App'

export default function Header(props) {
    return (
        <div>
            <App/>
            <h1>{props.Name}</h1>
        </div>
    )
}
