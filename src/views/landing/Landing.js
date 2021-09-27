import React, { useRef, useEffect, useState } from 'react';
import { AppBar } from '@mui/material';
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Landing.css"
const Landing = () => {
    const [dropNav, setDropNav]= useState(false);
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
                        backgroundColor:'crimson',
                        minHeight:'100px',
                        justifyContent:'center',
                        display:'flex'
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
                        backgroundColor:'black'
                    }}
                >


                </div>
                {/* <TimeLine/> */}
                <div
                    style={{
                        width:'100%',
                        overflowX:'hidden'
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
                                fontSize:45
                            }}
                        >
                            Roadmap
                        </h1>
                        
                    </div>
                    
                    <TimeLine2/>
                </div>
                

            <ScrollTop 
                dropNav={dropNav}
            >
                <Fab 
                    color="secondary" 
                    size="small" 
                    aria-label="scroll back to top"
                    style={{
                        backgroundColor:'crimson',
                        zIndex:100
                    }}
                    
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </div>
    )
}

const HideOnScroll = ({children, dropNav}) => {

    // const { children, window } = props;

    return (
        <Slide appear={!dropNav} direction="down" in={!dropNav}>
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
            title:'Token Launch',
            info: '10% of every buy and 18% of every sell transaction gets automatically redistributed in USD Tether.'
        },
        {
            title:'Contract Audit',
            info: 'Certik Audit'
        },
        {
            title:'Nft MarketPlace',
            info: '...'
        },
        {
            title:'Nft MarketPlace',
            info: '...'
        },
        {
            title:'Nft MarketPlace',
            info: '...'
        },
        {
            title:'Nft MarketPlace',
            info: '...'
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
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
      };

    return (
        <div
            style={{
                height:300,
                position:'relative',
                width:'100%',
                // padding:50
            }}
        >

            <div
                style={{
                    position:'relative',
                    zIndex:10
                }}
            >

            <Slider 
                {...settings}
                style={{
                    zIndex:10
                }}
            >
                {
                    data.map(eventObj => {
                        return(
                            <div
                                style={{
                                    padding:10,
                                    zIndex:1,
                                }}
                            >
                                
                                <div
                                    style={{
                                        height:150,
                                        width:ww*.25,
                                        borderRadius:10,
                                        marginTop:10,
                                        marginBottom:10,
                                        marginLeft:50,
                                        // marginRight:20,
                                        display:'flex',
                                        flexDirection:'column',
                                        padding:20,
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
                                            height:50
                                        }}
                                    >

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

                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            </div>
            <hr 
                class="dashed-2"
                style={{
                    // top:500,
                    position:'absolute',
                    top:100,
                    zIndex:0
                }}
            ></hr>
        </div>
    )
}
  
export default Landing;