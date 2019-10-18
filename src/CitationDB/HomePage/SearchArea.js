import React from 'react';
import { TextInput } from "@bit/jakekara.metadash.inputs";
import ToggleButton from "../ToggleButton";

export default class extends React.Component {
    render() {
        return (

            <div>
                <section className="SearchArea column-wrapper">
                    <TextInput
                        callback={this.props.callback}
                        value={this.props.value}
                        placeholder="Search by author, publication title or testimony..."
                    ></TextInput>
                </section>
                <section className="toggle-box column-wrapper">
                    <div className="label"></div>
                    {this.props.toggles.map((t, i) => {
                        return <ToggleButton
                            key={i}
                            handleClick={t.handler}
                            label={t.label}
                            status={t.status}
                        ></ToggleButton>
                    })}
                </section>
            </div>
        )
    }
}