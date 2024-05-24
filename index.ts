const App = (root: HTMLElement | null) => {
  if (!root) return;

  const custom = root?.getElementsByTagName("CustomElement");
  for (const element of custom ?? []) {
    element.innerHTML = "<span>Custom Element</span>";
    console.log(element);
  }
};

const root = document.getElementById("root");
App(root);
