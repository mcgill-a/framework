"use strict";
const App = (root) => {
    if (!root)
        return;
    const custom = root === null || root === void 0 ? void 0 : root.getElementsByTagName("CustomElement");
    for (const element of custom !== null && custom !== void 0 ? custom : []) {
        element.innerHTML = "<span>Custom Element</span>";
        console.log(element);
    }
};
const root = document.getElementById("root");
App(root);
