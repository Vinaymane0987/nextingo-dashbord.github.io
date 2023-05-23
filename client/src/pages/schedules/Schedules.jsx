import React from 'react'
import './schedules.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Topbar1 from '../../components/topbar1/Topbar1'
import PaginationList from '../../components/pagination/PaginationList'
import Swork from '../../components/swork/Swork'
const Schedules = () => {
  return (
    <div className='inspection'>
    <Sidebar />
    <div className="listcontainer">
        <Topbar />
        <Topbar1 title='Schedules' title2='schedules' title3="scheduleform" />
        <PaginationList tablecomponent={<Swork />} />
    </div>
    </div>
  )
}

export default Schedules