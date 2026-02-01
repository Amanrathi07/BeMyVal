import { Route, Routes } from "react-router"
import Home from "./components/Home"
import BeMyVel from "./components/BeMyVel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/:name" element={<BeMyVel />}/>
    </Routes>
  )
}

export default App
