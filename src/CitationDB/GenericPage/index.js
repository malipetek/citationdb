import React from "react";

/**
 * Wrap a page with some generic stuff
 * @param {Component} PageComponent 
 */
export default function GenericPage(PageComponent) {

    return (props) => {
        return (
            <div className="GenericPage">
                <PageComponent {...props}></PageComponent>
            </div>
        );
    }
}