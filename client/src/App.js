import HomePage from "./pages/homePage.js"
import SignUpPage from "./pages/signUpPage.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUpPage/>} />

      </Routes>
    </>
  );
}

export default App;
