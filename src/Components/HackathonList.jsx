// import React from 'react'
// import {
//     AppBar,
//     Box,
//     Button,
//     Container,
//     Typography,Avatar ,
//     Toolbar,
//     Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel,
//     TextField, Card, CardMedia, InputAdornment
//   } from "@mui/material";
// import stockImage from "./images/images_for_hackathonCards/Group 1000002771.png"
// import butterflyImage from "./images/images_for_hackathonCards/Group 1000002766.png"
// import carImage from "./images/images_for_hackathonCards/Group 1000002767.png"
// import personImage from "./images/images_for_hackathonCards/Group 1000002772.png"
// import groupImage from "./images/images_for_hackathonCards/Group 1000002773.png"
// import runningImage from "./images/images_for_hackathonCards/Group 1000002466.png"
// import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
// import { useNavigate } from 'react-router-dom';
// import { unmountComponentAtNode } from 'react-dom';

// function HackathonList() {
// const navigate = useNavigate()

// function handleOpenChallenge(){
//     navigate('/challenge-details');
// }
//     const images = [
//         stockImage ,
//         butterflyImage,
//         carImage,
//         personImage,
//         groupImage,
//         runningImage,
//       ];
//   return (
//     <div>
//       <Box
//   sx={{
//     bgcolor: "#003145",
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: 7,
//     pt: "75px",
//     paddingBottom:"90px",
//     px: 7, // Adjust as needed for horizontal padding
//     mx: 'auto', // Centers the Box horizontally
//     maxWidth: '1200px', // Set a maximum width if needed
//     minHeight: "100vh",
//   }}
// >
//   {images.map((image, index) => (
//     <Card key={index} sx={{ borderRadius: '12px',height: "82vh", 
//         width: "27vw"  }}>
//       <CardMedia
//         component="img"
//         image={image }
//         alt={`Image ${index + 1}`}
//         sx={{ width: '100%', // Ensure the image covers the card's width
//             height: '40%',
//         }}
//       />
//       <Box
//       sx={{
//         display:"flex",
//         justifyContent:"center",
//         alignItems:"center",
//         textAlign:"center",
//         flexDirection:"column"

//       }}
//       >
//         <Box
//         sx={{
//             mt:"20px",
//             height:"23px",
//             width:"80px",
//             backgroundColor:"#faf0d2",
//             borderRadius:"5px",
//             fontSize:"13px",
//             fontWeight:"500",
//             color:"#666666",
//             lineHeight:1.5,
//         }}
//         >
// Upcoming
//         </Box>
//         <Typography 
//         sx={{px:"65px",mt:2, fontWeight:"bold", fontSize:"17px"}}
//         >
//             Challenge name
//         </Typography>
//         <Box
//         sx={{mt:2, fontWeight:500, color:"#454545"}}
//         >
//         Starts in
//       </Box>

//     <Button 
    
//     sx={{bgcolor:"#44914c",height:"43px", width:"52%",borderRadius:"12px",mt:8,textTransform:"none", color:"white",fontWeight:500,fontSize:"14px"}}
//     startIcon={<TaskAltOutlinedIcon  />}
//     onClick={handleOpenChallenge}
//     >
// Participate Now
//     </Button>
//       </Box>
      
//     </Card>
//   ))}
// </Box>
//     </div>
//   )
// }

// export default HackathonList


// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import {
//   Box,
//   Button,
//   Card,
//   CardMedia,
//   Typography,
// } from '@mui/material';
// import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
// import { setCurrentChallenge } from '../Slices/challengeSlice'; // Adjust the import path as needed

// function HackathonList() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const challenges = useSelector((state) => state.challenge.challenges); // Adjust if necessary

//   function handleOpenChallenge(challenge) {
//     dispatch(setCurrentChallenge(challenge)); // Set the current challenge in the store
//     navigate('/challenge-details');
//   }

