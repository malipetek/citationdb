import React from 'react';
import { Link } from 'react-router-dom';

export default class FootnoteList extends React.Component {

    render(){
        return (
            <div className="PublicationList">
                {(this.props.publications||[]).map((r,i) => {   
                    
                    return <div key={i}>
                        <Link to={`/publications/${r.id}`}>
                            {r.title} :: {r.publisher} :: {r.date}
                        </Link>
                            
                    </div>
                })}
            </div>
        );
    }

}
