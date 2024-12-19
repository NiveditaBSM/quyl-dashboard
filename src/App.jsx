import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard'
import StudentPage from './components/pages/StudentPage'
import Layout from './components/shared/Layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<StudentPage />} />
        </Route>
      </Routes>
    </Router>
  )

}

export default App

// <BrowserRouter>
//       <section className='main flex'>
//         <div className='sidebarWrapper w-[20%]'>
//           <Sidebar />
//         </div>
//         <div className='rightContentWrapper w-[80%]'>
//           <Routes>
//             <Route path='/default' element={<Dashboard />}></Route>
//             <Route path='/' element={<StudentPage />}></Route>
//             <Route path='/students' element={<StudentPage />}></Route>
//           </Routes>
//         </div>
//       </section>
// </BrowserRouter>