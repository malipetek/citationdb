import BasicAPIEndpoint from "./BasicAPIEndpoint";
import publication from "./publication";
import footnote from "./footnote";

class ResourceAPIEndpoint extends BasicAPIEndpoint {
    constructor(props) {
        super(props);

        this.citedByAuthor = this.citedByAuthor.bind(this);
        this.inFootnotes = this.inFootnotes.bind(this);
        this.byPublication = this.byPublication.bind(this);
        this.citedByAuthor = this.citedByAuthor.bind(this);
    }

    inFootnotes(footnotes) {
        const loaded = [];
        return footnotes
            .map(x => {
                return this.byId(x["resource.id"])
            })
            .filter(x => { // x is a footnote
                if (!x) { return }
                if (loaded.indexOf(x["title"]) >= 0) {
                    return false;
                }
                loaded.push(x["title"]);
                return true;
            })
    }

    byPublication(publicationId) {
        return this.inFootnotes(footnote.byPublication(publicationId));
    }

    citedByAuthor(authorId) {

        return this.inFootnotes(footnote.byAuthor(authorId));

    }

}
let resource = new ResourceAPIEndpoint(require("./json/resource.json"));


export default resource;