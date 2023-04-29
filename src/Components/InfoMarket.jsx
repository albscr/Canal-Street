import React from "react";
import { ScrollAnimation } from "./ScrollAnimation";

function InfoMarket() {
  const image1 =
    "https://images.unsplash.com/photo-1680363340014-a8c387876429?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80";

  const image2 =
    "https://images.unsplash.com/photo-1478122251258-df9e3b3b3e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

  const image3 =
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80";

  return (
    <section className="info-container">
      <h2>A New Kind of Market</h2>
      <div className="info-container__grid">
        <div className="info-container__column">
          <ScrollAnimation src={image1} alt="Sign" />
          <p>
            Merging retail, food, art, and culture, Canal Street Market
            highlights top retail and design concepts, restaurants, and
            up-and-coming players in the downtown New York City community.
          </p>
        </div>

        <div className="info-container__column">
          <ScrollAnimation src={image2} alt="Sign" />
          <p>Retail Market Hours: <br/> Fri– Sun: 11:00AM - 7:00PM</p>
        </div>

        <div className="info-container__column">
          <ScrollAnimation src={image3} alt="Sign" />
          <p>Food Hall Hours: <br/> Mon – Sun: 11:00AM - 8:00PM</p>
        </div>
      </div>
    </section>
  );
}

export { InfoMarket };
