import React from 'react';
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import Footer from './Footer';
import Youtube from "react-youtube";







function App() {
  return (
    <div className="App">
    <Nav/>
    <Banner/>
    
    <Row title="PRABHU'S ORIGINALS"  fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}
    />
    <Row title="Trending Now"  fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies"  fetchUrl={requests.fetchActionMovies}/>
    <Footer/>

     
    </div>
  );
}

export default App;
