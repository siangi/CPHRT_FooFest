import React from 'react'

function Footer() {
  return (
    <footer className='bg-darkmode_black h-40 md:h-24 p-3 md:px-6 grid grid-rows-2 grid-cols-4 gap-2 md:flex md:justify-between md:items-center'>
        <div className='flex flex-row md:justify-start items-center gap-3 row-start-2 col-start-4 md:h-full md:w-1/4'>
            <a title='RagnaRocks Facebook Page' href='https://www.facebook.com' className='h-full'>
                <img src={process.env.PUBLIC_URL + "/socialMedia/facebook.svg"} alt=""
                className="h-full" />
            </a>
            <a title='RagnaRocks Instagram Page' href='https://www.instagram.com' className='h-full'>
                <img src={process.env.PUBLIC_URL + "/socialMedia/Instagram.svg"} alt=""
                className="h-full" />
            </a>
        </div>
            <img src={process.env.PUBLIC_URL + "/LogoText.svg"} alt="" className="h-full row-start-1 col-start-1 col-span-4 self-center justify-self-center" />
        <div className='flex flex-row md:justify-end gap-1 md:gap-3 row-start-2 col-start-1 col-span-3 md:h-full md:w-1/4    '>
            <img src={process.env.PUBLIC_URL + "/sponsors/RedBullSmall.png"} alt="sponsor: Red Bull"
                className="w-1/3 h-auto md:w-auto md:h-full" />
            <img src={process.env.PUBLIC_URL + "/sponsors/Dominos.png"} alt="sponsor: Red Bull"
                className="max-w-1/3 h-auto md:w-auto md:h-full" />
            <img src={process.env.PUBLIC_URL + "/sponsors/Tuborg.png"} alt="sponsor: Red Bull"
                className="w-1/3 h-auto md:w-auto md:h-full" />
        </div>      
    </footer>
  )
}

export default Footer