// import React from 'react';
// import Data from "../Data/index";
// // import { Link } from "react-router-dom";

// export default class FootnoteList extends React.Component {

//     render() {
//         return (
//             <div className="ProfileList">
//                 {(this.props.footnotes || []).map((f, i) => {
//                     const resource = Data.resource.byId(f["resource.id"]);

//                     return (
//                         <div className="ProfileListItem" key={i}>

//                             <h4>
//                                 {f.number}{" "}
//                                 <a href={f.uri}>
//                                     {resource.title}
//                                     {" "}
//                                     <small>[{f["resource.id"]}]
//                                     {" "}
//                                         {f["start_time"] ? `@${f["start_time"]}` : (null)}
//                                     </small>
//                                 </a>

//                             </h4>
//                             {f["text"] ? <div>{f["text"]}</div> : (null)}
//                         </div>)
//                 })}
//             </div>
//         );
//     }

// }
