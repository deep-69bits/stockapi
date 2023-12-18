import React from 'react'
import Head from './HeadCompany'
import SideBar from './SideBarCompany'
const Layout = ({children,data}) => {
  return (
    <div  className='bg-[#EEEEEE]'>
        <Head data={data}/>
        <div className='flex '>
          <SideBar data={data} />
          <div>
        {children}
          </div>
        </div>
    </div>
  )
}

export default Layout