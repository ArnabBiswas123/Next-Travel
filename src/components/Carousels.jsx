"use client";
import React from "react";
import { Paper, InputBase } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

export default function Carousels() {
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <Carousel height={"500px"}>
        <Paper>
          <Image src={"/Kerol.jpg"} fill style={{ objectFit: "cover" }}></Image>
        </Paper>
        <Paper>
          <Image
            src={"/himalaya.jpg"}
            fill
            style={{ objectFit: "cover" }}
          ></Image>
        </Paper>
        <Paper>
          <Image
            src={"/andaman.jpg"}
            fill
            style={{ objectFit: "cover" }}
          ></Image>
        </Paper>
      </Carousel>
      <div
        style={{
          position: "absolute",
          display:'flex',
          top: "140px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          maxWidth: "400px",
          backgroundColor: "#fff",
          borderRadius: "999px",
          padding: "5px 15px",
          zIndex: "1",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        
        <InputBase
          placeholder="Where to go..."
          inputProps={{ "aria-label": "search" }}
          fullWidth
        />
        <Image src={'/search.svg'} height={30} width={30} style={{cursor:'pointer'}}></Image>
      </div>
    </div>
  );
}
