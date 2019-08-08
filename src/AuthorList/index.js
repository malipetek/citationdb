import React from 'react';
import { Link } from "react-router-dom";

export default class FootnoteList extends React.Component {

    render(){
        return (
            <div className="AuthorList">
                {(this.props.authors||[]).map((r,i) => {
                   return (<Link  key={i} to={`/authors/${r.id}`}>
                        <div>{r.name}</div>
                    </Link>)
                })}
            </div>
        );
    }

}
