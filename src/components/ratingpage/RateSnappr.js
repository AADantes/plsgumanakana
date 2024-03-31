import React, {useState} from 'react'
import SnapDashboard from '../mainpage/dashboard/SnapDashboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaStar } from 'react-icons/fa';
import Stargroup1 from './Stargroup1';
import Stargroup2 from './Stargroup2';
import Stargroup3 from './Stargroup3';
import Stargroup4 from './Stargroup4';
import RatingCalc from './RatingCalc';
import { setRank } from '../../redux/Actions/RankAction';
import { useSelector, useDispatch } from 'react-redux';


export default function RateSnappr() {

const [score1, setScore1] = useState(null);
const [score2, setScore2] = useState(null);
const [score3, setScore3] = useState(null);
const [score4, setScore4] = useState(null);
const [Snappr, setSnappr] = useState(null);

const rank = useSelector((state) => state.allRank.rank);
const dispatch = useDispatch();
const Weight1 = 0.65;
const Weight2 = 0.55;
const Weight3 = 0.45;
const Weight4 = 0.35;

const calculateTotalScore = () => {
  return (((score1 !== null ? score1 : 0) * Weight1) + ((score2 !== null ? score2 : 0) * Weight2) + ((score3 !== null ? score3 : 0) * Weight3) + ((score4 !== null ? score4 : 0) * Weight4)) / 4  ;

};

const addRate=() =>
{

const newRate={

Snappr:Snappr,
Rating:totalScore

}
const oldRate = [...rank];
oldRate.push(newRate);
dispatch(setRank(oldRate));
}

const totalScore = calculateTotalScore().toFixed(1);
console.log('Total Score:', calculateTotalScore());

  return (
    <div className='ratinginput'>
      

      <input type="text" placeholder="Enter Snappr" onChange={(e) => setSnappr(e.target.value)}/>  

      <Stargroup1 setScore={setScore1}/>
      <Stargroup2 setScore={setScore2}/>
      <Stargroup3 setScore={setScore3}/>
      <Stargroup4 setScore={setScore4}/>

      
      <p>Total Score: {totalScore}</p>

      <button onClick={() => addRate()} className="SnapprName"> Submit</button>


    </div>
  );
}