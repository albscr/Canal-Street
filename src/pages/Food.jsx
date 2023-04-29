import React from "react";
import { ListComponent } from "../Components/ListComponent";
import { Footer } from "../Components/Footer";
import { motion } from "framer-motion";
import { useMediaQuery } from '@mui/material';


function Food() {
  const image1 =
    "https://images.unsplash.com/photo-1574164052277-b9ea797de8e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";

  const itemList = [
    {
      id: 1,
      type: "Khao Man Gai",
      name: "Betong",
    },
    {
      id: 2,
      type: "Coffee, Pastries & Smoothies",
      name: "Chinatown Deli",
    },
    {
      id: 3,
      type: "Artisanal Chocolates",
      name: "Daniel Corpuz Chocolatier",
    },
    {
      id: 4,
      type: "Napoli Style Pizza",
      name: "Enzo Bruni La Pizza Gourmet",
    },
    {
      id: 5,
      type: "Chinese Classics",
      name: "Joe's Rice and Noodles",
    },
    {
      id: 6,
      type: "Cantonese Steamed Rice Rolls",
      name: "Joe's Steam Rice Roll",
    },
    {
      id: 7,
      type: "Delicious Filipino Classics",
      name: "Kabisera",
    },
    {
      id: 8,
      type: "Bingsoo Sundaes & Bubble Tea",
      name: "Lazy Sundaes",
    },
    {
      id: 9,
      type: "Sushi, Handrolls & Chirashi",
      name: "Mastunori",
    },
    {
      id: 10,
      type: "Filipino Inspired Taqueria",
      name: "Mucho Sarap",
    },
  ];
  const isDesktop = useMediaQuery('(min-width:768px)');


  return (
    <motion.section
      className="container"
      initial={{
        width: "0",
        position: "absolute",
        top: 0,
        right: isDesktop ? 125 : 0,
      }}
      animate={{
        width: isDesktop ? "calc(100% - 180px)" : "100%",
        transition: {
          duration: 1,
          ease: "easeIn",
        },
      }}
      exit={{
        width: "0",
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      } }
    >
      <motion.section
        className="food-container"
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
        exit={{
          opacity: 0,
        }}
      >
        <div className="hero">
          <div className="hero-info">
            <p>Food Hall Hours:</p>
            <p>Mon – Sun: 11:00AM - 8:00PM</p>
          </div>
          <div className="hero-content">
            <div className="hero-content__left">
              <span>Food</span>
              <h1>The Food Hall</h1>
            </div>
            <div className="hero-content__right">
              <span>餐饮</span>
              <img src={image1} alt="Sign" />
            </div>
          </div>
        </div>

        <div className="content">
          <ListComponent items={itemList} />
        </div>

        <div className="announcement">
          <div className="announcement-item">
            <svg
              className="first"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
          </div>

          <div className="announcement-item">
            <h2>The Best of NYC</h2>
            <p>All under one roof!</p>
          </div>

          <div className="announcement-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
          </div>
        </div>
      </motion.section>
      <Footer />
    </motion.section>
  );
}

export { Food };
