import './App.css';
import Shortener from './URL';
import Error from './404';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

export  const URL = 'https://urlshortener-backend-uesn.onrender.com';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Shortener/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </Router>
    

  );
}

export default App;
