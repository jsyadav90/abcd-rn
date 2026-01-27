


import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout.jsx'
import Deshboard from "./pages/dashboard/Dashboard.jsx"
import Users from "./pages/users/Users.jsx"
import Inventory from "./pages/inventory/Inventory.jsx"
function App() {
  

  return (
    <>
       <MainLayout>
      <Routes>
        <Route path="/" element={<Deshboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </MainLayout>
    </>
  )
}

export default App
