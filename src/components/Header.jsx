"use client";
import { AppBar, Box, Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { useRouter } from 'next/navigation'
// import { Noto_Serif_Georgian } from "next/font/google";
// const Georigian = Noto_Serif_Georgian({
//   weight: "500",
//   subsets: ["georgian"],
//   display: "swap",
// });

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter()

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{display:{lg: "none", md: "none", sm: "none"}}}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <Image
            src={"/gd logo.gif"}
            style={{ margin: "10px", cursor: "pointer" }}
            height={60}
            width={80}
            unoptimized
          ></Image>

          <Divider></Divider>

          <List style={{ paddingLeft: "10px" }}>
            <ListItem disablePadding>
              <Image
                src={"/home.png"}
                style={{ margin: "5px" }}
                height={20}
                width={20}
              ></Image>
              <Link href={"/"} className=" font-home">
                Home
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Image
                src={"/about.png"}
                style={{ margin: "5px" }}
                height={20}
                width={20}
              ></Image>
              <Link href={"/"} className=" font-home">
                About Us
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Image
                src={"/contact.png"}
                style={{ margin: "5px" }}
                height={20}
                width={20}
              ></Image>
              <Link href={"/"} className=" font-home">
                Contact
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Image
                src={"/careers.png"}
                style={{ margin: "5px" }}
                height={20}
                width={20}
              ></Image>
              <Link href={"/"} className=" font-home">
                Careers
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <AppBar
        position="sticky"
        color="inherit"
        // elevation={0}
        sx={{
          paddingY: "0.5%",
          paddingX: "5%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
     
        <Box sx={{ display: { lg: "none", md: "none", sm: "none" } }}>
          <Image
            src={"/hamburger.png"}
            height={60}
            width={60}
            onClick={toggleDrawer(true)}
          ></Image>
        </Box>

        <Image
          src={"/gd logo.gif"}
          height={60}
          width={80}
          style={{ cursor: "pointer" }}
          unoptimized
        ></Image>
 

        <Box
          sx={{
            marginTop: "1%",
            flexDirection: "row",
            gap: "10px",
            display: { lg: "flex", md: "flex", sm: "flex", xs:"none" },
          }}
       
        >
          <Link href={"/"} className=" font-home">
            Home
          </Link>
          <Link href={"/"} className=" font-home">
            About Us
          </Link>
          <Link href={"/"} className=" font-home">
            Contact
          </Link>
          <Link href={"/"} className=" font-home">
            Careers
          </Link>
        </Box>

        <Tooltip title="Login">
          <Image
            src={"/user.png"}
            height={10}
            width={50}
            style={{ cursor: "pointer" }}
            onClick={()=>{router.push('/login')}}
          ></Image>
        </Tooltip>
      </AppBar>
    </>
  );
}
