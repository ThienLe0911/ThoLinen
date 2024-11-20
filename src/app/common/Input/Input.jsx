import React from 'react'

function Input({ placeholder, value, onChange, type, style }) {
    return (
        <div className='w-[300px] p-2 border border-[#D9D9D9] rounded-lg'>
            <input className={'text-sm w-[100%] h-[100%] outline-none'+ ' ${style}'} placeholder={placeholder} type={type} value={value} onChange={(e) => {onChange(e.target.value)}} ></input>
        </div>
    )
}

export default Input