// import React from 'react';
// import { Box, Button, Typography, Chip } from '@mui/material';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import skillLevel from "./images/assets_And_Icons/carbon_skill-level-basic.svg"

// const ChallengeDetails = () => {
//   return (
//     <Box sx={{  minHeight: '100vh' }}>
      

//       {/* Challenge Information */}
//       <Box sx={{  paddingLeft: '120px', backgroundColor: '#003145',
//         height:"70vh",
//        }}>
        
//         <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//         <Typography
//           variant="body1"
//           sx={{
//             marginLeft: '10px',
//             backgroundColor: '#ffce5c',
//             padding: '5px 10px',
//             borderRadius: '4px',
//             color: 'black',
//             display: 'flex',
//             alignItems: 'center',
//             fontFamily:"Inter, sans-serif",
//             fontWeight:"700",
//             fontSize:"14px",
//             width:"35vw",
//             marginTop:"95px"
//           }}
//         >
//           <AccessTimeIcon sx={{ marginRight: '8px' }} />
//           Starts on 17th Jun'22 09:00 PM (India Standard Time)
//         </Typography>
//       </Box>
        
//         {/* Challenge Title */}
//         <Typography variant="h3" sx={{ marginTop: '20px',color:"white" }}>
//           Data Sprint 72 - Butterfly Identification
//         </Typography>

//         {/* Challenge Description */}
//         <Typography variant="body1" sx={{ marginTop: '30px',fontSize:"18px",color:"white" }}>
//           Identify the class to which each butterfly belongs to
//         </Typography>

//         {/* Difficulty Level */}
//         <Box 
//   sx={{ 
//     marginTop: '20px',  
//     height: "35px", 
//     width: "100px", 
//     fontWeight: 'bold', 
//     bgcolor: "white",
//     color: "#003145",
//     borderRadius: "5px", 
//     textAlign: "center",
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '4px' 
//   }}
// >
//   <img src={skillLevel} alt="skillLevel" style={{ width: '20px', height: '20px' }} />
//   Easy
// </Box>
//       </Box>
// {/* <Box
// sx={{height:"60px",backgroundColor:"white",
//     border: '1px  #ebf0f5', 
//     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//     color:"black",
//     lineHeight:4,
//     paddingLeft:"70px",
//     fontSize:"large",
//     fontWeight:"bold"
// }}
// >
//    Overview 
// </Box> */}

// <Box
//   sx={{
//     height: "60px",
//     backgroundColor: "white",
//     border: '1px solid #ebf0f5',
//     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '0 20px 0px 70px',
//     fontSize: "18px",
//     fontWeight: "bold",
//     paddingTop: '10px',
//     position: 'relative',
//     color: "black",
//     '&::after': {
//       content: '""',
//       position: 'absolute',
//       left: '60px',
//       bottom: 0,
//       borderRadius:"5px",
//       width: '8%', // Adjust width as needed
//       height: '4px', // Adjust height for the underline thickness
//       backgroundColor: 'green', // Underline color
//     },
//   }}
// >
//   {/* Overview Text */}
//   Overview 

//   {/* Buttons on the Right */}
//   <Box sx={{ display: 'flex', gap: '10px' }}>
//     <Button variant="contained" color="success" sx={{ width: '90px',textTransform:"none",borderRadius:"10px",fontWeight:"bold", }}>
//       Edit
//     </Button>
//     <Button variant="outlined" color="error" sx={{ width: '90px',textTransform:"none",borderRadius:"10px",borderWidth: '2px',fontWeight:"bold",
//     '&:hover': {
//       borderWidth: '2px', // Ensure the border stays thick on hover as well
//     }  }}>
//       Delete
//     </Button>
//   </Box>
// </Box>
// <Box sx={{ 
//   padding:"60px 0px 60px  60px",
//   // backgroundColor: '#f9f9f9',
//   maxWidth: '75vw',

//    }}>
//         <Typography variant="body1" sx={{ fontSize: '18px', lineHeight: '1.8',fontWeight: 'bold',color:"#64607d", whiteSpace: 'pre-line' }}>
//           The challenge involves identifying butterflies from various images provided in the dataset. 
          
//           dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffslkwmfefkenkjfnejknejkrnekrjf
//           You are required to classify each butterfly into its correct class. The dataset contains hundreds of images of butterflies
//           with different characteristics. Participants must use machine learning techniques to develop a model that can accurately
//           identify the butterfly species based on the given features. The challenge will be judged on accuracy and the efficiency of
//           your model.The challenge involves identifying butterflies from various images provided in the dataset.dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
//           You are required to classify each butterfly into its correct class. The dataset contains hundreds of images of butterflies
//           with different characteristics. Participants must use machine learning techniques to develop a model that can accurately
//           identify the butterfly species based on the given features.
          
