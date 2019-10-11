/** 
 * Data API
 * 
 * @module Data
 * @exports Data.author
 */
import resource from "./resource";
import footnote from "./footnote";
import publication from "./publication";
import author from "./author";
import uniqueArray from "./utils/uniqueArray";
import FussyArray from "./utils/FussyArray";
import * as summarize from "./summarize";

/**
 * Search authors, publications and resources
 * @param {Object} options 
 */
function search(options) {

    options = options || {};
    const toggles = options.toggles || {};
    const searchTerm = options.searchTerm || "";

    // let added = [];
    let results = new FussyArray();

    function searchEntity(entity, field, api) {

        if (toggles[entity] !== true) { return[]; }

        return api.filter(x => {
            // const tmpId = `entity.${x["id"]}`;
            const fofx = field(x);

            // if (searchTerm.trim().length < 1){ return added.indexOf(tmpId) < 0 ; }

            if (searchTerm.trim().length < 1){ return true ; }
            if (!fofx) { return false }
            const ret = fofx.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;

            if (ret){ //&& (added.indexOf(tmpId) < 0)){
                // added = added.concat(tmpId);
                // console.log(`Added ${tmpId}`)
                return true;
            }

            return false;
        })
    }

    results.addArray(searchEntity("author", x=>x["name"], author), x=>"author." + x["id"]);

    // Search for publications by author
    results.addArray(searchEntity("publication", x=>author.byId(x["author.id"]).name, publication), x=>"publication." + x["id"]);

    results.addArray(searchEntity("resource", x=>x["title"], resource), x=>"resource." + x["id"])
    results.addArray(searchEntity("publication", x=>x["title"], publication), x=>"publication." + x["id"])

    //results = uniqueArray(results, x=>x["__type"] + "." + x["id"]);

    return results;
}

export default {
    author,
    footnote,
    publication,
    resource,
    search,
    summarize,
}