import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import SignUp from './pages/Login/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Header from './pages/shared/Header/Header';
import Update from './pages/Update/Update';
import 'react-toastify/dist/ReactToastify.css';
import ManageInventories from './pages/ManageInventories/ManageInventories';
import VerifyUser from './pages/Login/VerifyUser/VerifyUser';
import AddNewInventory from './pages/AddNewInventory/AddNewInventory';
import MyItems from './pages/MyItems/MyItems';
import Blogs from './pages/Blogs/Blogs';
import Inventories from './pages/Home/Inventories/Inventories';

function App() {
  return (
    <div className='mt-5 pt-2'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventory' element={<Inventories></Inventories>}></Route>
        <Route path='/manage-inventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path='/add-inventory' element={
          <RequireAuth>
            <AddNewInventory></AddNewInventory>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Update></Update>
          </RequireAuth>
        }></Route>
        <Route path='/verify-user' element={
          <RequireAuth>
            <VerifyUser></VerifyUser>
          </RequireAuth>
        }></Route>
        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
