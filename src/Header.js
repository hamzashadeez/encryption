import React from 'react'
import Menu from './menu.png'

function Header() {
    return (
        <div className='margin-auto py-2 px-4 mb-4 shadow-sm d-flex align-items-center justify-content-between bg-white'>
            <h4>Encryption Software</h4>
             <img alt='' src={Menu} style={{objectFit: 'contain', maxWidth: "25px"}} />
         </div>
    )
}

export default Header
