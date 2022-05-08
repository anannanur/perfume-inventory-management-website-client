import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer';
import './App.css';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItem from './Pages/MyItem/MyItem';
import SingleItem from './Pages/SingleItem/SingleItem';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddItem from './Pages/AddItem/AddItem';
import Blog from './Pages/Blog/Blog';
import { useEffect, useState } from 'react';
import Loading from './Pages/Shared/Loading/Loading';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 1.5 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return isLoading ? (
    <div>
      <Loading />
    </div>)
    :
    (
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inventory/:id" element={
            <RequireAuth>
              <SingleItem />
            </RequireAuth>
          } />
          <Route path="/manageitems" element={
            <RequireAuth>
              <ManageItems />
            </RequireAuth>
          } />
          <Route path="/additem" element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          } />
          <Route path="/myitem" element={
            <RequireAuth>
              <MyItem />
            </RequireAuth>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </div>
    );
}

export default App;
