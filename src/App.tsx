import { BrowserRouter, Route, Routes } from "react-router";
import UserLayout from "./components/layout/UserLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>{/* admin route */}</Route>
        <Route path="/" element={<UserLayout />}>
          {/* user route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
