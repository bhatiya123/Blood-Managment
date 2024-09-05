import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from '../Users'
import CreateUsers from '../CreateUsers'
import UpateUsers from '../UpadateUsers'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/create' element={<CreateUsers/>}></Route>
          <Route path='/update/:id' element={<UpateUsers/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
