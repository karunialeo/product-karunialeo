import React from 'react';
import './css/App.css'
import Header from './Header'
import Carousel from './Carousel'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'
import Content4 from './Content4'
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
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <PriceTable />
      <Testimony />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App