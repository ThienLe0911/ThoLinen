"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faStar, faClock, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Sao from '../../../public/ngoisaotrang.png'
import Image from 'next/image'
import { Footer, Header } from '../../myuHomepage/page'
import khoahoc from '../../../public/khoahoc.png'
import vanhien from '../../../public/vanhien.png'
import Input from '../../common/Input/Input'
import PopUp from '../../common/Popup/PopUp'
import { Textarea } from '@material-tailwind/react'
// import { Button } from '@material-tailwind/react'

function Khoahoc() {
    const [dropdownListStatus, setDropdownListStatus] = React.useState({
        muctieu: false,
        noidungdaotao: false,
        doituong: false,
        lichkhaigiang: false,
        hocphi: false,
        lienhe: false
    });
    const danhsachlop = [
        {
            id: 1,
            tenlop: 'Tin học 1',
            value: 1
        },
        {
            id: 2,
            tenlop: 'Tin học 2',
            value: 2
        },
        {
            id: 3,
            tenlop: 'Tin học 3',
            value: 3
        },
        {
            id: 4,
            tenlop: 'Tin học 4',
            value: 4
        },
        {
            id: 5,
            tenlop: 'Tin học 5',
            value: 5
        },
    ]

    const [mode, setMode] = useState('chitiet');
    const [tuvan, setTuvan] = useState('');
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [formYeucau, setFormYeucau] = useState({
        hoten: '',
        sdt: '',
        lop: '',
        noidung: ''
    })
    const [value, setValue] = React.useState("react");



    return (
        <div className='khoahoc' id='khoahoc'>
            {tuvan && <PopUp key='hotline' closePopup={(e) => setTuvan(false)}>
                <div onClick={(e) => e.stopPropagation()} className='w-[350px] bg-white rounded-lg flex flex-col items-center p-4 gap-4'>
                    {tuvan == 'hotline' ? <>
                        <h3 className='text-lg font-bold text-[#49A947]'>Hotline: 090909090</h3>
                        <span className='text-sm text-center'>Bạn vui lòng liên hệ số hotline bên trên để được tư vấn trực tiếp hoặc gửi yêu cầu tại đây. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất! Xin cảm ơn. </span>
                        <button onClick={() => setTuvan('guiyeucau')} className='w-full text-sm py-2 px-6 hover:opacity-80 h-[auto] rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Tư vấn thêm</button>
                    </> :

                        <div onClick={(e) => e.stopPropagation()} className='bg-white rounded-lg flex flex-col items-center p-4 gap-4 '>
                            <h3 className='text-lg font-bold text-[#49A947]'>GỬI YÊU CẦU</h3>
                            <Input placeholder='Họ và tên' type='text' value={formYeucau.hoten} onChange={(e) => setFormYeucau({ ...formYeucau, hoten: e })}></Input>
                            <Input placeholder='SĐT' value={formYeucau.sdt} onChange={(e) => setFormYeucau({ ...formYeucau, sdt: e })}></Input>
                            <div className='w-[300px] p-2 border border-[#D9D9D9] rounded-lg'>
                                <select className='w-full text-sm text-[grey] h-[100%] outline-none hover:cursor-pointer' value={formYeucau.lop} onChange={(e) => setFormYeucau({ ...formYeucau, lop: e.target.value })}>
                                    <option value=''>Lớp</option>
                                    {danhsachlop.map((lop) => {
                                        return (
                                            <option key={lop.id} value={lop.id}>{lop.tenlop}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            <textarea rows={4}  className="border-[#D9D9D9] h-32 rounded-md  p-2  w-full" placeholder='Nội dung' type='text' value={formYeucau.noidung} onChange={(e) => setFormYeucau({ ...formYeucau, noidung: e.target.value })}></textarea>

                            <button onClick={() => setTuvan('guiyeucau')} className='w-full text-sm py-4 px-6 hover:opacity-80 h-[auto] rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Tư vấn thêm</button>
                        </div>

                    }
                </div></PopUp>
            }
            <Header></Header>
            <div className='w-[80%] mx-auto flex bg-[#0678BD] p-[10px]'>
                <h1 className='uppercase text-white text-lg'>
                    ĐĂNG KÝ KHÓA HỌC CHỨNG CHỈ TOEIC
                </h1>
            </div>
            <div className='w-[80%] py-5 mt-[40px] mx-auto flex justify-between relative gap-4 max-lg:flex-col'>
                <div className='basis-[100%] border p-4 max-lg:basis-[100%] max-lg:block lg:hidden'>
                    <div className='w-full flex flex-col items-center gap-4'>
                        <Image src={khoahoc} className='w-[100%] object-cover' alt='khoahoc'></Image>
                        <div className='flex flex-col items-center  w-fit gap-4 mt-4'>
                            <div className='flex items-center gap-2 '>
                                <span className='text-sm'>Giá khóa học</span>
                                <span className='text-[48px] leading-none'>2.499.999đ</span>
                            </div>
                            <div className='text-right w-full'>2.800.000 đ</div>
                            <div className='w-full flex items-center justify-end gap-2 text-[#DB4B27] text-sm'>1:45:60 <FontAwesomeIcon icon={faClock} className='w-[14px]'></FontAwesomeIcon> </div>
                            <button onClick={() => setTuvan('hotline')} className='w-full text-sm py-4 px-6 hover:opacity-80 h-[auto] rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Tư vấn thêm</button>
                            <button onClick={() => setMode('dangky')} className='w-full text-sm py-4 px-6 hover:opacity-80 h-[auto] rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Đăng ký ngay</button>
                            <Image src={vanhien} className='w-[100%] object-cover' alt='vanhien'></Image>
                            <div id='muctieukhoahoc' className='relative w-full'>
                                <span className=' text-[32px] text-[#49A947] font-bold hover:cursor-pointer flex items-center justify-between' onClick={() => setDropdownListStatus({ ...dropdownListStatus, muctieu: !dropdownListStatus['muctieu'] })}>1. Mục tiêu khóa học
                                    <FontAwesomeIcon icon={dropdownListStatus['muctieu'] ? faArrowUp : faArrowDown} className='w-[32px] text-[18px]'></FontAwesomeIcon>
                                </span>
                                <div className=' w-full bg-white z-100 rounded-md px-2' style={{ display: dropdownListStatus['muctieu'] ? 'block' : 'none' }} id='muctieudropdown'>
                                    <span className='text-sm'>
                                        Khóa học là một trải nghiệm học tập tuyệt vời mà tôi rất hài lòng khi tham gia. Giảng viên có chuyên môn cao và truyền đạt kiến thức một cách rõ ràng, dễ hiểu. Nội dung khóa học được thiết kế hợp lý, từ lý thuyết đến thực hành, giúp tôi nắm vững kiến thức một cách hiệu quả. Các bài tập thực hành thú vị và liên quan thực tế, cho phép tôi áp dụng ngay những gì đã học.
                                    </span>
                                </div>
                            </div>
                            <div id='noidungdaotao' className='relative w-full'>
                                <span className=' text-[32px] text-[#49A947] font-bold hover:cursor-pointer flex items-center justify-between' onClick={() => setDropdownListStatus({ ...dropdownListStatus, noidungdaotao: !dropdownListStatus['noidungdaotao'] })}>2. Nội dung đào tạo
                                    <FontAwesomeIcon icon={dropdownListStatus['noidungdaotao'] ? faArrowUp : faArrowDown} className='w-[32px] text-[18px]'></FontAwesomeIcon>
                                </span>
                                <div className=' w-full bg-white z-100 rounded-md px-2' style={{ display: dropdownListStatus['noidungdaotao'] ? 'block' : 'none' }} id='noidungdaotaodropdown'>
                                    <span className='text-sm'>
                                        Khóa học là một trải nghiệm học tập tuyệt vời mà tôi rất hài lòng khi tham gia. Giảng viên có chuyên môn cao và truyền đạt kiến thức một cách rõ ràng, dễ hiểu. Nội dung khóa học được thiết kế hợp lý, từ lý thuyết đến thực hành, giúp tôi nắm vững kiến thức một cách hiệu quả. Các bài tập thực hành thú vị và liên quan thực tế, cho phép tôi áp dụng ngay những gì đã học.
                                    </span>
                                </div>
                            </div>
                            <div id='doituong' className='relative w-full'>
                                <span className=' text-[32px] text-[#49A947] font-bold hover:cursor-pointer flex items-center justify-between' onClick={() => setDropdownListStatus({ ...dropdownListStatus, doituong: !dropdownListStatus['doituong'] })}>3. Đối tượng
                                    <FontAwesomeIcon icon={dropdownListStatus['doituong'] ? faArrowUp : faArrowDown} className='w-[32px] text-[18px]'></FontAwesomeIcon>
                                </span>
                                <div className=' w-full bg-white z-100 rounded-md px-2' style={{ display: dropdownListStatus['doituong'] ? 'block' : 'none' }} id='doituongdropdown'>
                                    <span className='text-sm'>
                                        Khóa học là một trải nghiệm học tập tuyệt vời mà tôi rất hài lòng khi tham gia. Giảng viên có chuyên môn cao và truyền đạt kiến thức một cách rõ ràng, dễ hiểu. Nội dung khóa học được thiết kế hợp lý, từ lý thuyết đến thực hành, giúp tôi nắm vững kiến thức một cách hiệu quả. Các bài tập thực hành thú vị và liên quan thực tế, cho phép tôi áp dụng ngay những gì đã học.
                                    </span>
                                </div>
                            </div>

                            <div id='lichkhaigiang' className='relative w-full'>
                                <span className=' text-[32px] text-[#49A947] font-bold hover:cursor-pointer flex items-center justify-between' onClick={() => setDropdownListStatus({ ...dropdownListStatus, lichkhaigiang: !dropdownListStatus['lichkhaigiang'] })}>4. Lịch khai giảng
                                    <FontAwesomeIcon icon={dropdownListStatus['lichkhaigiang'] ? faArrowUp : faArrowDown} className='w-[32px] text-[18px]'></FontAwesomeIcon>
                                </span>
                                <div className=' w-full bg-white z-100 rounded-md px-2' style={{ display: dropdownListStatus['lichkhaigiang'] ? 'block' : 'none' }} id='lichkhaigiangdropdown'>
                                    <span className='text-sm'>
                                        Định kỳ hằng tháng
                                    </span>
                                </div>
                            </div>

                            <div id='hocphi' className='relative w-full'>
                                <span className=' text-[32px] text-[#49A947] font-bold hover:cursor-pointer flex items-center justify-between' onClick={() => setDropdownListStatus({ ...dropdownListStatus, hocphi: !dropdownListStatus['hocphi'] })}>5. Học phí
                                    <FontAwesomeIcon icon={dropdownListStatus['hocphi'] ? faArrowUp : faArrowDown} className='w-[32px] text-[18px]'></FontAwesomeIcon>
                                </span>
                                <div className='px-4 w-full bg-white z-100 rounded-md' style={{ display: dropdownListStatus['hocphi'] ? 'block' : 'none' }} id='hocphidropdown'>
                                    <ol>
                                        <li className='text-sm list-disc'>Starter</li>
                                        <li className='text-sm list-disc'>Immediate</li>
                                        <li className='text-sm list-disc'>Advance</li>
                                    </ol>
                                </div>
                            </div>
                            <div id='lienhe' className='relative w-full'>
                                <span className=' text-[32px] text-[#49A947] font-bold hover:cursor-pointer flex items-center justify-between' onClick={() => setDropdownListStatus({ ...dropdownListStatus, lienhe: !dropdownListStatus['lienhe'] })}> 6. Liên hệ
                                    <FontAwesomeIcon icon={dropdownListStatus['lienhe'] ? faArrowUp : faArrowDown} className='w-[32px] text-[18px]'></FontAwesomeIcon>
                                </span>
                                <div className=' w-full bg-white z-100 rounded-md px-2' style={{ display: dropdownListStatus['lienhe'] ? 'block' : 'none' }} id='lienhedropdown'>
                                    <span className='text-sm'>
                                        Định kỳ hằng tháng
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    mode == 'chitiet' ? (
                        <div className='basis-[66%] max-lg:basis-[100%]'>
                            <div className='w-full' id='muctieukhoahoc'>
                                <h2 className='text-[32px] font-bold uppercase text-[#49A947]'>Mục tiêu khóa học</h2>
                                <p className='text-[14px] mt-6'>Để đánh giá được khóa học đó có phù hợp với nhân viên hay không, bạn sẽ xem xét những mục nào nêu trên? Lời khuyên ở đây, đó là bạn nên tập trung vào mục 2, 3, 4 và 5. Chúng ta sẽ xem xét tổng quan về từng mục để hiểu lý do vì sao chúng ta cần đánh giá các nội dung đó khi nhận được thông tin giới thiệu khóa học, hay chúng ta là người viết ra một mẫu giới thiệu khóa học cho các nhân sự trong công ty của mình. Sau khi đã đề cập sơ lược về các yếu tố quan trọng khi xây dựng một khóa học. Tiếp đến, tôi sẽ chia sẻ thêm về cách để đặt ra Mục Tiêu Đào Tạo hiệu quả. <br />
                                    Để đánh giá được khóa học đó có phù hợp với nhân viên hay không, bạn sẽ xem xét những mục nào nêu trên? Lời khuyên ở đây, đó là bạn nên tập trung vào mục 2, 3, 4 và 5. Chúng ta sẽ xem xét tổng quan về từng mục để hiểu lý do vì sao chúng ta cần đánh giá các nội dung đó khi nhận được thông tin giới thiệu khóa học, hay chúng ta là người viết ra một mẫu giới thiệu khóa học cho các nhân sự trong công ty của mình. Sau khi đã đề cập sơ lược về các yếu tố quan trọng khi xây dựng một khóa học. Tiếp đến, tôi sẽ chia sẻ thêm về cách để đặt ra Mục Tiêu Đào Tạo hiệu quả.<br />
                                    Để đánh giá được khóa học đó có phù hợp với nhân viên hay không, bạn sẽ xem xét những mục nào nêu trên? Lời khuyên ở đây, đó là bạn nên tập trung vào mục 2, 3, 4 và 5. Chúng ta sẽ xem xét tổng quan về từng mục để hiểu lý do vì sao chúng ta cần đánh giá các nội dung đó khi nhận được thông tin giới thiệu khóa học, hay chúng ta là người viết ra một mẫu giới thiệu khóa học cho các nhân sự trong công ty của mình. Sau khi đã đề cập sơ lược về các yếu tố quan trọng khi xây dựng một khóa học. Tiếp đến, tôi sẽ chia sẻ thêm về cách để đặt ra Mục Tiêu Đào Tạo hiệu quả.</p>
                            </div>

                            <div className='mt-10 w-full' id='noidungdaotao'>
                                <h2 className='text-[32px] font-bold uppercase text-[#49A947]'>Nội dung đào tạo</h2>
                                <table className="w-full  mt-6 border-separate">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 mr-4 bg-[#F5FAF7] text-left text-xs font-medium text-gray-500 uppercase">STT</th>

                                            <th className="px-6 py-3 bg-[#F5FAF7] text-left text-xs font-medium text-gray-500 uppercase">Nội
                                                dung</th>
                                            <th className="px-6 py-3 bg-[#F5FAF7] text-right text-xs font-medium text-gray-500 uppercase">Thời gian</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white ">
                                        {
                                            [1, 2, 3, 4].map((value, index) => <tr key={index} >
                                                <td className='text-[12px] p-4 text-center' >1</td>
                                                <td className=' p-4 text-left'>
                                                    <div className='text-sm'>Explore
                                                        any interest or trending topic, take prerequisites, and advance your skills</div>

                                                </td>
                                                <td className='text-[12px] p-4 text-center'>15/5/2024</td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>

                            <div className='mt-10 flex flex-col w-full items-center gap-4' id='trainghiem'>
                                <h3 className='font-bold text-[32px]'>Trải nghiệm của bạn với khóa học</h3>
                                <div className='star w-fit flex gap-2'>
                                    <FontAwesomeIcon icon={faStar} className='text-[50px] text-[#DB4B27]'></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar} className='text-[50px] text-[#DB4B27]'></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar} className='text-[50px] text-[#DB4B27]'></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar} className='text-[50px] text-[#DB4B27]'></FontAwesomeIcon>
                                    <Image src={Sao} alt="" className='w-[50px] h-[50px] '></Image>
                                </div>
                                <h2 className='text-[32px] font-bold uppercase text-[#49A947]'>TRẢI NGHIỆM CỦA NGƯỜI HỌC</h2>
                                <div className='flex justify-between gap-4 w-full items-stretch'>
                                    <div className='basis-3/4 p-4  border-[#0678BD] border-[1px] grow rounded-lg'>
                                        <input className='text-sm w-[100%] h-[100%] outline-none' placeholder='Bình luận...' type='text' ></input>
                                    </div>
                                    <button className='text-sm p-2 px-6 hover:opacity-80 h-[auto] rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Đăng</button>
                                </div>
                                <div className='w-full grid grid-cols-2 max-md:grid-cols-1 gap-4'>
                                    {
                                        [1, 2, 3, 4].map((item, index) => {
                                            return (
                                                <div key={index} className='flex flex-col gap-4 mt-4'>
                                                    <div className='flex w-full justify-between'>
                                                        <span className='text-sm font-bold'>Tuyệt vời</span>
                                                        <span className='text-sm text-[#292D32]'>Phạm Hoàng Duy</span>
                                                    </div>
                                                    <div className='w-full flex justify-between'>
                                                        <div className='star w-fit flex gap-2'>
                                                            <FontAwesomeIcon icon={faStar} className='w-[20px] text-[#DB4B27]'></FontAwesomeIcon>
                                                            <FontAwesomeIcon icon={faStar} className='w-[20px] text-[#DB4B27]'></FontAwesomeIcon>
                                                            <FontAwesomeIcon icon={faStar} className='w-[20px] text-[#DB4B27]'></FontAwesomeIcon>
                                                            <FontAwesomeIcon icon={faStar} className='w-[20px] text-[#DB4B27]'></FontAwesomeIcon>
                                                            <Image src={Sao} alt="" className='w-[20px] h-[20px] '></Image>
                                                        </div>
                                                        <span className='text-sm text-[#292D32]'>6 tháng trước</span>
                                                    </div>
                                                    <span className='text-sm'>Khóa học là một trải nghiệm học tập tuyệt vời mà tôi rất hài lòng khi tham gia. Giảng viên có chuyên môn cao và truyền đạt kiến thức một cách rõ ràng, dễ hiểu. Nội dung khóa học được thiết kế hợp lý, từ lý thuyết đến thực hành, giúp tôi nắm vững kiến thức một cách hiệu quả. Các bài tập thực hành thú vị và liên quan thực tế, cho phép tôi áp dụng ngay những gì đã học.</span>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                                <button className='text-sm p-2 px-6 hover:opacity-80 h-[auto] rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Xem thêm</button>
                            </div>
                        </div>
                    ) : (
                        <div className='basis-[66%] max-lg:basis-[100%]'>
                            <div className='w-full flex flex-col items-center gap-[80px]' id='muctieukhoahoc'>
                                <div className='p-4 flex flex-col items-center gap-4 border-[#D9D9D9] border-[1px] rounded-lg'>
                                    <h2 className='text-[32px] font-bold uppercase text-[#49A947]'>ĐIỀN THÔNG TIN</h2>
                                    <Input placeholder='Họ tên' type='text' onChange={(e) => setForm({ ...form, name: e })} value={form.name}></Input>
                                    <Input placeholder='Email' type='email' onChange={(e) => setForm({ ...form, email: e })} value={form.email}></Input>
                                    <Input placeholder='Số điện thoại' type='tel' onChange={(e) => setForm({ ...form, phone: e })} value={form.phone}></Input>

                                    <button className='w-[300px] text-sm p-2 px-6 hover:opacity-80 h-[auto] rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>
                                        <span>Đơn vị đào tạo <br></br> Viện Doanh Trí</span>
                                    </button>
                                    <button className='text-sm p-2 px-6 hover:opacity-80 h-[auto] rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>ĐĂNG KÝ</button>
                                </div>
                                <div className='grid max-md:grid-cols-1 grid-cols-2 gap-4 items-stretch'>
                                    <div className='border-t-[1px] border-r-[1px] w-full flex items-stretch gap-2 mb-2'>
                                        <Image src={khoahoc} className='w-[30%] object-cover' alt='khoahoc'></Image>
                                        <div className='flex flex-col items-center  basis-[70%] gap-4 py-4'>
                                            <span className='text-sm text-left w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</span>
                                            <span id='tacgia' className='w-full text-right text-sm'>Katleen B</span>
                                        </div>
                                    </div>
                                    <div className='border-t-[1px] w-full flex items-stretch gap-2 mb-2'>
                                        <Image src={khoahoc} className='w-[30%] object-cover' alt='khoahoc'></Image>
                                        <div className='flex flex-col items-center  basis-[70%] gap-4 py-4'>
                                            <span className='text-sm text-left w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</span>
                                            <span id='tacgia' className='w-full text-right text-sm'>Katleen B</span>
                                        </div>
                                    </div>
                                    <div className='border-t-[1px] w-full flex items-stretch gap-2 mb-2'>
                                        <Image src={khoahoc} className='w-[30%] object-cover' alt='khoahoc'></Image>
                                        <div className='flex flex-col items-center  basis-[70%] gap-4 py-4'>
                                            <span className='text-sm text-left w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</span>
                                            <span id='tacgia' className='w-full text-right text-sm'>Katleen B</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className='basis-[33%] border p-4 max-lg:hidden'>
                    <div className='w-full flex flex-col items-center gap-4'>
                        <Image src={khoahoc} className='w-[100%] object-cover' alt='khoahoc'></Image>
                        <div className='flex flex-col items-center  w-fit gap-4 mt-4'>
                            <div className='flex items-center gap-2 '>
                                <span className='text-sm'>Giá khóa học</span>
                                <span className='text-[48px] leading-none'>2.499.999đ</span>
                            </div>
                            <div className='text-right w-full'>2.800.000 đ</div>
                            <div className='w-full flex items-center justify-end gap-2 text-[#DB4B27] text-sm'>1:45:60 <FontAwesomeIcon icon={faClock} className='w-[14px]'></FontAwesomeIcon> </div>
                            <button onClick={() => setTuvan('hotline')} className='w-full text-sm py-4 px-6 hover:opacity-80 h-[auto] rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Tư vấn thêm</button>
                            <button onClick={() => setMode('dangky')} className='w-full text-sm py-4 px-6 hover:opacity-80 h-[auto] rounded-md text-white flex items-center justify-center border border-[#0678BD] bg-[#0678BD] '>Đăng ký ngay</button>
                            <Image src={vanhien} className='w-[100%] object-cover' alt='vanhien'></Image>
                            <div id='muctieukhoahoc' className='relative w-full'>
                                <span className=' text-[32px] text-[#49A947] font-bold hover:cursor-pointer flex items-center justify-between' onClick={() => setDropdownListStatus({ ...dropdownListStatus, muctieu: !dropdownListStatus['muctieu'] })}>1. Mục tiêu khóa học
                                    <FontAwesomeIcon icon={dropdownListStatus['muctieu'] ? faArrowUp : faArrowDown} className='w-[32px] text-[18px]'></FontAwesomeIcon>
                                </span>
                                <div className=' w-full bg-white z-100 rounded-md px-2' style={{ display: dropdownListStatus['muctieu'] ? 'block' : 'none' }} id='muctieudropdown'>
                                    <span className='text-sm'>
                                        Khóa học là một trải nghiệm học tập tuyệt vời mà tôi rất hài lòng khi tham gia. Giảng viên có chuyên môn cao và truyền đạt kiến thức một cách rõ ràng, dễ hiểu. Nội dung khóa học được thiết kế hợp lý, từ lý thuyết đến thực hành, giúp tôi nắm vững kiến thức một cách hiệu quả. Các bài tập thực hành thú vị và liên quan thực tế, cho phép tôi áp dụng ngay những gì đã học.
                                    </span>
                                </div>
                            </div>
                            <div id='noidungdaotao' className='relative w-full'>
                                <span className=' text-[32px] text-[#49A947] font-bold hover:cursor-pointer flex items-center justify-between' onClick={() => setDropdownListStatus({ ...dropdownListStatus, noidungdaotao: !dropdownListStatus['noidungdaotao'] })}>2. Nội dung đào tạo
                                    <FontAwesomeIcon icon={dropdownListStatus['noidungdaotao'] ? faArrowUp : faArrowDown} className='w-[32px] text-[18px]'></FontAwesomeIcon>
                                </span>
                                <div className=' w-full bg-white z-100 rounded-md px-2' style={{ display: dropdownListStatus['noidungdaotao'] ? 'block' : 'none' }} id='noidungdaotaodropdown'>
                                    <span className='text-sm'>
                                        Khóa học là một trải nghiệm học tập tuyệt vời mà tôi rất hài lòng khi tham gia. Giảng viên có chuyên môn cao và truyền đạt kiến thức một cách rõ ràng, dễ hiểu. Nội dung khóa học được thiết kế hợp lý, từ lý thuyết đến thực hành, giúp tôi nắm vững kiến thức một cách hiệu quả. Các bài tập thực hành thú vị và liên quan thực tế, cho phép tôi áp dụng ngay những gì đã học.
                                    </span>
                                </div>
                            </div>
                            <div id='doituong' className='relative w-full'>
                                <span className=' text-[32px] text-[#49A947] font-bold hover:cursor-pointer flex items-center justify-between' onClick={() => setDropdownListStatus({ ...dropdownListStatus, doituong: !dropdownListStatus['doituong'] })}>3. Đối tượng
                                    <FontAwesomeIcon icon={dropdownListStatus['doituong'] ? faArrowUp : faArrowDown} className='w-[32px] text-[18px]'></FontAwesomeIcon>
                                </span>
                                <div className=' w-full bg-white z-100 rounded-md px-2' style={{ display: dropdownListStatus['doituong'] ? 'block' : 'none' }} id='doituongdropdown'>
                                    <span className='text-sm'>
                                        Khóa học là một trải nghiệm học tập tuyệt vời mà tôi rất hài lòng khi tham gia. Giảng viên có chuyên môn cao và truyền đạt kiến thức một cách rõ ràng, dễ hiểu. Nội dung khóa học được thiết kế hợp lý, từ lý thuyết đến thực hành, giúp tôi nắm vững kiến thức một cách hiệu quả. Các bài tập thực hành thú vị và liên quan thực tế, cho phép tôi áp dụng ngay những gì đã học.
                                    </span>
                                </div>
                            </div>

                            <div id='lichkhaigiang' className='relative w-full'>
                                <span className=' text-[32px] text-[#49A947] font-bold hover:cursor-pointer flex items-center justify-between' onClick={() => setDropdownListStatus({ ...dropdownListStatus, lichkhaigiang: !dropdownListStatus['lichkhaigiang'] })}>4. Lịch khai giảng
                                    <FontAwesomeIcon icon={dropdownListStatus['lichkhaigiang'] ? faArrowUp : faArrowDown} className='w-[32px] text-[18px]'></FontAwesomeIcon>
                                </span>
                                <div className=' w-full bg-white z-100 rounded-md px-2' style={{ display: dropdownListStatus['lichkhaigiang'] ? 'block' : 'none' }} id='lichkhaigiangdropdown'>
                                    <span className='text-sm'>
                                        Định kỳ hàng tháng
                                    </span>
                                </div>
                            </div>

                            <div id='hocphi' className='relative w-full'>
                                <span className=' text-[32px] text-[#49A947] font-bold hover:cursor-pointer flex items-center justify-between' onClick={() => setDropdownListStatus({ ...dropdownListStatus, hocphi: !dropdownListStatus['hocphi'] })}>5. Học phí
                                    <FontAwesomeIcon icon={dropdownListStatus['hocphi'] ? faArrowUp : faArrowDown} className='w-[32px] text-[18px]'></FontAwesomeIcon>
                                </span>
                                <div className='px-4 w-full bg-white z-100 rounded-md' style={{ display: dropdownListStatus['hocphi'] ? 'block' : 'none' }} id='hocphidropdown'>
                                    <ol>
                                        <li className='text-sm list-disc'>Starter</li>
                                        <li className='text-sm list-disc'>Immediate</li>
                                        <li className='text-sm list-disc'>Advance</li>
                                    </ol>
                                </div>
                            </div>
                            <div id='lienhe' className='relative w-full'>
                                <span className=' text-[32px] text-[#49A947] font-bold hover:cursor-pointer flex items-center justify-between' onClick={() => setDropdownListStatus({ ...dropdownListStatus, lienhe: !dropdownListStatus['lienhe'] })}> 6. Liên hệ
                                    <FontAwesomeIcon icon={dropdownListStatus['lienhe'] ? faArrowUp : faArrowDown} className='w-[32px] text-[18px]'></FontAwesomeIcon>
                                </span>
                                <div className=' w-full bg-white z-100 rounded-md px-2' style={{ display: dropdownListStatus['lienhe'] ? 'block' : 'none' }} id='lienhedropdown'>
                                    <span className='text-sm'>
                                        Định kỳ hằng tháng
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}





export default Khoahoc