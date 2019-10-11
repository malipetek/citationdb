import React from "react";
import Button from "../Button";
import * as storage from "../SavedItemStorage";

export default class SaveButton extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.type === "resource") {
            this.saveItem = storage.saveResource;
            this.removeItem = storage.removeResource;
            this.getSavedItems = storage.getSavedResources;
        } else if (this.props.type === "author") {
            this.saveItem = storage.saveAuthor;
            this.removeItem = storage.removeAuthor;
            this.getSavedItems = storage.getSavedAuthors;
        } else if (this.props.type === "publication") {
            this.saveItem = storage.savePublication;
            this.removeItem = storage.removePublication;
            this.getSavedItems = storage.getSavedPublications;
        } else {
            // console.log("unknown page type", this.props.type);
            return;
        }

        this.isSaved = this.isSaved.bind(this);

        this.state = {
            isSaved: this.isSaved()
        }

    }

    isSaved() {
        return this.getSavedItems().map(x => x.id).indexOf(this.props.id) >= 0
    }

    setSaved() {
        this.setState({ isSaved: this.isSaved() })
    }

    render() {
        if (["publication", "author", "resource"].indexOf(this.props.type) < 0){ return (null)}


        return (<div className={`SaveButton ${this.state.isSaved ? "unsave" : "save"}`}>
            {
                this.isSaved() ?
                    <Button onClick={() => { this.removeItem(this.props.id); this.setSaved() }} text="unpin"></Button>
                    :
                    <Button onClick={() => { this.saveItem(this.props.id); this.setSaved() }} text="pin"></Button>
            }
        </div>)

    }
}