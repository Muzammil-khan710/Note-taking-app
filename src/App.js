import { LandingPage, HomePage, LoginPage, SignupPage, ArchivePage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Authroute, Privateroute } from "./components";

function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />

        <Route element={<Authroute/>}>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
        </Route>

        <Route element={<Privateroute/>}>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/archive" element={<ArchivePage/>}/>
        </Route>
      </Routes>  
   </>
  );
}

export default App;
