// import React from 'react'
// import { AppBar, Box, Button, Container, Typography, Toolbar } from '@mui/material';

// function Dashboard() {
//   return (
//     <div>
//       <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none', padding: '0 20px' }}>
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Typography variant="h6" sx={{ color: '#4CAF50', fontWeight: 'bold', fontSize: '24px' }}>
//             DPhi
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box
//         sx={{
//           backgroundColor: '#052441',
//           minHeight: '75vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           padding: '40px',
//         }}
//       >
//         <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           {/* Left Section */}
//           <Box sx={{ flexBasis: '50%' }}>
//             <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//               <Box sx={{ width: '5px', height: '50px', backgroundColor: '#FFB400', mr: 2 }} />
//               <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
//                 Accelerate Innovation with Global AI Challenges
//               </Typography>
//             </Box>
//             <Typography variant="body1" sx={{ color: '#d5e1e8', mb: 4 }}>
//               AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills
//               to the test on diverse datasets, allowing you to foster learning through competitions.
//             </Typography>
//             <Button variant="contained" sx={{ backgroundColor: '#fff', color: '#052441', fontWeight: 'bold' }}>
//               Create Challenge
//             </Button>
//           </Box>

//           {/* Right Section */}
//           <Box sx={{ flexBasis: '50%', display: 'flex', justifyContent: 'center' }}>
//             <img
//               src="https://uploads-ssl.webflow.com/5f6b7190899e0a2c40a96159/5f95ed356e5e1a26c67ccf14_rocket-graphic3.png"
//               alt="Rocket"
//               style={{ width: '300px' }}
//             />
//           </Box>
//         </Container>
//       </Box>
      
//     </div>
//   )
// }

// export default Dashboard



import React, { useState } from "react";
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
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ComputerIcon from '@mui/icons-material/Computer';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';

import rocket from "./images/assets_And_Icons/PicsArt_04-14-04.42 1.svg";
import robot from "./images/assets_And_Icons/Robot.svg"
import groupIcon from "./images/assets_And_Icons/Vector.svg"
import identificationCard from "./images/assets_And_Icons/IdentificationCard.svg"
import carbonNotebook from "./images/assets_And_Icons/carbon_notebook-reference.svg"
import stockImage from "./images/images_for_hackathonCards/Group 1000002771.png"
import butterflyImage from "./images/images_for_hackathonCards/Group 1000002766.png"
import carImage from "./images/images_for_hackathonCards/Group 1000002767.png"
import personImage from "./images/images_for_hackathonCards/Group 1000002772.png"
import groupImage from "./images/images_for_hackathonCards/Group 1000002773.png"
import runningImage from "./images/images_for_hackathonCards/Group 1000002466.png"
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
function Dashboard() {
    const images = [
        stockImage ,
        butterflyImage,
        carImage,
        personImage,
        groupImage,
        runningImage,
      ];
      const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          // height:"10vh",
          boxShadow: "none",
          padding: "0 20px",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#4CAF50",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            DPhi
          </Typography>
        </Toolbar>
      </AppBar>

      {/* First Section */}
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

      {/* Second Section */}
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
        bgcolor: '#012B4A',
        py: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' }, // Column on small screens, row on larger screens
        gap: 4, // Space between items
      }}
    >
      {/* AI Model Submissions */}
      <Box sx={{ textAlign: 'center', color: '#fff' }}>
        <Avatar sx={{ bgcolor: '#fff', mb: 2, width: 60, height: 60 }}>
          <ComputerIcon sx={{ fontSize: 40, color: '#013550' }} />
        </Avatar>
        <Typography variant="h5" fontWeight="bold">
          100K+
        </Typography>
        <Typography variant="body1">AI model submissions</Typography>
      </Box>

      {/* Data Scientists */}
      <Box sx={{ textAlign: 'center', color: '#fff' }}>
        <Avatar sx={{ bgcolor: '#fff', mb: 2, width: 60, height: 60 }}>
          <PeopleIcon sx={{ fontSize: 40, color: '#013550' }} />
        </Avatar>
        <Typography variant="h5" fontWeight="bold">
          50K+
        </Typography>
        <Typography variant="body1">Data Scientists</Typography>
      </Box>

      {/* AI Challenges Hosted */}
      <Box sx={{ textAlign: 'center', color: '#fff' }}>
        <Avatar sx={{ bgcolor: '#fff', mb: 2, width: 60, height: 60 }}>
          <AssignmentIcon sx={{ fontSize: 40, color: '#013550' }} />
        </Avatar>
        <Typography variant="h5" fontWeight="bold">
          100+
        </Typography>
        <Typography variant="body1">AI Challenges hosted</Typography>
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

      {/* Third Section */}
      {/* <Box
        sx={{
          backgroundColor: "#e8f4f8",
          padding: "60px 20px",
          minHeight: "80vh",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{ color: "#052441", fontWeight: "bold", mb: 4 }}
          >
            Join Our Community
          </Typography>
          <Typography variant="body1" sx={{ color: "#333", mb: 4 }}>
            Become a part of a thriving AI community where innovation and
            learning meet. Share your knowledge, learn from others, and compete
            in friendly AI challenges to level up your skills.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4CAF50",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Join Now
          </Button>
        </Container>
      </Box> */}

