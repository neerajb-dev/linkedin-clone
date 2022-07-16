import './App.css';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Header />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
