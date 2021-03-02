import React from 'react'
import './button.css'

const Button = ({imp,link,text}) => {
    return (
        <div className={`button ${imp ==='secondary'? 'btn-white':''}`}>
        <a href={link} style={{cursor:'pointer'}}>{text}</a>
        </div>
    )  
}

export default Button