import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MyMain from './components/MyMain'
import MyNav from './components/MyNav'
import CityPage from "./components/CityPage";

function App() {
  

  return (
    <>
    <BrowserRouter>
      <MyNav />
      <Routes>
      <Route path="/" element={<MyMain />} />
      <Route path="/city/:name" element={<CityPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
