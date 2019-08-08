import BasicAPIEndpoint from "./BasicAPIEndpoint";


class PublicationAPIEndPoint extends BasicAPIEndpoint {
    constructor(props){
        super(props);

        this.byAuthor = this.byAuthor.bind(this);
    }

    byAuthor(authorId){
        return  this.filter(x=>x["author.id"] === authorId)
    }

}

let publication = new PublicationAPIEndPoint(require("./json/publication.json"));

export default publication;