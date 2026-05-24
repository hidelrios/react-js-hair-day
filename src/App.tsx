import { BrowserRouter, Routes, Route } from "react-router"
import MainPage from "./core/pages/main-page"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
