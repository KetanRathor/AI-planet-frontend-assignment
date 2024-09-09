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
//   import rocket from "./images/assets_And_Icons/PicsArt_04-14-04.42 1.svg";

// function LandingPageWithCreateChallenge() {
//   return (
//     <div>
//       <Box
//         sx={{
//           backgroundColor: "#003145",
//           minHeight: "82vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "40px",
//         }}
//       >
//         <Container
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           {/* Left Section */}
//           <Box sx={{ flexBasis: "50%" }}>
//             <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//               <Box
//                 sx={{
//                   width: "5px",
//                   height: "50px",
//                   backgroundColor: "#FFB400",
//                   mr: 2,
//                 }}
//               />
//               <Typography
//                 variant="h4"
//                 sx={{ color: "white", fontWeight: "bold" }}
//               >
//                 Accelerate Innovation with Global AI Challenges
//               </Typography>
//             </Box>
//             <Typography variant="body1" sx={{ color: "#d5e1e8", mb: 4 }}>
//               AI Challenges at DPhi simulate real-world problems. It is a great
//               place to put your AI/Data Science skills to the test on diverse
//               datasets, allowing you to foster learning through competitions.
//             </Typography>
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#fff",
//                 color: "#052441",
//                 fontWeight: "bold",
//               }}
//             >
//               Create Challenge
//             </Button>
//           </Box>

//           {/* Right Section */}
//           <Box
//             sx={{ flexBasis: "50%", display: "flex", justifyContent: "center" }}
//           >
//             <img src={rocket} alt="Rocket" style={{ width: "300px" }} />
//           </Box>
//         </Container>
//       </Box>
//     </div>
//   )
// }

// export default LandingPageWithCreateChallenge


/////////////
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from "@mui/material";
import rocket from "./images/assets_And_Icons/PicsArt_04-14-04.42 1.svg";

function LandingPageWithCreateChallenge() {
  const navigate = useNavigate();

  const handleCreateChallengeClick = () => {
    navigate('/create-challenge');
  };

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#003145",
          minHeight: "82vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left Section */}
          <Box sx={{ flexBasis: "50%" }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  width: "5px",
                  height: "50px",
                  backgroundColor: "#FFB400",
                  mr: 2,
                }}
              />
              <Typography
                variant="h4"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Accelerate Innovation with Global AI Challenges
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: "#d5e1e8", mb: 4 }}>
              AI Challenges at DPhi simulate real-world problems. It is a great
              place to put your AI/Data Science skills to the test on diverse
              datasets, allowing you to foster learning through competitions.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#052441",
                fontWeight: "bold",
              }}
              onClick={handleCreateChallengeClick}
            >
              Create Challenge
            </Button>
          </Box>

          {/* Right Section */}
          <Box
            sx={{ flexBasis: "50%", display: "flex", justifyContent: "center" }}
          >
            <img src={rocket} alt="Rocket" style={{ width: "300px" }} />
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default LandingPageWithCreateChallenge;








/////////

// import React, { useState } from 'react';
// import {
//     Box,
//     Button,
//     Container,
//     Typography
// } from "@mui/material";
// import rocket from "./images/assets_And_Icons/PicsArt_04-14-04.42 1.svg";

// import CreateChallengeForm from './CreateChallengeForm';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// function LandingPageWithCreateChallenge() {
//   const [showForm, setShowForm] = useState(false); // State to track form visibility

//   const handleCreateChallengeClick = () => {
//     setShowForm(true); // Show the form when button is clicked
//   };

//   return (
//     <div>
//       <Box
//         sx={{
//           backgroundColor: "#003145",
//           minHeight: "82vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "40px",
//         }}
//       >
//         <Container
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           {/* Left Section */}
//           <Box sx={{ flexBasis: "50%" }}>
//             <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//               <Box
//                 sx={{
//                   width: "5px",
//                   height: "50px",
//                   backgroundColor: "#FFB400",
//                   mr: 2,
//                 }}
//               />
//               <Typography
//                 variant="h4"
//                 sx={{ color: "white", fontWeight: "bold" }}
//               >
//                 Accelerate Innovation with Global AI Challenges
//               </Typography>
//             </Box>
//             <Typography variant="body1" sx={{ color: "#d5e1e8", mb: 4 }}>
//               AI Challenges at DPhi simulate real-world problems. It is a great
//               place to put your AI/Data Science skills to the test on diverse
//               datasets, allowing you to foster learning through competitions.
//             </Typography>
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#fff",
//                 color: "#052441",
//                 fontWeight: "bold",
//               }}
//               onClick={handleCreateChallengeClick} // Open the form on button click
//             >
//               Create Challenge
//             </Button>
//           </Box>

//           {/* Right Section */}
//           <Box
//             sx={{ flexBasis: "50%", display: "flex", justifyContent: "center" }}
//           >
//             <img src={rocket} alt="Rocket" style={{ width: "300px" }} />
//           </Box>
//         </Container>
//       </Box>

//       {/* Conditionally Render the Form */}
//       {showForm && <CreateChallengeForm />}
//     </div>
//   );
// }

// export default LandingPageWithCreateChallenge;

