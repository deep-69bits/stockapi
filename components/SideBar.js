import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

const SideBar = ({ data }) => {
    const router = useRouter()
    const id = router.query.transcriptid
    // Grouping transcripts by year
    const [show, setShow] = useState(true)
    const groupedTranscripts = data.reduce((acc, transcript) => {
        const year = transcript.year;
        acc[year] = acc[year] || [];
        acc[year].push(transcript);
        return acc;
    }, {});

    // Creating an array of objects with year as key and transcripts as value
    const resultArray = Object.keys(groupedTranscripts)
        .sort((a, b) => b - a) // Sorting years in descending order
        .map(year => ({
            [`${year}`]: groupedTranscripts[year]
        }));

    if (show) {
        return (
            <div className='mr-5 w-[50px]  min-h-screen  text-black '>
                <div onClick={() => { setShow(!show) }} className='flex w-full my-4 cursor-pointer rounded-md px-2 py-2 border-gray-200 mx-2 items-center'>
                    <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </div>
            </div>
        )
    }

    return (
        <div>
        <div className='mr-5 absolute   w-full  lg:block  z-50 lg:w-1/4 shadow-xl min-h-screen bg-white text-black '>

            <div className='flex items-center gap-x-2' >
                <div onClick={() => { setShow(!show) }} className='ml-2 cursor-pointer w-[30px]'>
                    <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </div>
                <div className='flex w-full my-4 border-[1px] rounded-md px-2 py-2 border-gray-200 mx-2 items-center'>
                    <svg width="15" height="15" viewBox="0 0 18 18" fill="none" >
                        <path d="M17.7241 16.1932L13.6436 12.1127C14.626 10.8049 15.1563 9.21299 15.1546 7.57728C15.1546 3.39919 11.7554 0 7.57728 0C3.39919 0 0 3.39919 0 7.57728C0 11.7554 3.39919 15.1546 7.57728 15.1546C9.21299 15.1563 10.8049 14.626 12.1127 13.6436L16.1932 17.7241C16.3998 17.9088 16.6692 18.0073 16.9461 17.9996C17.2231 17.9918 17.4865 17.8783 17.6824 17.6824C17.8783 17.4865 17.9918 17.2231 17.9996 16.9461C18.0073 16.6692 17.9088 16.3998 17.7241 16.1932ZM2.16494 7.57728C2.16494 6.50682 2.48237 5.4604 3.07708 4.57034C3.6718 3.68029 4.51709 2.98657 5.50607 2.57693C6.49504 2.16728 7.58328 2.0601 8.63318 2.26893C9.68307 2.47777 10.6475 2.99325 11.4044 3.75018C12.1613 4.5071 12.6768 5.47149 12.8856 6.52138C13.0945 7.57128 12.9873 8.65952 12.5776 9.64849C12.168 10.6375 11.4743 11.4828 10.5842 12.0775C9.69416 12.6722 8.64774 12.9896 7.57728 12.9896C6.14237 12.9879 4.76672 12.4171 3.75208 11.4025C2.73744 10.3878 2.16666 9.01219 2.16494 7.57728Z" fill="#615A5A" />
                    </svg>
                    <input className='focus:outline-none text-xs mx-3 w-full' placeholder='Search Keyword or Phrase' />
                </div>
            </div>
            <div className='flex   '>
                <div className='flex-col '>
                    <svg width="14" height="14" className='my-1 mx-3 cursor-pointer' viewBox="0 0 16 16" fill="none">
                        <path d="M3.04288 0C1.36192 0 0 1.36221 0 3.04353V16L2.51115 13.6736H13.4237C14.8473 13.6736 16 12.5207 16 11.0967V0H3.04288ZM7.8765 10.2458H2.88851V8.13554H7.8765V10.2458ZM13.0738 6.29294H2.88851V4.18271H13.0738V6.29294Z" fill="#1C1818" />
                    </svg>
                    <svg width="14" height="14" className='my-6 mx-3 cursor-pointer' viewBox="0 0 17 17" fill="none" >
                        <path d="M0 7.93029V8.66066C0 10.4651 1.23158 11.9474 2.82316 12.0762V15.277H5.96843V12.0977H6.29054V4.49323H3.03159C1.36421 4.49323 0 6.0399 0 7.93029Z" fill="#B4B4B4" />
                        <path d="M15.9394 0.121733C15.7942 -0.0135259 15.5945 -0.036069 15.4311 0.0541036L7.18896 4.78817V11.3933L15.4311 16.1274C15.7034 16.2626 16.0302 16.1048 16.1391 15.7667C16.1755 15.6765 16.1755 15.5863 16.1755 15.4962V0.685312C16.1755 0.45988 16.0847 0.256992 15.9394 0.121733Z" fill="#B4B4B4" />
                    </svg>

                    <svg width="14" height="14" className='my-6 mx-3 cursor-pointer' viewBox="0 0 17 18" fill="none" >
                        <path d="M5.19922 0.561655C5.19922 0.252745 5.45918 0 5.77692 0H10.3985C10.7163 0 10.9762 0.252745 10.9762 0.561655V2.80828C10.9762 3.11719 10.7163 3.36993 10.3985 3.36993H5.77692C5.45918 3.36993 5.19922 3.11719 5.19922 2.80828V0.561655Z" fill="#B4B4B4" />
                        <path clipRule="evenodd" d="M2.88851 1.12329H4.04392V3.74622C4.04392 4.16185 4.40787 4.49322 4.8527 4.49322H11.323C11.7678 4.49322 12.1318 4.15623 12.1318 3.74622V1.12329H13.2872C14.8816 1.12329 16.1757 2.3814 16.1757 3.93157V14.266C16.1757 15.8162 14.8816 17.0743 13.2872 17.0743H2.88851C1.29405 17.0743 0 15.8162 0 14.266V3.93157C0 2.3814 1.29405 1.12329 2.88851 1.12329ZM8.08784 7.86316C7.7701 7.86316 7.51014 8.1159 7.51014 8.42481C7.51014 8.73372 7.7701 8.98647 8.08784 8.98647H12.7095C13.0272 8.98647 13.2872 8.73372 13.2872 8.42481C13.2872 8.1159 13.0272 7.86316 12.7095 7.86316H8.08784ZM7.51014 12.9181C7.51014 12.6091 7.7701 12.3564 8.08784 12.3564H10.3986C10.7164 12.3564 10.9764 12.6091 10.9764 12.9181C10.9764 13.227 10.7164 13.4797 10.3986 13.4797H8.08784C7.7701 13.4797 7.51014 13.227 7.51014 12.9181ZM2.88851 8.42481C2.88851 7.49246 3.66264 6.73985 4.62162 6.73985C5.58061 6.73985 6.35473 7.49246 6.35473 8.42481C6.35473 9.35716 5.58061 10.1098 4.62162 10.1098C3.66264 10.1098 2.88851 9.35716 2.88851 8.42481ZM2.88851 12.9181C2.88851 11.9857 3.66264 11.2331 4.62162 11.2331C5.58061 11.2331 6.35473 11.9857 6.35473 12.9181C6.35473 13.8504 5.58061 14.603 4.62162 14.603C3.66264 14.603 2.88851 13.8504 2.88851 12.9181Z" fill="#B4B4B4" />
                    </svg>

                    <svg width="14" height="14" className='my-6 mx-3 cursor-pointer' viewBox="0 0 16 16" fill="none" >
                        <g clipPath="url(#clip0_978_7753)">
                            <path d="M16 10.96V1.04C16 0.47 15.54 0 14.96 0H1.04C0.46 0 0 0.46 0 1.04V10.97C0 11.54 0.46 12.01 1.04 12.01H7V14.01H4.64C4.29 14.01 4 14.3 4 14.65V15.37C4 15.72 4.29 16.01 4.64 16.01H11.36C11.71 16.01 12 15.72 12 15.37V14.65C12 14.3 11.71 14.01 11.36 14.01H9V12.01H14.96C15.53 12.01 16 11.55 16 10.97V10.96ZM5.4 9.5H3.4V3.5H5.4V9.5ZM10.6 6.4H12.6V9.5H10.6V6.4ZM7 9.5V5H9V9.5H7Z" fill="#B4B4B4" />
                        </g>
                        <defs>
                            <clipPath id="clip0_978_7753">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className='px-6 w-full '>

                    <div className='flex  justify-between items-center '>
                        <h3 className='text-sm font-semibold'>Earnings Calls</h3>
                        <div>
                            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" >
                                <g clipPath="url(#clip0_978_7683)">
                                    <path d="M15.9997 12.6071C15.9997 14.483 14.4883 16.0035 12.6234 16.0035C10.7586 16.0035 9.24707 14.483 9.24707 12.6071C9.24707 10.7312 10.7586 9.21069 12.6234 9.21069C14.4883 9.21069 15.9997 10.7312 15.9997 12.6071Z" fill="#B4B4B4" />
                                    <path d="M6.74918 3.39639C6.74918 5.27233 5.2377 6.79278 3.37284 6.79278C1.50798 6.79278 0 5.26881 0 3.39639C0 1.52398 1.51148 0 3.37634 0C5.2412 0 6.75268 1.52046 6.75268 3.39639H6.74918Z" fill="#B4B4B4" />
                                    <path d="M3.37634 9.21069C1.51148 9.21069 0 10.7312 0 12.6071C0 14.483 1.51148 16.0035 3.37634 16.0035C5.2412 16.0035 6.75268 14.483 6.75268 12.6071C6.75268 10.7312 5.2412 9.21069 3.37634 9.21069ZM3.37634 13.9304C2.65209 13.9304 2.06779 13.3427 2.06779 12.6141C2.06779 11.8856 2.65209 11.2978 3.37634 11.2978C4.10059 11.2978 4.68489 11.8856 4.68489 12.6141C4.68139 13.3392 4.09709 13.9234 3.37634 13.9234V13.9304Z" fill="#B4B4B4" />
                                    <path d="M13.6344 0H11.6191V6.78927H13.6344V0Z" fill="#B4B4B4" />
                                    <path d="M16.0002 2.38281H9.25098V4.41009H16.0002V2.38281Z" fill="#B4B4B4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_978_7683">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className='my-5'>
                        {resultArray.map(group => {
                            const year = Object.keys(group)[0];
                            const transcripts = group[year];

                            return (
                                <div key={year} className='my-5'>
                                    <h4 className='text-[9px] opacity-40'>Year {year}</h4>
                                    <hr />
                                    <ul>
                                        {transcripts.map((item, it) => (
                                            <Link key={it} href={"/earning/" + item.transcriptid} className={ id==item.transcriptid?'flex justify-between items-center cursor-pointer hover:opacity-100 text-[12px] py-2':'flex hover:opacity-100 justify-between items-center cursor-pointer opacity-50 text-[12px] py-2 '}>
                                                <span>
                                                    {item.code}, {item.quator} {item.year} Earnings Calls
                                                </span>
                                                <span>
                                                    {item.date}
                                                </span>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>

        </div>

        <div className='mr-5  hidden lg:block w-full    z-50 lg:w-1/4 shadow-xl min-h-screen bg-white text-black '>

            <div className='flex items-center gap-x-2' >
                <div onClick={() => { setShow(!show) }} className='ml-2 cursor-pointer w-[30px]'>
                    <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </div>
                <div className='flex w-full my-4 border-[1px] rounded-md px-2 py-2 border-gray-200 mx-2 items-center'>
                    <svg width="15" height="15" viewBox="0 0 18 18" fill="none" >
                        <path d="M17.7241 16.1932L13.6436 12.1127C14.626 10.8049 15.1563 9.21299 15.1546 7.57728C15.1546 3.39919 11.7554 0 7.57728 0C3.39919 0 0 3.39919 0 7.57728C0 11.7554 3.39919 15.1546 7.57728 15.1546C9.21299 15.1563 10.8049 14.626 12.1127 13.6436L16.1932 17.7241C16.3998 17.9088 16.6692 18.0073 16.9461 17.9996C17.2231 17.9918 17.4865 17.8783 17.6824 17.6824C17.8783 17.4865 17.9918 17.2231 17.9996 16.9461C18.0073 16.6692 17.9088 16.3998 17.7241 16.1932ZM2.16494 7.57728C2.16494 6.50682 2.48237 5.4604 3.07708 4.57034C3.6718 3.68029 4.51709 2.98657 5.50607 2.57693C6.49504 2.16728 7.58328 2.0601 8.63318 2.26893C9.68307 2.47777 10.6475 2.99325 11.4044 3.75018C12.1613 4.5071 12.6768 5.47149 12.8856 6.52138C13.0945 7.57128 12.9873 8.65952 12.5776 9.64849C12.168 10.6375 11.4743 11.4828 10.5842 12.0775C9.69416 12.6722 8.64774 12.9896 7.57728 12.9896C6.14237 12.9879 4.76672 12.4171 3.75208 11.4025C2.73744 10.3878 2.16666 9.01219 2.16494 7.57728Z" fill="#615A5A" />
                    </svg>
                    <input className='focus:outline-none text-xs mx-3 w-full' placeholder='Search Keyword or Phrase' />
                </div>
            </div>
            <div className='flex   '>
                <div className='flex-col '>
                    <svg width="14" height="14" className='my-1 mx-3 cursor-pointer' viewBox="0 0 16 16" fill="none">
                        <path d="M3.04288 0C1.36192 0 0 1.36221 0 3.04353V16L2.51115 13.6736H13.4237C14.8473 13.6736 16 12.5207 16 11.0967V0H3.04288ZM7.8765 10.2458H2.88851V8.13554H7.8765V10.2458ZM13.0738 6.29294H2.88851V4.18271H13.0738V6.29294Z" fill="#1C1818" />
                    </svg>
                    <svg width="14" height="14" className='my-6 mx-3 cursor-pointer' viewBox="0 0 17 17" fill="none" >
                        <path d="M0 7.93029V8.66066C0 10.4651 1.23158 11.9474 2.82316 12.0762V15.277H5.96843V12.0977H6.29054V4.49323H3.03159C1.36421 4.49323 0 6.0399 0 7.93029Z" fill="#B4B4B4" />
                        <path d="M15.9394 0.121733C15.7942 -0.0135259 15.5945 -0.036069 15.4311 0.0541036L7.18896 4.78817V11.3933L15.4311 16.1274C15.7034 16.2626 16.0302 16.1048 16.1391 15.7667C16.1755 15.6765 16.1755 15.5863 16.1755 15.4962V0.685312C16.1755 0.45988 16.0847 0.256992 15.9394 0.121733Z" fill="#B4B4B4" />
                    </svg>

                    <svg width="14" height="14" className='my-6 mx-3 cursor-pointer' viewBox="0 0 17 18" fill="none" >
                        <path d="M5.19922 0.561655C5.19922 0.252745 5.45918 0 5.77692 0H10.3985C10.7163 0 10.9762 0.252745 10.9762 0.561655V2.80828C10.9762 3.11719 10.7163 3.36993 10.3985 3.36993H5.77692C5.45918 3.36993 5.19922 3.11719 5.19922 2.80828V0.561655Z" fill="#B4B4B4" />
                        <path clipRule="evenodd" d="M2.88851 1.12329H4.04392V3.74622C4.04392 4.16185 4.40787 4.49322 4.8527 4.49322H11.323C11.7678 4.49322 12.1318 4.15623 12.1318 3.74622V1.12329H13.2872C14.8816 1.12329 16.1757 2.3814 16.1757 3.93157V14.266C16.1757 15.8162 14.8816 17.0743 13.2872 17.0743H2.88851C1.29405 17.0743 0 15.8162 0 14.266V3.93157C0 2.3814 1.29405 1.12329 2.88851 1.12329ZM8.08784 7.86316C7.7701 7.86316 7.51014 8.1159 7.51014 8.42481C7.51014 8.73372 7.7701 8.98647 8.08784 8.98647H12.7095C13.0272 8.98647 13.2872 8.73372 13.2872 8.42481C13.2872 8.1159 13.0272 7.86316 12.7095 7.86316H8.08784ZM7.51014 12.9181C7.51014 12.6091 7.7701 12.3564 8.08784 12.3564H10.3986C10.7164 12.3564 10.9764 12.6091 10.9764 12.9181C10.9764 13.227 10.7164 13.4797 10.3986 13.4797H8.08784C7.7701 13.4797 7.51014 13.227 7.51014 12.9181ZM2.88851 8.42481C2.88851 7.49246 3.66264 6.73985 4.62162 6.73985C5.58061 6.73985 6.35473 7.49246 6.35473 8.42481C6.35473 9.35716 5.58061 10.1098 4.62162 10.1098C3.66264 10.1098 2.88851 9.35716 2.88851 8.42481ZM2.88851 12.9181C2.88851 11.9857 3.66264 11.2331 4.62162 11.2331C5.58061 11.2331 6.35473 11.9857 6.35473 12.9181C6.35473 13.8504 5.58061 14.603 4.62162 14.603C3.66264 14.603 2.88851 13.8504 2.88851 12.9181Z" fill="#B4B4B4" />
                    </svg>

                    <svg width="14" height="14" className='my-6 mx-3 cursor-pointer' viewBox="0 0 16 16" fill="none" >
                        <g clipPath="url(#clip0_978_7753)">
                            <path d="M16 10.96V1.04C16 0.47 15.54 0 14.96 0H1.04C0.46 0 0 0.46 0 1.04V10.97C0 11.54 0.46 12.01 1.04 12.01H7V14.01H4.64C4.29 14.01 4 14.3 4 14.65V15.37C4 15.72 4.29 16.01 4.64 16.01H11.36C11.71 16.01 12 15.72 12 15.37V14.65C12 14.3 11.71 14.01 11.36 14.01H9V12.01H14.96C15.53 12.01 16 11.55 16 10.97V10.96ZM5.4 9.5H3.4V3.5H5.4V9.5ZM10.6 6.4H12.6V9.5H10.6V6.4ZM7 9.5V5H9V9.5H7Z" fill="#B4B4B4" />
                        </g>
                        <defs>
                            <clipPath id="clip0_978_7753">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className='px-6 w-full '>

                    <div className='flex  justify-between items-center '>
                        <h3 className='text-sm font-semibold'>Earnings Calls</h3>
                        <div>
                            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" >
                                <g clipPath="url(#clip0_978_7683)">
                                    <path d="M15.9997 12.6071C15.9997 14.483 14.4883 16.0035 12.6234 16.0035C10.7586 16.0035 9.24707 14.483 9.24707 12.6071C9.24707 10.7312 10.7586 9.21069 12.6234 9.21069C14.4883 9.21069 15.9997 10.7312 15.9997 12.6071Z" fill="#B4B4B4" />
                                    <path d="M6.74918 3.39639C6.74918 5.27233 5.2377 6.79278 3.37284 6.79278C1.50798 6.79278 0 5.26881 0 3.39639C0 1.52398 1.51148 0 3.37634 0C5.2412 0 6.75268 1.52046 6.75268 3.39639H6.74918Z" fill="#B4B4B4" />
                                    <path d="M3.37634 9.21069C1.51148 9.21069 0 10.7312 0 12.6071C0 14.483 1.51148 16.0035 3.37634 16.0035C5.2412 16.0035 6.75268 14.483 6.75268 12.6071C6.75268 10.7312 5.2412 9.21069 3.37634 9.21069ZM3.37634 13.9304C2.65209 13.9304 2.06779 13.3427 2.06779 12.6141C2.06779 11.8856 2.65209 11.2978 3.37634 11.2978C4.10059 11.2978 4.68489 11.8856 4.68489 12.6141C4.68139 13.3392 4.09709 13.9234 3.37634 13.9234V13.9304Z" fill="#B4B4B4" />
                                    <path d="M13.6344 0H11.6191V6.78927H13.6344V0Z" fill="#B4B4B4" />
                                    <path d="M16.0002 2.38281H9.25098V4.41009H16.0002V2.38281Z" fill="#B4B4B4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_978_7683">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className='my-5'>
                        {resultArray.map(group => {
                            const year = Object.keys(group)[0];
                            const transcripts = group[year];

                            return (
                                <div key={year} className='my-5'>
                                    <h4 className='text-[9px] opacity-40'>Year {year}</h4>
                                    <hr />
                                    <ul>
                                        {transcripts.map((item, it) => (
                                            <Link key={it} href={ "/earning/" + item.transcriptid} className={ id==item.transcriptid?'flex justify-between items-center cursor-pointer hover:opacity-100 text-[12px] py-2':'flex hover:opacity-100 justify-between items-center cursor-pointer opacity-50 text-[12px] py-2 '}>
                                                <span>
                                                    {item.code}, {item.quator} {item.year} Earnings Calls
                                                </span>
                                                <span>
                                                    {item.date}
                                                </span>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default SideBar