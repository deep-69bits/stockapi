import React from 'react'
import Head from './Head'
import SideBar from './SideBar'
const Layout = ({children,data}) => {
  return (
    <div  className='bg-[#EEEEEE]'>
        <Head data={data}/>
        <div className='flex '>
          <SideBar data={data} />
          <div className='w-3/4'>
           {children}
          </div>
        </div>
    </div>
  )
}

export default Layout