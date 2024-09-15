import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import banner from "../img/banner.jpg"

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Home = ({ focusInput }) => {


    return (
        <>
            <div className='banner-background'>
                <img src={banner} alt="" />
                <div className="mask"></div>
                <div className="inner-content">
                    <TypeAnimation
                        sequence={[
                            'BE shaan',
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


            <div className="bottom-section">
                <div className="main-container">
                    <div className="section-heading">
                        <h3>SOLUTIONS FOR MOVING BETTER <br /> & FEELING A HEALTHIER</h3>
                    </div>
                    <div className="content-box">
                        <div className="card-box-one">
                            <h1>Yoga is a Mirror</h1>
                            <p>to look at ourself from within</p>
                        </div>
                        <div className="card-box-two">
                            <h1>
                                PERSONAL TRAINING</h1>
                            <p>You may not like lit, but be ready to struggle for it.</p>
                        </div>
                    </div>
                </div>
            </div>


            <footer>
                <div className="icon-box">
                    <FacebookOutlinedIcon />
                </div>
                <div className="icon-box">
                    <InstagramIcon />
                </div>
                <div className="icon-box">
                    <TwitterIcon />
                </div>
                <div className="icon-box">
                    <YouTubeIcon />
                </div>
            </footer>
        </>
    )
}

export default Home
