import { LandingPage, HomePage, LoginPage } from "./pages";
import { Routes, Route } from "react-router-dom"
import SignupPage from "./pages/SignupPage";

function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>  
   </>
  );
}

export default App;
