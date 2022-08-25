import Home from "./page/Home"
import About from "./page/About"
import NavBar from "./page/navbar"
import { useState, useEffect } from "react"
import "./style.css"

// import About from "./page/About"
function App() {
  const [currentPage, setCurrentPage] = useState("home")
  useEffect(() => {
    console.log(currentPage)
  }, [currentPage])
  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage} />
      {currentPage === "home" && <Home />}
      {currentPage === "about" && <About />}
      {/* {currentPage === "home" ? <Home /> : null}
      {currentPage === "about" ? <About /> : null} */}
    </div>
  )
}

export default App
