"use client";
import React from "react";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

export default function BookWithGD() {
  return (
    <>
      <div
        className="lg:hidden mt-12 mb-20 md:m-12 "
        style={{
          position: "relative",
          height: "150px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className=" font-home font-bold text-center text-sm md:text-xl text-slate-600 m-4">
          Travel comprehensively with GlobalDuniya
        </h1>
        <Carousel height={"150px"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={"/price.png"} width={80} height={80}></Image>
            <h2 className=" font-home font-bold text-lg  m-2">
              Free cancellation
            </h2>
            <p className=" font-home text-slate-800">
              Keep your trip flexible.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={"/customer.png"} width={80} height={80}></Image>
            <h2 className=" font-home font-bold text-lg  m-2">
            300,000+ experiences
            </h2>
            <p className=" font-home text-slate-800">
            Create lasting memories across the globe.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={"/pay.png"} width={80} height={80}></Image>
            <h2 className=" font-home font-bold text-lg  m-2">
            Book now, pay later
            </h2>
            <p className=" font-home text-slate-800">
            Reserve your spot.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={"/star.png"} width={80} height={80}></Image>
            <h2 className=" font-home font-bold text-lg  m-2">
            Reliable reviews
            </h2>
            <p className=" font-home text-slate-800">
            140,000+ Trustpilot reviews averaging 4.3 stars.
            </p>
          </div>
        </Carousel>
      </div>

      <div
        className="hidden lg:flex"
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "6%",
        }}
      >
        <h1 className=" font-home font-bold text-sm md:text-xl text-slate-600">
          Travel comprehensively with GlobalDuniya
        </h1>
        <div
          style={{
            display: "flex",
            width: "90%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "5%",
            gap: "4%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={"/price.png"} width={80} height={80}></Image>
            <h2 className=" font-home font-bold text-lg  m-2">
              Free cancellation
            </h2>
            <p className=" font-home text-slate-800">
              Keep your trip flexible.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={"/customer.png"} width={80} height={80}></Image>
            <h2 className=" font-home font-bold text-lg  m-2">
              300,000+ experiences
            </h2>
            <p className=" font-home text-slate-800">
              Create lasting memories across the globe.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={"/pay.png"} width={80} height={80}></Image>
            <h2 className=" font-home font-bold text-lg  m-2">
              Book now, pay later
            </h2>
            <p className=" font-home text-slate-800">Reserve your spot.</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={"/star.png"} width={80} height={80}></Image>
            <h2 className=" font-home font-bold text-lg  m-2">
              Reliable reviews
            </h2>
            <p className=" font-home text-slate-800">
              140,000+ Trustpilot reviews averaging 4.3 stars.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
