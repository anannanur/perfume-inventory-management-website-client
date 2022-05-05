import { Route, Routes } from 'react-router-dom';
import  Header  from './Pages/Shared/Header/Header'
import  Footer from './Pages/Shared/Footer/Footer';
import './App.css';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItem from './Pages/MyItem/MyItem';
import SingleItem from './Pages/SingleItem/SingleItem';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory/:id" element={<SingleItem/>} />
     
        <Route path="/manageitems" element={<ManageItems />} />
      
        <Route path="/myitem" element={<MyItem />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
