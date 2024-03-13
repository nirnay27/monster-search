import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../redux/redux/action/showmodal.action';
import axios from 'axios';
import { useState } from 'react';
import { signupUser } from '../../redux/redux/action/signup.action';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const dispatch= useDispatch()
  const togg = useSelector(state=> state.user.showmodal)
  const userdata= useSelector(state=> state.user.userid)
  const [open, setOpen] = React.useState(togg);
  const [userData, setUserData] = useState({
    userid: userdata.userid,
    username: userdata.username,
    email: userdata.email,
    password: userdata.password
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const handleClose = () =>{
     setOpen(false);
     dispatch(showModal(false))
    }
 
 async function handleSubmit(event) {
  event.preventDefault()
   
  try {
    
     console.log('http://localhost:8085/user/updatebyid/'+userdata.id)
    const updateResponse  =await axios.put('http://localhost:8085/user/updatebyid/'+userdata.id,userData)
    
     console.log(updateResponse);
      alert("sucessfully updated")
      
     handleClose()
      
  } catch (error) {
      console.log(error)
      alert("update failed pls try again")
  }
}
  return (
    <div>
      
      <Modal
        open={open}
         onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit}>
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
          
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            User Update form
          </Typography>
         
         <Box  sx={{style}}>
          <TextField label="object Id" color="secondary" focused value={userdata.id} name="id" onChange={handleChange}/>
          <TextField label="user id" color="secondary" focused defaultValue={userdata.userid} name="userid" onChange={handleChange}/>
          
          <TextField label="username" color="secondary" focused defaultValue={userdata.username} name="username" onChange={handleChange}/>
          <TextField label="email" color="secondary" focused defaultValue={userdata.email} name="email" onChange={handleChange}/>

          <TextField label="password" color="secondary" focused defaultValue={userdata.password} name="password" onChange={handleChange}/>
          
          </Box>
          <Button variant="contained" color="success" type="submit">Update</Button>
        </Box>
        </form>
      </Modal>
    </div>
  );
}
