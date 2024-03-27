"use client";
import { AppBar, Box, Popover, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import WorldPopover from "./WorldPopover";

export default function Header2() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <WorldPopover
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        
      ></WorldPopover>
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        sx={{
          paddingY: "0.9%",
          paddingX: "5%",
          flexDirection: "row",
          gap: 4,
          display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
          }}
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          // onClick={handleClick}
          onMouseEnter={handleClick}
          onMouseLeave={handleClose}
        >
          <Image src={"/location.png"} height={30} width={30}></Image>
          <p className=" font-home">Explore the World</p>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
          }}
        >
          <Image src={"/badge.png"} height={30} width={30}></Image>
          <p className=" font-home">Top Tours</p>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
          }}
        >
          <Image src={"/trend.png"} height={25} width={25}></Image>
          <p className=" font-home">Top Packages</p>
        </Box>
      </AppBar>
    </>
  );
}
