import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import banner from "../img/banner.jpg"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


const Home = ({ focusInput }) => {


    return (
        <>
            <div className='banner-background'>
                <img src={banner} alt="" />
                <div className="mask"></div>
                <div className="inner-content">
                    <TypeAnimation
                        sequence={[
                            'BE STRONG',
                            1000,
                            'BE FIT',
                            1000,
                            'BE SUCCESS',
                            1000,
                            'BE HEALTHY',
                            1000,
                        ]}
                        speed={10}
                        className='textanimation'
                        repeat={Infinity}
                    />
                    <div>
                        <a className='search-button' href="#" onClick={focusInput}>Search for the video <PlayCircleIcon className='play-icon' /></a>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
