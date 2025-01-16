import { useState } from "react";
import "./App.css";
import { BasicTable } from "./components/BasicTable";
import { SortingTable } from "./components/SortingTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SortingTable />
    </div>
  );
}

export default App;
