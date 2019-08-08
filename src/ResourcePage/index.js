import React from 'react';
import Data from "../Data/index";
import { Page404 } from  "../ErrorPages/index";

import FootnoteList from "../FootnoteList";

export default class ResourcePage extends React.Component {

    render(){
        const id = this.props.match.params.id;
        const r = Data.resource.dictionary()[id];

        if (!r){

            return Page404(this.props.location.pathname);
        }

        const footnotes = Data.footnote.filter(item => item["resource.id"] === id);

        return (
            <div className="ResourcePage">
                <h1>{r.title}</h1>
                <FootnoteList footnotes={footnotes} />
                
            </div>
        );
    }

}
