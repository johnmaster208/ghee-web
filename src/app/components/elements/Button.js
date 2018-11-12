import React, {Component} from 'react'

const Button = ({onClick, text, shape, position}) => {
    return(
        <div onClick={onClick} className={`button ${position} ${shape}`}>
            {text}
        </div>
    )
}


export default Button