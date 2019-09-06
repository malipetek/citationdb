import BasicAPIEndpoint from "./BasicAPIEndpoint";
import publication from "./publication";
import entity from "./enums";

/**
 * @class Data.FootnoteAPIEndpoint
 * @extends Data.BasicAPIEndpoint
 */
class FootnoteAPIEndpoint extends BasicAPIEndpoint{
    constructor(props){
        super(props, x=>x["id"], _=>entity.footnote);
        this.byPublication = this.byPublication.bind(this);
        this.byAuthor = this.byAuthor.bind(this);
    }

    /**
     * Get a list of footnotes for a given publication
     * @returns {Array}
     * @param {string} publicationId 
     */
    byPublication(publicationId){
        return this.filter(x => x["publication.id"] === publicationId);
    }

    /**
     * Get a list of footnotes for a given resource
     * @param {string} resourceId 
     * @returns {Array}
     */
    byResource(resourceId){
        return this.filter(x => x["resource.id"] === resourceId);
    }

    /**
     * Get all of an author's footnotes
     * @param {string} authorId 
     * @returns {Array}
     */
    byAuthor(authorId){
        let ret = []
        
        publication.byAuthor(authorId)
            .forEach(x=> {
                ret = ret.concat(this.byPublication(x["id"]));
            });
            
        return ret;
    }

}

/**
 * @memberof module:Data
 * @alias footnote
 * @type {Data.FootnoteAPIEndpoint}
 */
export default new FootnoteAPIEndpoint(require("./json/footnote.json"));