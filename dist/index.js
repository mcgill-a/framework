"use strict";
const Counter = (value = 0) => {
    const refresh = () => {
        console.log("Change detection");
        button.textContent = getValue();
    };
    const getValue = () => value.toString();
    const setValue = (x) => {
        value = x;
        refresh();
    };
    const button = document.createElement("button");
    button.textContent = getValue();
    button.style.display = "flex";
    button.style.minWidth = "64px";
    button.style.justifyContent = "center";
    button.style.boxSizing = "border-box";
    button.style.padding = "4px";
    button.onclick = () => {
        setValue(value + 1);
    };
    return button;
};
const App = (root) => {
    var _a;
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
    const custom = root === null || root === void 0 ? void 0 : root.getElementsByTagName("Counter");
    console.log(custom);
    for (const element of custom !== null && custom !== void 0 ? custom : []) {
        const value = (_a = element.getAttribute("value")) !== null && _a !== void 0 ? _a : void 0;
        element.append(Counter(value ? Number(value) : void 0));
    }
};
const root = document.getElementById("root");
App(root);
