import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layout';
import Login from './views/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
