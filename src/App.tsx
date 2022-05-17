import { useEffect, useState } from "react";

import { api } from "./services/api";
import "./styles/global.scss";
import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        setSelectedGenreId={setSelectedGenreId}
        selectedGenreId={selectedGenreId}
      />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
