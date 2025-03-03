import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import KelasPage from "./pages/KelasPage"
import TestimonialPage from "./pages/TestimonialPage"
import FaqPage from "./pages/FaqPage"
import SyaratPage from "./pages/SyaratPaage"


function App() {
 return <div>
  <Routes>
    <Route path="/" Component={HomePage} />
    <Route path="/kelas" Component={KelasPage} />
    <Route path="/testimonial" Component={TestimonialPage} />
    <Route path="/faq" Component={FaqPage} />
    <Route path="/syarat" Component={SyaratPage} />
  </Routes>
 </div>
}

export default App
