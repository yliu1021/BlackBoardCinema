import { Routes, Route } from "react-router-dom";

import MainScreen from "./MainScreen";
import Form from "./Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/review" element={<Form />} />
    </Routes>
  );
}

export default App;
