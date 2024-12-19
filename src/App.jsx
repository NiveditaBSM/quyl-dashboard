import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import StudentPage from './components/StudentPage'


function App() {
  

  return (
    <BrowserRouter>
      <section className='main flex'>
        <div className='sidebarWrapper w-[15%]'>
          <Sidebar/>
        </div>
        <div className='rightContent w-[85%]'>
          <Routes>
            <Route path='/default' element={<Dashboard/>}></Route>
            <Route path='/' element={<StudentPage/>}></Route>
            <Route path='/students' element={<StudentPage/>}></Route>
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  )
}

export default App