//   return (
//     <div>
//       <Box
//         sx={{
//           bgcolor: "#003145",
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: 7,
//           pt: "75px",
//           paddingBottom: "90px",
//           px: 7,
//           mx: 'auto',
//           maxWidth: '1200px',
//           minHeight: "100vh",
//         }}
//       >
//         {challenges.map((challenge) => (
//           <Card key={challenge.id} sx={{ borderRadius: '12px', height: "82vh", width: "27vw" }}>
//             <CardMedia
//               component="img"
//               image={challenge.image}
//               alt={challenge.challengeName}
//               sx={{ width: '100%', height: '40%' }}
//             />
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 textAlign: "center",
//                 flexDirection: "column"
//               }}
//             >
//               <Box
//                 sx={{
//                   mt: "20px",
//                   height: "23px",
//                   width: "80px",
//                   backgroundColor: "#faf0d2",
//                   borderRadius: "5px",
//                   fontSize: "13px",
//                   fontWeight: "500",
//                   color: "#666666",
//                   lineHeight: 1.5,
//                 }}
//               >
//                 {challenge.status} {/* Display dynamic status */}
//               </Box>
//               <Typography
//                 sx={{ px: "65px", mt: 2, fontWeight: "bold", fontSize: "17px" }}
//               >
//                 {challenge.challengeName}
//               </Typography>
//               <Box
//                 sx={{ mt: 2, fontWeight: 500, color: "#454545" }}
//               >
//                 Starts in

//                 here i  want stopwatch timer
//               </Box>
//               <Button
//                 sx={{
//                   bgcolor: "#44914c",
//                   height: "43px",
//                   width: "52%",
//                   borderRadius: "12px",
//                   mt: 8,
//                   textTransform: "none",
//                   color: "white",
//                   fontWeight: 500,
//                   fontSize: "14px"
//                 }}
//                 startIcon={<TaskAltOutlinedIcon />}
//                 onClick={() => handleOpenChallenge(challenge)}
//               >
//                 Participate Now
//               </Button>
//             </Box>
//           </Card>
//         ))}
//       </Box>
//     </div>
//   );
// }

// export default HackathonList;


import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Card,
  CardMedia,
  Typography,
} from '@mui/material';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { setCurrentChallenge } from '../Slices/challengeSlice'; // Adjust the import path as needed

function HackathonList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const challenges = useSelector((state) => state.challenge.challenges); // Adjust if necessary

  const [remainingTime, setRemainingTime] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const updatedRemainingTime = {};

      challenges.forEach((challenge) => {
        const start = new Date(challenge.startDate);
        const end = new Date(challenge.endDate);

        if (now < start) {
          updatedRemainingTime[challenge.id] = start - now;
        } else if (now > end) {
          updatedRemainingTime[challenge.id] = null; // Challenge has ended
        } else {
          updatedRemainingTime[challenge.id] = end - now;
        }
      });

      setRemainingTime(updatedRemainingTime);
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [challenges]);

  const formatTimeRemaining = (time) => {
    if (time === null) return null;

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const getTimeInfo = (id, startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (now < start) {
      return `Starts in ${formatTimeRemaining(remainingTime[id])}`;
    } else if (now > end) {
      return `Ended on ${end.toLocaleString()}`;
    } else {
      return `Ends in ${formatTimeRemaining(remainingTime[id])}`;
    }
  };

  function handleOpenChallenge(challenge) {
    dispatch(setCurrentChallenge(challenge)); // Set the current challenge in the store
    navigate('/challenge-details');
  }

  return (
    <div>
      <Box
        sx={{
          bgcolor: "#003145",
          display: 'flex',
          flexWrap: 'wrap',
          gap: 7,
          pt: "75px",
          paddingBottom: "90px",
          px: 7,
          mx: 'auto',
          maxWidth: '1200px',
          minHeight: "100vh",
        }}
      >
        {challenges.map((challenge) => (
          <Card key={challenge.id} sx={{ borderRadius: '12px', height: "82vh", width: "27vw" }}>
            <CardMedia
              component="img"
              image={challenge.image}
              alt={challenge.challengeName}
              sx={{ width: '100%', height: '40%' }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                flexDirection: "column"
              }}
            >
              <Box
                sx={{
                  mt: "20px",
                  height: "23px",
                  width: "80px",
                  backgroundColor: "#faf0d2",
                  borderRadius: "5px",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#666666",
                  lineHeight: 1.5,
                }}
              >
                {challenge.status} 
              </Box>
              <Typography
                sx={{ px: "65px", mt: 2, fontWeight: "bold", fontSize: "17px" }}
              >
                {challenge.challengeName}
              </Typography>
              <Box
                sx={{ mt: 2, fontWeight: 500, color: "#454545" }}
              >
                {getTimeInfo(challenge.id, challenge.startDate, challenge.endDate)}
              </Box>
              <Button
                sx={{
                  bgcolor: "#44914c",
                  height: "43px",
                  width: "52%",
                  borderRadius: "12px",
                  mt: 8,
                  textTransform: "none",
                  color: "white",
                  fontWeight: 500,
                  fontSize: "14px"
                }}
                startIcon={<TaskAltOutlinedIcon />}
                onClick={() => handleOpenChallenge(challenge)}
              >
                Participate Now
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default HackathonList;
