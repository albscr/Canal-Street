// import { useSpring } from "@react-spring/web";
import { motion } from "framer-motion";
import React, { useState } from "react";

function Navbar() {
  // Logic for mobile-nav
  const [clicked, setClicked] = useState(true);
  const [visible, setVisible] = useState(true);

  const handleToggleClick = () => {
    setClicked(!clicked);
    setVisible(!visible);
  };

  // Logic for pages
  const [activePage, setActivePage] = useState(null);
  const [navPositions, setNavPositions] = useState({
    food: 0,
    retail: 0,
    community: 0,
  });

  const handleNavClick = (page) => {
    setActivePage(page);
    const pageWidth = window.innerWidth;
    const multiplier = 0.833;

    if (page === "food") {
      setNavPositions({ food: 0, retail: 0, community: 0 });
    } else if (page === "retail") {
      const retailPosition = -(pageWidth * multiplier);
      setNavPositions({ food: retailPosition, retail: 0, community: 0 });
    } else if (page === "community") {
      const retailPosition = -(pageWidth * multiplier);
      const communityPosition = -(pageWidth * multiplier);
      setNavPositions({
        food: retailPosition,
        retail: communityPosition,
        community: 0,
      });
    }
  };

  return (
    <section className="navbar-container">
      <div className="logo-container">
        <motion.a
          href="/"
          animate={{
            transform:
              activePage !== null
                ? "translateX(1px) scale(1)"
                : "translateX(55px) scale(1)",
            transition: {
              delay: 0.4,
              duration: 0.6,
              ease: "easeIn",
            },
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M257 8C120 8 9 119 9 256s111 248 248 248 248-111 248-248S394 8 257 8zm-49.5 374.8L81.8 257.1l125.7-125.7 35.2 35.4-24.2 24.2-11.1-11.1-77.2 77.2 77.2 77.2 26.6-26.6-53.1-52.9 24.4-24.4 77.2 77.2-75 75.2zm99-2.2l-35.2-35.2 24.1-24.4 11.1 11.1 77.2-77.2-77.2-77.2-26.5 26.5 53.1 52.9-24.4 24.4-77.2-77.2 75-75L432.2 255 306.5 380.6z" />
          </svg>
        </motion.a>
      </div>

      <motion.nav
        initial={{
          opacity: 0,
          height: "0",
        }}
        animate={{
          opacity: 1,
          height: "100%",
        }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <a href="/"> &nbsp;</a>

        <motion.a
          href="/#/Food"
          className={activePage === "food" ? "active" : ""}
          onClick={() => handleNavClick("food")}
          animate={{
            transform: `translate3d(${navPositions.food}px, 0, 0)`,
            transition: {
              duration: 1,
              ease: "easeIn",
            },
          }}
        >
          <p>餐饮</p>
          <span>Food</span>
        </motion.a>

        <motion.a
          href="/#/Retail"
          className={activePage === "retail" ? "active" : ""}
          onClick={() => handleNavClick("retail")}
          animate={{
            transform: `translate3d(${navPositions.retail}px, 0, 0)`,
            transition: {
              duration: 1,
              ease: "easeIn",
            },
          }}
        >
          <p>購物</p>
          <span>Retail</span>
        </motion.a>

        <motion.a
          href="/#/Community"
          className={activePage === "community" ? "active" : ""}
          onClick={() => handleNavClick("community")}
          animate={{
            transform: `translate3d(${navPositions.community}px, 0, 0)`,
            transition: {
              duration: 1,
              ease: "easeIn",
            },
          }}
        >
          <p>文化</p>
          <span>Community</span>
        </motion.a>
      </motion.nav>

      <section className="mobile-nav">
        <div className="mobile-nav__toggle" onClick={handleToggleClick}>
          <div className={`mobile-nav__${clicked ? "open" : "close"}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`mobile-nav__content${!visible ? "--active" : ""}`}>
          <div className="blocks">
            <a href="/" className="block" onClick={handleToggleClick}>
              <span>About</span>
            </a>
            <a href="/#/food" className="block" onClick={handleToggleClick}>
              <span>Food</span>
            </a>
            <a href="/#/retail" className="block" onClick={handleToggleClick}>
              <span>Retail</span>
            </a>
            <a
              href="/#/community"
              className="block"
              onClick={handleToggleClick}
            >
              <span>Community</span>
            </a>
          </div>

          <div className="info">
            <a href="/">become a vendor</a>
            <div>
              <p>
                265 Canal Street <br />
                New York, New York
              </p>
              <p>
                Food Hall Hours: <br />
                Mon – Sun: 10AM- 10PM
              </p>
              <p>
                Retail Market Hours: <br />
                Mon – Sat: 11AM- 7PM <br />
                Sun: 11AM-6PM
              </p>
            </div>
            <div className="social">
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export { Navbar };
