import './App.css'
import {
  Routes, 
  Route
} from 'react-router-dom'
import {
  Home,
  Post
} from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} index />
      <Route path='post' element={<Post />} />
    </Routes>
  )
}

export default App
