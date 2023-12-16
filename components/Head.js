import React from 'react'
import { useRouter } from 'next/router'

const Head = ({data}) => {
  const router = useRouter()
  const transcriptid=router.query.transcriptid
  const companyData = data.find(obj => obj.transcriptid === transcriptid);
  return (
    <div className='bg-white shadow-lg px-4 py-2  border-b-[2px] border-gray-200'>
     <div className=' flex items-center'>
        <div className='bg-[#dfdfdf] h-10 w-10 mr-4 rounded-md '></div>
        <div className='flex-col '>
            <div>
                <span className='text- font-semibold'>{ companyData? companyData.name:""}</span>
                <span className=' mx-4 text-sm font-medium'>view  company</span>
            </div>
            <div>
               <ul className='flex text-sm  gap-x-4 mt-1'>
                 <li className='font-semibold opacity-40'>Following </li>
                 <li > <span className='opacity-30'>NSE:</span> <span className='text-[#868686]'>{ companyData? companyData.code:""}</span> </li>
                 {/* <li > <span className='opacity-30'>Market Cap:(11/16/23)</span> <span className='text-[#868686]'>$11.3 Billion</span> </li> */}
                 <li > <span className='opacity-30'>Date:</span> <span className='text-[#868686]'>{companyData? companyData.date:""}</span> </li>
                 <li > <span className='opacity-30'>Quator</span> <span className='text-[#868686]'>{companyData? companyData.quator:""}</span> </li>
               </ul>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Head