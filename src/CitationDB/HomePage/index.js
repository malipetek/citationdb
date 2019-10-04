import React from 'react';
import ResultList from "../ResultList";
import Data from "../Data";
import SearchArea from "./SearchArea";
import PublicationHistogram from "../PublicationHistogram";


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
                <section className="prose">
                    Displaying <span className="stat">{counts.publication} publications</span>
                    {" "} by <span className="stat">{counts.author} authors</span>
                    {" "} citing <span className="stat">{counts.resource} testimonies</span>.
                </section>

                <section className="module-box">
                    <h1 className="title">Publications by year</h1>
                    <PublicationHistogram
                        items={items}
                    ></PublicationHistogram>

                </section>
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
                <section>
                    <ResultList
                        items={items}>
                    </ResultList>
                </section>

            </div>
        )
    }
}