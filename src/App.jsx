import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import StudentPage from './components/pages/StudentPage'
import Layout from './components/shared/Layout'
import UnderWork from './components/pages/UnderWork'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<UnderWork />} />
          <Route path="students" element={<StudentPage />} />
          <Route path="chapter" element={<UnderWork />} />
          <Route path="help" element={<UnderWork />} />
          <Route path="reports" element={<UnderWork />} />
          <Route path="settings" element={<UnderWork />} />
          <Route path="" element={<UnderWork />} />
          <Route index element={<Navigate to="/students" replace />} />
          {/* <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<StudentPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<StudentPage />} /> */}
        </Route>
      </Routes>
    </Router>
  )

}

export default App