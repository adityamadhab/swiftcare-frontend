import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Layout } from './components/Layout';
import Location from './pages/Location';
import { Construction } from './pages/Construction';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/location' element={<Location/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/underconstruction' element={<Construction/>}></Route>
        </Route>
      </Routes>
  );
}

export default App;
