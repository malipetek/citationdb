import resource from "./resource";
import footnote from "./footnote";
import publication from "./publication";
import author from "./author";

function search(options) {

    options = options || {};
    const toggles = options.toggles || {};
    const searchTerm = options.searchTerm || "";

    let results = [];

    function searchEntity(entity, field, api) {

        if (toggles[entity] !== true) { return; }
        const matchedEntities = api.filter(x => {
            if (!x[field]) { return false }
            return x[field].toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
        }).map(x=>{
            return {...x,
                "__header":x[field],
                "__type":entity}
        })
        results = results.concat(matchedEntities)
    }

    searchEntity("author", "name", author)
    searchEntity("resource", "title", resource)
    searchEntity("publication", "title", publication)


    return results;
}

export default {
    author,
    footnote,
    publication,
    resource,
    search
}