import React from 'react'
import './style.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Topbar1 from '../../components/topbar1/Topbar1'
import PaginationList from '../../components/pagination/PaginationList'
import ItWork from '../../components/itwork/ItWork'
const ItFailure = () => {
  return (
    <div className='inspection'>
    <Sidebar />
    <div className="listcontainer">
        <Topbar />
        <Topbar1 title='Inspection-Item-Failure' title2='itFailure' title3="itemfailureform" />
        <PaginationList tablecomponent={<ItWork />} />
    </div>
    </div>
  )
}

export default ItFailure