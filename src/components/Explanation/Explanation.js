import React from "react";

const Explanation = ({
    subtitle,
    title,
    time,
    children,
}) => {
    return (
        <div id="explanation">
            <h3>{subtitle}</h3>
            <h2>{title}</h2>
            <span>{time}</span>
            { children }
        </div>
    )
}

export default Explanation;