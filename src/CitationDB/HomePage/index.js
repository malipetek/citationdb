import React from 'react';
import ResultList from "../ResultList";
import Data from "../Data";
import SearchArea from "./SearchArea";
import PublicationHistogram from "../PublicationHistogram";
import TopWrapper from "../TopWrapper";
import BigNumber from "../BigNumber";


export default class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: "",
            toggles: {
                resource: true,
                publication: true,
                author: true
            }
        }

        this.toggleFactory = this.toggleFactory.bind(this);
        this.setSearchTerm = this.setSearchTerm.bind(this);
    }

    setSearchTerm(term) {
        this.setState({ searchTerm: term })
    }

    toggleFactory(label) {
        return () => {

            let newState = {
                ...this.state,
                toggles: { ...this.state.toggles }
            }
            newState.toggles[label] = !this.state.toggles[label];
            this.setState(newState);
        }
    }

    render() {
        const items = Data.search(this.state);
        const counts = Data.summarize.countByType(items);
        return (
            <div className="HomePage">

                {TopWrapper(
                    <React.Fragment>
                        <div className="left">
                            <PublicationHistogram
                                items={items}
                            />

                        </div>
                        <div className="right">
                            <div className="bignumber-tray">
                                <BigNumber label="testimonies" value={counts.resource} />
                                <BigNumber label="publications" value={counts.publication} />
                                <BigNumber label="authors" value={counts.author} />

                            </div>
                        </div>
                    </React.Fragment>
                    , { id: null })}

                <SearchArea
                    callback={this.setSearchTerm}
                    value={this.state.searchTerm}
                    toggles={Object.keys(this.state.toggles).map(t => {
                        return {
                            label: t + "s",
                            handler: this.toggleFactory(t),
                            status: this.state.toggles[t]
                        }
                    })}
                ></SearchArea>
                <section className="column-wrapper">
                    <ResultList
                        items={items}>
                    </ResultList>
                </section>

            </div>
        )
    }
}