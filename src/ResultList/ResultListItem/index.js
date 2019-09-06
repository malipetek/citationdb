import React from 'react';
import Data from "../../Data";
import { Link } from "react-router-dom";
import entity from "../../Data/enums";

class HeaderLink extends React.Component {

    render(){
        const term = this.props.type + "s";

        if (this.props.type === entity.footnote){
            return (<span>{this.props.header}</span>)
        }

        return <Link 
            to={`/${term}/${this.props.item.id}`}
            >{this.props.header}</Link>
    }
   
}

class ItemHeader extends React.Component {
    render() {
        return (
            <h3>
                <small className="result-type">[ {this.props.type} ]</small> 
                {" "}<HeaderLink {...this.props}></HeaderLink>
                {" "}{this.props.type === "resource" ? <small>{this.props.item.id}</small> : (null)}
            </h3>
        )
    }
}

class FootnoteFooter extends React.Component {
    
    render() {
        return (
            <div>
                Footnote!!
            </div>
        )
    }
}

class AuthorFooter extends React.Component {
    render() {
        return (
            <div>
                <div>
                {Data.publication.byAuthor(this.props.item.id).length} publications
                </div>
                <div>
                {Data.resource.citedByAuthor(this.props.item.id).length} resources cited
                </div>
                <div>
                {Data.footnote.byAuthor(this.props.item.id).length} footnotes
                </div>
            </div>

        );
    }
}

class ResourceFooter extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {Data.footnote.byResource(this.props.item.id).length} citations
                </div>
            </div>
        );
    }
}

class PublicationFooter extends React.Component {
    render() {
        const author = (Data.author.byId(this.props.item["author.id"]) || {})
        return (
            <div>
                <div>
                    {author.name ? author.name : (null)}
                </div>
                <div>
                    {Data.resource.byPublication(this.props.item.id).length} resources cited: resouce 1, resource 2, resource 3...
                </div>
                <div>
                    {this.props.item.date ? this.props.item.date + ", " : (null) }
                    {this.props.item.publisher? this.props.item.publisher : (null)}
                </div>
                
            </div>

        );
    }
}

class Footer extends React.Component {
    render(){
        if (this.props.type==="author"){ return <AuthorFooter {...this.props}></AuthorFooter>; };
        if (this.props.type==="publication"){ return <PublicationFooter {...this.props}></PublicationFooter>; };
        if (this.props.type==="resource"){ return <ResourceFooter {...this.props}></ResourceFooter>; };
        if (this.props.type==="footnote"){ return <FootnoteFooter {...this.props}></FootnoteFooter>; };
        return (<div className="Footer"></div>)
    }
}

export default class ResultListItem extends React.Component {
    render() {
        return (
            <section className={`ResultListItem ${this.props.type}`}>
                <div className="left-end"></div>
                <div className="content-area">
                <header>
                    <ItemHeader {...this.props}></ItemHeader>
                </header>
                <footer>
                    <Footer {...this.props}></Footer>
                </footer>   
                </div>
            </section>
        )
    }
}