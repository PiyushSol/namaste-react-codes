import React from "react";
import { createRoot } from "react-dom/client"
const heading1 = React.createElement(
    "h1",
    {
        id:"title1",
        key:"h1"
    },
    "Heading 1 for parcel"
);

const heading2 = React.createElement(
    "h2",
    {
        id:"title2",
        key:"h2"
    },
    "Heading 2"
);

const container = React.createElement(
    "div",
    {
        id:"container",
    },
    [heading1,heading2]
);

const root = createRoot(document.getElementById("root"));
root.render(container);