import React from 'react'

const Link = ({href, target, onClick, text}) => {
    return(
        <a href={href} target={target} onClick={onClick}>
            {text ? text : href}
        </a>
    )
}

export default Link