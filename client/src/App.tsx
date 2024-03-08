// --------------------
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TodoPage from "./pages/TodoPage/TodoPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
