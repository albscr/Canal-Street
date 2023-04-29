import React from "react";
import { ListComponent } from "../Components/ListComponent";
import roseSvg from "../assets/rose.svg";
import { Footer } from "../Components/Footer";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

function Retail() {
  const imgRetail =
    "https://images.unsplash.com/photo-1606617556970-b9cddf4c1319?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";

  const itemList = [
    {
      id: 1,
      type: "Design Objects",
      name: "American Design Club",
    },
    {
      id: 2,
      type: "Jewelry",
      name: "Beeshaus & Raum NYC",
    },
    {
      id: 3,
      type: "Jewelry",
      name: "Beroep Tech",
    },
    {
      id: 4,
      type: "Bonsai Shop",
      name: "Dandy Farmer Bonsai Shop",
    },
    {
      id: 5,
      type: "Fashion Apparel",
      name: "Friend Of A Friend Studio",
    },
    {
      id: 6,
      type: "Design Objects",
      name: "Leibal",
    },
    {
      id: 7,
      type: "K Pop Apparel and Merchandise",
      name: "Mandu Apparel",
    },
    {
      id: 8,
      type: "Home Goods",
      name: "Mogutable",
    },
    {
      id: 9,
      type: "Jewelry",
      name: "Mottive",
    },
    {
      id: 10,
      type: "Newstand and Magazines",
      name: "Office Magazine Newstand",
    },
    {
      id: 11,
      type: "Fashion Apparel",
      name: "Preppy Trendy",
    },
    {
      id: 12,
      type: "Sunglasses",
      name: "Savage Anchor",
    },
    {
      id: 13,
      type: "Jewelry",
      name: "Seven 50",
    },
    {
      id: 14,
      type: "Sustainable lifestyle stor",
      name: "Siizu",
    },
    {
      id: 15,
      type: "Jewelry",
      name: "Swagychic",
    },
  ];
  const isDesktop = useMediaQuery('(min-width:768px)');

  return (
    <motion.section
      className="main"
      initial={{
        width: "0",
        position: "absolute",
        top: 0,
        right: isDesktop ? 60 : 0,
      }}
      animate={{
        width: isDesktop ? "calc(100% - 180px)" : "100%",
        transition: {
          duration: 1,
          ease: "easeIn",
        },
      }}
    >
      <motion.section
        className="retail"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
            duration: 1,
            ease: "easeIn",       
          },
        }}
      >
        <div className="hero">
          <div className="hero-info">
            <p>Retail Market Hours:</p>
            <p>Fri – Sun: 11:00AM - 7:00PM</p>
          </div>

          <div className="retail-content">
            <div className="retail-content__left">
              <span>Retail</span>
              <h1>The Retail Market</h1>
            </div>
            <div className="retail-content__right">
              <span>購物</span>
              <img src={imgRetail} alt="Sign" />
            </div>
          </div>
        </div>

        <div className="content">
          <ListComponent items={itemList} />
        </div>

        <div className="announcement">
          <div className="announcement-item">
            <img className="first" src={roseSvg} alt="" />
          </div>

          <div className="announcement-item">
            <h2>The Best of NYC</h2>
            <p>All under one roof!</p>
          </div>

          <div className="announcement-item second">
            <img src={roseSvg} alt="" />
          </div>
        </div>
      </motion.section>
      <Footer />
    </motion.section>
  );
}

export { Retail };
