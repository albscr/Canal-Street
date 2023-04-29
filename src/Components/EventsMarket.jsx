import React from "react";
import chineseWord from "../assets/chinese-lettre.svg";

function EventsMarket() {
    const imgAddress = "https://img.freepik.com/foto-gratis/mano-tocando-tableta-mapa_23-2147732953.jpg?w=1380&t=st=1681596498~exp=1681597098~hmac=d4df433d406376f680fe05460f72d3c469009d6d239eb7ccc9cf5dab7144af60";

  return (
    <section className="events-container">
      <div className="events-container__header">
        <div className="events-container__header-item">
          <img src={chineseWord} alt="Event" />
        </div>
        <div className="events-container__header-item">
          <h2>Market Events</h2>
        </div>
        <div className="events-container__header-item">
          <img src={chineseWord} alt="Event" />
        </div>
      </div>

      <div className="events-container__row">
        <div className="events-container__row-item">
          <span>12/02</span>
          <p>Small Business Retail Pop Up Weekend!</p>
        </div>
        <div className="events-container__row-item">
          <span>02/07</span>
          <p>New Balance x Paperboy Paris by Greenhouse @ Canal Street Market</p>
        </div>
        <div className="events-container__row-item">
          <span>12/11</span>
          <p>Hack City 12/11</p>
        </div>
        <a href="/">see all</a>
      </div>

      <div className="events-container__address">
        <h3>265 Canal St. New York, NY</h3>
        <img src={imgAddress} alt="Address Map" />
      </div> 
    </section>
  );
}

export { EventsMarket };
