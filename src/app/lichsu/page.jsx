'use client'
import React, { useState } from 'react'
import { Header, Footer } from '../myuHomepage/page'
import lichsukhoahoc from '../../public/lichsukhoahoc.png'
import {  faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

function LichSu() {
    const [select, setSelect] = useState(0)
    return (
        <>
            <Header></Header>
            <div className='lichsu' id='lichsu'>
                <div className='w-[80%] mx-auto flex bg-[#0678BD] p-[10px]'>
                    <h1 className='uppercase text-white text-lg'>
                        Lịch sử
                    </h1>
                </div>
                <div className='w-[80%] mx-auto flex flex-col items-center gap-[40px] mt-[40px]'>
                    <div className='flex flex-wrap gap-2 items-center'>
                        <button onClick={() => { setSelect(0) }} className={'text-sm p-2 px-6 hover:opacity-80 h-[auto] rounded-md  flex items-center justify-center border border-[#0678BD] ' + (select == 0 ? 'bg-[#0678BD] text-white' : 'bg-[#D9D9D9] text-[#0678BD]')}>Tất cả</button>
                        <button onClick={() => { setSelect(1) }} className={'text-sm p-2 px-6 hover:opacity-80 h-[auto] rounded-md  flex items-center justify-center border border-[#0678BD] ' + (select == 1 ? 'bg-[#0678BD] text-white' : 'bg-[#D9D9D9] text-[#0678BD]')}>Đã đăng ký</button>
                        <button onClick={() => { setSelect(2) }} className={'text-sm p-2 px-6 hover:opacity-80 h-[auto] rounded-md  flex items-center justify-center border border-[#0678BD] ' + (select == 2 ? 'bg-[#0678BD] text-white' : 'bg-[#D9D9D9] text-[#0678BD]')}>Đã lên lịch học</button>
                        <button onClick={() => { setSelect(3) }} className={'text-sm p-2 px-6 hover:opacity-80 h-[auto] rounded-md  flex items-center justify-center border border-[#0678BD] ' + (select == 3 ? 'bg-[#0678BD] text-white' : 'bg-[#D9D9D9] text-[#0678BD]')}>Đã hoàn thành</button>
                        <button onClick={() => { setSelect(4) }} className={'text-sm p-2 px-6 hover:opacity-80 h-[auto] rounded-md  flex items-center justify-center border border-[#0678BD] ' + (select == 4 ? 'bg-[#0678BD] text-white' : 'bg-[#D9D9D9] text-[#0678BD]')}>Đã hủy</button>
                    </div>
                    <div className='list-lichsu flex flex-col w-full items-center'>
                        <div className='w-[100%] py-[40px] flex max-md:flex-col max-lg:items-start items-center justify-between border-b'>
                            <div className='basis-[40%] max-md:basis-[100%] flex items-stretch'>
                                <Image src={lichsukhoahoc} alt="khoahoc" className='w-[40%] object-cover max-h-40'></Image>
                                <div className='flex flex-col ml-4 justify-between'>
                                    <h4 className='text-[#0678BD] font-bold'>CHỨNG CHỈ TOEFL</h4>
                                    <span className='font-bold text-sm'>
                                        899+ học viên 
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                    </span>
                                    <span className='text-sm'>Ngày mua: 9/10/2024</span>
                                </div>
                            </div>
                            <div className='w-full basis-[60%] max-md:basis-[100%] grid grid-cols-4 items-center gap-2'>
                                <span className='font-bold text-xs'>2.999.999đ</span>
                                <span className='font-bold text-xs'>Đang sắp xếp lớp học</span>
                                <button className=' text-sm p-2 hover:opacity-80  rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Xem chi tiết</button>
                                <button className=' text-sm p-2 hover:opacity-80  rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Đánh giá</button>
                            </div>
                        </div>
                        <div className='w-[100%] py-[40px] flex max-md:flex-col max-lg:items-start items-center justify-between border-b'>
                            <div className='basis-[40%] max-md:basis-[100%] flex items-stretch'>
                                <Image src={lichsukhoahoc} alt="khoahoc" className='w-[40%] object-cover max-h-40'></Image>
                                <div className='flex flex-col ml-4 justify-between'>
                                    <h4 className='text-[#0678BD] font-bold'>CHỨNG CHỈ THIẾT KẾ</h4>
                                    <span className='font-bold text-sm'>
                                        899+ học viên 
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                    </span>
                                    <span className='text-sm'>Ngày mua: 9/10/2024</span>
                                </div>
                            </div>
                            <div className='w-full basis-[60%] max-md:basis-[100%] grid grid-cols-4 items-center gap-2'>
                                <span className='font-bold text-xs'>2.999.999đ</span>
                                <span className='font-bold text-xs text-[#0047FF]'>Đã hoàn thành</span>
                                <button className=' text-sm p-2 hover:opacity-80  rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Xem chi tiết</button>
                                <button className=' text-sm p-2 hover:opacity-80  rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Đánh giá</button>
                            </div>
                        </div>
                        <div className='w-[100%] py-[40px] flex max-md:flex-col max-lg:items-start items-center justify-between border-b'>
                            <div className='basis-[40%] max-md:basis-[100%] flex items-stretch'>
                                <Image src={lichsukhoahoc} alt="khoahoc" className='w-[40%] object-cover max-h-40'></Image>
                                <div className='flex flex-col ml-4 justify-between'>
                                    <h4 className='text-[#0678BD] font-bold'>CHỨNG CHỈ TOEFL</h4>
                                    <span className='font-bold text-sm'>
                                        899+ học viên 
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                    </span>
                                    <span className='text-sm'>Ngày mua: 9/10/2024</span>
                                </div>
                            </div>
                            <div className='w-full basis-[60%] max-md:basis-[100%] grid grid-cols-4 items-center gap-2'>
                                <span className='font-bold text-xs'>2.999.999đ</span>
                                <span className='font-bold text-[#DB4B27] text-sm'>Đã hủy</span>
                                <button className=' text-sm p-2 hover:opacity-80  rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Xem chi tiết</button>
                                <button className=' text-sm p-2 hover:opacity-80  rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Đánh giá</button>
                            </div>
                        </div>
                        <div className='w-[100%] py-[40px] flex max-md:flex-col max-lg:items-start items-center justify-between border-b'>
                            <div className='basis-[40%] max-md:basis-[100%] flex items-stretch'>
                                <Image src={lichsukhoahoc} alt="khoahoc" className='w-[40%] object-cover max-h-40'></Image>
                                <div className='flex flex-col ml-4 justify-between'>
                                    <h4 className='text-[#0678BD] font-bold'>CHỨNG CHỈ TOEFL</h4>
                                    <span className='font-bold text-sm'>
                                        899+ học viên 
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                    </span>
                                    <span className='text-sm'>Ngày mua: 9/10/2024</span>
                                </div>
                            </div>
                            <div className=' w-full basis-[60%] max-md:basis-[100%] grid grid-cols-4 items-center gap-2'>
                                <span className='font-bold text-xs'>2.999.999đ</span>
                                <span className='font-bold text-[#DB4B27] text-sm'>Đã hủy</span>
                                <button className=' text-sm p-2 hover:opacity-80  rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Xem chi tiết</button>
                                <button className=' text-sm p-2 hover:opacity-80  rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Đánh giá</button>
                            </div>
                        </div>
                        <div className='w-[100%] py-[40px] flex max-md:flex-col max-lg:items-start items-center justify-between border-b'>
                            <div className='basis-[40%] max-md:basis-[100%] flex items-stretch'>
                                <Image src={lichsukhoahoc} alt="khoahoc" className='w-[40%] object-cover max-h-40'></Image>
                                <div className='flex flex-col ml-4 justify-between'>
                                    <h4 className='text-[#0678BD] font-bold'>CHỨNG CHỈ THIẾT KẾ</h4>
                                    <span className='font-bold text-sm'>
                                        899+ học viên 
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='ml-1 text-[12px] text-[#DB4B27]'></FontAwesomeIcon>
                                    </span>
                                    <span className='text-sm'>Ngày mua: 9/10/2024</span>
                                </div>
                            </div>
                            <div className=' w-full basis-[60%] max-md:basis-[100%] grid grid-cols-4 items-center gap-2'>
                                <span className='font-bold text-xs'>2.999.999đ</span>
                                <span className='font-bold text-xs text-[#0047FF]'>Đã hoàn thành</span>
                                <button className=' text-sm p-2 hover:opacity-80  rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Xem chi tiết</button>
                                <button className=' text-sm p-2 hover:opacity-80  rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Đánh giá</button>
                            </div>
                        </div>
                        <button className='mt-4 w-fit text-sm p-2 hover:opacity-80 h-[auto] rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Xem thêm</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default LichSu