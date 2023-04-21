import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loading from './components/Loading'
import Dashboard from './pages/dashboard'

const Home = lazy(() => import('./pages/home'))
const Admin = lazy(() => import('./pages/admin'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  )
}

export default App
