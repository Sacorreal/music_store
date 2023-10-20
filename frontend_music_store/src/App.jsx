import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListSongs from './components/ListSongs'
import SignUp from './components/SignUp'
import Home from "./pages/Home"
function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>  
          <Route path="/list" element={<ListSongs/>}></Route>
          <Route path="/SignUp" element={<SignUp/>}></Route>            
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App