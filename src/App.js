import React from 'react';
import CitationDB from "./CitationDB";
import SiteBanner from "./SiteBanner";
import {fortunize} from "./FortunoffApp";


function App() {

  const FortunizedApp = fortunize(CitationDB)

  return (
    <div className="App">
        <SiteBanner></SiteBanner>
        <FortunizedApp></FortunizedApp>
    </div>
  );
}

export default App;
