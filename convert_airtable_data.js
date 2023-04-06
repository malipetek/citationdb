const fs = require('fs');

/***********
 * AUTHORS *
 ***********/
const AuthorSource = require('./src/CitationDB/Data/from_airtable/Author.json');
const authorTarget = {};

for (const obj of AuthorSource) {
  const id = obj.id ? obj.id : obj.name?.toLowerCase().replace(/\s+/g, "-");
  if(id === undefined) continue;
  authorTarget[id] = {
    name: obj.name,
    uri: obj.uri ? obj.uri : null
  };
}

fs.writeFileSync('./src/CitationDB/Data/json/author.json', JSON.stringify(authorTarget, null, 2));

/*************
 * FOOTNOTES *
 *************/
const FootnoteSource = require('./src/CitationDB/Data/from_airtable/Footnote.json');
const footnoteTarget = {};

FootnoteSource.forEach((obj, index) => {
  
  if (!obj['resource.id']) {
    return console.log(`No resource id for ${index}`, obj);
  }

  footnoteTarget[`e6797972-${index}`] = {
    "chapter": null,
    "end_time": null,
    "number": index + 1,
    "page": null,
    "start_time": null,
    "text": null,
    "publication.id": obj["publication.id"][0].slice(3),
    "resource.id": obj["resource.id"][0],
    "uri": obj.uri
  };
});

fs.writeFileSync('./src/CitationDB/Data/json/footnote.json', JSON.stringify(footnoteTarget, null, 2));

/*************
 * RESOURCES *
 *************/
const resourceSource = require('./src/CitationDB/Data/from_airtable/Resource.json');
const resourceTarget = {};

resourceSource.forEach(item => {
  resourceTarget[item.id] = {
    "title": item.title
  }
});

fs.writeFileSync('./src/CitationDB/Data/json/resource.json', JSON.stringify(resourceTarget, null, 2));

/****************
 * PUBLICATIONS *
 ****************/
const publicationSource = require('./src/CitationDB/Data/from_airtable/Publication.json');
const publicationTarget = {};

for (const item of publicationSource) {
  const id = item.id;
  const authorId = item["author.id"] ? item["author.id"][0] : null;
  const date = item.date || null;
  const uri = item.uri || null;
  const publisher = item.publisher || null;
  const type = item.type ? item.type[0].split(" ")[0].toLowerCase() : null;
  const title = item.title;

  publicationTarget[id] = {
    "author.id": authorId,
    date,
    uri,
    publisher,
    type,
    title,
  };
}

fs.writeFileSync('./src/CitationDB/Data/json/publication.json', JSON.stringify(publicationTarget, null, 2));
