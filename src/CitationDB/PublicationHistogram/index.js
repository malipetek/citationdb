import React from "react";
import { Histogram } from '@bit/jakekara.metadash.viz';
import Data from "../Data"
export default class extends React.Component {

    render() {
        return (
            <div className="PublicationHistogram">


                <Histogram
                    data={Data.summarize.yearCounts(
                        this.props.items.filter(item => item.__type === "publication")
                    )}
                    minYear={1980}
                    maxYear={2020}
                    margin={{
                        top: 10,
                        left: 30,
                        right: 10,
                        bottom: 20
                    }}
                ></Histogram>
            </div>
        )
    }
}