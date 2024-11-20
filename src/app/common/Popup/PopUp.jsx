import React from 'react'

function PopUp({ closePopup,children  }) {
    const handleclosePopup = (e) => {
        closePopup();
    }

    return (
        <div onClick={(e)=>handleclosePopup(e)} className='w-[100vw] h-[100vh] fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50'>
            {
                children 
            }
        </div>
    )
}

export default PopUp