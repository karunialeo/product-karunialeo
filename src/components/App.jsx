import React from 'react';
import './css/App.css'
import Header from './Header'
import Carousel from './Carousel'
import Benefit from './Benefit'
import Features from './Features'
import Developer from './Developer'
import ContentStrategies from './ContentStrategies'
import PriceTable from './PriceTable'
import Testimony from './Testimony'
import JoinUs from './JoinUs'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Benefit />
      <Features />
      <Developer />
      <ContentStrategies />
      <PriceTable />
      <Testimony />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App