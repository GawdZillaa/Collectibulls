import React, { useRef, useEffect, useState } from 'react';
import { AppBar, Alert } from '@mui/material';
import { useHistory } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { alpha, Timeline } from '@mui/lab';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import Slider from "react-slick";
import { Snackbar } from '@mui/material';

import LandingVideo from '../../assets/videos/3dLanding.mp4'
import PartnerVideo from '../../assets/videos/partnerv4.mp4'
import SkateBanner from '../../assets/banners/skatebanner.jpeg'
import TestBanner from '../../assets/banners/testbanner.png'
import TestBanner1400 from '../../assets/banners/testbanner1400.png'
import Svg0 from '../../assets/banners/svg5.svg'

import ColLogo from '../../assets/logo/collogo1.png'

import Gift from '../../assets/icons/gift.png'
import Arcade from '../../assets/icons/arcade.png'
import Love from '../../assets/icons/love.png'
import Rocket from '../../assets/icons/rocket.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Landing.css"
import { Gif } from '@mui/icons-material';
const Landing = () => {
    const history = useHistory();

    const [dropNav, setDropNav]= useState(false);
    const [error, setError]= useState(null);
    const scrollRef = useRef(null)

    const onScroll = (e) => {
        console.log(e)
        const scrollY = window.scrollY 
        const scrollTop = scrollRef.current.scrollTop
        console.log(` ${scrollTop > 20}  ${scrollTop}`)

        if(!dropNav&&Number(scrollTop)>45){
            setDropNav(true)
        }else if(dropNav&&Number(scrollTop)<45){
            setDropNav(false)
        }
    }
     
    return (
        <div
            style={{
                height:'100vh',
                width:'100%',
                backgroundColor:'white',
                overflowY:'auto'
            }}
            ref={scrollRef}
            onScroll={onScroll}
        >
            <HideOnScroll
                dropNav={dropNav}
            >
                <AppBar
                    style={{
                        backgroundColor:'black',
                        // minHeight:'128px',
                        justifyContent:'center',
                        display:'flex',
                        // height:100
                    }}
                    className="appBar"
                >
                    <Toolbar>
                        <p
                            style={{
                                fontFamily:'Bungee',
                                // fontSize:40,
                                fontWeight:'bolder',
                                color:'white'
                            }}
                            className="navTitle"
                        >
                            Collectibulls
                        </p>
                        
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <div  style={{height:1}}id="back-to-top-anchor" />
             
                <div
                    style={{
                        width:'100%',
                        backgroundColor:'#1a1a1a',
                        display:'flex',
                        flexDirection:'column',
                        position:'relative'
                    }}
                >
                    <div
                        style={{
                            // height:'128px',
                            backgroundColor:'#1a1a1a'
                        }}
                        className="appBar"
                        id="spacer1"
                    >

                    </div>
                    <div
                        style={{
                            position:'absolute',
                            top:0,
                            left:0,
                            height: `calc(100vh)`,
                            width:'100%',
                            backgroundColor:'#0000004D',
                            display:'flex',
                            flexDirection:'column'
                        }}
                    >
                        <div
                            style={{
                                height:'100%',
                                width:'100%',
                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <button 
                                style={{
                                    cursor:'pointer', 
                                    zIndex:100,
                                    fontFamily:'Bungee'
                                }} 
                                className="fancyButton1"
                                onClick={() => setError('Mint comming soon :D')}
                            >
                                Mint
                            </button>
                            <button 
                                style={{
                                    cursor:'pointer', 
                                    zIndex:100,
                                    fontFamily:'Bungee',
                                    marginLeft:10,
                                    color:'black'
                                }} 
                                className="fancyButton4"
                                onClick={() => history.push('/about')}
                            >
                                About
                            </button>
                        </div>
                        
                    </div>

                    <video 
                        autoPlay
                        muted
                        loop
                        id="myVideo"
                        style={{
                            height:'calc(100vh - 15vh)'

                        }}
                          className="landingVideo"
                    >
                    <source src={PartnerVideo} type="video/mp4"/>
                        Your browser does not support HTML5 video.
                    </video>


                </div>
                {/* <TimeLine/> */}
                <div
                    style={{
                        width:'100%',
                        overflowX:'hidden',
                        backgroundColor:'white',
                        margin:0
                    }}
                    className="timelineOuter"
                >
                    <div
                        style={{
                            fontSize:40,
                            padding: (0, 20, 0, 20)
                        }}
                    >
                        <h1
                            className="roadMapTitle"
                        >
                            Roadmap
                        </h1>
                        
                    </div>
                    
                    <TimeLine2/>
                </div>

            <div
                style={{
                    height:300,
                    width:'100%',
                    backgroundColor:'black',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    paddingTop: 50
                    
                }}
            >

                <img 
                    src={SkateBanner} 
                    style={{
                        height:140,
                        width:'60%'
                    }}
                />

            </div>
{/* 
            <div
                style={{
                    height:300,
                    width:'100%',
                    backgroundColor:'black',
                    // backgroundImage: `url(${SkateBanner})`,
                    // backgroundPosition: 'center',
                    // backgroundSize: '100%',
                    // backgroundColor:'orange'
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    paddingTop: 50,
                    
                }}
                // className="bannerMod"
            >

                <div
                    style={{
                        backgroundColor:'red',
                        // height:'266px',
                        // width: '1090px',
                        height:`calc(90vw / 10)`,
                        width: '90%',
                        marginTop:100,
                        // aspectRatio: 10 / 1
                    }}
                />
            </div> */}


            {/* <div
                style={{
                    height:300,
                    width:'100%',
                    backgroundColor:'black',
                    // backgroundImage: `url(${SkateBanner})`,
                    // backgroundPosition: 'center',
                    // backgroundSize: '100%',
                    // backgroundColor:'orange'
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    paddingTop: 50,
                    
                }}
                // className="bannerMod"
            >

                <div
                    style={{
                        backgroundColor:'blue',
                        // height:'266px',
                        // width: '1090px',
                        height:`calc(100vw / 12)`,
                        width: '100%',
                        marginTop:100,
                        // aspectRatio: 10 / 1
                    }}
                />


            </div> */}

            <div
                style={{
                    height:200,
                    width:'100%',
                    backgroundColor:'black',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    color:'silver'
                }}
            >
                <p
                    style={{
                        fontSize:15
                    }}
                >
                    CollectiBulls 2021
                </p>
            </div>
                

            <ScrollTop 
                dropNav={dropNav}
            >
                <Fab 
                    color="secondary" 
                    size="small" 
                    aria-label="scroll back to top"
                    style={{
                        backgroundColor:'white',
                        zIndex:100
                    }}
                    
                >
                    <KeyboardArrowUpIcon style={{color:'black'}}/>
                </Fab>
            </ScrollTop>
            <Snackbar
                open={error}
                autoHideDuration={10000}
                onClose={() => setError(null)}
                message={error}
                action={() => setError(null)}
                style={{
                    width:'25%',
                    alignSelf:'center'
                }}
            >
                <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </div>
    )
}

const HideOnScroll = ({children, dropNav}) => {

    return (
        <Slide 
            appear={!dropNav} 
            direction="down" 
            in={!dropNav}

        >
            {children}
        </Slide>
    );
}

const ScrollTop = ({children,dropNav }) => {

  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };
  
    return (
        <Zoom 
            in={dropNav}
            style={{
                zIndex:100
            }}
        >
            <Box
            onClick={handleClick}
            role="presentation"
            sx={{ position: 'fixed', bottom: 16, right: 25 }}
            >
            {children}
            </Box>
        </Zoom>
        );
  }


const TimeLine2 = () => {

    const data = [
        {
            title:'Charity',
            info: '10% of every buy and 18% of every sell transaction gets automatically redistributed in USD Tether.',
            icon: Love,
            quarter: 'Q4-Q1',
            percent: '10%'
        },
        {
            title:'Evolution',
            info: 'Certik Audit',
            icon: Gift,
            quarter: 'Q1-Q2',
            percent: '60%'
        },
        {
            title:'Arcade Game',
            info: 'Something about arcade games',
            icon: Arcade,
            quarter: 'Q2-Q3',
            percent: '90%'
        },
        {
            title:'Future',
            info: 'Coming soon...',
            icon: Rocket,
            quarter: '?',
            percent: '9000%'
        }

  
    ]

    const [ww, setww]=useState(window.innerWidth)

    const [slidesScroll, setSlidsScroll]=useState(3)
    const [slidsesShow, setSlidesShow]=useState(3)
    

    useEffect(() => {
        window.addEventListener('resize', () => {
            setww(window.innerWidth)
            if(window.innerWidth <= 900){
                setSlidesShow(2)
                setSlidsScroll(1)
                console.log('Shits Small')
            }else{
                setSlidesShow(3)
                setSlidsScroll(3) 
            }
        })
    },[])
    let settings = {
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: slidsesShow,
        slidesToScroll: slidesScroll,
        initialSlide: 0,
      };

    return (
        <div
            style={{
                position:'relative',
                width:'100%',
            }}
        >
            <Slider 
                {...settings}
                style={{
                    zIndex:10,
                    justifyContent:'center',
                    display:'flex',
                    alignItems:'center',
                }}
            >
                {
                    data.map(eventObj => {
                        return(
                            <div
                                style={{
                                    paddingTop:50,
                                    paddingBottom:50,
                                    display:'flex'
                                }}
                                id="outer"
                            >
                                <div
                                    className='card2 move-up timeCardInner'
                                >
  
                                    <div
                                        style={{
                                            justifyContent:'center',
                                            alignItems:'center',
                                            display:'flex',
                                            flexDirection:'column',
                                            height:'45%'
                                        }}
                                    >
                                        <img 
                                            src={eventObj.icon} 
                                            className="timeCardImage"
                                        />
     
                                        <h3
                                            className="timeCardTitle"
                                        >
                                            {eventObj.title}
                                        </h3>

                                    </div>
                                    <div
                                        style={{
                                            height:100,
                                        }}
                                    >
                                        <p
                                            className="timeCardSummary"
                                        >
                                            {eventObj.info}
                                        </p>
                                    </div>
                                    
                                    <div
                                        style={{
                                            display:'flex',
                                            flexDirection:'column',
                                        }}
                                    >
                                        <div 
                                            style={{
                                                zIndex:100,
                                                fontFamily:'Bungee',
                                                alignSelf:'center',
                                                alignItems:'center',
                                                justifyContent:'center',
                                                display:'flex'
                                            }} 
                                            className="cardFlash"
                                        >
                                            {eventObj.quarter}
                                        </div>
                                        <div 
                                            style={{
                                                zIndex:100,
                                                fontFamily:'Bungee',
                                                alignSelf:'center',
                                                marginTop:10,
                                                alignItems:'center',
                                                justifyContent:'center',
                                                display:'flex'
                                            }} 
                                            className="cardFlash1"
                                        >
                                            {eventObj.percent}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <hr 
                class="dashed-2"
                style={{
                    position:'absolute',
                    zIndex:8
                }}
                className="dashed-2"
            ></hr>

        </div>
    )
}
  
export default Landing;