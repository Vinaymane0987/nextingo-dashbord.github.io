import React from 'react'
import './places.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Topbar1 from '../../components/topbar1/Topbar1'
import PaginationList from '../../components/pagination/PaginationList'
import Placework from '../../components/placework/Placework'
const Places = () => {
  return (
    <div className='inspection'>
    <Sidebar />
    <div className="listcontainer">
        <Topbar />
        <Topbar1 title='Places' title2='places' title3="placesform" />
        <PaginationList tablecomponent={<Placework />} />
    </div>
    </div>
  )
}

export default Places