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
            <h4>{time}</h4>
            { children }
        </div>
    )
}

export default Explanation;