//            The challenge will be judged on accuracy and the efficiency of
//           your model.The challenge involves identifying butterflies from various images provided in the dataset.dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
//           You are required to classify each butterfly into its correct class. The dataset contains hundreds of images of butterflies
//           with different characteristics. Participants must use machine learning techniques to develop a model that can accurately
//           identify the butterfly species based on the given features. The challenge will be judged on accuracy and the efficiency of
//           your model.The challenge involves identifying butterflies from various images provided in the dataset.dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
//           You are required to classify each butterfly into its correct class. The dataset contains hundreds of images of butterflies
//           with different characteristics. Participants must use machine learning techniques to develop a model that can accurately
//           identify the butterfly species based on the given features. The challenge will be judged on accuracy and the efficiency of
//           your model.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default ChallengeDetails;

///////////////////////////////////////////////////////
// import React from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import skillLevel from "./images/assets_And_Icons/carbon_skill-level-basic.svg";
// import { useSelector } from 'react-redux';

// const ChallengeDetails = () => {
//   // Fetch the current challenge from the Redux store
//   const currentChallenge = useSelector((state) => state.challenge.currentChallenge);

//   if (!currentChallenge) {
//     return <Typography>Loading...</Typography>; // Handle the case where no challenge is selected
//   }

//   return (
//     <Box sx={{ minHeight: '100vh' }}>
//       {/* Challenge Information */}
//       <Box sx={{ paddingLeft: '120px', backgroundColor: '#003145', height: "70vh" }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//           <Typography
//             variant="body1"
//             sx={{
//               marginLeft: '10px',
//               backgroundColor: '#ffce5c',
//               padding: '5px 10px',
//               borderRadius: '4px',
//               color: 'black',
//               display: 'flex',
//               alignItems: 'center',
//               fontFamily: "Inter, sans-serif",
//               fontWeight: "700",
//               fontSize: "14px",
//               width: "35vw",
//               marginTop: "95px"
//             }}
//           >
//             <AccessTimeIcon sx={{ marginRight: '8px' }} />
//             Starts on {new Date(currentChallenge.startDate).toLocaleDateString()} {new Date(currentChallenge.startDate).toLocaleTimeString()} (India Standard Time)
//           </Typography>
//         </Box>

//         {/* Challenge Title */}
//         <Typography variant="h3" sx={{ marginTop: '20px', color: "white" }}>
//           {currentChallenge.challengeName}
//         </Typography>

//         {/* Challenge Description */}
//         <Typography variant="body1" sx={{ marginTop: '30px', fontSize: "18px", color: "white" }}>
//           {currentChallenge.description}
//         </Typography>

//         {/* Difficulty Level */}
//         <Box 
//           sx={{ 
//             marginTop: '20px',  
//             height: "35px", 
//             width: "100px", 
//             fontWeight: 'bold', 
//             bgcolor: "white",
//             color: "#003145",
//             borderRadius: "5px", 
//             textAlign: "center",
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             gap: '4px' 
//           }}
//         >
//           <img src={skillLevel} alt="skillLevel" style={{ width: '20px', height: '20px' }} />
//           {currentChallenge.level}
//         </Box>
//       </Box>

//       {/* Overview Section */}
//       <Box
//         sx={{
//           height: "60px",
//           backgroundColor: "white",
//           border: '1px solid #ebf0f5',
//           boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           padding: '0 20px 0px 70px',
//           fontSize: "18px",
//           fontWeight: "bold",
//           paddingTop: '10px',
//           position: 'relative',
//           color: "black",
//           '&::after': {
//             content: '""',
//             position: 'absolute',
//             left: '60px',
//             bottom: 0,
//             borderRadius: "5px",
//             width: '8%', // Adjust width as needed
//             height: '4px', // Adjust height for the underline thickness
//             backgroundColor: 'green', // Underline color
//           },
//         }}
//       >
//         {/* Overview Text */}
//         Overview

//         {/* Buttons on the Right */}
//         <Box sx={{ display: 'flex', gap: '10px' }}>
//           <Button variant="contained" color="success" sx={{ width: '90px', textTransform: "none", borderRadius: "10px", fontWeight: "bold" }}>
//             Edit
//           </Button>
//           <Button variant="outlined" color="error" sx={{ width: '90px', textTransform: "none", borderRadius: "10px", borderWidth: '2px', fontWeight: "bold",
//             '&:hover': {
//               borderWidth: '2px', // Ensure the border stays thick on hover as well
//             }
//           }}>
//             Delete
//           </Button>
//         </Box>
//       </Box>

