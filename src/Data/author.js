
import BasicAPIEndpoint from "./BasicAPIEndpoint";
import entity from "./enums";

/**
 * @memberof module:Data
 * @alias author
 * @type {Data.BasicAPIEndpoint}
 */
export default new BasicAPIEndpoint(require("./json/author.json"), x=>x["name"], x=>entity.author);