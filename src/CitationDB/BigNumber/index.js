import React from "react";
import "./style/main.scss";
import pluralize from "pluralize";

export default function BigNumber(props) {
    return (
        <div className={`BigNumber ${props.label}`}>
            <div className="number">
                {props.value}
            </div>
            <div className="label">{pluralize(props.label, props.value)}</div>
        </div>

    )
}
