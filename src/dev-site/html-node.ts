import svgData from "../design/svg-data.svg";

window.htmlNode = document
  .getElementById("shadow-container")
  .attachShadow({ mode: "open" }) as HTMLNode;

htmlNode.onpanelupdate = () => null;
htmlNode.innerHTML = `<style></style><div>${svgData}</div>`;
