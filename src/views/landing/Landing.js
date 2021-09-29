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
import { Chrono } from "react-chrono";
import Slider from "react-slick";
import { Snackbar } from '@mui/material';

import LandingVideo from '../../assets/videos/3dLanding.mp4'
import SkateBanner from '../../assets/banners/skatebanner.jpeg'

import Gift from '../../assets/icons/gift.png'
import Arcade from '../../assets/icons/arcade.png'
import Love from '../../assets/icons/love.png'
import Rocket from '../../assets/icons/rocket.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Landing.css"
import { Gif } from '@mui/icons-material';
const Landing = () => {
    const [dropNav, setDropNav]= useState(false);
    const [error, setError]= useState(null);
    const scrollRef = useRef(null)

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
                        backgroundColor:'black',
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
                                fontSize:40,
                                fontWeight:'bolder'
                            }}
                        >
                            Collectibull
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
                        height:'calc(100vh)',
                        width:'100%',
                        backgroundColor:'red',
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
                    <div
                        style={{
                            position:'absolute',
                            top:0,
                            left:0,
                            height:'100%',
                            width:'100%',
                            backgroundColor:'#0000004D',
                            justifyContent:'center',
                            alignItems:'center',
                            display:'flex'
                        }}
                    >
                        <button 
                            style={{
                                cursor:'pointer', 
                                zIndex:100,
                                height:75 ,
                                width:250,
                                fontSize:30,
                                fontFamily:'Bungee'
                            }} 
                            className="fancyButton1"
                            onClick={() => setError('Minting Comming Soon')}
                        >
                            Mint
                        </button>
                    </div>

                    <video 
                        autoplay="autoplay" 
                        muted 
                        loop="loop" 
                        id="myVideo"
                        style={{
                            height:'calc(100vh - 128px)'

                        }}
                          className="landingVideo"
                    >
                    <source src={LandingVideo} type="video/mp4"/>
                        Your browser does not support HTML5 video.
                    </video>


                </div>
                {/* <TimeLine/> */}
                <div
                    style={{
                        height:1000,
                        width:'100%',
                        overflowX:'hidden',
                        backgroundColor:'black',
                        // overflowY:'hidden'
                    }}
                >
                    <div
                        style={{
                            fontSize:40,
                            padding:30
                        }}
                    >
                        <h1
                            style={{
                                fontFamily:'Bungee',
                                fontSize:50,
                                color:'white'
                            }}
                        >
                            Roadmap
                        </h1>
                        
                    </div>
                    
                    <TimeLine2/>
                </div>



            <div
                style={{
                    height:250,
                    width:'100%',
                    backgroundColor:'black',
                    // backgroundImage: `url(${SkateBanner})`,
                    // backgroundPosition: 'center',
                    // backgroundSize: '100%',
                    // backgroundColor:'orange'
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                    
                }}
                // className="bannerMod"
            >

                <img 
                    src={SkateBanner} 
                    style={{
                        height:140,
                        width:'70%'
                    }}
                    // className="bannerMod"
                />

            </div>

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

  const TimeLine = () => {
    const { innerWidth: width, innerHeight: height } = window;

    const items = [
        {
        title: "Token Launch",
        cardTitle: "Dunkirk",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        //   media: {
        //     type: "IMAGE",
        //     source: {
        //       url: "http://someurl/image.jpg"
        //     }
        //   }
        },
        {
            title: "May 1940",
            cardTitle: "Dunkirk",
            cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        },
        {
            title: "May 1940",
            cardTitle: "Dunkirk",
            cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        },
        {
            title: "May 1940",
            cardTitle: "Dunkirk",
            cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        }
    ];

    return (
      <div style={{ width: '100%', height: 400}}>
        <Chrono 
            items={items} 
            mode="HORIZONTAL" 
            itemWidth={width*.25}
            theme={{ 
                primary: "black",
                secondary: "white",
                cardBgColor: "white",
                cardForeColor: "violet",
                titleColor: "black"
            }}
            disableNavOnKey={true}
            enableOutline
            cardHeight={100}
        />
      </div>
    )
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
            title:'3d Suprise',
            info: 'Certik Audit',
            icon: Gift,
            quarter: 'Q1-Q2',
            percent: '60%'
        },
        {
            title:'Arcade Game',
            info: '...',
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


    useEffect(() => {
        window.addEventListener('resize', () => {
            setww(window.innerWidth)
        })
    },[])
    var settings = {
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
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
                                    backgroundColor:'yellow',
                                    // height:1000
                                }}
                                id="outer"
                            >
                                
                                <div
                                    style={{
                                        height:400,
                                        width:ww*.25,
                                        borderRadius:10,
                                        marginTop:50,
                                        marginBottom:50,
                                        marginLeft:50,
                                        // marginRight:20,
                                        display:'flex',
                                        flexDirection:'column',
                                        padding:30,
                                        // backgroundColor:'crimson'
                                        // zIndex:10,

                                    }}
                                    className='card2 move-up'
                                >
                                    {/* <div
                                        style={{
                                            flex:6
                                        }}
                                    >

                                    </div> */}
                                    <div
                                        style={{
                                            justifyContent:'center',
                                            alignItems:'center',
                                            display:'flex',
                                            flexDirection:'column',
                                            // height:50
                                        }}
                                    >
                                        <img 
                                            src={eventObj.icon} 
                                            style={{
                                                height:100,
                                                width:100
                                            }}
                                            // className="bannerMod"
                                        />

                                        <h3
                                            style={{
                                                fontFamily:'Bungee',
                                                fontSize:30
                                            }}
                                        >
                                            {eventObj.title}
                                        </h3>

                                    </div>
                                    <p
                                        style={{
                                            fontWeight:'initial'
                                        }}
                                    >
                                        {eventObj.info}
                                    </p>

                                    <button 
                                        style={{
                                            cursor:'pointer', 
                                            zIndex:100,
                                            height:50,
                                            width:200,
                                            fontSize:30,
                                            fontFamily:'Bungee',
                                            alignSelf:'center'
                                        }} 
                                        className="fancyButton2"
                                        // onClick={() => setError('Minting Comming Soon')}
                                    >
                                        {eventObj.quarter}
                                    </button>
                                    <button 
                                        style={{
                                            cursor:'pointer', 
                                            zIndex:100,
                                            height:50,
                                            width:200,
                                            fontSize:30,
                                            fontFamily:'Bungee',
                                            alignSelf:'center',
                                            marginTop:10
                                        }} 
                                        className="fancyButton1"
                                        // onClick={() => setError('Minting Comming Soon')}
                                    >
                                        {eventObj.percent}
                                    </button>

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