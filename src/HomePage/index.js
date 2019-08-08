import React from 'react';
import Search from "../Search";
import ToggleButton from "../ToggleButton";
import ResultList from "../ResultList";
import Data from "../Data";

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
        console.log("Set search term " + term)
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
        console.log("items", items)
        return (<div className="HomePage">
            <div className="SearchArea">
                <Search
                    handleChange={this.setSearchTerm}
                ></Search>
                <div className="toggle-box">
                    <ToggleButton
                        handleClick={this.toggleFactory("resource")}
                        status={this.state.toggles.resource}
                        label="Resources"></ToggleButton>
                    <ToggleButton
                        handleClick={this.toggleFactory("publication")}
                        status={this.state.toggles.publication}
                        label="Publications"></ToggleButton>
                    <ToggleButton
                        handleClick={this.toggleFactory("author")}
                        status={this.state.toggles.author}
                        label="Authors"></ToggleButton>
                </div>
            </div>
            <main>
            <ResultList
                items={items}></ResultList>
            </main>

        </div>)
    }
}