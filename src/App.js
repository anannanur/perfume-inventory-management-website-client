import { Route, Routes } from 'react-router-dom';
import  Header  from './Pages/Shared/Header/Header'
import  Footer from './Pages/Shared/Footer/Footer';
import './App.css';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
