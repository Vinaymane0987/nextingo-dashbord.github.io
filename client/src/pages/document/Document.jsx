import React from 'react'
import './document.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Topbar1 from '../../components/topbar1/Topbar1'
import PaginationList from '../../components/pagination/PaginationList'

import Dwork from '../../components/dwork/Dwork'
const Document = () => {
  return (
    <div className='inspection'>
    <Sidebar />
    <div className="listcontainer">
        <Topbar />
        <Topbar1 title='Document' title2='document' title3="documentform" />
        <PaginationList tablecomponent={<Dwork />} />
    </div>
    </div>
  )
}

export default Document