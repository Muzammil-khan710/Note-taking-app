import { LandingPage, HomePage, LoginPage } from "./pages";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>  
   </>
  );
}

export default App;
