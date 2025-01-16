import { useState } from "react";
import "./App.css";
import { BasicTable } from "./components/BasicTable";
import { SortingTable } from "./components/SortingTable";
import { FilteringTable } from "./components/FilteringTable";
import { PaginationTable } from "./components/PaginationTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PaginationTable />
    </div>
  );
}

export default App;
