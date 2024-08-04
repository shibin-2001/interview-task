import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages';
import CommonLayout from './layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CommonLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
