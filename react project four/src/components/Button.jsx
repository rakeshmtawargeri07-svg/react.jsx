import React, { Children } from 'react'

const Button = (props) => {
return (
    <div>
        <Button onClick={props.clickcount}>{props.children}</Button>
    {props.children}
    </div>
)
}

export default Button
