import NavBar from "./components/NavBar/NavBar";
import React from "react";
import './app.css'
import Banner from "./components/banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import{originals,actions,horror,comedy,romace} from './Urls'



function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
     <RowPost title='Netfilx Originals' url={originals} />
     <RowPost title='Action Moves' issmall url={actions} />
     <RowPost title='Horror Moves' issmall url={horror} />
     <RowPost title='Romance Moves' issmall url={comedy} />
     <RowPost title='Comedy Moves' issmall url={romace} />

    </div>
  );
}

export default App;
