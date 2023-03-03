import { useState } from 'react'
import './App.css'
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"

export default function App() {
  return (
    <div>
      <Sidebar/>
      <Main/>
      {/* <ul className="absolute left-96">
        <li>- Que las lineas del nav tengan el mismo grosor </li>
        <li>- Que el nav este justo en medio del sidebar</li>
        <li>- Buscar un logo bonito</li>
      </ul> */}
    </div>
  )
}
