import React from 'react'
import './style.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Topbar1 from '../../components/topbar1/Topbar1'
import PaginationList from '../../components/pagination/PaginationList'
import Vwork from '../../components/vwork/Vwork'
const Vendors = () => {
  return (
    <div className='inspection'> 
    <Sidebar />
    <div className="listcontainer">
        <Topbar />
        <Topbar1 title='Vendors' title2='vendors' title3='vendorsform' />
        <PaginationList tablecomponent={<Vwork />}/>
    </div>
    </div>
  )
}

export default Vendors