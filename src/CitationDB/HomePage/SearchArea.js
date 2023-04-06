import React from 'react';
import { TextInput } from "../../Inputs";
import ToggleButton from "../ToggleButton";
import pluralize from "pluralize";

import config from "../config";

export default class extends React.Component {
    render() {
        return (

            <div>
                <section className="SearchArea column-wrapper">
                    <TextInput
                        callback={this.props.callback}
                        value={this.props.value}
                        placeholder={`Search by author, publication title or ${config.words.resource.singular}...`}
                    ></TextInput>
                </section>
                <section className="toggle-box column-wrapper">
                    <div className="label"></div>
                    {this.props.toggles.map((t, i) => {

                        let label = t.label;

                        const wordsKey = pluralize(label, 1);
                        if (config.words.hasOwnProperty(wordsKey)){
                            label = config.words[wordsKey].plural
                        }

                        return <ToggleButton
                            key={i}
                            handleClick={t.handler}
                            label={label}
                            itemType={t.label}
                            status={t.status}
                        ></ToggleButton>
                    })}
                </section>
            </div>
        )
    }
}