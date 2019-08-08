import BasicAPIEndpoint from "./BasicAPIEndpoint";
import publication from "./publication";

class FootnoteAPIEndpoint extends BasicAPIEndpoint{
    constructor(props){
        super(props);

        this.byPublication = this.byPublication.bind(this);
        this.byAuthor = this.byAuthor.bind(this);
    }

    byPublication(publicationId){
        return this.filter(x => x["publication.id"] === publicationId);
    }

    byResource(resourceId){
        return this.filter(x => x["resource.id"] === resourceId);
    }

    byAuthor(authorId){
        let ret = []
        
        publication.byAuthor(authorId)
            .forEach(x=> {
                ret = ret.concat(this.byPublication(x["id"]));
            });
            
        return ret;
    }

}

export default new FootnoteAPIEndpoint(require("./json/footnote.json"));