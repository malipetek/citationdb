import React from 'react';
import ResultListItem from "./ResultListItem";
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import "./style/main.scss";

export default class ResultList extends React.Component {
    render() {
        const items = this.props.items.sort(
            (a,b)=>{ return a.__header > b.__header ? 1 : -1}
            ).map((x, i) => {
                return <ResultListItem 
                item={x}
                key={i}
                type={x.__type}
                header={x.__header}
                ></ResultListItem>
        });
        return (
            <div className="ResultList">
                {items}
               {/* <CSSTransitionGroup
               transitionName="dialog"
               transitionEnterTimeout={10}
               transitionLeaveTimeout={10}>
                   {items}
               </CSSTransitionGroup> */}
            </div>
        )
    }
}