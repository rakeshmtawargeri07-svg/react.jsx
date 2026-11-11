import React from 'react'
import "./Usercard.css" 

const Usercard = (props) => {
return (
    <div ClassName="user-card">
    <h1 id="name">{props.name}</h1>
    <img id ="userimg" src="https://media.licdn.com/dms/image/v2/D5603AQHoWOG2yH8d0A/profile-displayphoto-crop_800_800/B56ZuOEkI2JIAI-/0/1767615122174?e=1792022400&v=beta&t=cg2GLBxb8CxXeLlDNNIJiDTChJQalDVd2-uXfv25PjI" alt={props.name} />
    <p>description of {props.name}</p>
    </div>
)
}

export default Usercard
