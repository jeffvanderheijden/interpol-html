import React from "react";

const Assignment = ({
    children
}) => {
    return (
        <div id="assignment">
            <div className="topBar">Instructies</div>
            { children }
        </div>
    )
}

export default Assignment;