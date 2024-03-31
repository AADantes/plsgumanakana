import React from 'react'
import {Link} from "react-router-dom";


export default function SnapDashNav() {
  return (
    <div className='Snap-dashNav'>
      <ul>
            <li><Link to ="/"> SNAPPRAMA </Link></li>
            <li><Link to="/ratingpage"> Rate Snappr </Link> </li>
            <li><Link to="/listpage"> Snappr Rankings</Link></li>
            <li></li>
        </ul>
    </div>
  )
}
