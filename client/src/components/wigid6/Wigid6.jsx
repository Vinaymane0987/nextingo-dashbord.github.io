import React from 'react'
import './wigid6.scss'
import ScatterChart from '../../barcharts/scatterChart/ScatterChart'
const Wigid6 = () => {
  return (
    <div className='wigid6'>
      <h4>Lates Meter Reading</h4>
      <div className="wigid6__chart">
      <ScatterChart />
      </div>
    </div>
  )
}

export default Wigid6