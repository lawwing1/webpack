import "./index.scss";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Home from "@/Homepage";

const App = ({ children }) => {
  const [data, setData] = useState("哈哈哈");
  return (
    <div className="xxx">
      {data}
      {children}
    </div>
  );
};

const root = createRoot(document.getElementById("App") as Element);

root.render(
  <App>
    <Home></Home>
  </App>
);
