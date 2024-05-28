const Counter: (value?: number) => HTMLButtonElement = (value = 0) => {
  const refresh = () => {
    console.log("Refresh");
    button.textContent = getValue();
  };

  const getValue = () => value.toString();

  const setValue = (x: number) => {
    value = x;
    refresh();
  };

  const onClick = () => setValue(value + 1);
  const button = Button({onClick, textContent: getValue()});
  return button;
};

const Button: (props: {onClick?: () => void, textContent?: string}) => HTMLButtonElement = (props:{onClick?: () => void, textContent?: string}) => {
  const {textContent, onClick} = props;
  const button = document.createElement("button");
  
  button.type = 'button';
  button.onclick = onClick ?? null;
  button.textContent = textContent ?? 'Button';

  return button;
}

const App = (root: HTMLElement | null) => {
  if (!root) return;

  const counters = root?.getElementsByTagName("Counter");
  for (const element of counters ?? []) {
    const value = element.getAttribute("value") ?? void 0;
    element.append(Counter(value ? Number(value) : void 0));
  }
};

const root = document.getElementById("root");
App(root);
