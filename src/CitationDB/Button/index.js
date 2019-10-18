import React from 'react';
import "./style/main.scss"

export default class ToggleButton extends React.Component {


    render() {

        return <div
            onClick={this.props.onClick}
            className="Button">{this.props.text}
        </div>
    }
}