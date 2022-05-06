import { Route, Routes } from 'react-router-dom';
import  Header  from './Pages/Shared/Header/Header'
import  Footer from './Pages/Shared/Footer/Footer';
import './App.css';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItem from './Pages/MyItem/MyItem';
import SingleItem from './Pages/SingleItem/SingleItem';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory/:id" element={<SingleItem/>} />
     
        <Route path="/manageitems" element={<ManageItems />} />
      
        <Route path="/myitem" element={<MyItem />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
