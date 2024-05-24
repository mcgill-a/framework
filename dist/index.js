"use strict";
const App = (root) => {
    if (!root)
        return;
    // Styling
    const { style } = root;
    style.display = "flex";
    style.flexDirection = "column";
    style.width = "100%";
    style.height = "100%";
    style.backgroundColor = "white";
    style.fontFamily = "Arial";
    // Replacer
    const custom = root === null || root === void 0 ? void 0 : root.getElementsByTagName("CustomElement");
    for (const element of custom !== null && custom !== void 0 ? custom : []) {
        element.innerHTML = "<span>Custom Element</span>";
    }
};
const root = document.getElementById("root");
App(root);
