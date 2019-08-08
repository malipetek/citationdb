import dictToArray from "./dictToArray";

export default class BasicAPIEndpoint{

    constructor(obj){

        this.resourceDictionary = obj;
        this.resourceArray = dictToArray(obj);

        this.all = this.all.bind(this);
        this.dictionary = this.dictionary.bind(this);
        this.byId = this.byId.bind(this);
        this.filter = this.filter.bind(this);
        this.find = this.find.bind(this);
    }
    
    dictionary(){ 
        return this.resourceDictionary;
    }

    all(){ 
        return this.resourceArray;
    }

    byId(id){
        return this.dictionary()[id];
    }

    filter(f){
        return this.all().filter(f);
    }

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