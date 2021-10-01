import React, { useEffect } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import BacgroundPattern from '../../assets/bg/backgroundv1.png'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    getLedgerWallet,
    getPhantomWallet,
    getSlopeWallet,
    getSolflareWallet,
    getSolletExtensionWallet,
    getSolletWallet,
    getTorusWallet,
} from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import Modal from '@mui/material/Modal';
import { Box, ThemeProvider } from '@mui/system';
import { Button } from '@mui/material';
import "./Claims.css";
// import { Wasallet } from '../../components/Wallets/Wallets'



const Claims = () => {
    const { connection } = useConnection();
    // const { publicKey, sendTransaction } = useWallet();
    const { wallet, connect, connecting, connected, publicKey, sendTransaction } = useWallet();

    console.log('connection', connection)
    console.log('publicKey', publicKey)
    console.log('publicKey', publicKey)
    const { innerWidth: width, innerHeight: height } = window;

    const MODAL_WIDTH = height * .9;
    useEffect(() => {
        // window.solana.connect();
        // window.solana.on("connect", () => console.log("connected!"))
        // connect().catch(() => { });
    },[])

    return(
        <div
            style={{
                height: '100vh',
                width:'100%',
                // backgroundColor:'blue',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                // backgroundImage: `url("${BacgroundPattern}")`
            }}
            className="backgroundContainer"
        >
            <div
                style={{
                    height:MODAL_WIDTH,
                    // width:'90%',
                    // backgroundColor:'orange',
                    borderRadius:10,
                    display:'flex',
                    flexDirection:'column'

                }}
                className="innerContainer"
            >

                <div
                    style={{
                        flex:1
                    }}
                    className="titleContainer"
                >
                    <h3
                        style={{
                            fontFamily: 'Bungee',
                            // padding: 100,
                        }}
                        className="summaryTitle"
                    >
                        About Collectibulls
                    </h3>
                </div>
                <div
                    style={{
                        flex:8,
                        justifyContent:'center',
                        alignItems:'center',
                        display:'flex',
                        // padding: 100,
                        display:'flex',
                        flexDirection:'column',
                        textAlign:'center',
                        // backgroundColor:'red'
                        // padding:20
                    }}
                    className="summaryTextContainer"
                >
                    
                    <p
                        style={{
                            fontFamily: 'Bungee'
                        }}
                        className="summaryText"
                    >
                    The team here at 'CollectiBulls' are extremely proud to be collaborating with Farskate (https://farskate.co.uk) which is a youth development charity working directly with young people, helping to provide them with a safe environment to be kids for as long as possible and have some adrenaline fueled fun at the same time! 




                    </p>
                    <p
                        className="summaryText"
                    >
                    Plus, Farskate help nurture those same children after they pass 16 years of age and assist them setting up their own businesses and help care for their future ❤️. 



                    </p>
                    <p
                        className="summaryText"
                    >
                    Karma skateboards (https://karmaskateboards.com) directly sponsor the Farskate charity and all profits from their products goes directly to Farskate ❤️. 
                    ‘Collectibulls’ are supporting this wonderful dynamic with our range of NFT's, hopefully encouraging others to support other amazing charities at the same time.


                    </p>
                
                    <p
                        className="summaryText"
                    >
                    The Collectibulls team are developing a 3d adrenaline inspired range of games where you'll be able to skate, ride or fly your own personal minted NFT's. 
                    ‘In-game’ charity skate & BMX competitions are in development that will all continue to generate money for the charity and their amazing work. 



                    </p>
   
                    <p
                        className="summaryText"
                    >
                        We're extremely proud to be donating a lump sum to this amazing charity for their wonderful work, but we’re even happier to be able to include 1% of ALL FUTURE NFT RESALES.

                        This will help the charity generate ongoing funds to use for any cause they require.
                    </p>

                </div>

            </div>
            {/* <Wallet/> */}
        </div>
    )
}

export default Claims;