"use strict";
const Counter = (value = 0) => {
    const refresh = () => {
        console.log("Refresh");
        button.textContent = getValue();
    };
    const getValue = () => value.toString();
    const setValue = (x) => {
        value = x;
        refresh();
    };
    const onClick = () => setValue(value + 1);
    const button = Button({ onClick, textContent: getValue() });
    return button;
};
const Button = (props) => {
    const { textContent, onClick } = props;
    const button = document.createElement("button");
    button.type = 'button';
    button.onclick = onClick !== null && onClick !== void 0 ? onClick : null;
    button.textContent = textContent !== null && textContent !== void 0 ? textContent : 'Button';
    return button;
};
const App = (root) => {
    var _a;
    if (!root)
        return;
    const counters = root === null || root === void 0 ? void 0 : root.getElementsByTagName("Counter");
    for (const element of counters !== null && counters !== void 0 ? counters : []) {
        const value = (_a = element.getAttribute("value")) !== null && _a !== void 0 ? _a : void 0;
        element.append(Counter(value ? Number(value) : void 0));
    }
};
const root = document.getElementById("root");
App(root);
