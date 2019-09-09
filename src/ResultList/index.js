import React from 'react';
import ResultListItem from "./ResultListItem";
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import "./style/main.scss";

export default class ResultList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            itemCount:25,
            step:10
        }

        this.loadMore = this.loadMore.bind(this);
        this.trackScrolling = this.trackScrolling.bind(this);
    }


    decideToIncrement(distanceFromBottom){
        if (this.props.items.length > this.state.itemCount
            && distanceFromBottom < 100) {
            this.loadMore();
        }

    }

    trackScrolling() {

        const scrollBottom = window.pageYOffset + window.innerHeight;
        const distanceFromBottom = window.document.body.offsetHeight - scrollBottom;
        this.decideToIncrement(distanceFromBottom);
    }

    componentDidMount() {
        document.addEventListener("scroll", this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.trackScrolling);
    }


    loadMore(){
        const itemCount = this.state.itemCount + this.state.step;
        this.setState({itemCount});
    }

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
        }).slice(0, this.state.itemCount);
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