import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Snapfront from './components/mainpage/Snapfront';
import SnapRank from './components/listpage/SnapRank';
import RateSnappr from './components/ratingpage/RateSnappr';



function App() {
  return (
    <div className="App">
      <BrowserRouter basename = "/">
      <Routes>
        <Route path="/" element = {<Snapfront/>} />
        <Route path="/ratingpage" element = {<RateSnappr/>} />
        <Route path="/listpage" element = {<SnapRank/>} />
      </Routes>

    </BrowserRouter>


    </div>
  );
}

export default App;
