import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Loginpage from "./pages/Loginpage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/men" element={<Men/>} />
      <Route path="/women" element={<Women/>} />
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
    </Routes>
  )
}
export default App;