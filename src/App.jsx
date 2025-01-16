import { useState } from "react";
import "./App.css";
import { BasicTable } from "./components/BasicTable";
import { SortingTable } from "./components/SortingTable";
import { FilteringTable } from "./components/FilteringTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FilteringTable />
    </div>
  );
}

export default App;
