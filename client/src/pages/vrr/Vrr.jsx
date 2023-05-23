import React from 'react'
import './style.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Topbar1 from '../../components/topbar1/Topbar1'
import PaginationList from '../../components/pagination/PaginationList'
import VrrWork from '../../components/vrrwork/VrrWork'
const Vrr = () => {
  return (
    <div className='inspection'>
    <Sidebar />
    <div className="listcontainer">
        <Topbar />
        <Topbar1 title='Vehicle-Renewal-Reminders' title2='vrr' title3='vrrform' />
        <PaginationList tablecomponent={<VrrWork />} />
    </div>
    </div>
  )
}

export default Vrr