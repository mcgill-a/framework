"use strict";
const CustomElement = () => {
    let value = 0;
    const getValue = () => value.toString();
    const setValue = (x) => (value = x);
    const button = document.createElement("button");
    button.textContent = getValue();
    button.style.display = "flex";
    button.style.minWidth = "64px";
    button.style.justifyContent = "center";
    button.style.boxSizing = "border-box";
    button.style.padding = "4px";
    button.onclick = () => {
        setValue(value + 1);
        button.textContent = getValue();
        console.log(value);
    };
    return button;
};
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
    style.gap = "8px";
    // Replacer
    const custom = root === null || root === void 0 ? void 0 : root.getElementsByTagName("CustomElement");
    console.log(custom);
    for (const element of custom !== null && custom !== void 0 ? custom : []) {
        element.append(CustomElement());
    }
};
const root = document.getElementById("root");
App(root);
