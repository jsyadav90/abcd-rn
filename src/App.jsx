import { useState } from 'react'
import MainLayout from './layout/MainLayout.jsx'
import { Route, Routes } from 'react-router-dom'
import Deshboard from "./pages/dashboard/Dashboard.jsx"
import Users from "./pages/users/Users.jsx"
import Inventory from "./pages/inventory/Inventory.jsx"
import AddUserPage from './pages/users/AddUserPage.jsx'
import EditUserPage from './pages/users/EditUserPage.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainLayout>
        <Routes>
        <Route path="/" element={<Deshboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/add-user" element={<AddUserPage />} />
        <Route path="/edit-user/:id" element={<EditUserPage  />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App
