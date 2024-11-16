"use client"
import React, { useState } from 'react'
import './page.css';
import Logo from '../../public/logo.png'
import Banner1 from '../../public/Banner1.png'
import Banner2 from '../../public/Banner2.png'
import Banner3 from '../../public/Banner3.png'
import OBJECTS from '../../public/OBJECTS.png'
import thuvien from '../../public/thuvien.png'
import hotro from '../../public/Vector.png'
import ielts from '../../public/ielts.png'
import group from '../../public/group.png'
import image11 from '../../public/image11.png'
import image12 from '../../public/image12.png'
import image13 from '../../public/image13.png'
import qrcode from '../../public/qrcode.png'
import Image from 'next/image'
import { faArrowDown, faArrowUp, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faSearch, faShoppingCart, faUser, faStarOfLife, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-tailwind/react'
import Slider from 'react-slick'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MyUHomepage() {

    const CustomDot = ({ onMove, index, onClick, active }) => {
        return (
            <li
                className={(active ? "active" : "inactive") + " mt-5"}
                onClick={() => onClick()}
            >
                <button className={'w-3 h-3 rounded-full bg-[#0678BD] mx-1' + (active ? " opacity-100" : " opacity-70")}></button>
            </li>
        );
    };
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4, // Số lượng div trên mỗi slide
            slidesToSlide: 1, // Số lượng div chuyển động khi kéo
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div id='wrapper' className=' mx-auto'>
            <div className=' flex justify-between mx-auto px-4 sm:px-4 md:px-2 lg:px-0 xl:px-0 py-3 max-sm:flex-col sm:w-[80%]'>
                <span className='text-xs text-[#666666]'>642 Âu Cơ, Phường 10, Quận Tân Bình, Thành phố Hồ Chí Minh, Việt Nam</span>
                <div className='flex items-center max-md:items-start max-md:gap-0 gap-5 md:flex-row flex-col'>
                    <a className='text-xs text-[#666666]' href='/dangnhap'>Đăng nhập</a>
                    <a className='text-xs text-[#666666]' href='/dangky'>Đăng ký</a>
                </div>
            </div>
            <Header></Header>
            <div id='banner' className='sm:w-[80%] justify-between mx-auto px-4 sm:px-4 md:px-2 lg:px-0 xl:px-0 py-3 flex max-lg:flex-col items-stretch gap-2'>
                <div className='flex basis-1/2 flex-grow'>
                    <Image src={Banner1} alt="" className='object-cover w-[100%] h-[auto] hover:cursor-pointer hover:opacity-90'></Image>
                </div>
                <div className='flex basis-1/2 flex-grow flex-col items-stretch gap-2'>
                    <Image src={Banner2} alt="" className='object-cover basis-1/2 w-[100%] h-[100%] flex-grow hover:cursor-pointer hover:opacity-90'></Image>
                    <Image src={Banner3} alt="" className='object-cover basis-1/2 w-[100%] h-[100%] flex-grow hover:cursor-pointer hover:opacity-90'></Image>
                </div>
            </div>

            <div id='thamgiakhoahoc' className='sm:w-[80%] mx-auto flex justify-between mx-auto px-4 sm:px-4 md:px-2 lg:px-0 xl:px-0 py-3 mt-4'>
                <div className='flex flex-col items-center gap-2 text-center w-[100%]'>
                    <h2 className='font-bold text-2xl text-center text-[#49A947] text-uppercase'>Tham gia khóa học</h2>
                    <h4 className='mt-5 font-semibold text-[20px]'>Bứt phá trí tuệ</h4>
                    <div className='mt-5  w-[100%] grid grid-cols-5 gap-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                        {
                            [1, 2, 3, 4, 5].map((item, index) => {
                                return <>
                                    <div className='flex basis-[calc(20%-4px)] grow-0 max-lg:basis-[30%] mb-4 flex-col items-center bg-[#FF6132] rounded-md p-2 py-4 text-white gap-2 hover:opacity-90 hover:cursor-pointer '>
                                        <div className='w-[100%] flex justify-between'>
                                            <span className='bg-gradient-to-r from-[#A0A1A8CC] to-[#3F3F42CC] px-4 py-1 text-white rounded-[20px] text-sm'>3 khóa</span>
                                            <span className='bg-[white] px-4 py-1 rounded-[20px] text-sm text-[#FFD130]'>
                                                <FontAwesomeIcon icon={faStar} className='w-[10px]'></FontAwesomeIcon>
                                                VIP</span>
                                        </div>
                                        <span className='text-[14px] font-semibold'>VIỆN DOANH TRÍ</span>
                                        <Image src={OBJECTS} alt="" className='object-cover flex-grow'></Image>
                                        <Button className=''>Chọn lớp ngay <FontAwesomeIcon icon={faArrowRight} className='w-[10px]'></FontAwesomeIcon></Button>
                                    </div>
                                </>
                            })
                        }
                        {/* #bgColor: 7A7D99, FFD130, 4DA648, 44AB96 */}
                    </div>
                </div>
            </div>

            <div id='khoahocnoibat' className='sm:w-[80%] flex justify-between mx-auto px-4 sm:px-4 md:px-2 lg:px-0 xl:px-0 py-3 mt-4'>
                <div className='flex flex-col items-center gap-2 text-center w-[100%]'>
                    <h2 className='font-bold text-2xl text-center text-[#49A947]'>KHÓA HỌC NỔI BẬT</h2>
                    <div className='flex gap-4 w-[100%] justify-between items-center'>

                    </div>
                    <Carousel
                        className='w-[100%] py-5'
                        responsive={responsive}
                        autoPlay={false}
                        autoPlaySpeed={3000}
                        infinite={true}
                        showDots={true}
                        customDot={<CustomDot />}
                        keyBoardControl={true}
                        transitionDuration={500}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        arrows={false}
                    >
                        {[1, 2, 3, 4, 5].map((item, index) => (
                            <>
                                <div className='flex basis-1/4 flex-col items-start mb-5 w-full px-2 hover:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] hover:cursor-pointer'>
                                    <Image src={ielts} alt="" className='object-cover flex-grow w-[100%] h-[150px]'></Image>
                                    <span className='text-[14px] font-semibold mt-2 text-[#0678BD]'>CHỨNG CHỈ TOEIC</span>
                                    <div className='h-[auto] flex gap-1 items-center'>
                                        <span className='text-[14px] '>899+ học viên</span>
                                        <FontAwesomeIcon icon={faStar} className='text-[12px] text-[#FFD130]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='text-[12px] text-[#FFD130]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='text-[12px] text-[#FFD130]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='text-[12px] text-[#FFD130]'></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className='text-[12px] text-[#FFD130]'></FontAwesomeIcon>
                                    </div>
                                </div>
                            </>
                        ))}

                    </Carousel>
                </div>
            </div>

            <div id='viendoanhtri' className='sm:w-[80%] flex justify-between mx-auto px-4 sm:px-4 md:px-2 lg:px-0 xl:px-0 py-3 mt-4'>
                <div className='flex flex-col items-center gap-2 text-center w-[100%]'>
                    <h2 className='font-bold text-2xl text-center text-[#49A947]'>VIỆN DOANH TRÍ</h2>
                    <Carousel
                        className='w-[100%] py-5'
                        responsive={responsive}
                        autoPlay={false}
                        autoPlaySpeed={3000}
                        infinite={true}
                        showDots={true}
                        customDot={<CustomDot />}
                        keyBoardControl={true}
                        transitionDuration={500}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        arrows={false}
                    >
                        {[1, 2, 3, 4, 5].map((item, index) => (
                            <>
                                <Item key={index} url={thuvien} name="CHỨNG CHỈ TOEIC" style="flex basis-1/4 flex-col items-start mb-5 w-full px-2 hover:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] hover:cursor-pointer p-2"></Item>
                            </>
                        ))}

                    </Carousel>
                </div>
            </div>

            <div id='trungtamngoaingu' className='sm:w-[80%] flex justify-between mx-auto px-4 sm:px-4 md:px-2 lg:px-0 xl:px-0 py-3 mt-4'>
                <div className='flex flex-col items-center gap-2 text-center w-[100%]'>
                    <h2 className='font-bold text-2xl text-center text-[#49A947]'>TRUNG TÂM NGOẠI NGỮ</h2>
                    <Carousel
                        className='w-[100%] py-5'
                        responsive={responsive}
                        autoPlay={false}
                        autoPlaySpeed={3000}
                        infinite={true}
                        showDots={true}
                        customDot={<CustomDot />}
                        keyBoardControl={true}
                        transitionDuration={500}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        arrows={false}
                    >
                        {[1, 2, 3, 4, 5].map((item, index) => (
                            <>
                                <Item key={index} url={thuvien} title="CHỨNG CHỈ" style="flex basis-1/4 flex-col items-start mb-5 w-full px-2 hover:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] hover:cursor-pointer p-2"></Item>
                            </>
                        ))}

                    </Carousel>
                    <button className='mt-4 text-sm p-2 hover:opacity-80 h-[auto] rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Xem thêm</button>
                </div>
            </div>

            <div id='tuoisangtuonglai' className='sm:w-[80%] flex justify-between mx-auto px-4 sm:px-4 md:px-2 lg:px-0 xl:px-0 py-3 mt-4'>
                <div className='flex flex-col items-center gap-2 text-center w-[100%]'>
                    <h2 className='font-bold text-2xl text-center text-[#49A947]'>TƯƠNG LAI TƯƠI SÁNG BẮT ĐẦU TỪ MYU</h2>
                    <div className='flex flex-col lg:flex-row justify-between items-start w-[100%] gap-2 py-5'>
                        <div className='flex basis-[60%]'>
                            <Image src={group} alt="" className='object-cover flex-grow w-[100%] h-[200px]'></Image>
                        </div>
                        <div className='flex basis-[40%] align-start flex-wrap justify-between gap-2'>
                            <button className='text-center flex justify-center basis-[30%] py-2 px-5 text-[14px] border border-[#0678BD] grow mb-2 hover:cursor-pointer hover:bg-[#0678BD] hover:text-[white] rounded-[5px]'>
                                <span className='text-[14px]'>Tiếng Anh</span>
                            </button>
                            <button className='text-center flex justify-center basis-[30%] py-2 px-5 text-[14px] border border-[#0678BD] grow mb-2 hover:cursor-pointer hover:bg-[#0678BD] hover:text-[white]'>
                                <span className='text-[14px]'>Tiếng Anh</span>
                            </button>
                            <button className='text-center flex justify-center basis-[30%] py-2 px-5 text-[14px] border border-[#49A947] grow mb-2 hover:cursor-pointer hover:bg-[#49A947] hover:text-[white]'>
                                <span className='text-[14px]'>Tiếng Anh</span>
                            </button>
                            <button className='text-center flex justify-center basis-[30%] py-2 px-5 text-[14px] border border-[#0678BD] grow mb-2 hover:cursor-pointer hover:bg-[#0678BD] hover:text-[white]'>
                                <span className='text-[14px]'>Tiếng Anh</span>
                            </button>
                            <button className='text-center flex justify-center basis-[30%] py-2 px-5 text-[14px] border border-[#0678BD] grow mb-2 hover:cursor-pointer hover:bg-[#0678BD] hover:text-[white]'>
                                <span className='text-[14px]'>Tiếng Anh</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

const Item = ({ url, title, style }) => {
    return (
        <div className={style}>
            <Image src={url} alt="" className='object-cover flex-grow w-[100%] h-[200px]'></Image>
            <span className='text-[14px] font-semibold mt-2 text-[#0678BD]'>{title}</span>
            <span className='text-[14px] text-start'>Hiện nay có rất nhiều các cuộc thi đánh giá khả năng sử dụng tiếng Anh khác nhau trên thế giới nói chung và tại Việt Nam nói riêng.</span>
            <div className=' flex gap-1 items-center w-full'>
                <FontAwesomeIcon icon={faCalendar} className='text-sm text-[#0678BD]'></FontAwesomeIcon>
                <span className='text-xs'>20:30 - Thứ Ba 29/4/2024 </span>
            </div>
            <div className='flex items-center justify-between w-full'>
                <div className='text-xs text-[#0678BD]'>Chi tiết</div>
                <button className='text-xs p-2 hover:opacity-90 h-[auto] rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD]'>ĐĂNG KÝ</button>
            </div>
        </div>
    )
}

const Header = () => {
    const [show, setShow] = useState(false);
    const [giatriVienDoanhTri, setGiatriVienDoanhTri] = useState('Viện doanh trí');
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className='sm:w-[80%] flex max-lg:flex-wrap mx-auto px-4 sm:px-4 md:px-2 lg:px-0 xl:px-0 py-3 gap-5 max-lg:gap-5 items-stretch justify-between max-lg:justify-start'>
            <div className=' h-[auto] w-fit'>
                <Image src={Logo} alt="" className='object-cover w-[100px] h-[50px]'></Image>
            </div>

            <div className='w-[20%] max-md:w-[30%] relative'>
                <button className='border border-[#e0e0e0] text-[#666666] w-[100%]  flex items-center justify-between px-4 rounded-md h-[100%]' onClick={() => { setShow(!show) }}>
                    <span className='text-[#666666] text-sm'>{giatriVienDoanhTri}</span>
                    <FontAwesomeIcon icon={show ? faArrowUp : faArrowDown} className='w-[20px]'></FontAwesomeIcon>
                </button>
                <div className={'w-[100%] absolute' + (show ? ' block' : ' hidden')} >
                    <ul>
                        <li className='hover:bg-[#0678BD] hover:cursor-pointer hover:text-white border border-[#e0e0e0] text-[#666666] w-[100%] h-[40px] flex items-center justify-between px-4 ' onClick={() => { setGiatriVienDoanhTri('Viện doanh trí') }}>
                            <span>Viện doanh trí</span>
                        </li>
                        <li className='hover:bg-[#0678BD] hover:cursor-pointer hover:text-white border border-[#e0e0e0] text-[#666666] w-[100%] h-[40px] flex items-center justify-between px-4' onClick={() => { setGiatriVienDoanhTri('TT Ngoại ngữ') }}>
                            <span>TT Ngoại ngữ</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='w-[30%] relative flex items-center justify-between border border-[#e0e0e0] rounded-md hover:cursor-pointer'>
                <div className='flex items-center w-[70%] h-[100%]'>
                    <FontAwesomeIcon icon={faSearch} className='w-[20px] mx-2'></FontAwesomeIcon>
                    <input value={searchValue} type="text" className='h-[100%] outline-none text-sm w-[100%]' placeholder='Nhập tìm kiếm' onChange={(e) => { setSearchValue(e.target.value) }}></input>
                </div>
                <button className='text-sm  hover:opacity-90 w-[30%] h-[100%] px-2 bg-[#0678BD] rounded-md rounded-l-none text-white flex items-center justify-center border border-[#0678BD]'>Tìm kiếm</button>
            </div>
            <button className='text-sm px-2 hover:opacity-90 rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] lg:flex-grow'>Trang chủ</button>
            <button className='flex items-center justify-between px-2 hover:opacity-90 w-[auto] rounded-md text-white border border-[#0678BD] bg-[#0678BD]'>
                <FontAwesomeIcon icon={faUser} className='w-[20px]'></FontAwesomeIcon>
                <div className='flex flex-col '>
                    <span className='text-[10px]'>Chào em</span>
                    <span className='text-[10px]'>Lê Hoàng Thiện</span>
                </div>
            </button>
            <button className='px-2 hover:opacity-90 h-[auto] rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD]'>
                <FontAwesomeIcon icon={faShoppingCart} className='w-[20px]'></FontAwesomeIcon>
            </button>
        </div>
    )
}

const Footer = () => {
    return (
        <div className='pt-5 w-full'>
            <div className=' bg-[#EEF3FF] w-full py-5 flex items-center justify-center'>
                <div className='sm:w-[80%] flex max-md:flex-col max-md:gap-2 justify-between items-center'>
                    <div className='flex items-center gap-2 w-fit'>
                        <Image src={hotro}></Image>
                        <div className='flex flex-col gap-2'>
                            <span className='text-sm'>Hotline</span>
                            <span className='text-md font-bold'>090909090</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 w-fit'>
                        <Image src={hotro}></Image>
                        <div className='flex flex-col gap-2'>
                            <span className='text-sm'>Hotline</span>
                            <span className='text-md font-bold'>090909090</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 w-fit'>
                        <Image src={hotro}></Image>
                        <div className='flex flex-col gap-2'>
                            <span className='text-sm'>Hotline</span>
                            <span className='text-md font-bold'>090909090</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:w-[80%] mx-auto px-4 sm:px-4 md:px-2 lg:px-0 xl:px-0 py-3 mt-4 gap-4 grid grid-cols-4 max-md:grid-cols-2 border-b-2'>
                <div className='flex md:basis-1/4 flex-col text-[20px] max-md:text-xs '>
                    <h3 className='font-bold max-md:text-xs'>THÔNG TIN LIÊN HỆ</h3>
                    <span className='opacity-70'>Tên công ty</span>
                    <span className='font-bold max-md:text-xs'>CÔNG TY TNHH MYU</span>
                    <span className='opacity-70'>Địa chỉ</span>
                    <span className=' font-bold max-md:text-xs'>642 Âu Cơ, Phường 10, Quận Tân Bình, Thành phố Hồ Chí Minh, Việt Nam</span>
                    <span className=' opacity-70'>GCN ĐKDN số</span>
                    <span className=' font-bold max-md:text-xs'>0317747312</span>
                    <span className=' opacity-70'>Cấp ngày</span>
                    <span className=' font-bold max-md:text-xs'>22/03/2023</span>
                    <span className=' opacity-70'>Nơi cấp</span>
                    <span className=' font-bold max-md:text-xs'>Phòng đăng ký kinh doanh - Sở Kế hoạch & Đầu tư TP HCM</span>
                    <span className=''></span>
                </div>
                <div className='flex basis-1/4 flex-col text-[20px] max-md:text-xs'>
                    <h3 className='font-bold max-md:text-xs'>CHĂM SÓC KHÁCH HÀNG</h3>
                    <span className='opacity-70'>Thời gian hỗ trợ</span>
                    <span className='font-bold max-md:text-xs'>8H - 22H Hàng ngày</span>
                    <span className='opacity-70'>Hotline KHTT</span>
                    <span className=' font-bold max-md:text-xs'>096 446 0333</span>
                </div>
                <div className='flex basis-1/4 flex-col text-[20px] max-md:text-xs'>
                    <h3 className='font-bold max-md:text-xs'>CHÍNH SÁCH CHƯƠNG TRÌNH</h3>
                    <a className='opacity-70 hover:cursor-pointer w-fit no-underline max-md:text-sm text-[20px]' href=''>Giới thiệu về myU</a>
                    <a className='opacity-70 hover:cursor-pointer w-fit no-underline max-md:text-sm text-[20px]' href=''>Quy chế hoạt động App myU</a>
                    <a className=' opacity-70 hover:cursor-pointer w-fit no-underline max-md:text-sm text-[20px]' href=''>Quy chế hoạt động Website myU</a>
                    <a className=' opacity-70 hover:cursor-pointer w-fit no-underline max-md:text-sm text-[20px]' href=''>Điều khoản và Điều kiện chương trình KHTT</a>
                    <a className=' opacity-70 hover:cursor-pointer w-fit no-underline max-md:text-sm text-[20px]' href=''>Chính sách bảo vệ và xử lý dữ liệu</a>
                    <a className=' opacity-70 hover:cursor-pointer w-fit no-underline max-md:text-sm text-[20px]' href=''>Chính sách xóa tài khoản trên ứng dụng myU</a>
                    <a className=' opacity-70 hover:cursor-pointer w-fit no-underline max-md:text-sm text-[20px]' href=''>Thỏa thuận sử dụng dịch vụ mạng xã hội</a>
                </div>
                <div className='flex basis-1/4 flex-col text-[20px] max-md:text-xs gap-2'>
                    <h3 className='font-bold max-md:text-xs'>KẾT NỐI VỚI CHÚNG TÔI</h3>
                    <div className='flex gap-2'>
                        <Image src={image11} className='hover:cursor-pointer'></Image>
                        <Image src={image12} className='hover:cursor-pointer'></Image>
                        <Image src={image13} className='hover:cursor-pointer'></Image>
                    </div>
                    <h3 className='font-bold max-md:text-xs'>TẢI APP TRÊN ĐIỆN THOẠI</h3>
                    <Image src={qrcode}></Image>
                    <h3 className='font-bold max-md:text-xs'>ĐƯỢC CHỨNG NHẬN BỞI</h3>
                    <Image src={qrcode}></Image>
                </div>
            </div>
            <div className='sm:w-[80%] flex  max-md:flex-col justify-start mx-auto py-5 items-center flex-wrap'>
                <Image className='w-[100px] h-[50px]' src={Logo}></Image>
                <span className='text-sm max-md:text-xs'>Copyright © 2024 by myU. All rights reserved.</span>
            </div>
        </div>
    )
}

export default MyUHomepage