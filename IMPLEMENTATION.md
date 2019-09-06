# Implementation of Citation Database

A high-level description of how the system described in the DESIGN document will be implemented. 

## Architecture

* This system will be written as a multi-page application in Javascript, using the React framework and other libraries.
* All data stored in JSON files. 
* The entire application will be loaded into a viewer's browser. 
* There will be no database server.
* The application may be hosted on any HTTP server, such as AWS s3 or GitHub.

## Components

This application will be described in terms of React Components.

* HomePage 
    * SearchArea
    * FilterArea
    * ResultList (all)
* ResourcePage
    * ResourceOverview
    * ResultList (publications citing resource)
    * ResultList (resources related by publications)
* PublicationPage
    * ResourceOverview
    * ResultList (publication's footnotes)
    * ResultList (publications related by resources they cite)
* AuthorPage
    * ResourceOverview
    * ResultList (publications by author)
    * ResultList (authors related by resources they cite)

## Data API

The Data API is implemented in the /Data module. This would allow extension of the application for larger collections by replacing it with an implementation that makes calls to a database server.

The Data module these four entities:
    * author
    * footnote
    * publication
    * resource

as well as this function to search across the author, resource and publication entities:
    * search

It is imported as Data. It's component functions are accessed like:

    const results = Data.search({searchTerm:"Tomato"});
    const author = Data.author.byId(author_id);

### Data.author

Data.author.