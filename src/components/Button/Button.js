import React from 'react'

const Button = ({ title, onClick }) => {
    return (
        <div>
            <button onClick={onClick}>
                {title}
            </button>
        </div>
    )
}
export default Button