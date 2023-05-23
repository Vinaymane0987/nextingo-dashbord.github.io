import React from 'react'
import './style.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Topbar1 from '../../components/topbar1/Topbar1'
import PaginationList from '../../components/pagination/PaginationList'
import Fweork from '../../components/fwork/Fwork'
const FuelHistory = () => {
  return (
    <div className='inspection'>
    <Sidebar />
    <div className="listcontainer">
        <Topbar />
        <Topbar1 title='FuelHistory' title2='fuelhistory' title3='fuelhistoryform' />
        <PaginationList tablecomponent={<Fweork />}/>
    </div>
    </div>
  )
}

export default FuelHistory