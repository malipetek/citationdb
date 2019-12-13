import React from 'react';
import "./style/main.scss";

import config from "../config"

export default class Search extends React.Component {

    constructor(props){
        super(props);
        this.updateTerm = this.updateTerm.bind(this);

    }

    updateTerm(e){
        this.props.handleChange(e.target.value)
    }

    render(){
        return (
        <div className="Search">
            <input 
            onChange={this.updateTerm}
            type="text" 
            placeholder={`Search by author, title or ${config.words.resource.singular}...`}></input>
        </div>
        )
    }
}