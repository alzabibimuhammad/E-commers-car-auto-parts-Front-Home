import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import "../../styles/user-style.css"
import ava04 from "../../assets/all-images/ava-2.jpg";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect,useRef  } from 'react';

import { Button, Input } from 'reactstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Box, CircularProgress, colors } from '@mui/material';
import { enc, SHA256 } from 'crypto-js';
import AuthUser from '../../components/AuthUser';
import img01 from "../../assets/all-images/empty_person.png";
import ProfileCard from '../../features/profile/components/card';
import GetProfile from '../../features/profile/query/getProfile';



const Profile = () => {

  const [posts, setPosts] = useState([]);
  const [monyValue, setMonyValue] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const{http}= AuthUser();
  const[id,setID]= useState([]);
  const navigate = useNavigate();


  useEffect(()=>{
    http.post('/me').then((res)=>{
      setPosts(res.data)
    })
  },[]);
  const AddToBalance=()=>{

    http.get("/MoveToBalance/"+posts.id+"/"+monyValue)
    setIsOpen(false); // Close the popup
  }

  const DeleteProfile=()=>{ 
      const url = "http://127.0.0.1:8000/api/deleteProfileCustomerSellerAPI"+"/"+posts.id
            fetch( url, { method: 'get'}).then((Response) => {
              if(!Response.ok){
                throw new Error('Something went wrong')
              }
              else{
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('user');
                navigate('/home');
              }
            });
  }

    const EditProfile=()=>{
      navigate('/EditProfile')
    }

  


    var isSeller = posts.utype ==='2';


    const sendDataToApi = (formData) => {
      fetch('http://127.0.0.1:8000/api/post-registration?name='+formData.name+"&email="+formData.email+"&phone="+formData.phone+"&address="+formData.address+"&password="+formData.password+"&utype="+formData.utype+"&image="+formData.image,{
      method:'POST',  
      headers:{
          'Content-Type': 'application/x-www-form-urlencoded',

        }
      })
        .then((response) => response.json())
        .catch((error) => console.log(error));
      };
      let closePopup; 
      const BecomeASeller = () => {
        const formData = {
          name:posts.name,
          email: posts.email,
          phone: posts.phone,
          address: posts.address,
          utype: 2,
          image:posts.image,
          password: 0,
        };
        sendDataToApi(formData);
        closePopup();
      };
    //   <Popup
    //   trigger={<Button style={{ backgroundColor:'#911' }} >Delete Profile</Button>}
    //   position="center center"
    //   modal
    //   closeOnDocumentClick
    //   contentStyle={{ maxWidth: '400px', padding: '2rem' }}
    // >
    //   {close => (
    //     <div>
    //       <p>Are you sure?</p>
    //       <div>
    //         <Button style={{ marginRight: '10px',backgroundColor:'#911' }} onClick={DeleteProfile}>Yes</Button>
    //         <Button onClick={close}>No</Button>
    //       </div>
    //     </div>
    //   )}
    // </Popup>
    
//     <Popup
//     trigger={<Button onClick={() => setIsOpen(true)}>Add To balance</Button>}
//     position="center center"
//     modal
//     closeOnDocumentClick
//     contentStyle={{ maxWidth: '400px', padding: '2rem' }}
//     open={isOpen}
//     onClose={() => setIsOpen(false)} // Use a callback function
//   >
//     {(close) => { // Receive the close function as a parameter
//       const handleYesClick = () => {
//         AddToBalance();
//         close(); // Invoke the close function to close the popup
//       };

//       return (
//         <div>
//           <p>Are you sure you want to move your profits to your balance?</p>

//           <div>
//             <Input
//               type='text'
//               name='mony'
//               placeholder='mony'
//               value={monyValue}
//               onChange={event => setMonyValue(event.target.value)}
//             />
//             <Button
//               style={{ marginRight: '10px', backgroundColor: '#911' }}
//               onClick={handleYesClick} // Use the handleYesClick function
//             >
//               Yes
//             </Button>

//             <Button onClick={close}>No</Button>
//           </div>
//         </div>
//       );
//     }}
//   </Popup>;
    const {data} = GetProfile()
    const Data = data?.data
  return (
    <>
    {Data?<ProfileCard Data={Data} />:
    <Box sx={{ height:'50vh',display:'flex',justifyContent:'center' , alignItems:'center' }} >
        <CircularProgress/>
    </Box>}
    </>
  );
}

export default Profile;
        