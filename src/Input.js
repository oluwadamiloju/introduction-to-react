import React from 'react'

const Input = (props) => {
    return (
        <div className="signin">
            <label htmlFor="fname">{props.label} </label><br />
            <input type="text" id="fname" name="fname" placeholder={props.placeholder} />
            {/* <label htmlFor="lname">Last name: </label>
            <input type="text" id="lname" name="lname" /> */}
        </div>
    )
}

export default Input;
