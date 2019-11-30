import React from 'react'

const Error = ({ touched, message }) => {
    if (!touched) {
        return <div className="form-message invalid">please enter</div>;
    }
    if (message){
    return <div className="form-message invalid">{message}</div>;
    }
    return <div className="form-message valid">Thank You</div>;
}

export default Error;