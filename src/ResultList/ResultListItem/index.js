import React from 'react';
import Data from "../../Data";
import { Link } from "react-router-dom";
import entity from "../../Data/enums";
import "../style/main.scss";

class PillTray extends React.Component {
    render() {
        return (
            <div className={`pill-tray-wrapper ${this.props.title}`}>
                <div className={`pill-tray-title`}>{this.props.items.length} {this.props.title}</div>

                <div className="pill-tray">
                    {this.props.items.slice(0, 5).map((item, i) => {
                        return (

                            <div key={i} className="pill">
                                <Link to={item.link}>{item.title}</Link>
                            </div>)
                    })}
                </div>
            </div>

        )
    }
}

class HeaderLink extends React.Component {

    render() {
        const term = this.props.type + "s";

        if (this.props.type === entity.footnote) {
            const f = this.props.item;
            const resource = Data.resource.byId(this.props.item["resource.id"]);
            return (
                <div className="HeaderLink">
                    <div>{resource.title} {f["start_time"] ? `@${f["start_time"]}` : (null)}</div>
                </div>)
        }

        // Otherwise, it's pretty standard

        return <Link
            to={`/${term}/${this.props.item.id}`}
        >{this.props.header}</Link>
    }

}

class ItemHeader extends React.Component {
    render() {
        return (
            <div className="ItemHeader">
                <div className="badge result-type">[{this.props.type}]</div>
                {" "}<HeaderLink {...this.props}></HeaderLink>
                {/* {" "}{this.props.type === "resource" ? <small>{this.props.item.id}</small> : (null)} */}
            </div>
        )
    }
}

class FootnoteFooter extends React.Component {

    render() {
        const publication = Data.publication.byId(this.props.item["publication.id"]);

        return (
            <div>
                {this.props.item.text}
            </div>
        )
    }
}

class AuthorFooter extends React.Component {
    render() {
        const publications = Data.publication.byAuthor(this.props.item.id);
        const resources = Data.resource.citedByAuthor(this.props.item.id);
        const footnotes = Data.footnote.byAuthor(this.props.item.id);
        return (
            <div>
                <div>

                {/* {resources.length} resources */}
                <PillTray title="publications" items={publications.map(x => { return { "title": x.title, "link": `/publications/${x.id}` } })} />
                </div>
                <div>
                <PillTray title="resources cited" items={resources.map(x => { return { "title": x.title, "link": `/resources/${x.id}` } })} />
                </div>
                {/* <div>
                {footnotes.length} footnotes
                </div> */}
            </div>

        );
    }
}

class ResourceFooter extends React.Component {
    render() {

        const footnotes = Data.footnote.byResource(this.props.item.id);
        const publications = Data.publication.inFootnotes(footnotes)
        return (
            <div>
                <div>
                <PillTray title="publications" items={publications.map(x => { return { "title": x.title, "link": `/publications/${x.id}` } })} />

                {/* {footnotes.length > 1 ? `${footnotes.length} citations` : `${footnotes.length} citation`} */}
                </div>
            </div>
        );
    }
}

class PublicationFooter extends React.Component {
    render() {
        const publication = this.props.item;
        const author = (Data.author.byId(this.props.item["author.id"]) || {});
        const resources = Data.resource.byPublication(this.props.item.id)
        return (
            <div>
                <div>
                    {author.name ? (<span><Link to={`/authors/${author.id}`}>{author.name}</Link></span>) : (null)}
                    {publication.date ? (<span> // {publication.date}</span>) : (null)}
                    {publication.publisher ? (<span> // {publication.publisher}</span>) : (null)}

                </div>
                <div>
                    <PillTray title="resources cited" items={resources.map(x => { return { "title": x.title, "link": `/resources/${x.id}` } })} />
                </div>
                <div>
                    {this.props.item.date ? this.props.item.date + ", " : (null)}
                    {this.props.item.publisher ? this.props.item.publisher : (null)}
                </div>

            </div>

        );
    }
}

class Footer extends React.Component {
    render() {
        if (this.props.type === "author") { return <AuthorFooter {...this.props}></AuthorFooter>; };
        if (this.props.type === "publication") { return <PublicationFooter {...this.props}></PublicationFooter>; };
        if (this.props.type === "resource") { return <ResourceFooter {...this.props}></ResourceFooter>; };
        if (this.props.type === "footnote") { return <FootnoteFooter {...this.props}></FootnoteFooter>; };
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
                {
                    this.props.type === "footnote" ? 
                    (<div className="button"> <a target="_blank" href={this.props.item.uri}>view</a></div>) 
                    : (null)
                }
            </section>
        )
    }
}