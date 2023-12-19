import React, { useState } from 'react';
import MyForm from './Form';

const UserForm = () => {
  const[addUser,setaddUser]=useState(true);
  const [userName, setUserName] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);



  const handleEditUser = () => {
    // Edit user logic here (e.g., send updated data to the server, update state, etc.)
    console.log(`User edited: ${userName}`);
    setUserName(''); // Clear the input field
    setIsEditMode(false); // Exit edit mode
  };

  return (
    <div style={{marginTop:30}}className="container">
        <div className="row">
            <div className="col">
                 <div>
                 <MyForm/>
                 </div>
                 
            </div>
        <div class="col">
        <div className="vertical-line"></div>
        <h1 style={{color:'blue'}}>Edit User</h1>
            <input type="text" placeholder='Enter User ID'></input>
            <button>Get User</button>
        </div>
  </div>
  </div>
   
  );
};

export default UserForm;
