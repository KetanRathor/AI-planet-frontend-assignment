import React, { useState } from 'react'
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
function ExploreChallenges() {
    const [showFilter, setShowFilter] = useState(false);

    const toggleFilter = () => {
      setShowFilter(!showFilter);
    };
  

  return (
    <div>
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
    </div>
  )
}

export default ExploreChallenges
