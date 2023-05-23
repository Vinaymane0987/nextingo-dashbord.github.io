import React from 'react'
import './style.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Topbar1 from '../../components/topbar1/Topbar1'
import PaginationList from '../../components/pagination/PaginationList'
import SrWork from '../../components/srwork/SrWork'
const Sremainders = () => {
  return (
    <div className='inspection'>
    <Sidebar />
    <div className="listcontainer"> 
        <Topbar />
        <Topbar1 title='Service-Remainders' title2='sremainders' title3='sreminderform' />
        <PaginationList tablecomponent={<SrWork />} />
    </div>
    </div>
  )
}

export default Sremainders