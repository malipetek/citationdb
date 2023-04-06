import React from "react";
import { Histogram } from '../../Viz';
import Data from "../Data";
import config from "../config";

export default class extends React.Component {

    render() {
        const data = Data.summarize.yearCounts(
            this.props.items.filter(item => item.__type === "publication")
        );

        if (data.length < 1){ return (null)}
        return (
            <div className="PublicationHistogram">
                <Histogram
                    data={data}
                    minYear={config.histogram.minYear}
                    maxYear={config.histogram.maxYear}
                    margin={{
                        top: 10,
                        left: 30,
                        right: 10,
                        bottom: 20
                    }}
                ></Histogram>
                <h6 className="center">Publications by year</h6>
            </div>
        )
    }
}