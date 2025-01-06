import ReactDOM from "react-dom";
import { useEffect } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {ReactDOM.createPortal(
        <div>Portal</div>,
        document.getElementById("modal")
      )}
      <div id="Test"></div>
    </div>
  );
}
