import React from 'react';
import HomePage from "./HomePage";
import PublicationPage from "./PublicationPage";
// import ResourceList from "./ResourceList";
// import FootnoteList from "./FootnoteList";
// import AuthorList from "./AuthorList";
// import PublicationList from "./PublicationList";

import ResourcePage from "./ResourcePage";
import AuthorPage from "./AuthorPage";

import { HashRouter as Router, Route, Link } from "react-router-dom";
import { resource, footnote, author, publication } from "./Data/index";

import "./App.scss";

function App() {


  return (
    <div className="App">
      <Router basename="/">

        <header>

          <h1>
            <Link to="/">Citation Database</Link>
          </h1>

        </header>


        <Route exact path="/" render={() => <HomePage />} />
        {/* <Route exact path="/resources" render={() => <ResourceList resources={resource.all()} />} />
        <Route exact path="/publications" render={() => <PublicationList publications={publication.all()} />} />
        <Route exact path="/authors" render={() => <AuthorList authors={author.all()} />} />
        <Route exact path="/footnotes" render={() => <FootnoteList footnotes={footnote.all()} />} />
        */}
        <Route path="/publications/:id" component={PublicationPage} />
         <Route path="/resources/:id" component={ResourcePage} />
        <Route path="/authors/:id" component={AuthorPage} /> 

      </Router>
    </div>
  );
}

export default App;