{/* //////// */}
      {/* <Box
        sx={{
          backgroundColor: "#052441",
          padding: "80px 20px",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
            Ready to Build Your Own Challenge?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Start creating your own AI challenges and invite participants from
            all over the world. Gain insights from the global AI community and
            accelerate innovation with your own data.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFB400",
              color: "#052441",
              fontWeight: "bold",
            }}
          >
            Get Started
          </Button>
        </Container>
      </Box> */}

      <Box sx={{ 
        bgcolor: '#012B4A',
         minHeight: '50vh', padding: '2rem' }}>
      <Typography variant="h4" align="center"  sx={{ mt:5,marginBottom:6,color: '#fff' }}>
        Explore Challenges
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
        <TextField
          placeholder="Search"
        //   variant="outlined"
          sx={{ width: '70%', bgcolor: '#fff', borderRadius: '15px', mr: 2, }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          sx={{ height:"55px",width:"100px",bgcolor: '#fff', color: '#000', textTransform: 'none', borderRadius: '15px',fontSize:"large" }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Filter
        </Button>
      </Box>
      </Box>

      <Box
  sx={{
    bgcolor: "#003145",
    display: 'flex',
    flexWrap: 'wrap',
    gap: 7,
    pt: "75px",
    paddingBottom:"90px",
    px: 7, // Adjust as needed for horizontal padding
    mx: 'auto', // Centers the Box horizontally
    maxWidth: '1200px', // Set a maximum width if needed
    minHeight: "100vh",
  }}
>
  {images.map((image, index) => (
    <Card key={index} sx={{ borderRadius: '12px',height: "82vh", 
        width: "27vw"  }}>
      <CardMedia
        component="img"
        image={image }
        alt={`Image ${index + 1}`}
        sx={{ width: '100%', // Ensure the image covers the card's width
            height: '40%',
        }}
      />
      <Box
      sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        flexDirection:"column"

      }}
      >
        <Box
        sx={{
            mt:"20px",
            height:"23px",
            width:"80px",
            backgroundColor:"#faf0d2",
            borderRadius:"5px",
            fontSize:"13px",
            fontWeight:"500",
            color:"#666666",
            lineHeight:1.5,
        }}
        >
Upcoming
        </Box>
        <Typography 
        sx={{px:"65px",mt:2, fontWeight:"bold", fontSize:"17px"}}
        >
            Data Science Bootcamp - Graded Datathon
        </Typography>
        <Box
        sx={{mt:2, fontWeight:500, color:"#454545"}}
        >
        Starts in
      </Box>

    <Button 
    sx={{bgcolor:"#44914c",height:"43px", width:"52%",borderRadius:"12px",mt:8,textTransform:"none", color:"white",fontWeight:500,fontSize:"14px"}}
    startIcon={<TaskAltOutlinedIcon  />}
    >
Participate Now
    </Button>
      </Box>
      
    </Card>
  ))}
</Box>
    


{/* ///// with filter function */}
{/* <Box sx={{ bgcolor: '#012B4A', minHeight: '100vh', padding: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#fff' }}>
        Explore Challenges
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
        <TextField
          placeholder="Search"
          variant="outlined"
          sx={{ width: '60%', bgcolor: '#fff', borderRadius: '50px', mr: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          sx={{ bgcolor: '#fff', color: '#000', textTransform: 'none', borderRadius: '50px' }}
          startIcon={<FilterListIcon />}
          onClick={toggleFilter}
        >
          Filter
        </Button>
      </Box>

      {showFilter && (
        <Box sx={{ mb: 4, bgcolor: '#fff', borderRadius: '15px', p: 2, maxWidth: 300, margin: '0 auto' }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Filter</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Status
              </Typography>
              <FormControlLabel control={<Checkbox />} label="All" />
              <FormControlLabel control={<Checkbox />} label="Active" />
              <FormControlLabel control={<Checkbox />} label="Upcoming" />
              <FormControlLabel control={<Checkbox />} label="Past" />
              
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
                Level
              </Typography>
              <FormControlLabel control={<Checkbox />} label="Easy" />
              <FormControlLabel control={<Checkbox />} label="Medium" />
              <FormControlLabel control={<Checkbox />} label="Hard" />
            </AccordionDetails>
          </Accordion>
        </Box>
      )}

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 2,
        }}
      >
        {images.map((image, index) => (
          <Card key={index} sx={{ borderRadius: '15px', bgcolor: '#013550' }}>
            <CardMedia
              component="img"
              image={image}
              alt={`Image ${index + 1}`}
              sx={{ height: 200 }}
            />
          </Card>
        ))}
      </Box>
    </Box> */}

    </div>
  );
}

export default Dashboard;
