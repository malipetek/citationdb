import React from 'react';
import Data from "../Data/index";
import { Page404 } from "../ErrorPages/index";
import PublicationHistogram from "../PublicationHistogram";

// import PublicationList from "../PublicationList";

import ResultList from "../ResultList";

export default class ResourcePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
        // this.isSaved = this.isSaved.bind(this);
        // this.setSaved = this.setSaved.bind(this);
    }

    // isSaved(){
    //     const id = this.props.match.params.id;
    //     return getSavedResources().map(x=>x.id).indexOf(id) >= 0;
    // }

    render() {
        const id = this.props.match.params.id;
        const r = Data.resource.dictionary()[id];

        if (!r) {
            return Page404(this.props.location.pathname);
        }

        //const footnotes = Data.footnote.filter(item => item["resource.id"] === id);
        // const footnotes = Data.footnote.byResource(id)
        const publications = Data.publication.byResource(id);

        return (
            <div className="ResourcePage">

                <section className="module-box">
                    <h1 className="title">{r.title}</h1>
                    <PublicationHistogram items={publications}></PublicationHistogram>

                </section>
                <section className="prose">
                    This testimony is cited in <span className="stat">{publications.length} publications</span>.
                </section>


                <section className="module-box">
                </section>

                {/* <FootnoteList footnotes={footnotes} /> */}
                {/* <PublicationList publications={publications} /> */}
                <section >
                    <ResultList items={publications} />
                </section>
            </div>
        );
    }

}
