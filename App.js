import React from "react";
import { createRoot } from "react-dom/client"

// const heading1 = React.createElement(
//     "h1",
//     {
//         id:"title1",
//         key:"h1"
//     },
//     "Namaste React"
// );

//JSX => Uses react.createelement behind the scenes.
//When you span more than one line enlcose them in paranthesis

//This is a react element.
 const heading = (<h1 id="title" key="h1">
 Namaste React
 </h1>
 );

 //Component
//Functional component
const HeaderComponent = ()=> (
    <div>
    {heading}
    <h1>
        Namaste React Functional Component
    </h1>
    <h2>
    This is H2 component.
    </h2>
     </div>
     );

 
const root = createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);