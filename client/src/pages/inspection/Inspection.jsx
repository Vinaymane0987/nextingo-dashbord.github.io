import React from 'react'
import './style.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Topbar1 from '../../components/topbar1/Topbar1'
import PaginationList from '../../components/pagination/PaginationList'
import Iwork from '../../components/iwork/Iwork'
const Inspection = () => {
  return (
    <div className='inspection'>
    <Sidebar />
    <div className="listcontainer">
        <Topbar />
        <Topbar1 title='Inspection' title2='inspection' title3="inspectionform" />
        <PaginationList tablecomponent={<Iwork />} />
    </div>
    </div>
  )
}

export default Inspection