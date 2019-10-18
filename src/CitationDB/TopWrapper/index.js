import BreadCrumb from "../BreadCrumb";
import React from "react";

/**
 * Wrap a page's top matter with the navigation buttons.
 * Should this be raised up to the CitationDB index? 
 * Probably. But this is to accommodate keeping the 
 * nav tray inside the DOM element that contains the
 * site's top matter for style and structure purposes.
 * 
 * @param {PageComponent} Component 
 * @param {id, saveType} props 
 */
export default function TopWrapper(Component, props) {
    return (
        <div className="top-matter-wrapper">
            <div className="top-matter-inner column-wrapper">
                <BreadCrumb {...props} />
                <section className="top-matter">
                    {Component}
                </section>
            </div>
        </div>

    )
}
