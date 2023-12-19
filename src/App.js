import './App.css';
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './Layout/header';
import Content from './Layout/Content';
import Footer from './Layout/Footer';
import UserForm from './Components/ManagePage';
import Users from './Components/users';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route index path="/" element ={<Content/>}></Route>
        <Route path="/Home" element={<Content/>}></Route>
        <Route path="/Profile" element={<h1>Profile</h1>}></Route>
        <Route path="/users" element={<Users/>} ></Route>
        <Route path="/users/manageUsers" element={<UserForm/>}/>
        <Route path="/users/manageUsers/addUser" element={<h1>ADD USER</h1>}/>
        <Route path="/users:userID/editUser" element={<h1>EDIT USER</h1>}/>
        <Route path="/users:userID" element={<h1>USER PROFILE</h1>}/>
        <Route path="/404" element={<h3>User Not Fount</h3>}  />
        <Route path="*" element={<Navigate to="/404" replace/>}/>
      </Routes>
      <div><Footer/> </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
