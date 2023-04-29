import React from 'react';
import { Header } from '../Components/Header';
import { InfoMarket } from '../Components/InfoMarket';
import { EventsMarket } from '../Components/EventsMarket';
import { Footer } from '../Components/Footer';
import { ScrollAnimation } from '../Components/ScrollAnimation';

function Home() {
  return (
    <main>
      <Header />
      
        <ScrollAnimation className='img-header' src="https://images.unsplash.com/photo-1518281053204-48de9654fb37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Street Market" />
      
      <InfoMarket />
      <EventsMarket />
      <Footer />

    </main>
  );
}

export { Home };
