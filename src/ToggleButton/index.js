import React from 'react';
import "./style/main.scss"

export default class ToggleButton extends React.Component {
    
    render(){
        return (
        <div
        onClick={this.props.handleClick} 
        className={`ToggleButton ${this.props.label} ${this.props.status ? "on" : "off"}`}>
            {this.props.label}
        </div>
        )
    }
}