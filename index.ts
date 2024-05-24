const App = (root: HTMLElement | null) => {
  if (!root) return;

  // Styling
  const { style } = root;
  style.display = "flex";
  style.flexDirection = "column";
  style.width = "100%";
  style.height = "100%";
  style.backgroundColor = "white";
  style.fontFamily = "Arial";

  // Replacer
  const custom = root?.getElementsByTagName("CustomElement");
  for (const element of custom ?? []) {
    element.innerHTML = "<span>Custom Element</span>";
  }
};

const root = document.getElementById("root");
App(root);
