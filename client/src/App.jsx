
import {Route,Routes} from 'react-router-dom'
import Home from './pages/User/Home';
import Login from './pages/User/Login';
import Register from './pages/User/Registration';

function App() {

  return (
    <>
<Routes>

     < Route path="/" element={<Home/>} />
     < Route path="/login" element={<Login/>} />
     < Route path="/register" element={<Register/>} />
     

</Routes>
    </>
  )
}

export default App
