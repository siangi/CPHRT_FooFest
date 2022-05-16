import React from 'react'

function Footer() {
  return (
    <footer className='bg-darkmode_black h-20 p-3 flex flex-row justify-between items-center'>
        <div className='flex flex-row h-3/4 justify-start'>
            <a title='RagnaRocks Facebook Page' href='https://www.facebook.com'>
                <img src={process.env.PUBLIC_URL + "/socialMedia/facebook.svg"} alt=""
                className="h-full" />
            </a>
            <a title='RagnaRocks Instagram Page' href='https://www.instagram.com'>
                <img src={process.env.PUBLIC_URL + "/socialMedia/Instagram.svg"} alt=""
                className="h-full" />
            </a>
        </div>
        <div className='w-full h-full'>
            <img src={process.env.PUBLIC_URL + "/LogoText.svg"} alt="" className="h-full" />
        </div>        
        <div className='flex flex-row w-fit h-3/4 justify-end'>
            <a title='Sponsor: RedBull' href='https://www.redbull.com'>
                <img src={process.env.PUBLIC_URL + "/sponsors/Dominos.png"} alt=""
                className='h-full w-auto'></img>
            </a>
            <a title='Sponsor: Dominos' href='https://www.dominos.dk/'>
                <img src={process.env.PUBLIC_URL + "/sponsors/Dominos.png"} alt=""
                className='h-full w-auto'></img>
            </a>
            <a title='Sponsor: Tuborg' href='https://www.tuborg.dk/'>
                <img src={process.env.PUBLIC_URL + "/sponsors/Tuborg.png"} alt=""
                className='h-full w-auto'></img>
            </a>
        </div>
    </footer>
  )
}

export default Footer