import React from 'react'
import {
    AppBar,
    Box,
    Button,
    Container,
    Typography,Avatar ,
    Toolbar,
    Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel,
    TextField, Card, CardMedia, InputAdornment
  } from "@mui/material";

import ComputerIcon from '@mui/icons-material/Computer';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import robot from "./images/assets_And_Icons/Robot.svg"
import groupIcon from "./images/assets_And_Icons/Vector.svg"
import identificationCard from "./images/assets_And_Icons/IdentificationCard.svg"
import carbonNotebook from "./images/assets_And_Icons/carbon_notebook-reference.svg"
import AImodelImage from "./images/assets_And_Icons/Group 1000002515.svg"
import DataScience from "./images/assets_And_Icons/Group 1000002516.svg"
import AIChalleneges from "./images/assets_And_Icons/Group 1000002518.svg"

function CommunityDetailsCounts() {
  return (
    <div>
      <Box
        sx={{
      
          //   padding: '40px',
          minHeight: "100vh",
        }}
      >
        {/* <Box
          sx={{
            backgroundColor: "#002a3b",
            height: "35vh",
            width: "100vw",
            // mb: 4,
            borderTop: "1px solid #305261",
            // borderTopColor: "#305261",
          }}
        >
          Hshhs
        </Box> */}
        <Box
  sx={{
    bgcolor: '#012b4a',
    py: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: { xs: 'column', md: 'row' }, // Column on small screens, row on larger screens
    gap: 5, // Space between items
  }}
>
  {/* AI Model Submissions */}
  <Box
    sx={{
      textAlign: 'center',
      color: '#fff',
      display: 'flex',
      flexDirection: 'row', // Row direction for Avatar and Typography
      alignItems: 'center',
      gap: 2
    }}
  >
    <Avatar
src={AImodelImage}
      sx={{
        bgcolor: '#fff',
        width: 60,
        height: 60,
        borderRadius: 4, // Less round corners
      }}
    />
      {/* src=AImodelImage sx={{ fontSize: 40, color: '#013550' }} />
    </Avatar> */}
    <Box
      sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
      >
        100K+
      </Typography>
      <Typography
        variant="body1"
      >
        AI model submissions
      </Typography>
    </Box>
  </Box>

  <Box
    sx={{
      width: "1px",
      height: "40px",
      backgroundColor: "white",
      mx: 2, // Margin on both sides to space out from adjacent sections
    }}
  />

  {/* Data Scientists */}
  <Box
    sx={{
      textAlign: 'center',
      color: '#fff',
      display: 'flex',
      flexDirection: 'row', // Row direction for Avatar and Typography
      alignItems: 'center',
      gap: 2
    }}
  >
    <Avatar
src={DataScience}
      sx={{
        bgcolor: '#fff',
        width: 60,
        height: 60,
        borderRadius: 4, // Less round corners
      }}
    />
      {/* <PeopleIcon sx={{ fontSize: 40, color: '#013550' }} />
    </Avatar> */}
    <Box
      sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
      >
        50K+
      </Typography>
      <Typography
        variant="body1"
      >
        Data Scientists
      </Typography>
    </Box>
  </Box>

  <Box
    sx={{
      width: "1px",
      height: "40px",
      backgroundColor: "#fff",
      mx: 2, // Margin on both sides to space out from adjacent sections
    }}
  />

  {/* AI Challenges Hosted */}
  <Box
    sx={{
      textAlign: 'center',
      color: '#fff',
      display: 'flex',
      flexDirection: 'row', // Row direction for Avatar and Typography
      alignItems: 'center',
      gap: 4
    }}
  >
    <Avatar
    src={AIChalleneges}
      sx={{
        bgcolor: '#fff',
        width: 60,
        height: 60,
        borderRadius: 4, // Less round corners
      }}
    />
      {/* <AssignmentIcon sx={{ fontSize: 40, color: '#013550' }} />
    </Avatar> */}
    <Box
      sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
      >
        100+
      </Typography>
      <Typography
        variant="body1"
      >
        AI Challenges hosted
      </Typography>
    </Box>
  </Box>
</Box>



        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            //   alignItems: "center",

            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#052441",
                fontWeight: "bold",
                // mb: 4,
                padding:"70px",
                textAlign: "center",
              }}
            >
              Why Participate in{" "}
              <span style={{ color: "#4CAF50" }}>AI Challenges</span>?
            </Typography>
          </Box>
          
          {/* Cards for Challenges */}
          <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        // justifyContent: 'center'
      }}
    >
       <Box
      sx={{
        width: '500px',
        height: '220px',
        backgroundColor: '#f7f8fc',
        p: 3,
        display: 'flex',
        flexDirection: 'column', // Stack children vertically
        // alignItems: 'center', // Center horizontally
        // justifyContent: 'center', // Center vertically
        borderRadius: '20px',
        
        
      }}
    >
      <img src={carbonNotebook} alt="carbonNotebook" style={{ width: '50px',marginTop: '40px', marginBottom: '12px' }} />
      <Typography variant="h5" sx={{fontSize:"22px", mb: 1,fontWeight:"bold",fontFamily: 'Verdana, sans-serif', }}>
        Prove your skills
      </Typography>
      <Typography variant="body1" style={{ fontFamily: 'Verdana, sans-serif',color:"#8a869e", marginTop:"10px"}}>
      Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.      </Typography>
    </Box>
      <Box
      sx={{
        width: '500px',
        height: '220px',
        backgroundColor: '#f7f8fc',
        p: 3,
        display: 'flex',
        flexDirection: 'column', // Stack children vertically
        // alignItems: 'center', // Center horizontally
        // justifyContent: 'center', // Center vertically
        borderRadius: '20px',
        
        
      }}
    >
      <img src={groupIcon} alt="groupIcon" style={{ width: '40px',marginTop: '40px', marginBottom: '12px' }} />
      <Typography variant="h5" sx={{fontSize:"22px", mb: 1,fontWeight:"bold",fontFamily: 'Verdana, sans-serif', }}>
        Learn from community
      </Typography>
      <Typography variant="body1" style={{ fontFamily: 'Verdana, sans-serif',color:"#8a869e", marginTop:"10px"}}>
        One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.
      </Typography>
    </Box>
      <Box
      sx={{
        width: '500px',
        height: '220px',
        backgroundColor: '#f7f8fc',
        p: 3,
        display: 'flex',
        flexDirection: 'column', // Stack children vertically
        // alignItems: 'center', // Center horizontally
        // justifyContent: 'center', // Center vertically
        borderRadius: '20px',
        
        
      }}
    >
      <img src={robot} alt="Robot" style={{ width: '50px',marginTop: '40px', marginBottom: '12px' }} />
      <Typography variant="h5" sx={{ fontSize:"22px",mb: 1,fontWeight:"bold",fontFamily: 'Verdana, sans-serif', }}>
        Challenge Yourself
      </Typography>
      <Typography variant="body1" style={{ fontFamily: 'Verdana, sans-serif',color:"#8a869e", marginTop:"10px"}}>
      There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.
      </Typography>
    </Box>
    <Box
      sx={{
        width: '500px',
        height: '220px',
        backgroundColor: '#f7f8fc',
        p: 3,
        display: 'flex',
        flexDirection: 'column', // Stack children vertically
        // alignItems: 'center', // Center horizontally
        // justifyContent: 'center', // Center vertically
        borderRadius: '20px',
        marginBottom:"120px"
        
        
      }}
    >
      <img src={identificationCard} alt="identificationCard" style={{ width: '50px',marginTop: '40px', marginBottom: '12px' }} />
      <Typography variant="h5" sx={{ mb: 1,fontWeight:"bold",fontSize:"22px",fontFamily: 'Verdana, sans-serif', }}>
        Earn recognition
      </Typography>
      <Typography variant="body1" style={{ fontFamily: 'Verdana, sans-serif',color:"#8a869e", marginTop:"10px"}}>
      You will stand out from the crowd if you do well in Al challenges, it not only helps you shine in the community but also earns rewards.      </Typography>
    </Box>
    </Box>
        </Container>
      </Box>
    </div>
  )
}

export default CommunityDetailsCounts
