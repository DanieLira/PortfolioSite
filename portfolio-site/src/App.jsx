import './App.css'
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Main/>
    </div>
  )
}
