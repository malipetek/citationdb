# Citation Database software design



## 1. Requirements

### 1.1. Functional requirements
The Citation Database is a serverless web application used by viewers to explore *publications* that cite *resources* of a collection. Each running instance of the application refers only to one collection. Instances may be created using deploy scripts that require metadata in a specific format. Because this application is serverless, there is a limit on the size of a collection that can be represented.

### 1.1.1. User roles

* *__Administrator__* - Administrators build and update the application by maintaining metadata in a required format and processing it with the supplied deploy scripts.
* *__Viewer__* - Viewers access running instances of the site by navigating to its web address.

### 1.1.2. User stories

As the viewer of the application I should be able to search for publications, authors of those publications, and resources by name, title, call number, or other relevant metadata fields defined by the administrator.

As the administrator, I should be able to generate a site by supplying the required metadata representation of my collection and modifying any configuration files. 

### 1.2. Technical requirements

1. Serverless - This application must run within a web browser and must not rely on a database server. It may make AJAX calls to access static resources, such as static JSON files.
2. This application must be performant to at least tens of thousands of resources and citations, but not hundreds of thousands or millions.
3. This application must run in all relatively recent browsers, including the latest version of Internet Explorer.
4. This application must be responsive and adaptable to all reasonable screen dimensions from smaller mobile devices to large, high resolution desktop monitors.
5. This application must be visually accessible.

## 2. Data model

The data model will be maintained outside of this application using tools of the _Administrator's_ choice. These tools may include a simple spreadsheet. Because of this, these entities and their relationships will be kept minimal in order to keep their representation and maintenance as feasible as possible for users who are not comfortable with more sophisticated tools, such as a relational database, such as SQLite.

    NOTE: This section describes the entities and their attributes. Subsequent references to attributes in this document will use double-colon notation, for example _Resource::id_ will refer to the _id_ attribute of the _Resource_ entity.

### 2.1. Entities

The Citation Database will have the following entities.

* *__Resource__* - A resource/item internal to the collection, such as a video interview or a hand-written letter.
* *__Publication__* - An external publication that cites at least one resource with at least one _footnote_ (see next item in list).
* *__Footnote__* - A reference in a _publication_ to a _resource_.
* *__Author__* - The creator of one or more _publications_, such as a book author or podcast host.

### 2.2. Resource attribute list

Resources must have at least the following fields but may have more:

1. id
2. title

### 2.3. Publication attribute list

Publications must have at least the following fields but may have more:

1. id
2. title
3. publisher
4. date
5. author_id - A reference to a valid Author::id

### 2.4. Author attribute list

1. id
2. name

### 2.5. Footnote attribute list

1. id
2. text
3. Publication::id
4. Resource::id

## 3. Views and URLs

1. /index view 
   1. Search bar component
   2. Filter tray component
   3. Combined resource, author, publication list component
2. /resources/{Resource::id} view
   1. Resource summary component 
   2. Footnote list
   3. Related resources list
3. /authors/{Author::id} view 
   1. Author summary component
   2. Publication list component
   3. Related Author list component
4. /publications/{Publication::id}
   1. Publication summary component
   2. Footnote list component
   3. Related publication list component