import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListSongs from './components/ListSongs'
import Login from './components/Login'
function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login/>}></Route>  
          <Route path="/list" element={<ListSongs/>}></Route>        
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App