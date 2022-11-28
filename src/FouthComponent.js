import React from "react";

export default class FourthComponent extends React.Component{
    render() {
        return React.createElement(
            "h6",
            { style: { color: "white" } },
            `Welcome to ${this.props.name}`
        );
    }
}

