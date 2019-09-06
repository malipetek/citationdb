import dictToArray from "./dictToArray";

export default class BasicAPIEndpoint{

    /**
     * @constructor
     * @alias Data.BasicAPIEndpoint
     * @param {Object} obj 
     */
    constructor(obj, headerKey=x=>{}, typeKey=x=>{}){

        // insert a a
        Object.keys(obj).forEach(k=>{
            let o = obj[k];
            o["id"] = k
            o["__header"] = headerKey(o);
            o["__type"] = typeKey(o);
        });

        this.resourceDictionary = obj;
        this.resourceArray = dictToArray(obj);

        this.all = this.all.bind(this);
        this.dictionary = this.dictionary.bind(this);
        this.byId = this.byId.bind(this);
        this.filter = this.filter.bind(this);
        this.find = this.find.bind(this);
    }
    
    /**
     * Get a dictionary index of all items
     * @memberof Data.BasicAPIEndpoint
     */
    dictionary(){ 
        return this.resourceDictionary;
    }

    /**
     * Get an array of all items
     * @memberof Data.BasicAPIEndpoint
     */
    all(){ 
        return this.resourceArray;
    }

    /**
     * Find one item by id or undefined
     * @param {string} id 
     * @memberof Data.BasicAPIEndpoint
     */
    byId(id, keyField="id"){
        let ret = Object.assign({}, this.dictionary()[id]);
        
        // insert the id 
        ret[keyField] = id;
        return ret;
    }

    /**
     * Get an array of all items i for which f(i) returns True
     * @param {function} f 
     * @memberof Data.BasicAPIEndpoint
     */
    filter(f){
        return this.all().filter(f);
    }

    /**
     * Get item that matches f(i) if only one item matches f(i). Fail if multiple items return true
     * @param {function} f 
     * @memberof Data.BasicAPIEndpoint
     */
    find(f){

        const matches = this.filter(f);

        if (matches.length === 1){ return matches[0]}

        if (matches.length < 1){
            throw new Error ("Error: More than one result found matching criteria");
        }
        else if (matches.length > 0){
            throw new Error("Error: No results found");
        }
    }

}