//       {/* Challenge Description */}
//       <Box sx={{ padding: "60px 0px 60px 60px", maxWidth: '75vw' }}>
//         <Typography variant="body1" sx={{ fontSize: '18px', lineHeight: '1.8', fontWeight: 'bold', color: "#64607d", whiteSpace: 'pre-line' }}>
//           {currentChallenge.description}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default ChallengeDetails;

import React from 'react';
import { Box, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import skillLevel from "./images/assets_And_Icons/carbon_skill-level-basic.svg";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentChallenge, deleteChallenge } from '../Slices/challengeSlice'; // Adjust import paths as needed

const ChallengeDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentChallenge = useSelector((state) => state.challenge.currentChallenge);
  const [openConfirmDialog, setOpenConfirmDialog] = React.useState(false);

  if (!currentChallenge) {
    return <Typography>Loading...</Typography>; // Handle the case where no challenge is selected
  }

  const handleEdit = () => {
    // Navigate to the edit page with the challenge id
    navigate(`/create-challenge/${currentChallenge.id}`);
  };

  const handleDelete = () => {
    dispatch(deleteChallenge(currentChallenge.id));
    navigate('/hackathon-list'); // Navigate back to the list or any other page
  };

  const openConfirmDialogHandler = () => setOpenConfirmDialog(true);
  const closeConfirmDialogHandler = () => setOpenConfirmDialog(false);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Challenge Information */}
      <Box sx={{ paddingLeft: '120px', backgroundColor: '#003145', height: "70vh" }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Typography
            variant="body1"
            sx={{
              marginLeft: '10px',
              backgroundColor: '#ffce5c',
              padding: '5px 10px',
              borderRadius: '4px',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
              fontSize: "14px",
              width: "35vw",
              marginTop: "95px"
            }}
          >
            <AccessTimeIcon sx={{ marginRight: '8px' }} />
            Starts on {new Date(currentChallenge.startDate).toLocaleDateString()} {new Date(currentChallenge.startDate).toLocaleTimeString()} (India Standard Time)
          </Typography>
        </Box>

        {/* Challenge Title */}
        <Typography variant="h3" sx={{ marginTop: '20px', color: "white" }}>
          {currentChallenge.challengeName}
        </Typography>

        {/* Challenge Description */}
        <Typography variant="body1" sx={{ marginTop: '30px', fontSize: "18px", color: "white" }}>
          {/* {currentChallenge.description} */}
        </Typography>

        {/* Difficulty Level */}
        <Box 
          sx={{ 
            marginTop: '20px',  
            height: "35px", 
            width: "100px", 
            fontWeight: 'bold', 
            bgcolor: "white",
            color: "#003145",
            borderRadius: "5px", 
            textAlign: "center",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px' 
          }}
        >
          <img src={skillLevel} alt="skillLevel" style={{ width: '20px', height: '20px' }} />
          {currentChallenge.level}
        </Box>
      </Box>

      {/* Overview Section */}
      <Box
        sx={{
          height: "60px",
          backgroundColor: "white",
          border: '1px solid #ebf0f5',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px 0px 70px',
          fontSize: "18px",
          fontWeight: "bold",
          paddingTop: '10px',
          position: 'relative',
          color: "black",
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '60px',
            bottom: 0,
            borderRadius: "5px",
            width: '8%', // Adjust width as needed
            height: '4px', // Adjust height for the underline thickness
            backgroundColor: 'green', // Underline color
          },
        }}
      >
        {/* Overview Text */}
        Overview

        {/* Buttons on the Right */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Button
            variant="contained"
            color="success"
            sx={{ width: '90px', textTransform: "none", borderRadius: "10px", fontWeight: "bold" }}
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            sx={{
              width: '90px',
              textTransform: "none",
              borderRadius: "10px",
              borderWidth: '2px',
              fontWeight: "bold",
              '&:hover': {
                borderWidth: '2px', // Ensure the border stays thick on hover as well
              }
            }}
            onClick={openConfirmDialogHandler}
          >
            Delete
          </Button>
        </Box>
      </Box>

      {/* Challenge Description */}
      <Box sx={{ padding: "60px 0px 60px 60px", maxWidth: '75vw' }}>
        <Typography variant="body1" sx={{ fontSize: '18px', lineHeight: '1.8', fontWeight: 'bold', color: "#64607d", whiteSpace: 'pre-line' }}>
          {currentChallenge.description}
        </Typography>
      </Box>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openConfirmDialog}
        onClose={closeConfirmDialogHandler}
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this challenge?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeConfirmDialogHandler} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ChallengeDetails;
