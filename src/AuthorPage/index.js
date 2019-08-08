import React from 'react';
import Data from "../Data/index";
import { Page404 } from  "../ErrorPages/index";
import PublicationList from "../PublicationList";

export default class ResourcePage extends React.Component {

    render(){
        const id = this.props.match.params.id;
        const r = Data.author.dictionary()[id];
        const publications = Data.publication.filter(item => item["author.id"] === id);

        if (!r){
            return Page404(this.props.location.pathname);
        }

        return (
            <div className="ResourcePage">
                <h1>{r.name}</h1>
                <PublicationList publications={publications} />
                
            </div>
        );
    }

}
