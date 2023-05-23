import React from 'react'
import './style.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Topbar1 from '../../components/topbar1/Topbar1'
import PaginationList from '../../components/pagination/PaginationList'
import IssueWork from '../../components/issuework/IssueWork'
const Issue = () => {
  return (
    <div className='inspection'>
    <Sidebar />
    <div className="listcontainer">
        <Topbar />
        <Topbar1 title='Issue' title2='issue' title3="issueform" />
        <PaginationList tablecomponent={<IssueWork />} />
    </div>
    </div>
  )
}

export default Issue