import React from "react";

function ErrorPanel({ errormessage = null }) {
    if (!errormessage) {
        return null;
    }
    return (
        <div className="error-panel">
            <h3>Error!</h3>
            <p>{errormessage}</p>
        </div>
    );
}

export default ErrorPanel;
