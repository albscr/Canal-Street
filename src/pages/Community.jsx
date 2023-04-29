import React from "react";
import { Footer } from "../Components/Footer";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

function Community() {
  const isDesktop = useMediaQuery("(min-width:768px)");
  const image1 =
    "https://images.unsplash.com/photo-1680363340014-a8c387876429?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80";
  return (
    <motion.section
      className="community-section"
      initial={{
        width: "0",
        position: "absolute",
        top: 0,
        right: 0,
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
        className="community-container"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
            duration: 0.2,
            ease: "easeIn",
          },
        }}
        exit={{
          opacity: 0,
        }}
      >
        <div className="hero">
          <div className="hero-info">
            <p>Our mixed-use space hosts</p>
            <p>ongoing events, podcasts</p>
            <p>& artists in residence</p>
          </div>
          <div className="hero-content">
            <div className="hero-content__left">
              <span>Community</span>
              <h1>Canal St. Community</h1>
            </div>
            <div className="hero-content__right">
              <img src={image1} alt="Sign" />
              <span>文化</span>
            </div>
          </div>
        </div>

        <div className="events">
          <div className="events__grid">
            <h2>Market Events</h2>

            <div className="events__row">
              <div className="events__item">
                <span>12/02 (past)</span>
                <p>Small Business Retail Pop Up Weekend!</p>
              </div>

              <div className="events__item--empty"></div>
              <div className="events__item--empty"></div>

              <div className="events__item">
                <span>02/07 (past)</span>
                <p>
                  New Balance x Paperboy Paris by Greenhouse @ Canal Street
                  Market
                </p>
              </div>
            </div>
            <div className="events__row">
              <div className="events__item">
                <span>12/11 (past)</span>
                <p>Hack City 12/11</p>
              </div>

              <div className="events__item--empty"></div>
              <div className="events__item--empty"></div>

              <div className="events__item">
                <span>07/27 (past)</span>
                <p>Taiwanese Wave</p>
              </div>
            </div>
          </div>
          <div className="events__more">
            <a href="/">view all</a>
          </div>
        </div>

        <div className="features">
          <h2>Features</h2>

          <div className="features__grid">
            <div className="features__feature">
              <img
                src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
                alt="person"
              />
              <div className="text">
                <h3>
                  <span>
                    <span>CSM Community - AMDC</span>
                  </span>
                </h3>
              </div>
            </div>

            <div className="features__feature">
              <img
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                alt="person"
              />
              <div className="text">
                <h3>
                  <span>
                    <span>CSM Community - Joe's Steam Rice Rolls</span>
                  </span>
                </h3>
              </div>
            </div>

            <div className="features__feature">
              <img
                src="https://images.unsplash.com/photo-1522643801144-244969717266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="person"
              />
              <div className="text">
                <h3>
                  <span>
                    <span>CSM Community - Bereop Tech</span>
                  </span>
                </h3>
              </div>
            </div>

            <div className="features__feature">
              <img
                src="https://images.unsplash.com/photo-1591980607210-8ea99bee96f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                alt="person"
              />
              <div className="text">
                <h3>
                  <span>
                    <span>CSM Community - Izakaya</span>
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="features__more">
            <a href="/">view all stories</a>
          </div>
        </div>

        <div className="radio">
          <div className="radio-header">
            <div className="radio-header__item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-144a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
              </svg>
            </div>

            <div className="radio-header__item">
              <h2>Market Radio</h2>
              <p>Podcasted from the market</p>
            </div>

            <div className="radio-header__item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-144a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
              </svg>
            </div>
          </div>

          <div className="radio-row">
            <div className="radio-row__item">
              <span>04/23</span>
              <p>
                S3E14: And Cocktails with Phil Wang (Netflix's "Philly Philly
                Wang Wang")
              </p>
            </div>

            <div className="radio-row__item">
              <span>04/07</span>
              <p>
                Safesport CEO Ju'Riese Colon Interview on Fighting All Types of
                Abuse in Women's Soccer With Safesport + NWSL and Europe Roundup
              </p>
            </div>

            <div className="radio-row__item">
              <span>05/03</span>
              <p>We're back and we're better!</p>
            </div>
            <a href="/">see all</a>
          </div>
        </div>
        <Footer />
      </motion.section>
    </motion.section>
  );
}
export { Community };
