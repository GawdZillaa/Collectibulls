import React, { useRef, useEffect, useState } from 'react';
import { AppBar, Alert } from '@mui/material';
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

import Gift from '../../assets/icons/gift.png'
import Arcade from '../../assets/icons/arcade.png'
import Love from '../../assets/icons/love.png'
import Rocket from '../../assets/icons/rocket.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Landing.css"
import { Gif } from '@mui/icons-material';
const Landing = () => {
    const refVideo = useRef(null);

    const [dropNav, setDropNav]= useState(false);
    const [error, setError]= useState(null);
    const scrollRef = useRef(null)

    useEffect(() => {
        if (!refVideo.current) {
            return;
        }

        //open bug since 2017 that you cannot set muted in video element https://github.com/facebook/react/issues/10389
        // refVideo.current.defaultMuted = false;
        refVideo.current.muted = false;
        

    }, []);

    const onScroll = (e) => {
        console.log(e)
        const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
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
                        backgroundColor:'white',
                        minHeight:'128px',
                        justifyContent:'center',
                        display:'flex',
                        height:100
                    }}
                >
                    <Toolbar>
                        <p
                            style={{
                                fontFamily:'Bungee',
                                // fontSize:40,
                                fontWeight:'bolder',
                                color:'black'
                            }}
                            className="navTitle"
                        >
                            Collectibulls
                        </p>
                        
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <div  style={{height:1}}id="back-to-top-anchor" />

                {/* <div
                    style={{
                        backgroundColor:'white'
                    }}
                >
                    <Toolbar variant='regular'>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div">
                            Yee Boi
                        </Typography>
                    </Toolbar>
                </div> */}
             
                <div
                    style={{
                        // height:'calc(100vh)',
                        width:'100%',
                        backgroundColor:'grey',
                        display:'flex',
                        flexDirection:'column',
                        position:'relative'
                        // justifyContent:'center',
                        // alignItems:'center'
                    }}
                >
                    <div
                        style={{
                            height:'128px',
                            backgroundColor:'white'
                        }}
                        id="spacer1"
                    >

                    </div>
                    {/* <div
                        style={{
                            // height:300,
                            width:'100%',
                            backgroundColor:'purple',
                            // backgroundImage: `url(${SkateBanner})`,
                            // backgroundPosition: 'center',
                            // backgroundSize: '100%',
                            // backgroundColor:'orange'
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            // paddingTop: 50,
                            
                        }}
                        // className="bannerMod"
                    > */}

                    {/* <div
                        style={{
                            backgroundColor:'blue',
                            // height:'266px',
                            // width: '1090px',
                            // height:`calc(100vw / 5.5)`,
                            // height:150,
                            width: '100%',
                            minHeight: 140,
                            maxHeight: 170
                            // marginTop:100,
                            // aspectRatio: 10 / 1
                        }}
                    > */}
                            {/* <img 
                                src={Svg0} 
                                style={{
                                    maxHeight:160,
                                    // width:'100vw',
                                    // width:'100%',
                                    // height:'100%'
                                    // alignSelf:'center'
                                    // objectFit:'contain'
                                }}
                                // className="bannerMod"
                            /> */}
                        {/* </div> */}


                    {/* </div> */}
                    <div
                        style={{
                            position:'absolute',
                            top:0,
                            left:0,
                            // height:'100%',
                            height: `calc(100vh)`,
                            width:'100%',
                            backgroundColor:'#0000004D',
                            // justifyContent:'center',
                            // alignItems:'center',
                            display:'flex',
                            flexDirection:'column'
                        }}
                    >
                        {/* <div
                            style={{
                                height:'160px'
                            }}
                        >

                        </div> */}
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
                                    // height:75 ,
                                    // width:250,
                                    // fontSize:30,
                                    fontFamily:'Bungee'
                                }} 
                                className="fancyButton1"
                                onClick={() => setError('Minting Comming Soon')}
                            >
                                Mint
                            </button>
                            <button 
                                style={{
                                    cursor:'pointer', 
                                    zIndex:100,
                                    // height:75 ,
                                    // width:250,
                                    // fontSize:30,
                                    fontFamily:'Bungee',
                                    marginLeft:10,
                                    color:'black'
                                }} 
                                className="fancyButton4"
                                onClick={() => setError('Minting Comming Soon')}
                            >
                                About
                            </button>
                        </div>
                        
                    </div>

                    <video 
                        // autoPlay="autoplay" 
                        autoPlay
                        // ref={refVideo}
                        muted
                        // loop="loop" 
                        loop
                        id="myVideo"
                        // oncanplay="this.muted=false"
                        style={{
                            // height:'calc(100vh - 128px - (100vw / 17))'
                            height:'calc(100vh - 128px)'

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
                        // height:900,
                        width:'100%',
                        overflowX:'hidden',
                        backgroundColor:'white',
                        margin:0
                        // overflowY:'hidden'
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
                            style={{
                                // fontFamily:'Bungee',
                                // fontSize:50,
                                // color:'black',
                                // margin:0
                            }}
                            className="roadMapTitle"
                        >
                            Roadmap
                        </h1>
                        
                    </div>
                    
                    <TimeLine2/>
                </div>

            {/* <div
                style={{
                    fontSize:40,
                    padding:30,
                    backgroundColor:'black'
                }}
            >
                <h1
                    style={{
                        fontFamily:'Bungee',
                        fontSize:50,
                        color:'white'
                    }}
                >
                    Sponsors
                </h1>
                
            </div> */}

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
                    paddingTop: 50
                    
                }}
                // className="bannerMod"
            >

                <img 
                    src={SkateBanner} 
                    style={{
                        // height:140,
                        width:'70%'
                    }}
                    // className="bannerMod"
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
                    backgroundColor:'black'
                }}
            >

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

    // const { children, window } = props;

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
                // height:'300px',
                position:'relative',
                width:'100%',
                // padding:50
                // backgroundColor:'pink'
            }}
        >

            {/* <div
                style={{
                    position:'relative',
                    zIndex:10,
                    justifyContent:'center',
                    alignItems:'center'
                }}
            > */}

            <Slider 
                {...settings}
                style={{
                    zIndex:10,
                    // height:"600px",
                    justifyContent:'center',
                    display:'flex',
                    alignItems:'center',
                    // backgroundColor:'pink'
                }}
            >
                {
                    data.map(eventObj => {
                        return(
                            <div
                                style={{
                                    // padding:10,
                                    // zIndex:1,
                                    paddingTop:50,
                                    paddingBottom:50,
                                    // backgroundColor:'yellow',
                                    display:'flex'
                                    // height:1000
                                }}
                                id="outer"
                            >
                                
                                <div
                                    style={{
                                        // backgroundColor:'yellow'
                                    }}
                                    className='card2 move-up timeCardInner'
                                >
  
                                    <div
                                        style={{
                                            justifyContent:'center',
                                            alignItems:'center',
                                            display:'flex',
                                            flexDirection:'column',
                                            // flex:4
                                            height:'45%'
                                        }}
                                    >
                                        <img 
                                            src={eventObj.icon} 
                                            className="timeCardImage"
                                        />
     
                                        <h3
                                            style={{
                                                // fontFamily:'Bungee',
                                                // fontSize:30
                                            }}
                                            className="timeCardTitle"
                                        >
                                            {eventObj.title}
                                        </h3>

                                    </div>
                                    <div
                                        style={{
                                            height:100,
                                            // flex: 3,
                                            // backgroundColor:'grey'
                                        }}
                                    >
                                        <p
                                            // style={{
                                            //     fontWeight:'initial'
                                            // }}

                                            className="timeCardSummary"
                                        >
                                            {eventObj.info}
                                        </p>
                                    </div>
                                    
                                    <div
                                        style={{
                                            display:'flex',
                                            flexDirection:'column',
                                            // alignSelf:'flex-end',
                                            // backgroundColor:'orange',
                                            // flex:3
                                            
                                        }}
                                    >
                                        <button 
                                            style={{
                                                cursor:'pointer', 
                                                zIndex:100,
                                                // height:50,
                                                // width:200,
                                                // fontSize:30,
                                                fontFamily:'Bungee',
                                                alignSelf:'center',
                                                alignItems:'center',
                                                justifyContent:'center',
                                                display:'flex'
                                            }} 
                                            className="cardFlash"
                                            // onClick={() => setError('Minting Comming Soon')}
                                        >
                                            {eventObj.quarter}
                                        </button>
                                        <button 
                                            style={{
                                                cursor:'pointer', 
                                                zIndex:100,
                                                // height:50,
                                                // width:200,
                                                // fontSize:30,
                                                fontFamily:'Bungee',
                                                alignSelf:'center',
                                                marginTop:10,
                                                alignItems:'center',
                                                justifyContent:'center',
                                                display:'flex'
                                            }} 
                                            className="cardFlash1"
                                            // onClick={() => setError('Minting Comming Soon')}
                                        >
                                            {eventObj.percent}
                                        </button>
                                    </div>



                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            {/* </div> */}
            <hr 
                class="dashed-2"
                style={{
                    // top:500,
                    position:'absolute',
                    top:250,
                    zIndex:8
                }}
            ></hr>

        </div>
    )
}
  
export default Landing;