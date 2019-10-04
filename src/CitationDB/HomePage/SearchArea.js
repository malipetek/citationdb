import React from 'react';
import { TextInput } from "@bit/jakekara.metadash.inputs";
import ToggleButton from "../ToggleButton";

export default class extends React.Component {
    render() {
        return (

            <div>
            <section className="SearchArea">
                <TextInput
                    callback={this.props.callback}
                    value={this.props.value}
                    placeholder="Search"
                ></TextInput>
            </section>
            <section className="toggle-box">
                <div className="label"></div>
                {this.props.toggles.map((t,i)=> {
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