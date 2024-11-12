import React from 'react'
import Logo from './logo'
const Header = () => {
  return (
    <header className='h-26 shadow-md '>
        <div className='h-full flex container mx-auto items-center px-4 justify-between'>
            <div className=''>
                <Logo w={100} h={60} />
            </div>

            <div className=''>
                <input type='text' placeholder='search product here...' />
            </div>


            <div className=''>
                User Icon
            </div>



        </div>

    </header>
  )
}

export default Header
