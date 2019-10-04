import React from 'react';
import CitationDB from "./CitationDB";
import SiteBanner from "@bit/jakekara.metadash.site-banner";
import {fortunize} from "@bit/jakekara.metadash.fortunoff-app";

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
