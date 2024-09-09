import React from 'react'
import {
    AppBar,
    Typography,Avatar ,
    Toolbar,
   
  } from "@mui/material";
  import headerLogo from "./images/images_for_hackathonCards/Group 1000002532.png"
function Header() {
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
          {/* <Typography
            variant="h6"
            sx={{
              color: "#2b2b2b",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            DPhi
          </Typography> */}
          <img src={headerLogo} alt="" />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
